import PartySocket from "partysocket";
import * as Y from "yjs";
import { fromBase64, toBase64 } from "lib0/buffer";
import type { ClientGameEvent, ConnectQuery, ServerMessage } from "@/lib/gameData";
import { useGameStore } from "@/store/useGameStore";
import { toast } from "@/store/useToastStore";

const PARTYKIT_HOST = process.env.NEXT_PUBLIC_PARTYKIT_HOST || "localhost:1999";
const CURSOR_THROTTLE_MS = 50;

export type CursorMap = ReadonlyMap<string, { lineNumber: number; column: number }>;

/**
 * The game socket. Identity travels in the connection query, so the server
 * (re)joins the player on every connect, including automatic reconnects.
 * It also carries the shared editor document, whose authoritative copy lives
 * on the server.
 */
class SocketManager {
  private socket: PartySocket | null = null;
  private lobbyId: string | null = null;
  private identity: ConnectQuery | null = null;
  private hasConnected = false;

  private doc = new Y.Doc();
  private docListeners = new Set<() => void>();
  private cursors: CursorMap = new Map();
  private cursorListeners = new Set<() => void>();
  private pendingCursor: { lineNumber: number; column: number } | null = null;
  private cursorTimer: ReturnType<typeof setTimeout> | null = null;

  connect(lobbyId: string, identity: ConnectQuery) {
    if (this.socket && this.lobbyId === lobbyId) return;
    this.disconnect();
    this.lobbyId = lobbyId;
    this.identity = identity;
    this.hasConnected = false;

    const socket = new PartySocket({
      host: PARTYKIT_HOST,
      room: lobbyId,
      query: () => {
        const { create, ...rest } = this.identity ?? identity;
        return create ? { ...rest, create } : rest;
      },
    });
    this.socket = socket;

    socket.addEventListener("open", () => {
      if (this.socket !== socket) return;
      if (this.hasConnected) toast.success("Reconnected to server!");
      this.hasConnected = true;
    });

    socket.addEventListener("message", (event) => {
      if (this.socket !== socket || typeof event.data !== "string") return;
      let message: ServerMessage;
      try {
        message = JSON.parse(event.data);
      } catch {
        return;
      }
      this.handle(message);
    });

    socket.addEventListener("close", () => {
      if (this.socket !== socket || !this.hasConnected) return;
      toast.warning("Server connection lost. Trying to reconnect...");
    });
  }

  private handle(message: ServerMessage) {
    switch (message.type) {
      case "sync":
        // The room exists now: reconnects must not try to create it again.
        if (this.identity?.create) this.identity = { ...this.identity, create: undefined };
        useGameStore.getState().syncState(message.state, message.you, message.serverNow);
        break;
      case "error":
        useGameStore.getState().handleError(message.code);
        break;
      case "yjs-reset":
        this.replaceDoc(message.update);
        break;
      case "yjs-update":
        Y.applyUpdate(this.doc, fromBase64(message.update), "remote");
        break;
      case "cursor": {
        const cursors = new Map(this.cursors);
        cursors.set(message.playerId, { lineNumber: message.lineNumber, column: message.column });
        this.setCursors(cursors);
        break;
      }
    }
  }

  send(message: ClientGameEvent) {
    // partysocket queues messages until the connection is open.
    this.socket?.send(JSON.stringify(message));
  }

  /** Editor traffic is only worth sending live; the server resyncs on reconnect. */
  private sendLive(message: ClientGameEvent) {
    if (this.socket?.readyState === WebSocket.OPEN) this.socket.send(JSON.stringify(message));
  }

  disconnect() {
    const socket = this.socket;
    this.socket = null;
    this.lobbyId = null;
    this.identity = null;
    socket?.close();
    this.setCursors(new Map());
  }

  // Shared editor document

  getDoc = () => this.doc;

  subscribeDoc = (listener: () => void) => {
    this.docListeners.add(listener);
    return () => this.docListeners.delete(listener);
  };

  private replaceDoc(update: string) {
    const doc = new Y.Doc();
    Y.applyUpdate(doc, fromBase64(update), "remote");
    doc.on("update", (change: Uint8Array, origin: unknown) => {
      if (origin !== "remote" && this.doc === doc) {
        this.sendLive({ type: "yjs-update", update: toBase64(change) });
      }
    });
    const previous = this.doc;
    this.doc = doc;
    this.setCursors(new Map());
    this.docListeners.forEach((listener) => listener());
    previous.destroy();
  }

  // Remote cursors

  getCursors = () => this.cursors;

  subscribeCursors = (listener: () => void) => {
    this.cursorListeners.add(listener);
    return () => this.cursorListeners.delete(listener);
  };

  private setCursors(cursors: CursorMap) {
    this.cursors = cursors;
    this.cursorListeners.forEach((listener) => listener());
  }

  sendCursor(lineNumber: number, column: number) {
    this.pendingCursor = { lineNumber, column };
    if (this.cursorTimer) return;
    this.cursorTimer = setTimeout(() => {
      this.cursorTimer = null;
      if (this.pendingCursor) this.sendLive({ type: "cursor", ...this.pendingCursor });
      this.pendingCursor = null;
    }, CURSOR_THROTTLE_MS);
  }
}

export const socketManager = new SocketManager();
