"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

type Milestone = {
  img: string;
  tag: string;
  title: string;
  subtitle: string;
  pan: "in" | "left" | "right";
};

const journey: Milestone[] = [
  {
    img: "/journey/thapar-campus.webp",
    tag: "Where it began",
    title: "Thapar Institute",
    subtitle: "Starting my engineering journey on campus",
    pan: "in",
  },
  {
    img: "/journey/elc-intern.webp",
    tag: "First internship",
    title: "ELC Summer Intern",
    subtitle: "Leading a Smart AI IoT project at Thapar",
    pan: "left",
  },
  {
    img: "/journey/zscaler-intern.webp",
    tag: "Latest chapter",
    title: "Zscaler",
    subtitle: "Software Engineering Intern",
    pan: "right",
  },
];

const STEP_MS = 1300;
const MIN_HOLD_MS = 1100;
const CROSSFADE_S = 0.55;

function kenBurns(pan: Milestone["pan"], reduced: boolean) {
  if (reduced) {
    return { initial: { scale: 1.04 }, animate: { scale: 1.04 } };
  }
  switch (pan) {
    case "in":
      return {
        initial: { scale: 1.06, x: 0, y: 0 },
        animate: { scale: 1.14, x: 0, y: -6 },
      };
    case "left":
      return {
        initial: { scale: 1.1, x: 14, y: 0 },
        animate: { scale: 1.1, x: -14, y: 0 },
      };
    case "right":
      return {
        initial: { scale: 1.1, x: -14, y: 0 },
        animate: { scale: 1.1, x: 14, y: 0 },
      };
  }
}

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

export default function Preloader() {
  const reduced = useReducedMotion() ?? false;
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const [step, setStep] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    const urls = ["/images/mine.webp", ...journey.map((m) => m.img)];

    Promise.all(urls.map(preloadImage)).then(() => {
      if (!cancelled) setReady(true);
    });

    const bootCap = window.setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 2500);

    return () => {
      cancelled = true;
      clearTimeout(bootCap);
    };
  }, []);

  useEffect(() => {
    if (!ready || doneRef.current) return;

    let i = 0;
    let stepTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      window.setTimeout(() => setLoading(false), 400);
    };

    const advance = () => {
      i += 1;
      if (i < journey.length) {
        setStep(i);
        stepTimer = setTimeout(advance, STEP_MS);
      } else {
        finish();
      }
    };

    stepTimer = setTimeout(advance, Math.max(STEP_MS, MIN_HOLD_MS));
    const cap = window.setTimeout(finish, 6000);

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(cap);
    };
  }, [ready]);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const active = journey[step];
  const kb = kenBurns(active.pan, reduced);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950 px-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(45,212,191,0.14),transparent_55%)]" />

          <div className="relative flex w-full max-w-3xl flex-col items-center">
            <div className="mb-6 flex w-full items-center justify-center gap-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
                <span className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-accent/25 to-sky-400/20 ring-1 ring-accent/50">
                  <Image
                    src="/images/mine.webp"
                    alt="Chinmay Mittal"
                    fill
                    sizes="24px"
                    className="scale-110 object-cover object-top"
                    priority
                  />
                </span>
                <span className="text-sm font-medium text-white/70">
                  Chinmay Mittal
                </span>
              </span>
            </div>

            <div className="mb-5 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                A quick look at my{" "}
                <span className="text-gradient">journey</span>
              </h2>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10">
              {!ready && (
                <div className="absolute inset-0 animate-pulse bg-base-800" />
              )}

              <AnimatePresence initial={false} mode="sync">
                {ready && (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: CROSSFADE_S,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0"
                  >
                    <motion.div
                      initial={kb.initial}
                      animate={kb.animate}
                      transition={{
                        duration: (STEP_MS + 400) / 1000,
                        ease: "linear",
                      }}
                      className="absolute inset-[-6%]"
                    >
                      <Image
                        src={active.img}
                        alt={active.title}
                        fill
                        sizes="(max-width: 768px) 92vw, 720px"
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </motion.div>

                    {/* Cinematic grade overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/45 to-black/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />
                    <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay" />
                  </motion.div>
                )}
              </AnimatePresence>

              {ready && (
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-left sm:p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent sm:text-xs">
                        {active.tag}
                      </span>
                      <h3 className="mt-1.5 font-display text-2xl font-bold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] sm:text-4xl">
                        {active.title}
                      </h3>
                      <p className="mt-1.5 max-w-lg text-sm text-white/75 sm:text-base">
                        {active.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>

            <div className="mt-5 flex w-full gap-2">
              {journey.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/12"
                >
                  <motion.div
                    className="h-full origin-left rounded-full bg-gradient-to-r from-accent-soft to-accent"
                    initial={false}
                    animate={{
                      scaleX: !ready
                        ? 0
                        : idx < step
                          ? 1
                          : idx === step
                            ? 1
                            : 0,
                    }}
                    transition={{
                      duration: ready && idx === step ? STEP_MS / 1000 : 0.25,
                      ease: "linear",
                    }}
                    style={{ width: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
