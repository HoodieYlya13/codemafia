"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useToastStore, Toast as ToastType } from "@/store/useToastStore";
import { CheckCircle, AlertCircle, Info, XCircle, X } from "lucide-react";
import { useEffect } from "react";

const typeStyles = {
  success: {
    icon: <CheckCircle className="w-5 h-5 text-success" />,
    borderColor: "border-success",
    bgColor: "bg-success/10",
  },
  error: {
    icon: <XCircle className="w-5 h-5 text-destructive" />,
    borderColor: "border-destructive",
    bgColor: "bg-destructive/10",
  },
  warning: {
    icon: <AlertCircle className="w-5 h-5 text-warning" />,
    borderColor: "border-warning",
    bgColor: "bg-warning/10",
  },
  info: {
    icon: <Info className="w-5 h-5 text-primary" />,
    borderColor: "border-primary",
    bgColor: "bg-primary/10",
  },
};

function ToastItem({ toast }: { toast: ToastType }) {
  const removeToast = useToastStore((state) => state.removeToast);
  const styles = typeStyles[toast.type];

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, toast.duration || 3000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, removeToast]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`pixel-box p-4 flex items-center gap-3 min-w-[300px] max-w-md ${styles.bgColor}`}
    >
      <div className="shrink-0">{styles.icon}</div>
      <div className="flex-1 font-pixel text-[10px] leading-relaxed">
        {toast.message}
      </div>
      <button
        onClick={() => removeToast(toast.id)}
        className="shrink-0 p-1 hover:bg-black/10 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

export default function ToastProvider() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col gap-4 items-end pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem toast={toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
