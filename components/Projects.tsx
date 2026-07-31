"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Radio } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./Skills";

const PREVIEW_WIDTH = 1280;
const PREVIEW_HEIGHT = 800;

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        subtitle="A collection of things I've designed and built — from AI tools to full-stack apps and games."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion() ?? false;
  const [hovered, setHovered] = useState(false);
  const [loadLive, setLoadLive] = useState(false);
  const [liveReady, setLiveReady] = useState(false);
  const [liveFailed, setLiveFailed] = useState(false);
  const [scale, setScale] = useState(0.3);
  const mediaRef = useRef<HTMLDivElement>(null);
  const liveReadyRef = useRef(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const failTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasLive = Boolean(project.liveUrl) && !reduced;

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.clientWidth || PREVIEW_WIDTH * 0.3;
      setScale(width / PREVIEW_WIDTH);
    };

    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      if (failTimer.current) clearTimeout(failTimer.current);
    };
  }, []);

  const onEnter = () => {
    setHovered(true);
    if (!hasLive || liveFailed) return;

    hoverTimer.current = setTimeout(() => {
      setLoadLive(true);
      if (failTimer.current) clearTimeout(failTimer.current);
      failTimer.current = setTimeout(() => {
        if (!liveReadyRef.current) setLiveFailed(true);
      }, 4000);
    }, 160);
  };

  const onLeave = () => {
    setHovered(false);
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const showLive = hasLive && loadLive && liveReady && !liveFailed && hovered;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
    >
      <div
        ref={mediaRef}
        className="relative aspect-video overflow-hidden bg-base-800"
      >
        {/* Cover — slow “live photo” motion while hovered */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showLive ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover ${
              hovered && !reduced ? "animate-live-pan" : "scale-105"
            }`}
          />
        </div>

        {/* Live site preview */}
        {hasLive && loadLive && !liveFailed && (
          <div
            className={`absolute inset-0 overflow-hidden transition-opacity duration-500 ${
              showLive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!showLive}
          >
            <iframe
              src={project.liveUrl}
              title={`${project.title} live preview`}
              loading="lazy"
              tabIndex={-1}
              onLoad={() => {
                liveReadyRef.current = true;
                setLiveReady(true);
                if (failTimer.current) clearTimeout(failTimer.current);
              }}
              className="pointer-events-none absolute left-0 top-0 origin-top-left border-0 bg-base-800"
              style={{
                width: PREVIEW_WIDTH,
                height: PREVIEW_HEIGHT,
                transform: `scale(${scale})`,
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-base-950/50 to-transparent" />
          </div>
        )}

        {hasLive && !liveFailed && (
          <span
            className={`absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Radio size={11} className="text-accent" />
            Live
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-white">
            {project.title}
          </h3>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all group-hover:border-accent/50 group-hover:bg-accent group-hover:text-base-950">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
