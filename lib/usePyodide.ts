"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface RunCodeResponse {
  success: boolean;
  error?: string;
}

export function usePyodide() {
  const [isReady, setIsReady] = useState(false);
  const workerRef = useRef<Worker | null>(null);
  const callbackMap = useRef<Map<string, (res: RunCodeResponse) => void>>(new Map());

  const handleWorkerMessage = useCallback((event: MessageEvent) => {
    const { id, type, error } = event.data;

    if (type === "INIT_SUCCESS") {
      setIsReady(true);
    } else if (type === "INIT_ERROR") {
      console.error("Pyodide Worker Init Error:", error);
    } else if (type === "SUCCESS" || type === "ERROR") {
      if (id && callbackMap.current.has(id)) {
        const callback = callbackMap.current.get(id)!;
        callback({ success: type === "SUCCESS", error });
        callbackMap.current.delete(id);
      }
    }
  }, []);

  const initWorker = useCallback(() => {
    if (workerRef.current) {
      workerRef.current.terminate();
    }
    const worker = new Worker(new URL("./pyodideWorker.ts", import.meta.url));
    worker.onmessage = handleWorkerMessage;
    workerRef.current = worker;
  }, [handleWorkerMessage]);

  useEffect(() => {
    initWorker();
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
    };
  }, [initWorker]);

  const runTest = useCallback(
    (contextCode: string, testCode: string): Promise<RunCodeResponse> => {
      return new Promise((resolve) => {
        if (!workerRef.current || !isReady) {
          resolve({ success: false, error: "Pyodide not ready" });
          return;
        }

        const id = crypto.randomUUID();
        callbackMap.current.set(id, resolve);

        workerRef.current.postMessage({
          id,
          type: "RUN_CODE",
          contextCode,
          code: testCode,
        });

        // Add a timeout to prevent infinite loops from hanging forever
        setTimeout(() => {
          if (callbackMap.current.has(id)) {
            // Worker is likely stuck in an infinite loop
            // We terminate it, recreate, and mark as not ready until it inits again
            setIsReady(false);
            initWorker();
            
            const cb = callbackMap.current.get(id)!;
            callbackMap.current.delete(id);
            cb({ success: false, error: "Execution Timeout: Infinite loop detected" });
          }
        }, 5000); // 5 seconds timeout
      });
    },
    [isReady, initWorker]
  );

  return { isReady, runTest };
}
