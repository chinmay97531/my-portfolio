"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InteractiveScene = dynamic(
  () => import("@/components/background/InteractiveScene"),
  { ssr: false },
);

function StaticFallback() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_0%,#0c1a28_0%,#070d16_45%,#05070a_100%)]" />
  );
}

export default function Background() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    setReady(true);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950"
    >
      {/* Base depth gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_0%,#0c1a28_0%,#070d16_45%,#05070a_100%)]" />

      {ready && !reducedMotion ? <InteractiveScene /> : <StaticFallback />}

      {/* Soft accent glows */}
      <div className="absolute -left-40 -top-48 h-[42rem] w-[42rem] rounded-full bg-accent/10 blur-[130px]" />
      <div className="absolute -right-48 top-1/4 h-[40rem] w-[40rem] rounded-full bg-sky-500/10 blur-[130px]" />
      <div className="absolute -bottom-52 left-1/3 h-[38rem] w-[38rem] rounded-full bg-teal-400/[0.07] blur-[140px]" />

      {/* Masked grid */}
      <div className="bg-grid absolute inset-0 opacity-60" />

      {/* Fine film grain for texture */}
      <div className="bg-noise absolute inset-0 opacity-[0.04] mix-blend-soft-light" />

      {/* Top hairline sheen */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Vignette to keep page content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,7,10,0.55)_75%,rgba(5,7,10,0.82)_100%)]" />
      <div className="absolute inset-0 bg-base-950/25" />
    </div>
  );
}
