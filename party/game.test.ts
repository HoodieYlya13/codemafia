import { describe, expect, it } from "vitest";
import {
  OFFLINE_GRACE_MS,
  ROLE_REVEAL_MS,
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

function context(overrides: Partial<Context> = {}): Context {
  let seed = 1;
  return {
    now: 1_000_000,
    // Deterministic "random" so tests don't flake.
    random: () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    },
    isRecentCode: () => true,
    ...overrides,
  };
}

function lobby(names: string[]): Room {
  const room = createRoom("ABC123");
  for (const name of names) {
    expect(join(room, { playerId: name, token: `${name}-token`, name })).toBeNull();
  }
  return room;
}

/** Plays a lobby through to the coding round. */
function playing(names: string[], ctx = context()): Room {
  const room = lobby(names);
  for (const name of names) applyEvent(room, name, { type: "ready", ready: true }, ctx);
  for (const name of names) applyEvent(room, name, { type: "vote-category", category: "oop" }, ctx);
  expect(room.phase).toBe("role-reveal");
  advanceTime(room, { ...ctx, now: ctx.now + ROLE_REVEAL_MS });
  expect(room.phase).toBe("playing");
  return room;
}

const impostorsOf = (room: Room) => room.players.filter((p) => p.isImpostor);
const civiliansOf = (room: Room) => room.players.filter((p) => !p.isImpostor);

describe("joining", () => {
  it("makes the first player host and gives everyone a different colour", () => {
    const room = lobby(["a", "b", "c"]);
    applyEvent(room, "b", { type: "leave" }, context());
    join(room, { playerId: "d", token: "d-token", name: "d" });
    expect(room.players[0].isHost).toBe(true);
    const colors = room.players.map((p) => p.color);
    expect(new Set(colors).size).toBe(colors.length);
  });

  it("lets a player rejoin with their token, and refuses anyone else", () => {
    const room = playing(["a", "b", "c"]);
    disconnect(room, "a", 0);
    expect(join(room, { playerId: "a", token: "wrong", name: "a" })).toBe("bad-token");
    expect(join(room, { playerId: "a", token: "a-token", name: "a" })).toBeNull();
    expect(room.players.find((p) => p.id === "a")?.offlineSince).toBeNull();
  });

  it("refuses new players once the game has started", () => {
    const room = playing(["a", "b", "c"]);
    expect(join(room, { playerId: "z", token: "z-token", name: "z" })).toBe("game-in-progress");
  });

  it("refuses blank names and trims long ones", () => {
    const room = createRoom("ABC123");
    expect(join(room, { playerId: "a", token: "t", name: "  \n " })).toBe("invalid-name");
    join(room, { playerId: "b", token: "t", name: "a-very-long-player-name" });
    expect(room.players[0].name).toHaveLength(12);
  });
});

describe("disconnects", () => {
  it("keeps the seat during the grace period, then removes the player", () => {
    const ctx = context();
    const room = lobby(["a", "b"]);
    disconnect(room, "a", ctx.now);
    expect(room.players[1].isHost).toBe(true);
    expect(nextDeadline(room)).toBe(ctx.now + OFFLINE_GRACE_MS);

    advanceTime(room, { ...ctx, now: ctx.now + OFFLINE_GRACE_MS - 1 });
    expect(room.players).toHaveLength(2);
    advanceTime(room, { ...ctx, now: ctx.now + OFFLINE_GRACE_MS });
    expect(room.players.map((p) => p.id)).toEqual(["b"]);
  });

  it("ends the game when the last impostor leaves", () => {
    const ctx = context();
    const room = playing(["a", "b", "c", "d"], ctx);
    applyEvent(room, impostorsOf(room)[0].id, { type: "leave" }, ctx);
    expect(room.phase).toBe("game-over");
    expect(room.winner).toBe("civilians");
  });
});

describe("authority", () => {
  it("only lets players act for themselves, in the right phase", () => {
    const ctx = context();
    const room = lobby(["a", "b"]);
    applyEvent(room, "a", { type: "ready", ready: true }, ctx);
    expect(room.players.find((p) => p.id === "b")?.isReady).toBe(false);
    expect(room.phase).toBe("lobby");

    const game = playing(["a", "b", "c"], ctx);
    expect(applyEvent(game, "a", { type: "ready", ready: true }, ctx)).toBe("not-allowed");
    expect(game.phase).toBe("playing");
    expect(applyEvent(game, "nobody", { type: "call-emergency" }, ctx)).toBe("not-allowed");
  });

  it("keeps host-only actions for the host", () => {
    const ctx = context();
    const room = playing(["a", "b", "c"], ctx);
    expect(applyEvent(room, "b", { type: "end-round" }, ctx)).toBe("not-allowed");
    expect(applyEvent(room, "a", { type: "end-round" }, ctx)).toBeNull();
    expect(room.phase).toBe("round-end");
  });

  it("allows one emergency meeting per round", () => {
    const ctx = context();
    const room = playing(["a", "b", "c", "d", "e"], ctx);
    expect(applyEvent(room, "b", { type: "call-emergency" }, ctx)).toBeNull();
    applyEvent(room, "a", { type: "transition-to-voting" }, ctx);
    expect(applyEvent(room, "c", { type: "call-emergency" }, ctx)).toBe("not-allowed");
  });

  it("stops fired players from voting or chatting", () => {
    const ctx = context();
    const room = playing(["a", "b", "c", "d", "e"], ctx);
    const target = civiliansOf(room)[0].id;
    applyEvent(room, "a", { type: "call-emergency" }, ctx);
    applyEvent(room, "a", { type: "transition-to-voting" }, ctx);
    for (const p of room.players) applyEvent(room, p.id, { type: "cast-vote", targetId: target }, ctx);
    applyEvent(room, room.players.find((p) => p.isHost)!.id, { type: "finalize-votes" }, ctx);
    expect(room.players.find((p) => p.id === target)?.isAlive).toBe(false);
    expect(applyEvent(room, target, { type: "send-chat", message: "boo" }, ctx)).toBe("not-allowed");
  });
});

describe("votes", () => {
  function voting(ctx = context()) {
    const room = playing(["a", "b", "c", "d", "e"], ctx);
    applyEvent(room, "a", { type: "call-emergency" }, ctx);
    applyEvent(room, "a", { type: "transition-to-voting" }, ctx);
    return room;
  }

  it("ejects nobody on a tie", () => {
    const ctx = context();
    const room = voting(ctx);
    const [x, y] = room.players;
    applyEvent(room, "a", { type: "cast-vote", targetId: x.id }, ctx);
    applyEvent(room, "b", { type: "cast-vote", targetId: y.id }, ctx);
    applyEvent(room, "a", { type: "finalize-votes" }, ctx);
    expect(room.votedOutPlayerId).toBeNull();
    expect(room.phase).toBe("vote-result");
  });

  it("refuses votes for fired players", () => {
    const ctx = context();
    const room = voting(ctx);
    room.players[1].isAlive = false;
    expect(applyEvent(room, "a", { type: "cast-vote", targetId: room.players[1].id }, ctx)).toBe("not-allowed");
  });

  it("lets the civilians win by firing the impostor", () => {
    const ctx = context();
    const room = voting(ctx);
    const impostor = impostorsOf(room)[0].id;
    for (const p of room.players) applyEvent(room, p.id, { type: "cast-vote", targetId: impostor }, ctx);
    applyEvent(room, "a", { type: "finalize-votes" }, ctx);
    expect(room.winner).toBe("civilians");
  });
});

describe("timers", () => {
  it("starts the game after the role reveal and ends the round on the server clock", () => {
    const ctx = context();
    const room = playing(["a", "b", "c"], ctx);
    expect(room.gameId).toBe(1);
    expect(room.codeBlocks.length).toBeGreaterThan(0);
    const roundEnd = room.phaseEndsAt!;
    advanceTime(room, { ...ctx, now: roundEnd });
    expect(room.phase).toBe("round-end");
  });

  it("gives the impostors the win after the last round", () => {
    const ctx = context();
    const room = playing(["a", "b", "c"], ctx);
    room.currentRound = room.maxRounds;
    applyEvent(room, "a", { type: "end-round" }, ctx);
    applyEvent(room, "a", { type: "next-round" }, ctx);
    expect(room.winner).toBe("impostor");
  });
});

describe("test reports", () => {
  it("refuses results for code that no longer matches the editor", () => {
    const room = playing(["a", "b", "c"]);
    const ctx = context({ isRecentCode: () => false });
    const blocks = Object.fromEntries(room.codeBlocks.map((b) => [b.id, true]));
    expect(applyEvent(room, "a", { type: "report-tests", code: "x", blocks, tasks: {} }, ctx)).toBe("stale-tests");
    expect(room.codeBlocks.every((b) => !b.passed)).toBe(true);
  });

  it("only updates the blocks that ran, and only impostors complete tasks", () => {
    const ctx = context();
    const room = playing(["a", "b", "c"], ctx);
    const civilian = civiliansOf(room)[0].id;
    const tasks = Object.fromEntries(room.sabotageTasks.map((t) => [t.id, true]));
    applyEvent(room, civilian, { type: "report-tests", code: "x", blocks: { [room.codeBlocks[0].id]: true }, tasks }, ctx);
    expect(room.codeBlocks.map((b) => b.passed)).toEqual(room.codeBlocks.map((_, i) => i === 0));
    expect(room.sabotageTasks.every((t) => !t.completed)).toBe(true);

    applyEvent(room, impostorsOf(room)[0].id, { type: "report-tests", code: "x", blocks: {}, tasks }, ctx);
    expect(room.winner).toBe("impostor");
  });
});

describe("views", () => {
  it("hides other players' roles and the sabotage details from civilians", () => {
    const room = playing(["a", "b", "c", "d", "e"]);
    const civilian = civiliansOf(room)[0];
    const view = viewFor(room, civilian.id);
    for (const p of view.players) {
      expect("isImpostor" in p).toBe(p.id === civilian.id);
    }
    expect(view.sabotageTasks.every((t) => t.description === undefined && t.verificationTest === undefined)).toBe(true);
    expect(JSON.stringify(view)).not.toContain("token");

    const impostorView = viewFor(room, impostorsOf(room)[0].id);
    expect(impostorView.sabotageTasks.every((t) => t.verificationTest)).toBe(true);
  });

  it("reveals fired players and everyone at the end", () => {
    const ctx = context();
    const room = playing(["a", "b", "c", "d", "e"], ctx);
    const fired = civiliansOf(room)[0];
    fired.isAlive = false;
    expect(viewFor(room, "nobody").players.find((p) => p.id === fired.id)?.isImpostor).toBe(false);
    room.phase = "game-over";
    expect(viewFor(room, null).players.every((p) => "isImpostor" in p)).toBe(true);
  });
});

describe("parseEvent", () => {
  it("accepts valid events and drops anything else", () => {
    expect(parseEvent('{"type":"ready","ready":true}')).toEqual({ type: "ready", ready: true });
    expect(parseEvent('{"type":"ready","ready":"yes"}')).toBeNull();
    expect(parseEvent('{"type":"vote-category","category":"cobol"}')).toBeNull();
    expect(parseEvent('{"type":"cursor","lineNumber":0,"column":1}')).toBeNull();
    expect(parseEvent('{"type":"report-tests","code":"x","blocks":{"1":1},"tasks":{}}')).toBeNull();
    expect(parseEvent("not json")).toBeNull();
    // Old events that trusted the client are gone.
    expect(parseEvent('{"type":"tick"}')).toBeNull();
    expect(parseEvent('{"type":"update-block-status","blockId":"1","passed":true}')).toBeNull();
  });
});
