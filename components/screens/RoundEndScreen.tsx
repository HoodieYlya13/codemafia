"use client";

import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useGameStore } from "@/store/useGameStore";
import ChatPanel from "@/components/ChatPanel";

export default function RoundEndScreen() {
  const { players, currentPlayerId, currentRound, maxRounds, nextRound, leaveLobby } =
    useGameStore();
  const me = players.find((player) => player.id === currentPlayerId);
  const isHost = Boolean(me?.isHost);
  const finalRoundReached = currentRound >= maxRounds;

  return (
    <div className="min-h-screen p-4 md:pt-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-center">
      <div className="flex-1 flex flex-col items-center w-full mt-12 lg:mt-0">
        <motion.div
          className="pixel-box w-full max-w-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl text-warning mb-4">SPRINT RETROSPECTIVE</h2>
          <p className="text-sm text-muted-foreground mb-2">
            Sprint {currentRound} finished with questionable code quality.
          </p>
          <p className="text-xs text-muted-foreground mb-6">
            {finalRoundReached
              ? "Final sprint reached. Lead Architect, decide our fate."
              : `Prepare for sprint ${currentRound + 1}.`}
          </p>

          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={nextRound}
              disabled={!isHost}
              className="pixel-btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isHost ? "START NEXT SPRINT" : "AWAITING LEAD ARCHITECT"}
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
