"use client";

import { useMemo, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import * as THREE from "three";

function inSphere(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Rejection sampling for a uniform distribution inside a sphere.
    let x = 0;
    let y = 0;
    let z = 0;
    let lenSq = 0;
    do {
      x = Math.random() * 2 - 1;
      y = Math.random() * 2 - 1;
      z = Math.random() * 2 - 1;
      lenSq = x * x + y * y + z * z;
    } while (lenSq > 1 || lenSq === 0);
    const r = radius * Math.cbrt(Math.random());
    const norm = r / Math.sqrt(lenSq);
    positions[i * 3] = x * norm;
    positions[i * 3 + 1] = y * norm;
    positions[i * 3 + 2] = z * norm;
  }
  return positions;
}

function StarField() {
  const outer = useRef<THREE.Points>(null);
  const inner = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const outerPositions = useMemo(() => inSphere(2600, 6.2), []);
  const innerPositions = useMemo(() => inSphere(1200, 3.6), []);

  useFrame((state, delta) => {
    // Slow ambient rotation.
    if (outer.current) {
      outer.current.rotation.x -= delta * 0.015;
      outer.current.rotation.y -= delta * 0.02;
    }
    if (inner.current) {
      inner.current.rotation.x += delta * 0.02;
      inner.current.rotation.y += delta * 0.03;
    }

    // Subtle parallax that follows the pointer.
    const targetX = (state.pointer.x * viewport.width) / 24;
    const targetY = (state.pointer.y * viewport.height) / 24;
    state.camera.position.x += (targetX - state.camera.position.x) * 0.03;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={outer} positions={outerPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={0.55}
        />
      </Points>
      <Points ref={inner} positions={innerPositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#5eead4"
          size={0.016}
          sizeAttenuation
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Depth gradient behind the particle field */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0d1b2a_0%,#05070a_55%,#05070a_100%)]" />
      <Canvas
        camera={{ position: [0, 0, 1.4], fov: 70 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <StarField />
        </Suspense>
      </Canvas>
      {/* Vignette + accent glow overlays for depth and readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.10),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(56,189,248,0.10),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,rgba(5,7,10,0.85)_100%)]" />
    </div>
  );
}
