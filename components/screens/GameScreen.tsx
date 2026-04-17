"use client";

import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";
import { usePyodide } from "@/lib/usePyodide";
import { PLAYER_COLOR_MAP } from "@/lib/gameData";

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
    updateBlockStatus,
    updateTaskStatus,
  } = useGameStore();

  const { isReady, runTest } = usePyodide();
  const [isRunning, setIsRunning] = useState(false);

  // Editor refs for multiplayer cursors
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editorRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const monacoRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decorationsCollection = useRef<any>(null);

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

  // Effect to handle multiplayer cursors
  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;
    const editor = editorRef.current;
    
    if (!decorationsCollection.current) {
      decorationsCollection.current = editor.createDecorationsCollection([]);
    }

    const newDecorations = players
      .filter((p) => p.id !== currentPlayerId && p.cursorPosition && p.isAlive)
      .map((p) => {
        const { lineNumber, column } = p.cursorPosition!;
        return {
          range: new monacoRef.current.Range(lineNumber, column, lineNumber, column),
          options: {
            className: `monaco-cursor monaco-cursor-${p.color}`,
            hoverMessage: { value: p.name }
          }
        };
      });

    decorationsCollection.current.set(newDecorations);
  }, [players, currentPlayerId]);

  const handleRunTests = async () => {
    if (!isReady || isRunning) return;
    setIsRunning(true);

    try {
      // Evaluate all unit tests sequentially
      for (const block of codeBlocks) {
        const result = await runTest(code, block.testCase);
        // Only broadcast if status changed to avoid spamming
        if (block.passed !== result.success) {
          updateBlockStatus(block.id, result.success);
        }
      }

      // Evaluate sabotage tasks if impostor
      if (isImpostor) {
        for (const task of sabotageTasks) {
          const result = await runTest(code, task.verificationTest);
          if (task.completed !== result.success) {
            updateTaskStatus(task.id, result.success);
          }
        }
      }
    } finally {
      setIsRunning(false);
    }
  };

  const timeRatio =
    roundDuration <= 0
      ? 0
      : Math.max(0, Math.min(100, (roundTimeRemaining / roundDuration) * 100));

  return (
    <div className="min-h-screen p-4">
      <style>{`
        ${players
          .map(
            (p) => `
          .monaco-cursor-${p.color} {
            border-left: 2px solid ${PLAYER_COLOR_MAP[p.color] || "#FFF"} !important;
            position: relative;
            z-index: 10;
          }
          .monaco-cursor-${p.color}::after {
            content: '${p.name}';
            position: absolute;
            top: -18px;
            left: -2px;
            background: ${PLAYER_COLOR_MAP[p.color] || "#FFF"};
            color: white;
            font-family: "Press Start 2P", cursive, sans-serif;
            font-size: 8px;
            padding: 2px 4px;
            white-space: nowrap;
            pointer-events: none;
            z-index: 50;
            opacity: 0.8;
          }
        `
          )
          .join("\n")}
      `}</style>
      <div className="max-w-6xl mx-auto grid gap-4 lg:grid-cols-[1fr_320px]">
        <section className="pixel-box p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-4 items-center">
              <h2 className="text-sm md:text-base text-primary">LIVE CODE</h2>
              <button
                type="button"
                className="pixel-btn-secondary py-1.5 px-3 text-xs"
                onClick={handleRunTests}
                disabled={!isReady || isRunning}
                style={{ opacity: !isReady || isRunning ? 0.5 : 1 }}
              >
                {!isReady ? "LOADING VM..." : isRunning ? "RUNNING..." : "RUN TESTS"}
              </button>
            </div>
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

          <div className="border-4 border-border overflow-hidden relative">
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
              onMount={(editor, monaco) => {
                editorRef.current = editor;
                monacoRef.current = monaco;
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
