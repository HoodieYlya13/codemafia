"use client";

import { useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import { socketManager } from "@/party/client";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import MenuScreen from "@/components/screens/MenuScreen";
import LobbyScreen from "@/components/screens/LobbyScreen";
import CategoryVoteScreen from "@/components/screens/CategoryVoteScreen";
import RoleRevealScreen from "@/components/screens/RoleRevealScreen";
import VotingScreen from "@/components/screens/VotingScreen";
import RoundEndScreen from "@/components/screens/RoundEndScreen";
import dynamic from "next/dynamic";

const GameScreen = dynamic(() => import("@/components/screens/GameScreen"), {
  ssr: false,
});

export default function Home() {
  const phase = useGameStore((state) => state.phase);
  const lobbyId = useGameStore((state) => state.lobbyId);
  const hasHydrated = useHasHydrated();

  // Handle auto-reconnection on refresh
  useEffect(() => {
    if (hasHydrated && lobbyId && !socketManager.isConnected) {
      console.log("Auto-reconnecting to lobby:", lobbyId);
      socketManager.connect(lobbyId);
    }
  }, [hasHydrated, lobbyId]);

  // If not hydrated yet, we show a simple loading state or the background to avoid mismatch
  if (!hasHydrated) return <main className="min-h-screen sky-bg" />;

  return (
    <main className="min-h-screen sky-bg relative overflow-hidden">
      {/* Add some simple pixel clouds for ambiance */}
      <div className="absolute top-10 left-10 w-32 h-16 bg-white/80" />
      <div className="absolute top-32 right-20 w-24 h-12 bg-white/70" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-secondary/50" />

      <div className="relative z-10 h-full">
        {phase === "menu" && <MenuScreen />}
        {phase === "lobby" && <LobbyScreen />}

        {phase === "category-vote" && <CategoryVoteScreen />}
        {phase === "role-reveal" && <RoleRevealScreen />}
        {phase === "playing" && <GameScreen />}
        {(phase === "emergency-meeting" ||
          phase === "voting" ||
          phase === "vote-result" ||
          phase === "game-over") && <VotingScreen />}
        {phase === "round-end" && <RoundEndScreen />}
      </div>
    </main>
  );
}
