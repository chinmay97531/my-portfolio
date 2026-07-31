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

const STEP_MS = 1400;
const MIN_HOLD_MS = 1200;
const CROSSFADE_S = 0.55;

function kenBurns(pan: Milestone["pan"], reduced: boolean) {
  if (reduced) {
    return { initial: { scale: 1.04 }, animate: { scale: 1.04 } };
  }
  switch (pan) {
    case "in":
      return {
        initial: { scale: 1.05, x: 0, y: 0 },
        animate: { scale: 1.12, x: 0, y: -8 },
      };
    case "left":
      return {
        initial: { scale: 1.08, x: 16, y: 0 },
        animate: { scale: 1.08, x: -16, y: 0 },
      };
    case "right":
      return {
        initial: { scale: 1.08, x: -16, y: 0 },
        animate: { scale: 1.08, x: 16, y: 0 },
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
    const cap = window.setTimeout(finish, 6500);

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
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 sm:px-8"
        >
          {/* Match main site theme so the handoff feels continuous */}
          <div className="bg-wash absolute inset-0" />
          <div className="bg-noise absolute inset-0 opacity-[0.025] mix-blend-multiply" />

          <div className="relative flex w-full max-w-6xl flex-col items-center">
            <div className="mb-5 flex w-full items-center justify-center sm:mb-7">
              <span className="inline-flex items-center gap-3 rounded-full border border-base-200 bg-white px-4 py-2 shadow-sm">
                <span className="relative h-7 w-7 overflow-hidden rounded-full ring-1 ring-base-200">
                  <Image
                    src="/images/mine.webp"
                    alt="Chinmay Mittal"
                    fill
                    sizes="28px"
                    className="scale-110 object-cover object-top"
                    priority
                  />
                </span>
                <span className="text-sm font-medium text-base-700">
                  Chinmay Mittal
                </span>
              </span>
            </div>

            <div className="mb-6 text-center sm:mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Intro
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-base-900 sm:text-5xl lg:text-6xl">
                A quick look at my{" "}
                <span className="text-accent">journey</span>
              </h2>
            </div>

            <div className="relative h-[min(58vh,560px)] w-full overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lift sm:h-[min(64vh,680px)] sm:rounded-3xl lg:h-[min(68vh,740px)]">
              {!ready && (
                <div className="absolute inset-0 animate-pulse bg-base-100" />
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
                      className="absolute inset-[-5%]"
                    >
                      <Image
                        src={active.img}
                        alt={active.title}
                        fill
                        sizes="(max-width: 768px) 96vw, 1152px"
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    </motion.div>

                    {/* Soft bottom shade only — keeps captions readable without a dark theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-base-900/75 via-base-900/20 to-transparent" />
                  </motion.div>
                )}
              </AnimatePresence>

              {ready && (
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-left sm:p-10 lg:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent-soft sm:text-xs">
                        {active.tag}
                      </span>
                      <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        {active.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-lg">
                        {active.subtitle}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
            </div>

            <div className="mt-6 flex w-full max-w-md gap-2.5 sm:mt-8">
              {journey.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-base-200"
                >
                  <motion.div
                    className="h-full origin-left rounded-full bg-accent"
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
