"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";

export default function RoleRevealScreen() {
  const { players, currentPlayerId, startGame } = useGameStore();
  const me = players.find((player) => player.id === currentPlayerId);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (me?.isHost) {
        startGame();
      }
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [me?.isHost, startGame]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="pixel-box w-full max-w-2xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <p className="text-xs text-muted-foreground mb-4">YOUR ROLE</p>
        <h1 className={`text-4xl md:text-5xl mb-4 ${me?.isImpostor ? "impostor-text" : "civilian-text"}`}>
          {me?.isImpostor ? "VIBE CODER" : "10X ENGINEER"}
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {me?.isImpostor
            ? "Just be yourself and break the prod without being caught."
            : "Repair the prod and fire the Vibe Coders during the meetings."}
        </p>
      </motion.div>
    </div>
  );
}
