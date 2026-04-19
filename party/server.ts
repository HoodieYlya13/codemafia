import type * as Party from "partykit/server";
import {
  CategoryId,
  GameState,
  ClientGameEvent,
  PLAYER_COLORS,
  MAX_PLAYERS,
} from "../lib/gameData";

const DEFAULT_ROUND_DURATION_SECONDS = 45;
const MIN_PLAYERS_TO_START = 2;

/** Scale rounds with lobby size so bigger groups get a fairer game.
 *  2–4 → 4 | 5–8 → 5 | 9–12 → 6 | 13–16 → 7 | 17–20 → 8
 */
function computeMaxRounds(playerCount: number): number {
  if (playerCount <= 4)  return 4;
  if (playerCount <= 8)  return 5;
  if (playerCount <= 12) return 6;
  if (playerCount <= 16) return 7;
  return 8;
}

function createInitialState(lobbyId: string): GameState {
  return {
    phase: "lobby",
    lobbyId,
    players: [],
    currentPlayerId: null,
    category: null,
    categoryVotes: {},
    code: "",
    codeBlocks: [],
    sabotageTasks: [],
    currentRound: 1,
    maxRounds: 4, // overridden dynamically in handleFinalizeCategory
    roundTimeRemaining: DEFAULT_ROUND_DURATION_SECONDS,
    roundDuration: DEFAULT_ROUND_DURATION_SECONDS,
    emergencyMeetingCalled: false,
    emergencyMeetingCallerId: null,
    votes: [],
    votedOutPlayerId: null,
    chatMessages: [],
    winner: null,
  };
}

function safeParseEvent(rawMessage: string): ClientGameEvent | null {
  try {
    return JSON.parse(rawMessage) as ClientGameEvent;
  } catch {
    return null;
  }
}

export default class CodeMafiaServer implements Party.Server {
  private state: GameState;
  private connectionToPlayerId = new Map<string, string>();

  constructor(readonly room: Party.Room) {
    this.state = createInitialState(room.id);
  }

  async onConnect(connection: Party.Connection): Promise<void> {
    // Pure game state sync. No Yjs logic here anymore.
    connection.send(JSON.stringify({ type: "sync", state: this.state }));
  }

  // Rename your old `onMessage` to `handleGameMessage`
  onMessage(message: string | ArrayBuffer, sender: Party.Connection): void {
    if (typeof message !== "string") return;

    const event = safeParseEvent(message);
    if (!event) {
      return;
    }

    // Restrict interaction for fired players
    const isAlive = this.isAliveSender(sender);
    const interactiveActions = [
      "update-code",
      "send-chat",
      "call-emergency",
      "cast-vote",
      "update-block-status",
      "update-task-status",
      "yjs-update",
    ];

    if (!isAlive && interactiveActions.includes(event.type)) {
      return;
    }

    switch (event.type) {
      case "join":
        this.handleJoin(sender, event);
        break;
      case "ready":
        this.handleReady(event);
        break;
      case "vote-category":
        this.handleVoteCategory(event);
        break;
      case "finalize-category":
        if (this.isHostSender(sender)) {
          this.handleFinalizeCategory();
        }
        break;
      case "start-game":
        if (this.isHostSender(sender)) {
          this.handleStartGame(event);
        }
        break;
      case "update-code":
        this.state.code = event.code;
        break;
      case "update-cursor":
        this.handleUpdateCursor(event);
        break;
      case "send-chat":
        this.handleSendChat(event);
        break;
      case "call-emergency":
        this.handleCallEmergency(event);
        break;
      case "transition-to-voting":
        if (this.isHostSender(sender)) {
          this.handleTransitionToVoting();
        }
        break;
      case "cast-vote":
        this.handleCastVote(event);
        break;
      case "finalize-votes":
        if (this.isHostSender(sender)) {
          this.handleFinalizeVotes();
        }
        break;
      case "end-round":
        if (this.isHostSender(sender)) {
          this.state.phase = "round-end";
        }
        break;
      case "next-round":
        if (this.isHostSender(sender)) {
          this.handleNextRound();
        }
        break;
      case "tick":
        if (this.isHostSender(sender)) {
          this.handleTick();
        }
        break;
      case "reset-game":
        if (this.isHostSender(sender)) {
          this.handleResetGame();
        }
        break;
      case "update-block-status":
        this.handleUpdateBlockStatus(event);
        break;
      case "update-task-status":
        this.handleUpdateTaskStatus(event);
        break;
      case "yjs-update":
        this.room.broadcast(message as string, [sender.id]);
        break;
      default: {
        const _exhaustive: never = event;
        return _exhaustive;
      }
    }

    this.broadcastState();
  }

  onClose(connection: Party.Connection): void {
    // Removed the "-yjs" check
    const playerId = this.connectionToPlayerId.get(connection.id);
    if (!playerId) {
      return;
    }

    this.connectionToPlayerId.delete(connection.id);
    const removedPlayer = this.state.players.find(
      (player) => player.id === playerId,
    );
    const wasHost = removedPlayer?.isHost ?? false;
    this.state.players = this.state.players.filter(
      (player) => player.id !== playerId,
    );
    delete this.state.categoryVotes[playerId];
    this.state.votes = this.state.votes.filter(
      (vote) => vote.voterId !== playerId && vote.targetId !== playerId,
    );

    if (this.state.emergencyMeetingCallerId === playerId) {
      this.state.emergencyMeetingCallerId = null;
    }

    if (this.state.votedOutPlayerId === playerId) {
      this.state.votedOutPlayerId = null;
    }

    if (wasHost && this.state.players.length > 0) {
      this.state.players[0]!.isHost = true;
    }

    this.broadcastState();
  }

  private handleJoin(
    sender: Party.Connection,
    event: Extract<ClientGameEvent, { type: "join" }>,
  ): void {
    this.connectionToPlayerId.set(sender.id, event.playerId);

    if (this.state.players.length >= MAX_PLAYERS) {
      return;
    }

    if (this.state.players.some((player) => player.id === event.playerId)) {
      return;
    }

    this.state.players.push({
      id: event.playerId,
      name: event.playerName,
      color: PLAYER_COLORS[this.state.players.length % PLAYER_COLORS.length],
      isHost: this.state.players.length === 0,
      isReady: false,
      isImpostor: false,
      isAlive: true,
    });
    this.state.phase = this.state.phase === "menu" ? "lobby" : this.state.phase;
  }

  private isHostSender(sender: Party.Connection): boolean {
    const playerId = this.connectionToPlayerId.get(sender.id);
    if (!playerId) {
      return false;
    }
    return this.state.players.some(
      (player) => player.id === playerId && player.isHost,
    );
  }

  private isAliveSender(sender: Party.Connection): boolean {
    const playerId = this.connectionToPlayerId.get(sender.id);
    if (!playerId) {
      // Players not yet joined (during lobby) are considered "alive"/able to interact
      return true;
    }
    const player = this.state.players.find((p) => p.id === playerId);
    return player ? player.isAlive : true;
  }

  private handleReady(
    event: Extract<ClientGameEvent, { type: "ready" }>,
  ): void {
    const player = this.state.players.find((p) => p.id === event.playerId);
    if (!player) {
      return;
    }

    player.isReady = event.ready;
    const canAdvance =
      this.state.players.length >= MIN_PLAYERS_TO_START &&
      this.state.players.every((current) => current.isReady);

    if (canAdvance) {
      this.state.phase = "category-vote";
    }
  }

  private handleVoteCategory(
    event: Extract<ClientGameEvent, { type: "vote-category" }>,
  ): void {
    this.state.categoryVotes[event.playerId] = event.category;
  }

  private handleFinalizeCategory(): void {
    const counts = new Map<CategoryId, number>();
    let winner: CategoryId = "oop";
    let maxVotes = 0;

    for (const category of Object.values(this.state.categoryVotes)) {
      const nextCount = (counts.get(category) ?? 0) + 1;
      counts.set(category, nextCount);
      if (nextCount > maxVotes) {
        maxVotes = nextCount;
        winner = category;
      }
    }

    this.state.category = winner;

    // Scale rounds based on final player count (locked in at this point)
    this.state.maxRounds = computeMaxRounds(this.state.players.length);

    // Ratio: ~20% of lobby are impostors (min 1, max e.g., 4 in a 20 player lobby)
    const numImpostors = Math.max(
      1,
      Math.round(this.state.players.length * 0.2),
    );
    const playerIndices = Array.from(
      { length: this.state.players.length },
      (_, i) => i,
    );

    for (let i = playerIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playerIndices[i], playerIndices[j]] = [
        playerIndices[j],
        playerIndices[i],
      ];
    }
    const impostorIndices = new Set(playerIndices.slice(0, numImpostors));

    this.state.players = this.state.players.map((player, index) => ({
      ...player,
      isImpostor: impostorIndices.has(index),
      isAlive: true,
    }));

    this.state.phase = "role-reveal";
  }

  private handleStartGame(
    event: Extract<ClientGameEvent, { type: "start-game" }>,
  ): void {
    if (this.state.players.length === 0) {
      return;
    }

    this.state.code = event.code;
    this.state.codeBlocks = event.blocks;
    this.state.sabotageTasks = event.tasks;
    this.state.currentRound = 1;
    this.state.roundTimeRemaining = this.state.roundDuration;
    this.state.votes = [];
    this.state.categoryVotes = {};
    this.state.votedOutPlayerId = null;
    this.state.emergencyMeetingCalled = false;
    this.state.emergencyMeetingCallerId = null;
    this.state.winner = null;
    this.state.phase = "playing";
  }

  private handleUpdateCursor(
    event: Extract<ClientGameEvent, { type: "update-cursor" }>,
  ): void {
    const player = this.state.players.find((p) => p.id === event.playerId);
    if (!player) {
      return;
    }
    player.cursorPosition = {
      lineNumber: event.lineNumber,
      column: event.column,
    };
  }

  private handleSendChat(
    event: Extract<ClientGameEvent, { type: "send-chat" }>,
  ): void {
    this.state.chatMessages.push({
      id: crypto.randomUUID(),
      playerId: event.playerId,
      message: event.message,
    });
  }

  private handleCallEmergency(
    event: Extract<ClientGameEvent, { type: "call-emergency" }>,
  ): void {
    this.state.emergencyMeetingCalled = true;
    this.state.emergencyMeetingCallerId = event.playerId;
    this.state.votes = [];
    this.state.votedOutPlayerId = null;
    this.state.phase = "emergency-meeting";
  }

  private handleTransitionToVoting(): void {
    this.state.phase = "voting";
  }

  private handleCastVote(
    event: Extract<ClientGameEvent, { type: "cast-vote" }>,
  ): void {
    const existingVote = this.state.votes.find(
      (vote) => vote.voterId === event.playerId,
    );
    if (existingVote) {
      existingVote.targetId = event.targetId;
      return;
    }

    this.state.votes.push({
      voterId: event.playerId,
      targetId: event.targetId,
    });
  }

  private handleFinalizeVotes(): void {
    const tally = new Map<string, number>();
    let highestVotes = 0;
    let electedId: string | null = null;
    let tie = false;

    for (const vote of this.state.votes) {
      if (vote.targetId === null) {
        continue;
      }
      const nextCount = (tally.get(vote.targetId) ?? 0) + 1;
      tally.set(vote.targetId, nextCount);

      if (nextCount > highestVotes) {
        highestVotes = nextCount;
        electedId = vote.targetId;
        tie = false;
      } else if (nextCount === highestVotes) {
        tie = true;
      }
    }

    const votedOutPlayerId = tie ? null : electedId;
    this.state.votedOutPlayerId = votedOutPlayerId;
    if (votedOutPlayerId) {
      const ejectedPlayer = this.state.players.find(
        (player) => player.id === votedOutPlayerId,
      );
      if (ejectedPlayer) {
        ejectedPlayer.isAlive = false;
      }
    }

    const alivePlayers = this.state.players.filter((player) => player.isAlive);
    const aliveImpostors = alivePlayers.filter(
      (player) => player.isImpostor,
    ).length;
    const aliveCivilians = alivePlayers.length - aliveImpostors;

    if (aliveImpostors === 0) {
      this.state.winner = "civilians";
      this.state.phase = "game-over";
    } else if (aliveImpostors >= aliveCivilians) {
      this.state.winner = "impostor";
      this.state.phase = "game-over";
    } else {
      this.state.phase = "vote-result";
    }

    this.state.votes = [];
  }

  private handleNextRound(): void {
    this.state.currentRound += 1;
    this.state.emergencyMeetingCalled = false;
    this.state.emergencyMeetingCallerId = null;
    this.state.votedOutPlayerId = null;
    this.state.votes = [];

    if (this.state.currentRound > this.state.maxRounds) {
      this.state.winner = "impostor";
      this.state.phase = "game-over";
      return;
    }

    this.state.roundTimeRemaining = this.state.roundDuration;
    this.state.phase = "playing";
  }

  private handleTick(): void {
    if (this.state.phase !== "playing" || this.state.roundTimeRemaining <= 0) {
      return;
    }

    this.state.roundTimeRemaining -= 1;
    if (this.state.roundTimeRemaining <= 0) {
      this.state.roundTimeRemaining = 0;
      this.state.phase = "round-end";
    }
  }

  private handleResetGame(): void {
    const preservedPlayers = this.state.players.map((player, index) => ({
      ...player,
      isHost: index === 0,
      isReady: false,
      isImpostor: false,
      isAlive: true,
      cursorPosition: undefined,
    }));

    this.state = createInitialState(this.room.id);
    this.state.players = preservedPlayers;
  }

  private handleUpdateBlockStatus(
    event: Extract<ClientGameEvent, { type: "update-block-status" }>,
  ): void {
    const block = this.state.codeBlocks.find((b) => b.id === event.blockId);
    if (block) {
      block.passed = event.passed;
      this.checkWinConditions();
    }
  }

  private handleUpdateTaskStatus(
    event: Extract<ClientGameEvent, { type: "update-task-status" }>,
  ): void {
    const task = this.state.sabotageTasks.find((t) => t.id === event.taskId);
    if (task) {
      task.completed = event.completed;
      this.checkWinConditions();
    }
  }

  private checkWinConditions(): void {
    if (this.state.phase !== "playing") return;

    if (
      this.state.codeBlocks.length > 0 &&
      this.state.codeBlocks.every((b) => b.passed)
    ) {
      this.state.winner = "civilians";
      this.state.phase = "game-over";
      return;
    }

    if (
      this.state.sabotageTasks.length > 0 &&
      this.state.sabotageTasks.every((t) => t.completed)
    ) {
      this.state.winner = "impostor";
      this.state.phase = "game-over";
      return;
    }
  }

  private broadcastState(): void {
    this.room.broadcast(JSON.stringify({ type: "sync", state: this.state }));
  }
}
