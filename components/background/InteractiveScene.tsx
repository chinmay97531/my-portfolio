"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type PointerTarget = { x: number; y: number };

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

function useIsLightTheme() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const read = () =>
      setLight(document.documentElement.classList.contains("light"));
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return light;
}

function GraphNetwork({
  count,
  pointer,
  light,
}: {
  count: number;
  pointer: React.MutableRefObject<PointerTarget>;
  light: boolean;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { positions, velocities, base } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const base = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      base[i3] = (Math.random() - 0.5) * 12;
      base[i3 + 1] = (Math.random() - 0.5) * 7.5;
      base[i3 + 2] = (Math.random() - 0.5) * 5;
      positions[i3] = base[i3];
      positions[i3 + 1] = base[i3 + 1];
      positions[i3 + 2] = base[i3 + 2];
      velocities[i3] = (Math.random() - 0.5) * 0.006;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.006;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.004;
    }
    return { positions, velocities, base };
  }, [count]);

  const linePositions = useMemo(
    () => new Float32Array(count * count * 6),
    [count],
  );

  useFrame((state) => {
    const points = pointsRef.current;
    const lines = linesRef.current;
    if (!points || !lines) return;

    const pos = points.geometry.attributes.position.array as Float32Array;
    const t = state.clock.elapsedTime;
    const px = pointer.current.x * 4;
    const py = pointer.current.y * 2.8;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.current.x * 0.18,
        0.04,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.current.y * 0.12,
        0.04,
      );
    }

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] =
        base[i3] +
        Math.sin(t * 0.32 + i * 0.45) * 0.22 +
        velocities[i3] * 50 * Math.sin(t * 0.18 + i) +
        px * 0.22;
      pos[i3 + 1] =
        base[i3 + 1] +
        Math.cos(t * 0.38 + i * 0.6) * 0.18 +
        velocities[i3 + 1] * 50 * Math.cos(t * 0.22 + i) -
        py * 0.2;
      pos[i3 + 2] =
        base[i3 + 2] +
        Math.sin(t * 0.25 + i * 0.3) * 0.15 +
        velocities[i3 + 2] * 40 * Math.sin(t * 0.15 + i);

      const dx = px - pos[i3];
      const dy = -py - pos[i3 + 1];
      const dist = Math.hypot(dx, dy);
      if (dist < 2.8) {
        const force = (1 - dist / 2.8) * 0.045;
        pos[i3] += dx * force;
        pos[i3 + 1] += dy * force;
      }
    }
    points.geometry.attributes.position.needsUpdate = true;

    let cursor = 0;
    const maxDist = 1.85;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const i3 = i * 3;
        const j3 = j * 3;
        const dx = pos[i3] - pos[j3];
        const dy = pos[i3 + 1] - pos[j3 + 1];
        const dz = pos[i3 + 2] - pos[j3 + 2];
        const d = Math.hypot(dx, dy, dz);
        if (d < maxDist) {
          linePositions[cursor++] = pos[i3];
          linePositions[cursor++] = pos[i3 + 1];
          linePositions[cursor++] = pos[i3 + 2];
          linePositions[cursor++] = pos[j3];
          linePositions[cursor++] = pos[j3 + 1];
          linePositions[cursor++] = pos[j3 + 2];
        }
      }
    }

    const lineAttr = lines.geometry.attributes.position as THREE.BufferAttribute;
    lineAttr.set(linePositions);
    lineAttr.needsUpdate = true;
    lines.geometry.setDrawRange(0, cursor / 3);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={light ? "#0d9488" : "#5eead4"}
          size={light ? 0.06 : 0.055}
          transparent
          opacity={light ? 0.75 : 0.85}
          depthWrite={false}
          sizeAttenuation
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={light ? "#14b8a6" : "#2dd4bf"}
          transparent
          opacity={light ? 0.32 : 0.28}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

function ParallaxRig({
  pointer,
}: {
  pointer: React.MutableRefObject<PointerTarget>;
}) {
  const { camera } = useThree();
  const current = useRef({ x: 0, y: 0 });

  useFrame(() => {
    current.current.x += (pointer.current.x - current.current.x) * 0.06;
    current.current.y += (pointer.current.y - current.current.y) * 0.06;
    camera.position.x = current.current.x * 0.7;
    camera.position.y = current.current.y * 0.45;
    camera.lookAt(current.current.x * 0.2, current.current.y * 0.12, 0);
  });

  return null;
}

function SceneContent({ mobile }: { mobile: boolean }) {
  const light = useIsLightTheme();
  const pointer = useRef<PointerTarget>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      pointer.current.x = THREE.MathUtils.clamp(x, -1, 1);
      pointer.current.y = THREE.MathUtils.clamp(y, -1, 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const pointCount = mobile ? 48 : 90;

  return (
    <>
      <ambientLight intensity={0.7} />
      <ParallaxRig pointer={pointer} />
      <GraphNetwork count={pointCount} pointer={pointer} light={light} />
    </>
  );
}

export default function InteractiveScene() {
  const mobile = useIsMobile();
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  useEffect(() => {
    const onVis = () =>
      setFrameloop(document.visibilityState === "visible" ? "always" : "never");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.5]}
        frameloop={frameloop}
        camera={{ position: [0, 0, 5.5], fov: 50, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          premultipliedAlpha: false,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <SceneContent mobile={mobile} />
      </Canvas>
    </div>
  );
}
