"use client";

import { create } from "zustand";
import { socketManager } from "@/party/client";
import {
  CategoryId,
  CodeBlock,
  SabotageTask,
  getRandomLevel,
} from "@/lib/gameData";

export type GamePhase =
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

export type GameWinner = "civilians" | "impostor" | null;

export interface CursorPosition {
  lineNumber: number;
  column: number;
}

export interface Player {
  id: string;
  name: string;
  color: string;
  isHost: boolean;
  isReady: boolean;
  isImpostor: boolean;
  isAlive: boolean;
  cursorPosition?: CursorPosition;
}

export interface ChatMessage {
  id: string;
  playerId: string;
  message: string;
}

export interface Vote {
  voterId: string;
  targetId: string | null;
}

export interface GameState {
  phase: GamePhase;
  lobbyId: string | null;
  players: Player[];
  currentPlayerId: string | null;
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

export type ClientGameEvent =
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

export interface GameActions {
  syncState: (state: Partial<GameState>) => void;
  createGame: (playerName: string) => Promise<void>;
  joinGame: (lobbyId: string, playerName: string) => Promise<void>;
  setReady: (ready: boolean) => void;
  voteCategory: (category: CategoryId) => void;
  finalizeCategoryVote: () => void;
  startGame: () => void;
  setPhase: (phase: GamePhase) => void;
  updateCode: (code: string) => void;
  updateCursorPosition: (lineNumber: number, column: number) => void;
  sendChatMessage: (message: string) => void;
  callEmergencyMeeting: () => void;
  transitionToVoting: () => void;
  castVote: (targetId: string | null) => void;
  finalizeVotes: () => void;
  endRound: () => void;
  nextRound: () => void;
  tick: () => void;
  resetGame: () => void;
}

const initialState: GameState = {
  phase: "menu",
  lobbyId: null,
  players: [],
  currentPlayerId: null,
  category: null,
  categoryVotes: {},
  code: "",
  codeBlocks: [],
  sabotageTasks: [],
  currentRound: 1,
  maxRounds: 4,
  roundTimeRemaining: 45,
  roundDuration: 45,
  emergencyMeetingCalled: false,
  emergencyMeetingCallerId: null,
  votes: [],
  votedOutPlayerId: null,
  chatMessages: [],
  winner: null,
};

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,

  syncState: (newState) => {
    const currentPlayerId = get().currentPlayerId;
    set({ ...newState, currentPlayerId });
  },

  createGame: async (playerName) => {
    const lobbyId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const playerId = crypto.randomUUID();

    set({ phase: "lobby", lobbyId, currentPlayerId: playerId });
    try {
      await socketManager.connect(lobbyId);
      const event: ClientGameEvent = { type: "join", playerId, playerName };
      socketManager.send(event);
    } catch (error) {
      console.error("Failed to connect to PartyKit room:", error);
      set({ ...initialState });
    }
  },

  joinGame: async (lobbyId, playerName) => {
    const playerId = crypto.randomUUID();
    set({ phase: "lobby", lobbyId, currentPlayerId: playerId });
    try {
      await socketManager.connect(lobbyId);
      const event: ClientGameEvent = { type: "join", playerId, playerName };
      socketManager.send(event);
    } catch (error) {
      console.error("Failed to connect to PartyKit room:", error);
      set({ ...initialState });
    }
  },

  setReady: (ready) => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "ready",
        playerId: currentPlayerId,
        ready,
      };
      socketManager.send(event);
    }
  },

  voteCategory: (category) => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "vote-category",
        playerId: currentPlayerId,
        category,
      };
      socketManager.send(event);
    }
  },

  finalizeCategoryVote: () => {
    const event: ClientGameEvent = { type: "finalize-category" };
    socketManager.send(event);
  },

  startGame: async () => {
    const { category } = get();
    const levelData = getRandomLevel(category ?? "oop");
    const event: ClientGameEvent = {
      type: "start-game",
      code: levelData.code,
      blocks: levelData.blocks,
      tasks: levelData.tasks,
    };
    socketManager.send(event);
  },

  setPhase: (phase) => {
    set({ phase });
  },

  updateCode: (code) => {
    set({ code });
    const event: ClientGameEvent = { type: "update-code", code };
    socketManager.send(event);
  },

  updateCursorPosition: (lineNumber, column) => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "update-cursor",
        playerId: currentPlayerId,
        lineNumber,
        column,
      };
      socketManager.send(event);
    }
  },

  sendChatMessage: (message) => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "send-chat",
        playerId: currentPlayerId,
        message,
      };
      socketManager.send(event);
    }
  },

  callEmergencyMeeting: () => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "call-emergency",
        playerId: currentPlayerId,
      };
      socketManager.send(event);
    }
  },

  transitionToVoting: () => {
    const event: ClientGameEvent = { type: "transition-to-voting" };
    socketManager.send(event);
  },

  castVote: (targetId) => {
    const { currentPlayerId } = get();
    if (currentPlayerId) {
      const event: ClientGameEvent = {
        type: "cast-vote",
        playerId: currentPlayerId,
        targetId,
      };
      socketManager.send(event);
    }
  },

  finalizeVotes: () => {
    const event: ClientGameEvent = { type: "finalize-votes" };
    socketManager.send(event);
  },

  endRound: () => {
    const event: ClientGameEvent = { type: "end-round" };
    socketManager.send(event);
  },

  nextRound: () => {
    const event: ClientGameEvent = { type: "next-round" };
    socketManager.send(event);
  },

  tick: () => {
    const { players, currentPlayerId } = get();
    const me = players.find((p) => p.id === currentPlayerId);
    if (me?.isHost) {
      const event: ClientGameEvent = { type: "tick" };
      socketManager.send(event);
    }
  },

  resetGame: () => {
    const event: ClientGameEvent = { type: "reset-game" };
    socketManager.send(event);
  },
}));
