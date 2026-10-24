import {
  CATEGORY_NAMES,
  DEFAULT_ROUND_DURATION_SECONDS,
  GAME_DATA,
  MAX_CHAT_LENGTH,
  MAX_NAME_LENGTH,
  MAX_PLAYERS,
  PLAYER_COLORS,
  type CategoryId,
  type ChatMessage,
  type ClientGameEvent,
  type CodeBlock,
  type ErrorCode,
  type GamePhase,
  type GameView,
  type GameWinner,
  type SabotageTask,
  type Vote,
} from "../lib/gameData";
import { uuidv7 } from "../lib/uuid";

/**
 * The game rules, kept free of sockets and storage so they can be tested on
 * their own. Every function mutates the room in place.
 */

export const ROLE_REVEAL_MS = 3000;
/** How long a disconnected player keeps their seat before being removed. */
export const OFFLINE_GRACE_MS = 60_000;
const MIN_PLAYERS_TO_START = 2;
const MAX_CHAT_MESSAGES = 100;
const CATEGORIES = Object.keys(CATEGORY_NAMES) as CategoryId[];

const IN_GAME_PHASES: GamePhase[] = [
  "role-reveal",
  "playing",
  "emergency-meeting",
  "voting",
  "vote-result",
  "round-end",
];

export interface RoomPlayer {
  id: string;
  name: string;
  color: string;
  /** Secret the player's device proves its identity with when reconnecting. */
  token: string;
  isHost: boolean;
  isReady: boolean;
  isImpostor: boolean;
  isAlive: boolean;
  /** When the player's last connection closed, or null while connected. */
  offlineSince: number | null;
}

export interface Room {
  lobbyId: string;
  phase: Exclude<GamePhase, "menu">;
  players: RoomPlayer[];
  category: CategoryId | null;
  categoryVotes: Record<string, CategoryId>;
  /** Bumped at each game start, so the server knows to reset the editor. */
  gameId: number;
  levelCode: string;
  codeBlocks: CodeBlock[];
  sabotageTasks: SabotageTask[];
  currentRound: number;
  maxRounds: number;
  roundDuration: number;
  /** When the role reveal or the coding round ends on its own. */
  phaseEndsAt: number | null;
  emergencyMeetingCalled: boolean;
  emergencyMeetingCallerId: string | null;
  votes: Vote[];
  votedOutPlayerId: string | null;
  chatMessages: ChatMessage[];
  winner: GameWinner;
}

export interface Context {
  now: number;
  /** A number in [0, 1), like Math.random. */
  random: () => number;
  /** Whether test results for this code still match the shared editor. */
  isRecentCode: (code: string) => boolean;
}

/** Scale rounds with lobby size so bigger groups get a fairer game.
 *  2–4 → 4 | 5–8 → 5 | 9–12 → 6 | 13–16 → 7 | 17–20 → 8
 */
function computeMaxRounds(playerCount: number): number {
  if (playerCount <= 4) return 4;
  if (playerCount <= 8) return 5;
  if (playerCount <= 12) return 6;
  if (playerCount <= 16) return 7;
  return 8;
}

export function createRoom(lobbyId: string): Room {
  return {
    lobbyId,
    phase: "lobby",
    players: [],
    category: null,
    categoryVotes: {},
    gameId: 0,
    levelCode: "",
    codeBlocks: [],
    sabotageTasks: [],
    currentRound: 1,
    maxRounds: 4,
    roundDuration: DEFAULT_ROUND_DURATION_SECONDS,
    phaseEndsAt: null,
    emergencyMeetingCalled: false,
    emergencyMeetingCallerId: null,
    votes: [],
    votedOutPlayerId: null,
    chatMessages: [],
    winner: null,
  };
}

const isOnline = (player: RoomPlayer) => player.offlineSince === null;

function getPlayer(room: Room, playerId: string | null | undefined) {
  return room.players.find((player) => player.id === playerId);
}

/** Keeps a connected host, so a dropped host never blocks the game. */
function ensureHost(room: Room) {
  const host = room.players.find((player) => player.isHost);
  if (host && isOnline(host)) return;
  const next = room.players.find(isOnline);
  if (!next) return;
  for (const player of room.players) player.isHost = player === next;
}

function cleanName(name: string) {
  return name
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, MAX_NAME_LENGTH);
}

/** Joins a new player, or reconnects a known one who proves it with their token. */
export function join(
  room: Room,
  input: { playerId: string; token: string; name: string },
): ErrorCode | null {
  const existing = getPlayer(room, input.playerId);
  if (existing) {
    if (existing.token !== input.token) return "bad-token";
    existing.offlineSince = null;
    ensureHost(room);
    return null;
  }

  if (room.phase !== "lobby") return "game-in-progress";
  if (room.players.length >= MAX_PLAYERS) return "lobby-full";
  const name = cleanName(input.name);
  if (!name) return "invalid-name";

  const usedColors = new Set(room.players.map((player) => player.color));
  room.players.push({
    id: input.playerId,
    name,
    color: PLAYER_COLORS.find((color) => !usedColors.has(color)) ?? PLAYER_COLORS[0],
    token: input.token,
    isHost: room.players.length === 0,
    isReady: false,
    isImpostor: false,
    isAlive: true,
    offlineSince: null,
  });
  ensureHost(room);
  return null;
}

export function disconnect(room: Room, playerId: string, now: number) {
  const player = getPlayer(room, playerId);
  if (!player) return;
  player.offlineSince = now;
  ensureHost(room);
}

function finishGame(room: Room, winner: Exclude<GameWinner, null>) {
  room.winner = winner;
  room.phase = "game-over";
  room.phaseEndsAt = null;
  room.votes = [];
}

/** Ends the game when a vote or a departure leaves no impostor, or too many. */
function checkHeadcountWin(room: Room): boolean {
  if (!IN_GAME_PHASES.includes(room.phase)) return false;
  const alive = room.players.filter((player) => player.isAlive);
  const impostors = alive.filter((player) => player.isImpostor).length;
  if (impostors === 0) {
    finishGame(room, "civilians");
    return true;
  }
  if (impostors >= alive.length - impostors) {
    finishGame(room, "impostor");
    return true;
  }
  return false;
}

function checkCodeWin(room: Room) {
  if (room.phase !== "playing") return;
  if (room.codeBlocks.length > 0 && room.codeBlocks.every((block) => block.passed)) {
    finishGame(room, "civilians");
  } else if (room.sabotageTasks.length > 0 && room.sabotageTasks.every((task) => task.completed)) {
    finishGame(room, "impostor");
  }
}

function checkReadyToVote(room: Room) {
  if (room.phase !== "lobby") return;
  if (room.players.length >= MIN_PLAYERS_TO_START && room.players.every((player) => player.isReady)) {
    room.phase = "category-vote";
    room.categoryVotes = {};
  }
}

function pick<T>(items: T[], random: () => number): T {
  return items[Math.floor(random() * items.length)];
}

function finalizeCategory(room: Room, ctx: Context) {
  const counts = new Map<CategoryId, number>();
  for (const category of Object.values(room.categoryVotes)) {
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  const max = Math.max(0, ...counts.values());
  // A tie (or no vote at all) is settled by chance, not by who voted first.
  const tied = max === 0 ? CATEGORIES : CATEGORIES.filter((category) => counts.get(category) === max);
  room.category = pick(tied, ctx.random);
  room.maxRounds = computeMaxRounds(room.players.length);

  // ~20% of the lobby are impostors, at least one.
  const impostorCount = Math.max(1, Math.round(room.players.length * 0.2));
  const order = room.players.map((_, index) => index);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(ctx.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const impostors = new Set(order.slice(0, impostorCount));
  room.players.forEach((player, index) => {
    player.isImpostor = impostors.has(index);
    player.isAlive = true;
  });

  room.phase = "role-reveal";
  room.phaseEndsAt = ctx.now + ROLE_REVEAL_MS;
}

function checkCategoryVoteDone(room: Room, ctx: Context) {
  if (room.phase !== "category-vote" || room.players.length === 0) return;
  if (room.players.some((player) => !room.categoryVotes[player.id])) return;
  const counts = new Map<CategoryId, number>();
  for (const category of Object.values(room.categoryVotes)) {
    counts.set(category, (counts.get(category) ?? 0) + 1);
  }
  const max = Math.max(...counts.values());
  // Only finalize on its own when there's a clear winner; a tie waits for the host.
  if ([...counts.values()].filter((count) => count === max).length === 1) {
    finalizeCategory(room, ctx);
  }
}

function startGame(room: Room, ctx: Context) {
  const level = pick(GAME_DATA[room.category ?? "oop"], ctx.random);
  room.gameId += 1;
  room.levelCode = level.code;
  room.codeBlocks = level.blocks.map((block) => ({ ...block, passed: false }));
  room.sabotageTasks = level.tasks.map((task) => ({ ...task, completed: false }));
  room.currentRound = 1;
  room.votes = [];
  room.categoryVotes = {};
  room.votedOutPlayerId = null;
  room.emergencyMeetingCalled = false;
  room.emergencyMeetingCallerId = null;
  room.winner = null;
  room.phase = "playing";
  room.phaseEndsAt = ctx.now + room.roundDuration * 1000;
}

function removePlayer(room: Room, playerId: string, ctx: Context) {
  if (!getPlayer(room, playerId)) return;
  room.players = room.players.filter((player) => player.id !== playerId);
  delete room.categoryVotes[playerId];
  room.votes = room.votes.filter((vote) => vote.voterId !== playerId && vote.targetId !== playerId);
  if (room.emergencyMeetingCallerId === playerId) room.emergencyMeetingCallerId = null;
  if (room.votedOutPlayerId === playerId) room.votedOutPlayerId = null;
  ensureHost(room);
  checkReadyToVote(room);
  checkCategoryVoteDone(room, ctx);
  checkHeadcountWin(room);
}

function finalizeVotes(room: Room) {
  const tally = new Map<string, number>();
  for (const vote of room.votes) {
    if (vote.targetId === null) continue;
    tally.set(vote.targetId, (tally.get(vote.targetId) ?? 0) + 1);
  }
  const max = Math.max(0, ...tally.values());
  const top = [...tally].filter(([, count]) => count === max).map(([id]) => id);
  const votedOutId = max > 0 && top.length === 1 ? top[0] : null;

  room.votedOutPlayerId = votedOutId;
  const votedOut = getPlayer(room, votedOutId);
  if (votedOut) votedOut.isAlive = false;
  room.votes = [];
  if (!checkHeadcountWin(room)) room.phase = "vote-result";
}

function nextRound(room: Room, ctx: Context) {
  room.currentRound += 1;
  room.emergencyMeetingCalled = false;
  room.emergencyMeetingCallerId = null;
  room.votedOutPlayerId = null;
  room.votes = [];
  if (room.currentRound > room.maxRounds) {
    finishGame(room, "impostor");
    return;
  }
  room.phase = "playing";
  room.phaseEndsAt = ctx.now + room.roundDuration * 1000;
}

function resetGame(room: Room) {
  const players = room.players.map((player) => ({
    ...player,
    isReady: false,
    isImpostor: false,
    isAlive: true,
  }));
  const gameId = room.gameId;
  Object.assign(room, createRoom(room.lobbyId), { players, gameId });
}

/**
 * Applies one action from a player. Returns an error code when it isn't
 * allowed; the room is left untouched in that case.
 */
export function applyEvent(
  room: Room,
  playerId: string,
  event: ClientGameEvent,
  ctx: Context,
): ErrorCode | "not-allowed" | null {
  const player = getPlayer(room, playerId);
  if (!player) return "not-allowed";
  const isHost = player.isHost;
  const alive = player.isAlive;

  switch (event.type) {
    case "leave":
      removePlayer(room, playerId, ctx);
      return null;

    case "ready":
      if (room.phase !== "lobby") return "not-allowed";
      player.isReady = event.ready;
      checkReadyToVote(room);
      return null;

    case "vote-category":
      if (room.phase !== "category-vote") return "not-allowed";
      room.categoryVotes[playerId] = event.category;
      checkCategoryVoteDone(room, ctx);
      return null;

    case "finalize-category":
      if (!isHost || room.phase !== "category-vote") return "not-allowed";
      finalizeCategory(room, ctx);
      return null;

    case "send-chat": {
      const message = event.message.trim().slice(0, MAX_CHAT_LENGTH);
      if (!alive || !message) return "not-allowed";
      room.chatMessages.push({ id: uuidv7(), playerId, message });
      room.chatMessages = room.chatMessages.slice(-MAX_CHAT_MESSAGES);
      return null;
    }

    case "call-emergency":
      if (!alive || room.emergencyMeetingCalled) return "not-allowed";
      if (room.phase !== "playing" && room.phase !== "round-end") return "not-allowed";
      room.emergencyMeetingCalled = true;
      room.emergencyMeetingCallerId = playerId;
      room.votes = [];
      room.votedOutPlayerId = null;
      room.phase = "emergency-meeting";
      room.phaseEndsAt = null;
      return null;

    case "transition-to-voting":
      if (!isHost || room.phase !== "emergency-meeting") return "not-allowed";
      room.phase = "voting";
      return null;

    case "cast-vote": {
      if (!alive || room.phase !== "voting") return "not-allowed";
      if (event.targetId !== null && !getPlayer(room, event.targetId)?.isAlive) return "not-allowed";
      const existing = room.votes.find((vote) => vote.voterId === playerId);
      if (existing) existing.targetId = event.targetId;
      else room.votes.push({ voterId: playerId, targetId: event.targetId });
      return null;
    }

    case "finalize-votes":
      if (!isHost || room.phase !== "voting") return "not-allowed";
      finalizeVotes(room);
      return null;

    case "end-round":
      if (!isHost || room.phase !== "playing") return "not-allowed";
      room.phase = "round-end";
      room.phaseEndsAt = null;
      return null;

    case "next-round":
      if (!isHost || (room.phase !== "round-end" && room.phase !== "vote-result")) return "not-allowed";
      nextRound(room, ctx);
      return null;

    case "reset-game":
      if (!isHost || room.phase !== "game-over") return "not-allowed";
      resetGame(room);
      return null;

    case "report-tests":
      if (!alive || room.phase !== "playing") return "not-allowed";
      if (!ctx.isRecentCode(event.code)) return "stale-tests";
      for (const block of room.codeBlocks) {
        if (block.id in event.blocks) block.passed = event.blocks[block.id] === true;
      }
      // Only impostors run the sabotage checks; nobody else can mark them.
      if (player.isImpostor) {
        for (const task of room.sabotageTasks) {
          if (task.id in event.tasks) task.completed = event.tasks[task.id] === true;
        }
      }
      checkCodeWin(room);
      return null;

    case "yjs-update":
    case "cursor":
      // Handled by the server's editor document, not the game rules.
      return "not-allowed";

    default: {
      const exhaustive: never = event;
      return exhaustive;
    }
  }
}

/** Runs everything that happens with time: phase timers and dropped players. */
export function advanceTime(room: Room, ctx: Context) {
  if (room.phaseEndsAt !== null && ctx.now >= room.phaseEndsAt) {
    if (room.phase === "role-reveal") startGame(room, ctx);
    else if (room.phase === "playing") {
      room.phase = "round-end";
      room.phaseEndsAt = null;
    } else room.phaseEndsAt = null;
  }
  for (const player of [...room.players]) {
    if (player.offlineSince !== null && ctx.now - player.offlineSince >= OFFLINE_GRACE_MS) {
      removePlayer(room, player.id, ctx);
    }
  }
}

/** The next moment `advanceTime` has something to do, if any. */
export function nextDeadline(room: Room): number | null {
  const times = room.players
    .filter((player) => player.offlineSince !== null)
    .map((player) => player.offlineSince! + OFFLINE_GRACE_MS);
  if (room.phaseEndsAt !== null) times.push(room.phaseEndsAt);
  return times.length > 0 ? Math.min(...times) : null;
}

/** The room as one player is allowed to see it. Secrets stay on the server. */
export function viewFor(room: Room, viewerId: string | null): GameView {
  const viewer = getPlayer(room, viewerId);
  const gameOver = room.phase === "game-over";
  const knowsTasks = gameOver || Boolean(viewer?.isImpostor);

  return {
    phase: room.phase,
    lobbyId: room.lobbyId,
    players: room.players.map((player) => {
      const revealed = gameOver || player.id === viewerId || !player.isAlive;
      return {
        id: player.id,
        name: player.name,
        color: player.color,
        isHost: player.isHost,
        isReady: player.isReady,
        isAlive: player.isAlive,
        isOnline: isOnline(player),
        ...(revealed ? { isImpostor: player.isImpostor } : {}),
      };
    }),
    category: room.category,
    categoryVotes: room.categoryVotes,
    codeBlocks: room.codeBlocks,
    sabotageTasks: room.sabotageTasks.map((task) =>
      knowsTasks
        ? task
        : { id: task.id, completed: task.completed },
    ),
    currentRound: room.currentRound,
    maxRounds: room.maxRounds,
    roundEndsAt: room.phase === "playing" ? room.phaseEndsAt : null,
    roundDuration: room.roundDuration,
    emergencyMeetingCalled: room.emergencyMeetingCalled,
    emergencyMeetingCallerId: room.emergencyMeetingCallerId,
    votes: room.votes,
    votedOutPlayerId: room.votedOutPlayerId,
    chatMessages: room.chatMessages,
    winner: room.winner,
  };
}

const isString = (value: unknown, max: number): value is string =>
  typeof value === "string" && value.length <= max;
const isBooleanRecord = (value: unknown): value is Record<string, boolean> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  Object.values(value).every((item) => typeof item === "boolean");
const isPosition = (value: unknown) =>
  Number.isInteger(value) && (value as number) >= 1 && (value as number) <= 100_000;

/** Checks a raw socket message against the protocol. Anything else is dropped. */
export function parseEvent(raw: string): ClientGameEvent | null {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (typeof data !== "object" || data === null) return null;
  const event = data as Record<string, unknown>;

  switch (event.type) {
    case "leave":
    case "finalize-category":
    case "call-emergency":
    case "transition-to-voting":
    case "finalize-votes":
    case "end-round":
    case "next-round":
    case "reset-game":
      return { type: event.type };
    case "ready":
      return typeof event.ready === "boolean" ? { type: "ready", ready: event.ready } : null;
    case "vote-category":
      return CATEGORIES.includes(event.category as CategoryId)
        ? { type: "vote-category", category: event.category as CategoryId }
        : null;
    case "send-chat":
      return isString(event.message, MAX_CHAT_LENGTH * 2) ? { type: "send-chat", message: event.message } : null;
    case "cast-vote":
      return event.targetId === null || isString(event.targetId, 64)
        ? { type: "cast-vote", targetId: event.targetId }
        : null;
    case "report-tests":
      return isString(event.code, 200_000) && isBooleanRecord(event.blocks) && isBooleanRecord(event.tasks)
        ? { type: "report-tests", code: event.code, blocks: event.blocks, tasks: event.tasks }
        : null;
    case "yjs-update":
      return isString(event.update, 1_000_000) ? { type: "yjs-update", update: event.update } : null;
    case "cursor":
      return isPosition(event.lineNumber) && isPosition(event.column)
        ? { type: "cursor", lineNumber: event.lineNumber as number, column: event.column as number }
        : null;
    default:
      return null;
  }
}
