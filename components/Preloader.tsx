"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(8);

  // Fake-but-smooth progress that eases toward 90% until the real load fires.
  useEffect(() => {
    if (!loading) return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 90 ? p : p + Math.max(1, (90 - p) * 0.06)));
    }, 120);
    return () => clearInterval(id);
  }, [loading]);

  useEffect(() => {
    let done = false;
    const start = performance.now();
    const MIN_VISIBLE = 550; // avoid a jarring flash on fast loads
    const MAX_WAIT = 3500; // never trap the user behind the loader

    const finish = () => {
      if (done) return;
      done = true;
      setProgress(100);
      // Let the bar reach 100% before fading out.
      window.setTimeout(() => setLoading(false), 400);
    };

    const finishRespectingMin = () => {
      const wait = Math.max(0, MIN_VISIBLE - (performance.now() - start));
      window.setTimeout(finish, wait);
    };

    // Reveal as soon as the DOM is ready and the hero image has loaded —
    // we intentionally do NOT wait for below-the-fold images to download.
    const heroImg = new window.Image();
    heroImg.src = "/images/mine.webp";

    const onDomReady = () => {
      if (heroImg.complete) {
        finishRespectingMin();
      } else {
        heroImg.onload = finishRespectingMin;
        heroImg.onerror = finishRespectingMin;
      }
    };

    if (document.readyState === "interactive" || document.readyState === "complete") {
      onDomReady();
    } else {
      document.addEventListener("DOMContentLoaded", onDomReady, { once: true });
    }

    const cap = window.setTimeout(finish, MAX_WAIT);

    return () => {
      window.clearTimeout(cap);
      document.removeEventListener("DOMContentLoaded", onDomReady);
    };
  }, []);

  // Prevent scrolling behind the overlay while it's visible.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950"
          aria-hidden="true"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(45,212,191,0.12),transparent_55%)]" />

          <div className="relative flex flex-col items-center">
            <div className="relative grid h-24 w-24 place-items-center">
              {/* Rotating accent ring */}
              <motion.span
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-accent border-r-accent/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              />
              {/* Pulsing glow */}
              <motion.span
                className="absolute inset-2 rounded-2xl bg-accent/20 blur-xl"
                animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.9, 1.05, 0.9] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Monogram */}
              <motion.span
                className="relative grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br from-accent-soft to-accent-deep font-display text-2xl font-bold text-base-950"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                CM
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-7 font-display text-lg font-semibold tracking-tight text-white/90"
            >
              Chinmay Mittal
            </motion.p>

            {/* Progress bar */}
            <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent-soft via-accent to-sky-400"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-white/40">
              Loading
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
