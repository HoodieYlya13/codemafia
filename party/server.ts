import { routePartykitRequest, Server, type Connection, type ConnectionContext } from "partyserver";
import * as Y from "yjs";
import { fromBase64, toBase64 } from "lib0/buffer";
import type { ErrorCode, ServerMessage } from "../lib/gameData";
import {
  advanceTime,
  applyEvent,
  createRoom,
  disconnect,
  join,
  nextDeadline,
  parseEvent,
  viewFor,
  type Context,
  type Room,
} from "./game";

/** Lobbies nobody is connected to are wiped after this. */
const ROOM_TTL_MS = 24 * 60 * 60 * 1000;
/** Test results stay valid for code the editor held this recently. */
const RECENT_CODE_MS = 15_000;
const DOC_SAVE_DELAY_MS = 1000;
const TEXT_NAME = "monaco-sync";

type ConnState = { playerId: string } | null;
type Conn = Connection<ConnState>;

type Stored = { room: Room; emptySince: number | null };

/** Crypto-backed replacement for Math.random, for roles and level picks. */
function secureRandom() {
  return crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
}

/**
 * One Durable Object per lobby. The game rules live in `./game`; this class
 * handles connections, storage, timers and the shared editor document.
 *
 * It hibernates between messages, so everything is kept in storage and
 * `onStart` reloads it on wake-up.
 */
export class CodeMafiaServer extends Server<Env> {
  static options = { hibernate: true };

  private stored: Stored | null = null;
  /** The authoritative copy of the shared editor. */
  private doc = new Y.Doc();
  private recentCode: { code: string; at: number }[] = [];
  private docSaveTimer: ReturnType<typeof setTimeout> | null = null;

  async onStart() {
    const [stored, docState] = await Promise.all([
      this.ctx.storage.get<Stored>("room"),
      this.ctx.storage.get<Uint8Array>("doc"),
    ]);
    this.stored = stored ?? null;
    const doc = new Y.Doc();
    if (docState) Y.applyUpdate(doc, docState);
    this.useDoc(doc);
  }

  async onConnect(conn: Conn, ctx: ConnectionContext) {
    const params = new URL(ctx.request.url).searchParams;
    const create = params.get("create") === "1";

    if (this.stored && create && this.stored.room.players.length > 0) {
      return this.refuse(conn, "room-taken");
    }
    if (!this.stored) {
      if (!create) return this.refuse(conn, "room-not-found");
      this.stored = { room: createRoom(this.name), emptySince: null };
    }

    const room = this.stored.room;
    this.stored.emptySince = null;
    const playerId = params.get("playerId") ?? "";
    const token = params.get("token") ?? "";
    const valid = playerId.length > 0 && playerId.length <= 64 && token.length >= 16 && token.length <= 128;
    const error = valid ? join(room, { playerId, token, name: params.get("name") ?? "" }) : "bad-token";
    if (error) return this.refuse(conn, error);

    conn.setState({ playerId });
    this.send(conn, { type: "yjs-reset", update: toBase64(Y.encodeStateAsUpdate(this.doc)) });
    await this.commit();
  }

  async onMessage(conn: Conn, raw: string | ArrayBuffer) {
    if (typeof raw !== "string" || !this.stored) return;
    const event = parseEvent(raw);
    const playerId = conn.state?.playerId;
    if (!event || !playerId) return;
    const room = this.stored.room;
    const player = room.players.find((p) => p.id === playerId);
    const canEdit = room.phase === "playing" && Boolean(player?.isAlive);

    if (event.type === "yjs-update") {
      if (!canEdit) {
        // The edit was refused: put this editor back in line with the server.
        this.send(conn, { type: "yjs-reset", update: toBase64(Y.encodeStateAsUpdate(this.doc)) });
        return;
      }
      try {
        Y.applyUpdate(this.doc, fromBase64(event.update), conn.id);
      } catch {
        return;
      }
      this.relay({ type: "yjs-update", update: event.update }, conn.id);
      return;
    }

    if (event.type === "cursor") {
      if (canEdit) {
        this.relay({ type: "cursor", playerId, lineNumber: event.lineNumber, column: event.column }, conn.id);
      }
      return;
    }

    const ctx = this.context();
    advanceTime(room, ctx);
    const gameId = room.gameId;
    const result = applyEvent(room, playerId, event, ctx);
    if (result === "stale-tests") this.send(conn, { type: "error", code: result });
    if (event.type === "leave") conn.setState(null);
    if (room.gameId !== gameId) this.resetDoc(room.levelCode);
    await this.commit();
  }

  async onClose(conn: Conn) {
    if (!this.stored) return;
    const playerId = conn.state?.playerId;
    const others = [...this.getConnections<ConnState>()].filter((c) => c.id !== conn.id);
    // A second tab for the same player keeps them online.
    if (playerId && !others.some((c) => c.state?.playerId === playerId)) {
      disconnect(this.stored.room, playerId, Date.now());
    }
    if (others.length === 0) this.stored.emptySince = Date.now();
    await this.commit();
  }

  async onAlarm() {
    if (!this.stored) return;
    const now = Date.now();
    const empty = [...this.getConnections()].length === 0;
    if (empty && this.stored.emptySince !== null && now - this.stored.emptySince >= ROOM_TTL_MS) {
      this.stored = null;
      this.useDoc(new Y.Doc());
      if (this.docSaveTimer) clearTimeout(this.docSaveTimer);
      await this.ctx.storage.deleteAll();
      return;
    }
    const room = this.stored.room;
    const gameId = room.gameId;
    advanceTime(room, this.context());
    if (room.gameId !== gameId) this.resetDoc(room.levelCode);
    await this.commit();
  }

  private context(): Context {
    return {
      now: Date.now(),
      random: secureRandom,
      isRecentCode: (code) => this.isRecentCode(code),
    };
  }

  /** Saves the room, schedules the next timer and sends everyone their view. */
  private async commit() {
    if (!this.stored) return;
    const { room, emptySince } = this.stored;
    const deadlines = [nextDeadline(room), emptySince === null ? null : emptySince + ROOM_TTL_MS].filter(
      (time): time is number => time !== null,
    );
    await this.ctx.storage.put("room", this.stored);
    if (deadlines.length > 0) await this.ctx.storage.setAlarm(Math.min(...deadlines));
    else await this.ctx.storage.deleteAlarm();

    const serverNow = Date.now();
    for (const conn of this.getConnections<ConnState>()) {
      const you = conn.state?.playerId ?? null;
      this.send(conn, { type: "sync", state: viewFor(room, you), you, serverNow });
    }
  }

  private refuse(conn: Conn, code: ErrorCode) {
    this.send(conn, { type: "error", code });
    conn.close(4000, code);
  }

  private send(conn: Conn, message: ServerMessage) {
    conn.send(JSON.stringify(message));
  }

  /** Sends to every joined player except the one the message came from. */
  private relay(message: ServerMessage, exceptId: string) {
    const data = JSON.stringify(message);
    for (const conn of this.getConnections<ConnState>()) {
      if (conn.id !== exceptId && conn.state?.playerId) conn.send(data);
    }
  }

  /** Starts a fresh editor document holding the level's code, for everyone. */
  private resetDoc(code: string) {
    const doc = new Y.Doc();
    doc.getText(TEXT_NAME).insert(0, code);
    this.useDoc(doc);
    this.saveDoc();
    const update = toBase64(Y.encodeStateAsUpdate(doc));
    for (const conn of this.getConnections<ConnState>()) {
      if (conn.state?.playerId) this.send(conn, { type: "yjs-reset", update });
    }
  }

  private useDoc(doc: Y.Doc) {
    this.doc.destroy();
    this.doc = doc;
    this.recentCode = [];
    doc.on("update", () => {
      const now = Date.now();
      this.recentCode.push({ code: doc.getText(TEXT_NAME).toString(), at: now });
      this.recentCode = this.recentCode.filter((entry) => now - entry.at <= RECENT_CODE_MS).slice(-200);
      if (this.docSaveTimer) clearTimeout(this.docSaveTimer);
      this.docSaveTimer = setTimeout(() => this.saveDoc(), DOC_SAVE_DELAY_MS);
    });
  }

  private saveDoc() {
    if (this.docSaveTimer) clearTimeout(this.docSaveTimer);
    this.docSaveTimer = null;
    if (!this.stored) return;
    void this.ctx.storage.put("doc", Y.encodeStateAsUpdate(this.doc));
  }

  private isRecentCode(code: string) {
    if (code === this.doc.getText(TEXT_NAME).toString()) return true;
    const now = Date.now();
    return this.recentCode.some((entry) => entry.code === code && now - entry.at <= RECENT_CODE_MS);
  }
}

export default {
  async fetch(request: Request, env: Env) {
    return (await routePartykitRequest(request, env)) ?? new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;
