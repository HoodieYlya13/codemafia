"use client";

import { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";

export default function GameScreen() {
  const {
    code,
    updateCode,
    updateCursorPosition,
    codeBlocks,
    sabotageTasks,
    players,
    currentPlayerId,
    roundTimeRemaining,
    roundDuration,
    tick,
    callEmergencyMeeting,
    endRound,
  } = useGameStore();

  const me = players.find((player) => player.id === currentPlayerId);
  const isImpostor = Boolean(me?.isImpostor);

  useEffect(() => {
    if (!me?.isHost) {
      return;
    }

    const interval = window.setInterval(() => {
      tick();
    }, 1000);

    return () => window.clearInterval(interval);
  }, [me?.isHost, tick]);

  const timeRatio =
    roundDuration <= 0
      ? 0
      : Math.max(0, Math.min(100, (roundTimeRemaining / roundDuration) * 100));

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto grid gap-4 lg:grid-cols-[1fr_320px]">
        <section className="pixel-box p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base text-primary">LIVE CODE</h2>
            <button type="button" className="pixel-btn-danger" onClick={callEmergencyMeeting}>
              EMERGENCY
            </button>
          </div>

          <div className="mb-4">
            <div className="h-3 border-2 border-border bg-muted overflow-hidden">
              <div
                className="h-full bg-warning transition-all duration-200"
                style={{ width: `${timeRatio}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">TIME: {roundTimeRemaining}s</p>
          </div>

          <div className="border-4 border-border overflow-hidden">
            <Editor
              height="520px"
              defaultLanguage="python"
              value={code}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                wordWrap: "on",
                automaticLayout: true,
              }}
              onChange={(value) => updateCode(value ?? "")}
              onMount={(editor) => {
                editor.onDidChangeCursorPosition((event) => {
                  updateCursorPosition(event.position.lineNumber, event.position.column);
                });
              }}
            />
          </div>
        </section>

        <aside className="space-y-4">
          <motion.div className="pixel-box p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className="text-sm mb-3 text-success">UNIT TESTS</h3>
            <div className="space-y-2">
              {codeBlocks.map((block) => (
                <div key={block.id} className="border-2 border-border p-2 bg-background/60">
                  <p className="text-xs">{block.code}</p>
                  <p className={`text-xs mt-1 ${block.passed ? "text-success" : "text-muted-foreground"}`}>
                    {block.passed ? "PASS" : "PENDING"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="pixel-box p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h3 className={`text-sm mb-3 ${isImpostor ? "impostor-text" : "text-muted-foreground"}`}>
              SABOTAGE TASKS
            </h3>
            <div className="space-y-2">
              {sabotageTasks.map((task) => (
                <div key={task.id} className="border-2 border-border p-2 bg-background/60">
                  <p className="text-xs">{isImpostor ? task.description : "Classified objective"}</p>
                  <p className={`text-xs mt-1 ${task.completed ? "text-success" : "text-muted-foreground"}`}>
                    {task.completed ? "DONE" : "OPEN"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {me?.isHost && (
            <button type="button" className="pixel-btn-secondary w-full" onClick={endRound}>
              END ROUND
            </button>
          )}
        </aside>
      </div>
    </div>
  );
}
