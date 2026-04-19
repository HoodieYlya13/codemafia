"use client";

import { useState, useRef, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import { PLAYER_COLOR_MAP } from "@/lib/gameData";

export default function ChatPanel() {
  const { chatMessages, players, currentPlayerId, sendChatMessage } =
    useGameStore();
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll if we are not in a focus-intensive component or if it's desirable
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [chatMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendChatMessage(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-card border-4 border-border shadow-[inset_-4px_-4px_hsl(var(--border)/0.3)]">
      <div className="p-3 border-b-4 border-border bg-background">
        <h3 className="text-sm text-primary">SLACK CHANNEL (#general)</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[300px]">
        {chatMessages.length === 0 && (
          <p className="text-xs text-muted-foreground text-center pt-8">
            Channel silent. Everyone is coding (or sleeping).
          </p>
        )}
        {chatMessages.map((msg) => {
          const player = players.find((p) => p.id === msg.playerId);
          const color = player ? PLAYER_COLOR_MAP[player.color] : "#999";
          const isMe = msg.playerId === currentPlayerId;

          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
            >
              <span className="text-[10px] mb-1" style={{ color }}>
                {player?.name || "Unknown"}
              </span>
              <div
                className={`p-2 text-xs border-2 max-w-[90%] wrap-break-word`}
                style={{
                  backgroundColor: isMe
                    ? "hsl(var(--primary) / 0.1)"
                    : "hsl(var(--muted))",
                  borderColor: color,
                }}
              >
                {msg.message}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="p-3 border-t-4 border-border flex gap-2"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Blame someone..."
          className="pixel-input flex-1 px-2 py-2 shadow-none!"
          maxLength={100}
        />
        <button
          type="submit"
          disabled={!inputValue.trim()}
          className="pixel-btn-primary px-3 py-1 text-xs"
        >
          POST
        </button>
      </form>
    </div>
  );
}
