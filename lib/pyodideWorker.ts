import { loadPyodide, type PyodideInterface } from "pyodide";

let pyodide: PyodideInterface | null = null;
let isInitializing = false;

async function initPyodide() {
  if (pyodide || isInitializing) return;
  isInitializing = true;
  try {
    // Load from CDN to avoid Next.js bundling issues with webassembly
    pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/",
    });
    self.postMessage({ type: "INIT_SUCCESS" });
  } catch (error) {
    console.error("Failed to initialize Pyodide:", error);
    self.postMessage({ type: "INIT_ERROR", error: String(error) });
  } finally {
    isInitializing = false;
  }
}

// Automatically init on worker startup
initPyodide();

self.onmessage = async (event) => {
  const { id, type, code, contextCode } = event.data;

  if (type === "INIT") {
    await initPyodide();
    return;
  }

  if (type === "RUN_CODE") {
    if (!pyodide) {
      self.postMessage({ id, type: "ERROR", error: "Pyodide not ready" });
      return;
    }

    try {
      // Clear global namespace (except builtins) to avoid state leaking between runs
      const clearGlobalsCode = `
for key in list(globals().keys()):
    if key not in ("__builtins__", "__name__", "__doc__", "__package__"):
        del globals()[key]
`;
      await pyodide.runPythonAsync(clearGlobalsCode);

      // We typically want to run the context (e.g. main game code) followed by test code
      const fullCode = `${contextCode || ""}\n\n${code}`;

      // Execute the python code
      await pyodide.runPythonAsync(fullCode);

      self.postMessage({ id, type: "SUCCESS" });
    } catch (error) {
      // Return the error message
      const message = error instanceof Error ? error.message : String(error);
      self.postMessage({
        id,
        type: "ERROR",
        error: message,
      });
    }
  }
};
