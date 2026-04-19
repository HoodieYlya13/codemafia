"use client";

import { useEffect, useRef, useState } from "react";
import Editor, { type Monaco, type OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";
import { usePyodide } from "@/lib/usePyodide";
import * as Y from "yjs";
import { MonacoBinding } from "y-monaco";
import { PLAYER_COLOR_MAP } from "@/lib/gameData";
import { socketManager } from "@/party/client";

export default function GameScreen() {
  const {
    lobbyId,
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
    updateCode,
    updateCursorPosition,
  } = useGameStore();

  const { isReady, runTest } = usePyodide();
  const [isRunning, setIsRunning] = useState(false);

  // Refs for Yjs, Monaco, and custom cursors
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const docRef = useRef<Y.Doc | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const decorationsCollection =
    useRef<editor.IEditorDecorationsCollection | null>(null);

  const [editorInstance, setEditorInstance] =
    useState<editor.IStandaloneCodeEditor | null>(null);

  const me = players.find((player) => player.id === currentPlayerId);
  const isImpostor = Boolean(me?.isImpostor);

  // 1. Handle Game Clock (Only for Host)
  useEffect(() => {
    if (!me?.isHost) return;
    const interval = window.setInterval(() => {
      tick();
    }, 1000);
    return () => window.clearInterval(interval);
  }, [me?.isHost, tick]);

  // 2. Cleanup Yjs on Unmount
  useEffect(() => {
    return () => {
      if (docRef.current) {
        docRef.current.destroy();
        docRef.current = null; // <-- The Magic Fix
      }
    };
  }, []);

  // 4. Render multiplayer cursors via Zustand
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
          range: new monacoRef.current.Range(
            lineNumber,
            column,
            lineNumber,
            column,
          ),
          options: {
            className: `monaco-cursor monaco-cursor-${p.color}`,
            hoverMessage: { value: p.name },
          },
        };
      });

    decorationsCollection.current.set(newDecorations);
  }, [players, currentPlayerId]);

  // 5. Initialize Yjs and Bind to Monaco
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    if (!lobbyId) return;

    editorRef.current = editor;
    setEditorInstance(editor);
    monacoRef.current = monaco;

    // Track local cursor movements
    editor.onDidChangeCursorPosition((event) => {
      updateCursorPosition(event.position.lineNumber, event.position.column);
    });
  };

  // Initialize Yjs and Bind to Monaco
  useEffect(() => {
    if (!editorInstance) return;

    let isMounted = true;

    const ydoc = new Y.Doc();
    docRef.current = ydoc;
    const ytext = ydoc.getText("monaco-sync");

    const binding = new MonacoBinding(
      ytext,
      editorInstance.getModel()!,
      new Set([editorInstance]),
    );

    // 1. Send our local keystrokes to the server via your stable JSON socket
    const handleLocalUpdate = (update: Uint8Array, origin: unknown) => {
      if (origin !== "remote" && isMounted) {
        socketManager.send({
          type: "yjs-update",
          update: Array.from(update), // Convert binary to a safe JSON array
        });
      }
    };
    ydoc.on("update", handleLocalUpdate);

    // 2. Listen for remote keystrokes and apply them to our editor
    const handleRemoteUpdate = (e: Event) => {
      if (!isMounted) return;
      const updateArray = (e as CustomEvent).detail;
      Y.applyUpdate(ydoc, new Uint8Array(updateArray), "remote");
    };
    window.addEventListener("yjs-remote-update", handleRemoteUpdate);

    // 3. Host instantly seeds the default code (No network waiting needed!)
    const state = useGameStore.getState();
    const isHost = state.players.find(
      (p) => p.id === state.currentPlayerId,
    )?.isHost;

    if (isHost && ytext.length === 0 && state.code) {
      console.log("🌱 [Yjs] Host seeding initial code directly...");
      ydoc.transact(() => {
        ytext.insert(0, state.code);
      });
    }

    // 4. Sync text back to Zustand for tests/tasks
    let syncTimer: ReturnType<typeof setTimeout> | null = null;
    const observer = () => {
      if (syncTimer) clearTimeout(syncTimer);
      syncTimer = setTimeout(() => {
        const currentState = useGameStore.getState();
        const currentlyHost = currentState.players.find(
          (p) => p.id === currentState.currentPlayerId,
        )?.isHost;
        if (currentlyHost) {
          updateCode(ytext.toString());
        }
      }, 800);
    };
    ytext.observe(observer);

    return () => {
      console.log("🧹 [Yjs] Unmounting editor...");
      isMounted = false;
      window.removeEventListener("yjs-remote-update", handleRemoteUpdate);
      ydoc.off("update", handleLocalUpdate);
      ytext.unobserve(observer);
      binding.destroy();
      ydoc.destroy();
      docRef.current = null;
    };
  }, [editorInstance, updateCode]);

  const handleRunTests = async () => {
    if (!isReady || isRunning || !docRef.current) return;
    setIsRunning(true);

    const currentCode = docRef.current.getText("monaco-sync").toString();

    try {
      for (const block of codeBlocks) {
        const result = await runTest(currentCode, block.testCase);
        if (block.passed !== result.success) {
          updateBlockStatus(block.id, result.success);
        }
      }

      if (isImpostor) {
        for (const task of sabotageTasks) {
          const result = await runTest(currentCode, task.verificationTest);
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

  // --- CRITICAL FIX: DO NOT RENDER UNTIL LOBBY IS KNOWN ---
  // This prevents the client from mounting Monaco and permanently
  // attaching Yjs to a "default-room" before Zustand has finished hydrating.
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
        `,
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
              >
                {!isReady
                  ? "VM LOADING..."
                  : isRunning
                    ? "RUNNING..."
                    : "RUN TESTS"}
              </button>
            </div>
            <button
              type="button"
              className="pixel-btn-danger"
              onClick={callEmergencyMeeting}
            >
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
            <p className="mt-2 text-xs text-muted-foreground">
              TIME: {roundTimeRemaining}s
            </p>
          </div>

          {/* CRITICAL FIX 2: key={lobbyId} guarantees Yjs drops and remounts if the lobby changes */}
          <div
            key={lobbyId}
            className="border-4 border-border overflow-hidden relative"
          >
            <Editor
              height="520px"
              defaultLanguage="python"
              theme="vs-dark"
              defaultValue=""
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                wordWrap: "on",
                automaticLayout: true,
              }}
              onMount={handleEditorDidMount}
            />
          </div>
        </section>

        <aside className="space-y-4">
          <motion.div className="pixel-box p-4">
            <h3 className="text-sm mb-3 text-success">UNIT TESTS</h3>
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
                    {block.passed ? "PASS" : "PENDING"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="pixel-box p-4">
            <h3
              className={`text-sm mb-3 ${isImpostor ? "impostor-text" : "text-muted-foreground"}`}
            >
              SABOTAGE TASKS
            </h3>
            <div className="space-y-2">
              {sabotageTasks.map((task) => (
                <div
                  key={task.id}
                  className="border-2 border-border p-2 bg-background/60"
                >
                  <p className="text-xs">
                    {isImpostor ? task.description : "Classified objective"}
                  </p>
                  <p
                    className={`text-xs mt-1 ${task.completed ? "text-success" : "text-muted-foreground"}`}
                  >
                    {task.completed ? "DONE" : "OPEN"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {me?.isHost && (
            <button
              type="button"
              className="pixel-btn-secondary w-full"
              onClick={endRound}
            >
              END ROUND
            </button>
          )}
        </aside>
      </div>
    </div>
  );
}
