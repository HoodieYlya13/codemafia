"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { uuidv7 } from "./uuid";

export type PyodideStatus = "loading" | "ready" | "failed";

export interface RunCodeResponse {
  success: boolean;
  error?: string;
  /** The code ran too long (probably an infinite loop) and the worker was restarted. */
  timedOut?: boolean;
  /** Pyodide wasn't loaded, so nothing ran. */
  notReady?: boolean;
}

const TIMEOUT_MS = 5000;

/**
 * Owns the Pyodide Web Worker. Kept outside React so a restart (after an
 * infinite loop) is seen by every caller at once, never through a stale
 * closure.
 */
class PyodideRunner {
  private worker: Worker | null = null;
  private status: PyodideStatus = "loading";
  private listeners = new Set<() => void>();
  private pending = new Map<string, { resolve: (res: RunCodeResponse) => void; timer: ReturnType<typeof setTimeout> }>();

  getStatus = () => this.status;

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  private setStatus(status: PyodideStatus) {
    this.status = status;
    this.listeners.forEach((listener) => listener());
  }

  start = () => {
    this.stop();
    this.setStatus("loading");
    const worker = new Worker(new URL("./pyodideWorker.ts", import.meta.url));
    worker.onmessage = (event: MessageEvent) => {
      if (this.worker !== worker) return;
      const { id, type, error } = event.data;
      if (type === "INIT_SUCCESS") this.setStatus("ready");
      else if (type === "INIT_ERROR") {
        console.error("Pyodide Worker Init Error:", error);
        this.setStatus("failed");
      } else if (type === "SUCCESS" || type === "ERROR") {
        this.settle(id, { success: type === "SUCCESS", error });
      }
    };
    this.worker = worker;
  };

  stop = () => {
    this.worker?.terminate();
    this.worker = null;
    for (const id of [...this.pending.keys()]) {
      this.settle(id, { success: false, notReady: true, error: "Pyodide restarted" });
    }
  };

  private settle(id: string, response: RunCodeResponse) {
    const entry = this.pending.get(id);
    if (!entry) return;
    clearTimeout(entry.timer);
    this.pending.delete(id);
    entry.resolve(response);
  }

  run = (contextCode: string, testCode: string): Promise<RunCodeResponse> =>
    new Promise((resolve) => {
      if (!this.worker || this.status !== "ready") {
        resolve({ success: false, notReady: true, error: "Pyodide not ready" });
        return;
      }
      const id = uuidv7();
      const timer = setTimeout(() => {
        // Probably an infinite loop: the code fails, and the worker is
        // replaced since it can't be interrupted.
        const entry = this.pending.get(id);
        this.pending.delete(id);
        this.start();
        entry?.resolve({ success: false, timedOut: true, error: "Execution Timeout: Infinite loop detected" });
      }, TIMEOUT_MS);
      this.pending.set(id, { resolve, timer });
      this.worker.postMessage({ id, type: "RUN_CODE", contextCode, code: testCode });
    });
}

export function usePyodide() {
  const [runner] = useState(() => new PyodideRunner());
  const status = useSyncExternalStore(runner.subscribe, runner.getStatus, () => "loading" as const);

  useEffect(() => {
    runner.start();
    return runner.stop;
  }, [runner]);

  return { status, isReady: status === "ready", runTest: runner.run, retry: runner.start };
}
