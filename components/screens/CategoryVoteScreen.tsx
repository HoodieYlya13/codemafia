"use client";

import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useGameStore } from "@/store/useGameStore";
import { CATEGORY_NAMES, type CategoryId } from "@/lib/gameData";
import ChatPanel from "@/components/ChatPanel";

const CATEGORIES = Object.entries(CATEGORY_NAMES) as Array<[CategoryId, string]>;

export default function CategoryVoteScreen() {
  const {
    categoryVotes,
    currentPlayerId,
    voteCategory,
    finalizeCategoryVote,
    players,
    leaveLobby,
  } = useGameStore();

  const myVote = currentPlayerId ? categoryVotes[currentPlayerId] : undefined;
  const isHost = players.some(
    (player) => player.id === currentPlayerId && player.isHost,
  );

  return (
    <div className="min-h-screen p-4 md:pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
      <div className="flex-1 flex flex-col items-center w-full mt-12 lg:mt-0">
        <motion.div
          className="pixel-box w-full max-w-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl md:text-2xl text-primary logo-glow text-center mb-3">
            CHOOSE TECHNOLOGY STACK
          </h2>
          <p className="text-xs text-muted-foreground text-center mb-6">
            Pick the stack for our next failing MVP.
          </p>

          <div className="grid gap-3 md:grid-cols-2">
            {CATEGORIES.map(([id, label]) => {
              const selected = myVote === id;
              const voteCount = Object.values(categoryVotes).filter(
                (vote) => vote === id,
              ).length;
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

          <div className="mt-6 flex justify-center gap-4">
            <button
              type="button"
              onClick={finalizeCategoryVote}
              disabled={!isHost}
              className="pixel-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isHost ? "COMMIT STACK" : "AWAITING LEAD TECH"}
            </button>
            <button
              onClick={leaveLobby}
              className="pixel-btn-ghost text-sm px-6 py-2 flex items-center gap-2 text-destructive"
            >
              <LogOut className="w-4 h-4" />
              LEAVE
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[350px] shrink-0 h-[400px] lg:h-[600px]">
        <ChatPanel />
      </div>
    </div>
  );
}
