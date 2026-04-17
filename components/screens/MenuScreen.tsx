"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";

export default function MenuScreen() {
  const [playerName, setPlayerName] = useState("");
  const [lobbyCode, setLobbyCode] = useState("");
  const { createGame, joinGame } = useGameStore();

  const handleCreate = () => {
    if (playerName.trim()) {
      createGame(playerName.trim());
    }
  };

  const handleJoin = () => {
    if (playerName.trim() && lobbyCode.trim().length === 6) {
      joinGame(lobbyCode.trim().toUpperCase(), playerName.trim());
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center animate-pixel-float"
      >
        <h1 className="text-4xl md:text-6xl font-pixel text-primary logo-glow tracking-wider">
          CODE
        </h1>
        <h1 className="text-4xl md:text-6xl font-pixel text-accent logo-glow tracking-wider mt-2">
          MAFIA
        </h1>
        <p className="mt-4 text-sm font-pixel text-foreground/70">
          Sabotage or Survive
        </p>
      </motion.div>

      <motion.div
        className="mt-12 w-full max-w-md pixel-box p-6 space-y-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label className="block font-pixel text-xs text-muted-foreground mb-2">
            YOUR NAME
          </label>
          <input
            type="text"
            maxLength={12}
            className="pixel-input"
            placeholder="DEV_NAME"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 pt-4 border-t-4 border-border">
          <button
            onClick={handleCreate}
            disabled={!playerName.trim()}
            className="pixel-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            CREATE NEW GAME
          </button>

          <div className="flex gap-2">
            <input
              type="text"
              maxLength={6}
              className="pixel-input"
              placeholder="ROOM CODE"
              value={lobbyCode}
              onChange={(e) => setLobbyCode(e.target.value.toUpperCase())}
            />
            <button
              onClick={handleJoin}
              disabled={!playerName.trim() || lobbyCode.length !== 6}
              className="pixel-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              JOIN
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
