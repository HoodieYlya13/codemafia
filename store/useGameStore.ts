"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { socketManager } from "@/party/client";
import { toast } from "@/store/useToastStore";
import {
  CategoryId,
  getRandomLevel,
  GamePhase,
  GameState,
  ClientGameEvent,
} from "@/lib/gameData";

export interface GameActions {
  setHasHydrated: (state: boolean) => void;
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
  updateBlockStatus: (blockId: string, passed: boolean) => void;
  updateTaskStatus: (taskId: string, completed: boolean) => void;
  leaveLobby: () => void;
}

const initialState: Omit<GameState, "_hasHydrated"> = {
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

export interface GameStateWithHydration extends GameState {
  _hasHydrated: boolean;
}

export const useGameStore = create<GameStateWithHydration & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      _hasHydrated: false,

      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },

      syncState: (newState) => {
        const { players: oldPlayers, currentPlayerId } = get();
        const newPlayers = newState.players || [];

        // Only detect changes if we already had a baseline (to avoid toasting everything on first sync)
        if (oldPlayers.length > 0 && newPlayers.length > 0) {
          // Detect joins
          newPlayers.forEach((newPlayer) => {
            if (
              newPlayer.id !== currentPlayerId &&
              !oldPlayers.find((p) => p.id === newPlayer.id)
            ) {
              toast.info(`${newPlayer.name} onboarded to the startup`);
            }
          });

          // Detect leaves
          oldPlayers.forEach((oldPlayer) => {
            if (
              oldPlayer.id !== currentPlayerId &&
              !newPlayers.find((p) => p.id === oldPlayer.id)
            ) {
              toast.info(`${oldPlayer.name} quit for a better offer`);
            }
          });
        }

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
          console.error("Server room is on fire:", error);
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
          console.error("Server room is on fire:", error);
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

      updateBlockStatus: (blockId, passed) => {
        const event: ClientGameEvent = { type: "update-block-status", blockId, passed };
        socketManager.send(event);
      },

      updateTaskStatus: (taskId, completed) => {
        const event: ClientGameEvent = { type: "update-task-status", taskId, completed };
        socketManager.send(event);
      },
      leaveLobby: () => {
        socketManager.disconnect();
        set({ ...initialState, _hasHydrated: true });
      },
    }),
    {
      name: "game-lobby-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        lobbyId: state.lobbyId,
        currentPlayerId: state.currentPlayerId,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
