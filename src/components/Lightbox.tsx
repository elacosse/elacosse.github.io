import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

/** Full-screen image preview. Closes on Escape, backdrop click, or the close button. */
export default function Lightbox({ src, onClose }: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!src) return;

    lastFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      lastFocused.current?.focus();
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-1000 p-4 md:p-0"
          onClick={onClose}
        >
          <button
            ref={closeRef}
            aria-label="Close image preview"
            className="absolute top-2.5 right-2.5 md:top-5 md:right-5 text-white text-[30px] cursor-pointer bg-transparent border-none p-1.25 px-2.5"
            onClick={onClose}
          >
            &times;
          </button>
          <img
            src={src}
            alt="Preview"
            className="max-w-[95%] md:max-w-[80%] max-h-[70%] md:max-h-[80%] object-contain rounded shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
