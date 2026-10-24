"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { socketManager } from "@/party/client";
import { toast } from "@/store/useToastStore";
import {
  DEFAULT_ROUND_DURATION_SECONDS,
  LOBBY_CODE_LENGTH,
  type CategoryId,
  type ClientGameEvent,
  type ErrorCode,
  type GamePhase,
  type GameView,
} from "@/lib/gameData";
import { uuidv7 } from "@/lib/uuid";

export interface GameActions {
  setHasHydrated: (state: boolean) => void;
  syncState: (state: GameView, you: string | null, serverNow: number) => void;
  handleError: (code: ErrorCode) => void;
  createGame: (playerName: string) => void;
  joinGame: (lobbyId: string, playerName: string) => void;
  reconnect: () => void;
  setReady: (ready: boolean) => void;
  voteCategory: (category: CategoryId) => void;
  finalizeCategoryVote: () => void;
  sendChatMessage: (message: string) => void;
  callEmergencyMeeting: () => void;
  transitionToVoting: () => void;
  castVote: (targetId: string | null) => void;
  finalizeVotes: () => void;
  endRound: () => void;
  nextRound: () => void;
  resetGame: () => void;
  reportTests: (code: string, blocks: Record<string, boolean>, tasks: Record<string, boolean>) => void;
  leaveLobby: () => void;
}

export interface ClientState extends Omit<GameView, "phase" | "lobbyId"> {
  phase: GamePhase;
  lobbyId: string | null;
  currentPlayerId: string | null;
  /** Secret proving this tab is `currentPlayerId` when it reconnects. */
  token: string | null;
  playerName: string;
  /** Whether this tab created the lobby and is still waiting for the server to confirm it. */
  creating: boolean;
  /** Server clock minus local clock, to show the round timer accurately. */
  clockOffset: number;
  _hasHydrated: boolean;
}

const initialState: Omit<ClientState, "_hasHydrated"> = {
  phase: "menu",
  lobbyId: null,
  currentPlayerId: null,
  token: null,
  playerName: "",
  creating: false,
  clockOffset: 0,
  players: [],
  category: null,
  categoryVotes: {},
  codeBlocks: [],
  sabotageTasks: [],
  currentRound: 1,
  maxRounds: 4,
  roundEndsAt: null,
  roundDuration: DEFAULT_ROUND_DURATION_SECONDS,
  emergencyMeetingCalled: false,
  emergencyMeetingCallerId: null,
  votes: [],
  votedOutPlayerId: null,
  chatMessages: [],
  winner: null,
};

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomLobbyCode() {
  const bytes = crypto.getRandomValues(new Uint8Array(LOBBY_CODE_LENGTH));
  return Array.from(bytes, (byte) => CODE_ALPHABET[byte % CODE_ALPHABET.length]).join("");
}

const ERROR_MESSAGES: Record<ErrorCode, string> = {
  "room-not-found": "No startup with that code. Check the room code.",
  "room-taken": "That room code is taken. Try again.",
  "lobby-full": "This startup is fully staffed.",
  "game-in-progress": "That sprint already started. Wait for the next one.",
  "invalid-name": "Pick a name first.",
  "bad-token": "This seat belongs to someone else.",
  "stale-tests": "The code changed while your tests ran. Deploy again.",
};

export const useGameStore = create<ClientState & GameActions>()(
  persist(
    (set, get) => {
      const send = (event: ClientGameEvent) => socketManager.send(event);

      const connect = (lobbyId: string, playerName: string, creating: boolean) => {
        const currentPlayerId = uuidv7();
        const token = crypto.randomUUID();
        set({ ...initialState, lobbyId, currentPlayerId, token, playerName, creating });
        get().reconnect();
      };

      return {
        ...initialState,
        _hasHydrated: false,

        setHasHydrated: (state) => {
          set({ _hasHydrated: state });
        },

        syncState: (state, you, serverNow) => {
          const { players: oldPlayers, currentPlayerId } = get();
          const newPlayers = state.players;

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

          set({
            ...state,
            creating: false,
            currentPlayerId: you ?? currentPlayerId,
            clockOffset: serverNow - Date.now(),
          });
        },

        handleError: (code) => {
          if (code === "stale-tests") {
            toast.warning(ERROR_MESSAGES[code]);
            return;
          }
          const { creating, playerName } = get();
          socketManager.disconnect();
          // Two lobbies drew the same code: quietly try another one.
          if (code === "room-taken" && creating) {
            connect(randomLobbyCode(), playerName, true);
            return;
          }
          toast.error(ERROR_MESSAGES[code]);
          set({ ...initialState, _hasHydrated: true });
        },

        createGame: (playerName) => {
          connect(randomLobbyCode(), playerName, true);
        },

        joinGame: (lobbyId, playerName) => {
          connect(lobbyId, playerName, false);
        },

        reconnect: () => {
          const { lobbyId, currentPlayerId, token, playerName, creating } = get();
          if (!lobbyId || !currentPlayerId || !token) return;
          socketManager.connect(lobbyId, {
            playerId: currentPlayerId,
            token,
            name: playerName,
            create: creating ? "1" : undefined,
          });
        },

        setReady: (ready) => send({ type: "ready", ready }),
        voteCategory: (category) => send({ type: "vote-category", category }),
        finalizeCategoryVote: () => send({ type: "finalize-category" }),
        sendChatMessage: (message) => send({ type: "send-chat", message }),
        callEmergencyMeeting: () => send({ type: "call-emergency" }),
        transitionToVoting: () => send({ type: "transition-to-voting" }),
        castVote: (targetId) => send({ type: "cast-vote", targetId }),
        finalizeVotes: () => send({ type: "finalize-votes" }),
        endRound: () => send({ type: "end-round" }),
        nextRound: () => send({ type: "next-round" }),
        resetGame: () => send({ type: "reset-game" }),
        reportTests: (code, blocks, tasks) => send({ type: "report-tests", code, blocks, tasks }),

        leaveLobby: () => {
          send({ type: "leave" });
          socketManager.disconnect();
          set({ ...initialState, _hasHydrated: true });
        },
      };
    },
    {
      name: "game-lobby-storage",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        lobbyId: state.lobbyId,
        currentPlayerId: state.currentPlayerId,
        token: state.token,
        playerName: state.playerName,
        creating: state.creating,
      }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
