"use client";

import { motion } from "framer-motion";
import { marqueeSkills, type Skill } from "@/lib/skills";

export default function Skills() {
  const third = Math.ceil(marqueeSkills.length / 3);
  const rowA = marqueeSkills.slice(0, third);
  const rowB = marqueeSkills.slice(third, third * 2);
  const rowC = marqueeSkills.slice(third * 2);

  return (
    <section id="skills" className="scroll-mt-24 py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="What I work with"
          title="Skills & Technologies"
        />
      </div>

      {/* Continuously moving marquee (full-bleed) */}
      <div className="relative mt-16 flex flex-col gap-6 overflow-hidden py-2">
        <MarqueeRow items={rowA} duration="46s" />
        <MarqueeRow items={rowB} reverse duration="56s" />
        <MarqueeRow items={rowC} duration="50s" />

        {/* Edge fades so chips melt into the background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-base-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-base-950 to-transparent" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: Skill[];
  reverse?: boolean;
  duration: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group flex overflow-hidden">
      <div
        className={`flex w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused]`}
        style={{ ["--marquee-duration" as string]: duration }}
      >
        {doubled.map((skill, i) => (
          <SkillChip key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function SkillChip({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  return (
    <div className="glass mr-5 flex shrink-0 items-center gap-4 rounded-2xl px-8 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <Icon className="h-9 w-9" style={{ color: skill.color }} aria-hidden />
      <span className="whitespace-nowrap text-xl font-semibold text-white/85">
        {skill.name}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-white/60">{subtitle}</p>
      )}
    </motion.div>
  );
}
