"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";
import { CATEGORY_NAMES, type CategoryId } from "@/lib/gameData";

const CATEGORIES = Object.entries(CATEGORY_NAMES) as Array<[CategoryId, string]>;

export default function CategoryVoteScreen() {
  const { categoryVotes, currentPlayerId, voteCategory, finalizeCategoryVote, players } =
    useGameStore();

  const myVote = currentPlayerId ? categoryVotes[currentPlayerId] : undefined;
  const isHost = players.some((player) => player.id === currentPlayerId && player.isHost);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        className="pixel-box w-full max-w-3xl p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl md:text-2xl text-primary logo-glow text-center mb-3">
          VOTE CATEGORY
        </h2>
        <p className="text-xs text-muted-foreground text-center mb-6">
          Pick the code challenge type for this round.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          {CATEGORIES.map(([id, label]) => {
            const selected = myVote === id;
            const voteCount = Object.values(categoryVotes).filter((vote) => vote === id).length;
            return (
              <button
                key={id}
                onClick={() => voteCategory(id)}
                className={`pixel-btn text-left justify-between ${selected ? "pixel-btn-primary" : "pixel-btn-ghost"}`}
              >
                <span>{label}</span>
                <span className="text-xs">({voteCount})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={finalizeCategoryVote}
            disabled={!isHost}
            className="pixel-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isHost ? "LOCK CATEGORY" : "HOST LOCKS CATEGORY"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
