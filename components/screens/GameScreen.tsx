"use client";

import { useEffect, useRef, useState } from "react";
import Editor, { type Monaco, type OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { motion } from "framer-motion";
import { useGameStore } from "@/store/useGameStore";
import { usePyodide } from "@/lib/usePyodide";
import * as Y from "yjs";
import { MonacoBinding } from "y-monaco";
import YPartyKitProvider from "y-partykit/provider";
import { PLAYER_COLOR_MAP } from "@/lib/gameData";

const PARTYKIT_HOST = process.env.NEXT_PUBLIC_PARTYKIT_HOST || "localhost:1999";

export default function GameScreen() {
  const {
    lobbyId,
    code,
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
  const providerRef = useRef<YPartyKitProvider | null>(null);
  const docRef = useRef<Y.Doc | null>(null);
  const monacoRef = useRef<Monaco | null>(null);
  const decorationsCollection = useRef<editor.IEditorDecorationsCollection | null>(null);

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
      providerRef.current?.disconnect();
      docRef.current?.destroy();
    };
  }, []);

  // 3. Handle external code updates (next round)
  useEffect(() => {
    if (me?.isHost && docRef.current) {
      const ytext = docRef.current.getText("monaco-sync");
      if (code && code !== ytext.toString()) {
        docRef.current.transact(() => {
          ytext.delete(0, ytext.length);
          ytext.insert(0, code);
        });
      }
    }
  }, [code, me?.isHost]);

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
    const model = editor.getModel();
    if (!model) return;

    editorRef.current = editor;
    monacoRef.current = monaco;

    // Track local cursor movements for Zustand
    editor.onDidChangeCursorPosition((event) => {
      updateCursorPosition(event.position.lineNumber, event.position.column);
    });

    // Re-use provider if React Strict Mode double-mounts
    if (providerRef.current && docRef.current) {
      const ytext = docRef.current.getText("monaco-sync");
      new MonacoBinding(
        ytext,
        model,
        new Set([editor]),
        // OMITTED provider.awareness -> keeps Yjs away from our cursors
      );
      return;
    }

    const ydoc = new Y.Doc();
    docRef.current = ydoc;

    const provider = new YPartyKitProvider(
      PARTYKIT_HOST,
      lobbyId || "default-room",
      ydoc,
      { connect: true },
    );
    providerRef.current = provider;

    const ytext = ydoc.getText("monaco-sync");

    // Bind Monaco for text sync (No awareness passed!)
    new MonacoBinding(ytext, model, new Set([editor]));

    let seeded = false;
    const seed = () => {
      if (seeded) return;
      seeded = true;
      if (ytext.length > 0) return;
      const {
        code: levelCode,
        players: ps,
        currentPlayerId: pid,
      } = useGameStore.getState();
      const isHost = ps.find((p) => p.id === pid)?.isHost ?? false;
      if (isHost && levelCode) {
        ytext.insert(0, levelCode);
      }
    };

    provider.on("synced", (isSynced: boolean) => {
      if (isSynced) seed();
    });
    setTimeout(seed, 1000);

    let syncTimer: ReturnType<typeof setTimeout> | null = null;
    ytext.observe(() => {
      if (syncTimer) clearTimeout(syncTimer);
      syncTimer = setTimeout(() => {
        const { players: ps, currentPlayerId: pid } = useGameStore.getState();
        const isHost = ps.find((p) => p.id === pid)?.isHost ?? false;
        if (isHost) {
          updateCode(ytext.toString());
        }
      }, 800);
    });

    // Optional: keeping this for general PartyKit presence,
    // but Monaco won't use it anymore.
    provider.awareness.setLocalStateField("user", {
      name: me?.name || "Player",
      color: me?.color || "gray",
    });
  };

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

          <div className="border-4 border-border overflow-hidden relative">
            <Editor
              height="520px"
              defaultLanguage="python"
              theme="vs-dark"
              defaultValue={code}
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
