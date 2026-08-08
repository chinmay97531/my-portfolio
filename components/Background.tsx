"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const InteractiveScene = dynamic(
  () => import("@/components/background/InteractiveScene"),
  { ssr: false },
);

function StaticFallback() {
  return <div className="bg-depth absolute inset-0" />;
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
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base-950 transition-colors duration-500"
    >
      {/* Base depth gradient */}
      <div className="bg-depth absolute inset-0" />

      {/* Light-theme: quiet studio atmosphere */}
      <div className="bg-light-atmosphere absolute inset-0" />

      <div className="bg-scene absolute inset-0">
        {ready && !reducedMotion ? <InteractiveScene /> : <StaticFallback />}
      </div>

      {/* Soft accent glows */}
      <div className="glow-a absolute -left-40 -top-48 h-[42rem] w-[42rem] rounded-full blur-[130px]" />
      <div className="glow-b absolute -right-48 top-1/4 h-[40rem] w-[40rem] rounded-full blur-[130px]" />
      <div className="glow-c absolute -bottom-52 left-1/3 h-[38rem] w-[38rem] rounded-full blur-[140px]" />

      {/* Masked grid */}
      <div className="bg-grid absolute inset-0 opacity-60" />

      {/* Fine film grain for texture */}
      <div className="bg-noise absolute inset-0 mix-blend-soft-light" />

      {/* Top hairline sheen */}
      <div className="bg-hairline absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* Vignette to keep page content readable */}
      <div className="bg-vignette absolute inset-0" />
      <div className="bg-page-overlay absolute inset-0" />
    </div>
  );
}
