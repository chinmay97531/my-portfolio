"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Milestone = {
  img: string;
  tag: string;
  title: string;
  subtitle: string;
};

const journey: Milestone[] = [
  {
    img: "/journey/thapar-campus.webp",
    tag: "Where it began",
    title: "Thapar Institute",
    subtitle: "Starting my engineering journey on campus",
  },
  {
    img: "/journey/elc-intern.webp",
    tag: "First internship",
    title: "ELC Summer Intern",
    subtitle: "My very first internship, at Thapar's ELC",
  },
  {
    img: "/journey/zscaler-intern.webp",
    tag: "Latest chapter",
    title: "Zscaler",
    subtitle: "Software Engineering Intern",
  },
];

const STEP_MS = 950;

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let done = false;
    let stepTimer: ReturnType<typeof setTimeout>;

    const finish = () => {
      if (done) return;
      done = true;
      window.setTimeout(() => setLoading(false), 450);
    };

    // Preload everything the first screen needs so nothing pops in.
    const heroImg = new window.Image();
    heroImg.src = "/images/mine.webp";
    journey.forEach((m) => {
      const im = new window.Image();
      im.src = m.img;
    });

    let i = 0;
    const advance = () => {
      i += 1;
      if (i < journey.length) {
        setStep(i);
        stepTimer = setTimeout(advance, STEP_MS);
      } else {
        // Journey finished — reveal once the hero image is ready.
        if (heroImg.complete) finish();
        else {
          heroImg.onload = finish;
          heroImg.onerror = finish;
        }
      }
    };
    stepTimer = setTimeout(advance, STEP_MS);

    // Hard cap so the user is never stuck behind the intro.
    const cap = window.setTimeout(finish, 5000);

    return () => {
      clearTimeout(stepTimer);
      clearTimeout(cap);
    };
  }, []);

  // Lock scrolling while the overlay is visible.
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const active = journey[step];

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950 px-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(45,212,191,0.12),transparent_55%)]" />

          <div className="relative flex w-full max-w-md flex-col items-center">
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <span className="relative h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-accent/25 to-sky-400/20 ring-2 ring-accent/50">
                <Image
                  src="/images/mine.webp"
                  alt="Chinmay Mittal"
                  fill
                  sizes="36px"
                  className="scale-110 object-cover object-top"
                  priority
                />
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold leading-tight text-white/90">
                  Chinmay Mittal
                </p>
                <p className="text-xs text-white/45">A quick look at the journey</p>
              </div>
            </div>

            {/* Milestone card */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-white/10">
              <AnimatePresence>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.img}
                    alt={active.title}
                    fill
                    sizes="(max-width: 480px) 90vw, 448px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-base-950/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      {active.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold text-white">
                      {active.title}
                    </h3>
                    <p className="text-sm text-white/65">{active.subtitle}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Story-style progress segments */}
            <div className="mt-5 flex w-full gap-2">
              {journey.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1 flex-1 overflow-hidden rounded-full bg-white/12"
                >
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
                    initial={false}
                    animate={{ width: idx < step ? "100%" : idx === step ? "100%" : "0%" }}
                    transition={{
                      duration: idx === step ? STEP_MS / 1000 : 0.25,
                      ease: "linear",
                    }}
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
