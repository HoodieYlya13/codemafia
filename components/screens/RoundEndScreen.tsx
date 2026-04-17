"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";

export default function RoundEndScreen() {
  const { players, currentPlayerId, currentRound, maxRounds, nextRound } = useGameStore();
  const me = players.find((player) => player.id === currentPlayerId);
  const isHost = Boolean(me?.isHost);
  const finalRoundReached = currentRound >= maxRounds;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="pixel-box w-full max-w-2xl p-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-3xl text-warning mb-4">ROUND COMPLETE</h2>
        <p className="text-sm text-muted-foreground mb-2">Round {currentRound} ended.</p>
        <p className="text-xs text-muted-foreground mb-6">
          {finalRoundReached
            ? "Final round reached. Host can resolve the game."
            : `Prepare for round ${currentRound + 1}.`}
        </p>

        <button
          type="button"
          onClick={nextRound}
          disabled={!isHost}
          className="pixel-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isHost ? "START NEXT ROUND" : "HOST STARTS NEXT ROUND"}
        </button>
      </motion.div>
    </div>
  );
}
