"use client";

import dynamic from "next/dynamic";

// WebGL is client-only, so load the 3D scene without server-side rendering.
const Background3D = dynamic(() => import("./Background3D"), { ssr: false });

export default function BackgroundCanvas() {
  return <Background3D />;
}
