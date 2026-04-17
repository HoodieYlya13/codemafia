"use client";

import { motion } from "framer-motion";
import { Users, Copy, Crown, Check } from "lucide-react";
import { useGameStore } from "@/store/useGameStore";
import { PLAYER_COLOR_MAP, MAX_PLAYERS } from "@/lib/gameData";

export default function LobbyScreen() {
  const { lobbyId, players, currentPlayerId, setReady } = useGameStore();
  const me = players.find((p) => p.id === currentPlayerId);

  const copyToClipboard = () => {
    if (lobbyId) {
      navigator.clipboard.writeText(lobbyId);
      // In a real app we'd add a toast here. Let's keep it simple for now.
      alert("Lobby ID copied!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 pt-16">
      <motion.div
        className="text-center mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-2xl md:text-3xl font-pixel text-primary pixel-text-shadow">
          LOBBY
        </h1>
      </motion.div>

      <motion.div
        className="pixel-box p-4 mb-8 flex items-center gap-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div>
          <p className="text-xs font-pixel text-muted-foreground mb-1">
            Lobby Code:
          </p>
          <p className="text-xl font-pixel text-primary tracking-widest">
            {lobbyId}
          </p>
        </div>
        <button
          onClick={copyToClipboard}
          className="pixel-btn-ghost p-2"
          aria-label="Copy Code"
        >
          <Copy className="w-5 h-5" />
        </button>
      </motion.div>

      <motion.div
        className="w-full max-w-md pixel-box p-4 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-6 border-b-4 border-border pb-4">
          <Users className="w-5 h-5 text-primary" />
          <h2 className="font-pixel text-sm text-foreground">
            Players ({players.length}/{MAX_PLAYERS})
          </h2>
        </div>

        <div className="space-y-3">
          {players.map((player, idx) => (
            <motion.div
              key={player.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-2 bg-background/50 border-2 border-border"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 border-2 border-border"
                  style={{ backgroundColor: PLAYER_COLOR_MAP[player.color] }}
                />
                <span
                  className="font-pixel text-xs"
                  style={{ color: PLAYER_COLOR_MAP[player.color] }}
                >
                  {player.name}{" "}
                  {player.id === currentPlayerId && (
                    <span className="text-muted-foreground">(You)</span>
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {player.isHost && <Crown className="w-4 h-4 text-warning" />}
                {player.isReady && (
                  <div className="w-5 h-5 bg-success flex items-center justify-center border-2 border-border">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {players.length === 0 && (
            <p className="font-pixel text-xs text-center text-muted-foreground py-4">
              Waiting for players...
            </p>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button
          onClick={() => setReady(!me?.isReady)}
          className={`${me?.isReady ? "pixel-btn-ghost" : "pixel-btn-secondary"} text-sm px-8 py-4`}
        >
          {me?.isReady ? "NOT READY" : "READY!"}
        </button>
      </motion.div>

      {players.length >= 2 && players.every((p) => p.isReady) && (
        <p className="mt-4 font-pixel text-xs text-success animate-pulse">
          Starting soon...
        </p>
      )}
    </div>
  );
}
