"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Editor, { type Monaco, type OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { motion } from "framer-motion";
import { MonacoBinding } from "y-monaco";
import { useGameStore } from "@/store/useGameStore";
import { usePyodide } from "@/lib/usePyodide";
import { PLAYER_COLOR_MAP } from "@/lib/gameData";
import { socketManager } from "@/party/client";
import ChatPanel from "@/components/ChatPanel";

const TEXT_NAME = "monaco-sync";

/** Quotes a player name for CSS `content`, so no name can break the stylesheet. */
function cssString(value: string) {
  return `"${value.replace(/[\\"'<>\n\r\f]/g, (char) => `\\${char.charCodeAt(0).toString(16)} `)}"`;
}

/** Seconds left in the round, counted against the server's clock. */
function useSecondsLeft(roundEndsAt: number | null, clockOffset: number) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (roundEndsAt === null) return;
    const interval = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(interval);
  }, [roundEndsAt]);
  if (roundEndsAt === null) return 0;
  return Math.max(0, Math.ceil((roundEndsAt - (now + clockOffset)) / 1000));
}

export default function GameScreen() {
  const {
    lobbyId,
    codeBlocks,
    sabotageTasks,
    players,
    currentPlayerId,
    roundEndsAt,
    roundDuration,
    clockOffset,
    emergencyMeetingCalled,
    callEmergencyMeeting,
    endRound,
    reportTests,
  } = useGameStore();

  const { status, isReady, runTest, retry } = usePyodide();
  const [isRunning, setIsRunning] = useState(false);

  // Refs for Monaco and custom cursors
  const monacoRef = useRef<Monaco | null>(null);
  const decorationsCollection =
    useRef<editor.IEditorDecorationsCollection | null>(null);
  const [editorInstance, setEditorInstance] =
    useState<editor.IStandaloneCodeEditor | null>(null);

  // The shared document and remote cursors live in the socket manager.
  const doc = useSyncExternalStore(socketManager.subscribeDoc, socketManager.getDoc, socketManager.getDoc);
  const cursors = useSyncExternalStore(
    socketManager.subscribeCursors,
    socketManager.getCursors,
    socketManager.getCursors,
  );

  const me = players.find((player) => player.id === currentPlayerId);
  const isImpostor = Boolean(me?.isImpostor);
  const secondsLeft = useSecondsLeft(roundEndsAt, clockOffset);

  // Render the other players' cursors
  useEffect(() => {
    const monaco = monacoRef.current;
    if (!editorInstance || !monaco) return;

    if (!decorationsCollection.current) {
      decorationsCollection.current = editorInstance.createDecorationsCollection([]);
    }

    const newDecorations = players
      .filter((p) => p.id !== currentPlayerId && p.isAlive && p.isOnline && cursors.has(p.id))
      .map((p) => {
        const { lineNumber, column } = cursors.get(p.id)!;
        return {
          range: new monaco.Range(lineNumber, column, lineNumber, column),
          options: {
            className: `monaco-cursor monaco-cursor-${p.color}`,
            hoverMessage: { value: p.name },
          },
        };
      });

    decorationsCollection.current.set(newDecorations);
  }, [editorInstance, players, currentPlayerId, cursors]);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    monacoRef.current = monaco;
    setEditorInstance(editor);

    // Disable shortcuts that cause huge collaborative conflicts:
    // Undo (Ctrl+Z / Cmd+Z)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyZ, () => {});
    // Redo (Ctrl+Shift+Z / Cmd+Shift+Z)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyZ, () => {});
    // Redo (Ctrl+Y — Windows style)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyY, () => {});
    // Select All (Ctrl+A / Cmd+A)
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyA, () => {});
    // Find & Replace (Ctrl+H / Cmd+H) — mass-replaces across the entire shared doc
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyH, () => {});
    // Select all occurrences (Ctrl+Shift+L / Cmd+Shift+L) — select all then type = mass delete
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyL, () => {});
    // Cut (Ctrl+X / Cmd+X) — silent mass-delete if large selection exists
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyX, () => {});

    // Share local cursor movements
    editor.onDidChangeCursorPosition((event) => {
      socketManager.sendCursor(event.position.lineNumber, event.position.column);
    });
  };

  // Bind the editor to the shared document; rebinds when the server replaces it.
  useEffect(() => {
    const model = editorInstance?.getModel();
    if (!editorInstance || !model) return;
    const binding = new MonacoBinding(doc.getText(TEXT_NAME), model, new Set([editorInstance]));
    return () => binding.destroy();
  }, [editorInstance, doc]);

  const handleRunTests = async () => {
    if (!isReady || isRunning) return;
    setIsRunning(true);

    const currentCode = doc.getText(TEXT_NAME).toString();
    const blocks: Record<string, boolean> = {};
    const tasks: Record<string, boolean> = {};

    try {
      // Only report what actually ran: after a timeout the worker restarts,
      // and the remaining tests would fail for the wrong reason.
      let stopped = false;
      for (const block of codeBlocks) {
        const result = await runTest(currentCode, block.testCase);
        if (result.notReady) {
          stopped = true;
          break;
        }
        blocks[block.id] = result.success;
        if (result.timedOut) {
          stopped = true;
          break;
        }
      }

      if (isImpostor && !stopped) {
        for (const task of sabotageTasks) {
          if (!task.verificationTest) continue;
          const result = await runTest(currentCode, task.verificationTest);
          if (result.notReady) break;
          tasks[task.id] = result.success;
          if (result.timedOut) break;
        }
      }

      if (Object.keys(blocks).length > 0 || Object.keys(tasks).length > 0) {
        reportTests(currentCode, blocks, tasks);
      }
    } finally {
      setIsRunning(false);
    }
  };

  const timeRatio =
    roundDuration <= 0
      ? 0
      : Math.max(0, Math.min(100, (secondsLeft / roundDuration) * 100));

  if (!lobbyId) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <h2 className="text-xl text-primary font-bold pixel-text">
          CONNECTING TO TERMINAL...
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4">
      <style>{`
        ${players
          .filter((p) => p.color in PLAYER_COLOR_MAP)
          .map(
            (p) => `
          .monaco-cursor-${p.color} {
            border-left: 2px solid ${PLAYER_COLOR_MAP[p.color]} !important;
            position: relative;
            z-index: 10;
          }
          .monaco-cursor-${p.color}::after {
            content: ${cssString(p.name)};
            position: absolute;
            top: -18px;
            left: -2px;
            background: ${PLAYER_COLOR_MAP[p.color]};
            color: white;
            font-family: "Press Start 2P", cursive, sans-serif;
            font-size: 8px;
            padding: 2px 4px;
            white-space: nowrap;
            pointer-events: none;
            z-index: 50;
            opacity: 0.8;
          }
        `,
          )
          .join("\n")}
      `}</style>

      <div className="max-w-[1800px] mx-auto grid gap-4 lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr_350px]">
        {/* LEFT COLUMN: TASKS */}
        <aside className="space-y-4 flex flex-col order-2 lg:order-1">
          <motion.div className="pixel-box p-4 shrink-0">
            <h3 className="text-sm mb-3 text-success">CI/CD PIPELINE</h3>
            <div className="space-y-2">
              {codeBlocks.map((block) => (
                <div
                  key={block.id}
                  className="border-2 border-border p-2 bg-background/60"
                >
                  <p className="text-xs">{block.code}</p>
                  <p
                    className={`text-xs mt-1 ${block.passed ? "text-success" : "text-muted-foreground"}`}
                  >
                    {block.passed ? "STABLE" : "DEGRADED"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="pixel-box p-4 shrink-0">
            <h3
              className={`text-sm mb-3 ${isImpostor ? "impostor-text" : "text-muted-foreground"}`}
            >
              VIBE MISSIONS
            </h3>
            <div className="space-y-2">
              {sabotageTasks.map((task) => (
                <div
                  key={task.id}
                  className="border-2 border-border p-2 bg-background/60"
                >
                  <p className="text-xs">
                    {task.description ?? "Obfuscated requirements"}
                  </p>
                  <p
                    className={`text-xs mt-1 ${task.completed ? "text-success" : "text-muted-foreground"}`}
                  >
                    {task.completed ? "MERGED" : "DRAFT"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {me?.isHost && (
            <button
              type="button"
              className="pixel-btn-secondary w-full shrink-0"
              onClick={endRound}
            >
              SHIP CHANGES
            </button>
          )}
        </aside>

        {/* MIDDLE COLUMN: EDITOR */}
        <section className="pixel-box p-4 order-1 lg:order-2">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-4 items-center flex-wrap gap-y-2">
              <h2 className="text-sm md:text-base text-primary">PROD MAIN</h2>
              {status === "failed" && me?.isAlive ? (
                <button
                  type="button"
                  className="pixel-btn-ghost py-1.5 px-3 text-xs text-warning border-warning"
                  onClick={retry}
                >
                  npm install FAILED (RETRY)
                </button>
              ) : (
                <button
                  type="button"
                  className="pixel-btn-secondary py-1.5 px-3 text-xs"
                  onClick={handleRunTests}
                  disabled={!isReady || isRunning || !me?.isAlive}
                >
                  {!me?.isAlive
                    ? "SPECTATING"
                    : !isReady
                      ? "INSTALLING DEPS..."
                      : isRunning
                        ? "PUSHING..."
                        : isImpostor
                          ? "git push origin main --force"
                          : "DEPLOY TO PROD"}
                </button>
              )}
            </div>
              <button
                type="button"
                className="pixel-btn-danger disabled:opacity-50"
                onClick={callEmergencyMeeting}
                disabled={!me?.isAlive || emergencyMeetingCalled}
              >
                INCIDENT
              </button>
          </div>

          <div className="mb-4">
            <div className="h-3 border-2 border-border bg-muted overflow-hidden">
              <div
                className="h-full bg-warning transition-all duration-200"
                style={{ width: `${timeRatio}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              TIME: {secondsLeft}s
            </p>
          </div>

          <div
            key={lobbyId}
            className="border-4 border-border overflow-hidden relative"
          >
            <Editor
              height="600px"
              defaultLanguage="python"
              theme="vs-dark"
              defaultValue=""
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                wordWrap: "on",
                automaticLayout: true,
                readOnly: !me?.isAlive,
              }}
              onMount={handleEditorDidMount}
            />
            {!me?.isAlive && (
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] pointer-events-none flex flex-col items-center justify-center border-4 border-destructive/50 z-50">
                <div className="pixel-box bg-background/90 p-4 animate-pulse">
                  <p className="text-destructive font-pixel text-lg">SPECTATOR MODE</p>
                  <p className="text-xs text-muted-foreground mt-2">You were fired. Watch and learn.</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* RIGHT COLUMN: CHAT (below the game on smaller screens) */}
        <aside className="flex flex-col order-3 h-[400px] lg:col-span-2 xl:col-span-1 xl:h-full xl:max-h-[700px]">
          <ChatPanel />
        </aside>
      </div>
    </div>
  );
}
