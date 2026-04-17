import type * as Party from "partykit/server";

type GamePhase =
  | "menu"
  | "lobby"
  | "category-vote"
  | "role-reveal"
  | "playing"
  | "emergency-meeting"
  | "voting"
  | "vote-result"
  | "round-end"
  | "game-over";

type CategoryId =
  | "data-structures"
  | "oop"
  | "security"
  | "frontend"
  | "backend";

type GameWinner = "civilians" | "impostor" | null;

interface CursorPosition {
  lineNumber: number;
  column: number;
}

interface Player {
  id: string;
  name: string;
  color: string;
  isHost: boolean;
  isReady: boolean;
  isImpostor: boolean;
  isAlive: boolean;
  cursorPosition?: CursorPosition;
}

interface CodeBlock {
  id: string;
  code: string;
  testCase: string;
  expectedOutput: string;
  passed: boolean;
}

interface SabotageTask {
  id: string;
  description: string;
  lineRange: [number, number];
  completed: boolean;
  verificationTest: string;
}

interface Vote {
  voterId: string;
  targetId: string | null;
}

interface ChatMessage {
  id: string;
  playerId: string;
  message: string;
}

interface GameState {
  phase: GamePhase;
  lobbyId: string | null;
  players: Player[];
  category: CategoryId | null;
  categoryVotes: Record<string, CategoryId>;
  code: string;
  codeBlocks: CodeBlock[];
  sabotageTasks: SabotageTask[];
  currentRound: number;
  maxRounds: number;
  roundTimeRemaining: number;
  roundDuration: number;
  emergencyMeetingCalled: boolean;
  emergencyMeetingCallerId: string | null;
  votes: Vote[];
  votedOutPlayerId: string | null;
  chatMessages: ChatMessage[];
  winner: GameWinner;
}

type ClientGameEvent =
  | { type: "join"; playerId: string; playerName: string }
  | { type: "ready"; playerId: string; ready: boolean }
  | { type: "vote-category"; playerId: string; category: CategoryId }
  | { type: "finalize-category" }
  | {
      type: "start-game";
      code: string;
      blocks: CodeBlock[];
      tasks: SabotageTask[];
    }
  | { type: "update-code"; code: string }
  | {
      type: "update-cursor";
      playerId: string;
      lineNumber: number;
      column: number;
    }
  | { type: "send-chat"; playerId: string; message: string }
  | { type: "call-emergency"; playerId: string }
  | { type: "transition-to-voting" }
  | { type: "cast-vote"; playerId: string; targetId: string | null }
  | { type: "finalize-votes" }
  | { type: "end-round" }
  | { type: "next-round" }
  | { type: "tick" }
  | { type: "reset-game" };

const PLAYER_COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "yellow",
  "purple",
  "pink",
] as const;

const DEFAULT_ROUND_DURATION_SECONDS = 45;
const DEFAULT_MAX_ROUNDS = 4;
const MIN_PLAYERS_TO_START = 2;

function createInitialState(lobbyId: string): GameState {
  return {
    phase: "lobby",
    lobbyId,
    players: [],
    category: null,
    categoryVotes: {},
    code: "",
    codeBlocks: [],
    sabotageTasks: [],
    currentRound: 1,
    maxRounds: DEFAULT_MAX_ROUNDS,
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

  onConnect(connection: Party.Connection): void {
    connection.send(JSON.stringify({ type: "sync", state: this.state }));
  }

  onClose(connection: Party.Connection): void {
    const playerId = this.connectionToPlayerId.get(connection.id);
    if (!playerId) {
      return;
    }

    this.connectionToPlayerId.delete(connection.id);
    const removedPlayer = this.state.players.find((player) => player.id === playerId);
    const wasHost = removedPlayer?.isHost ?? false;
    this.state.players = this.state.players.filter((player) => player.id !== playerId);
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

  onMessage(message: string, sender: Party.Connection): void {
    const event = safeParseEvent(message);
    if (!event) {
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
      default: {
        const _exhaustive: never = event;
        return _exhaustive;
      }
    }

    this.broadcastState();
  }

  private handleJoin(
    sender: Party.Connection,
    event: Extract<ClientGameEvent, { type: "join" }>,
  ): void {
    this.connectionToPlayerId.set(sender.id, event.playerId);
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
    return this.state.players.some((player) => player.id === playerId && player.isHost);
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
    this.state.phase = "role-reveal";
  }

  private handleStartGame(
    event: Extract<ClientGameEvent, { type: "start-game" }>,
  ): void {
    if (this.state.players.length === 0) {
      return;
    }

    const impostorIndex = Math.floor(Math.random() * this.state.players.length);
    this.state.players = this.state.players.map((player, index) => ({
      ...player,
      isImpostor: index === impostorIndex,
      isAlive: true,
    }));

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
    const aliveImpostors = alivePlayers.filter((player) => player.isImpostor).length;
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

  private broadcastState(): void {
    this.room.broadcast(JSON.stringify({ type: "sync", state: this.state }));
  }
}
