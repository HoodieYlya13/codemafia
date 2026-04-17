"use client";

import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";
import ChatPanel from "@/components/ChatPanel";

export default function VotingScreen() {
  const {
    phase,
    players,
    currentPlayerId,
    votes,
    castVote,
    finalizeVotes,
    transitionToVoting,
    votedOutPlayerId,
    nextRound,
    winner,
    resetGame,
  } = useGameStore();

  const me = players.find((player) => player.id === currentPlayerId);
  const isHost = Boolean(me?.isHost);
  const myVote = votes.find(
    (vote) => vote.voterId === currentPlayerId,
  )?.targetId;
  const ejectedPlayer = players.find(
    (player) => player.id === votedOutPlayerId,
  );

  const renderContent = () => {
    if (phase === "emergency-meeting") {
      return (
        <motion.div className="pixel-box w-full max-w-2xl p-8 text-center animate-emergency-pulse">
          <h2 className="text-3xl text-destructive mb-3">EMERGENCY MEETING</h2>
          <p className="text-xs text-muted-foreground mb-6">
            Discuss quickly and move to voting.
          </p>
          <button
            type="button"
            onClick={transitionToVoting}
            disabled={!isHost}
            className="pixel-btn-danger disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isHost ? "START VOTING" : "HOST STARTS VOTING"}
          </button>
        </motion.div>
      );
    }

    if (phase === "vote-result") {
      return (
        <motion.div
          className="pixel-box w-full max-w-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl text-primary mb-4">VOTE RESULT</h2>
          <p className="text-sm mb-6">
            {ejectedPlayer
              ? `${ejectedPlayer.name} was ejected.`
              : "No one was ejected."}
          </p>
          <button
            type="button"
            className="pixel-btn-secondary"
            onClick={nextRound}
            disabled={!isHost}
          >
            {isHost ? "NEXT ROUND" : "HOST CONTINUES"}
          </button>
        </motion.div>
      );
    }

    if (phase === "game-over") {
      return (
        <motion.div
          className="pixel-box w-full max-w-2xl p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-3xl mb-4 logo-glow">
            {winner === "civilians" ? "CIVILIANS WIN" : "IMPOSTOR WINS"}
          </h2>
          <button
            type="button"
            className="pixel-btn-primary"
            onClick={resetGame}
          >
            PLAY AGAIN
          </button>
        </motion.div>
      );
    }

    return (
      <motion.div
        className="pixel-box w-full max-w-2xl p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl text-primary text-center mb-6">
          CAST YOUR VOTE
        </h2>
        <div className="space-y-3">
          {players
            .filter((player) => player.isAlive)
            .map((player) => (
              <button
                key={player.id}
                type="button"
                className={`pixel-btn w-full justify-between ${myVote === player.id ? "pixel-btn-primary" : "pixel-btn-ghost"}`}
                onClick={() => castVote(player.id)}
              >
                {player.name}{" "}
                {votes.filter((vote) => vote.targetId === player.id).length}{" "}
                votes
              </button>
            ))}
        </div>
        <div className="mt-4 flex gap-2 justify-center">
          <button
            type="button"
            className="pixel-btn-ghost"
            onClick={() => castVote(null)}
          >
            SKIP
          </button>
          <button
            type="button"
            className="pixel-btn-secondary"
            onClick={finalizeVotes}
            disabled={!isHost}
          >
            {isHost ? "FINALIZE VOTES" : "HOST FINALIZES"}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 h-screen h-svh">
      <div className="flex-1 flex items-center justify-center order-1 mt-12 lg:mt-0">
        {renderContent()}
      </div>

      {phase !== "game-over" && (
        <div className="w-full lg:w-[350px] shrink-0 h-[400px] lg:h-full order-2 lg:order-1 lg:py-12">
          <ChatPanel />
        </div>
      )}
    </div>
  );
}
