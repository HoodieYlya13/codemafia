"use client";

import { useGameStore } from "@/store/useGameStore";
import MenuScreen from "@/components/screens/MenuScreen";
import LobbyScreen from "@/components/screens/LobbyScreen";
import CategoryVoteScreen from "@/components/screens/CategoryVoteScreen";
import RoleRevealScreen from "@/components/screens/RoleRevealScreen";
import GameScreen from "@/components/screens/GameScreen";
import VotingScreen from "@/components/screens/VotingScreen";
import RoundEndScreen from "@/components/screens/RoundEndScreen";

export default function Home() {
  const phase = useGameStore((state) => state.phase);

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