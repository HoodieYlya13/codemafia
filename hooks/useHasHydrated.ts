import { useSyncExternalStore } from "react";
import { useGameStore } from "@/store/useGameStore";

/**
 * Custom hook to track whether the Zustand store has hydrated from persistent storage.
 * Uses useSyncExternalStore to safely handle SSR hydration without triggering lint errors
 * or cascading renders.
 */
export function useHasHydrated() {
  const isHydrated = useSyncExternalStore(
    (onStoreChange) => {
      // Subscribe to hydration finish event
      const unsub = useGameStore.persist.onFinishHydration(() => {
        onStoreChange();
      });
      return unsub;
    },
    // Client snapshot
    () => useGameStore.persist.hasHydrated(),
    // Server snapshot (always false to match initial pre-render)
    () => false
  );

  return isHydrated;
}
