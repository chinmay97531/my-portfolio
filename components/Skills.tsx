"use client";

import { motion } from "framer-motion";
import { marqueeSkills, type Skill } from "@/lib/skills";

export default function Skills() {
  const third = Math.ceil(marqueeSkills.length / 3);
  const rowA = marqueeSkills.slice(0, third);
  const rowB = marqueeSkills.slice(third, third * 2);
  const rowC = marqueeSkills.slice(third * 2);

  return (
    <section id="skills" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          subtitle="Languages, frameworks, and platforms I use to ship reliable software."
        />
      </div>

      <div className="relative mt-12 flex flex-col gap-4 overflow-hidden py-1">
        <MarqueeRow items={rowA} duration="48s" />
        <MarqueeRow items={rowB} reverse duration="58s" />
        <MarqueeRow items={rowC} duration="52s" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent sm:w-28" />
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
  return (
    <div className="mr-3 flex shrink-0 items-center gap-3 rounded-xl border border-base-200 bg-base-50/80 px-5 py-3.5 transition-all duration-300 hover:border-accent/30 hover:bg-white hover:shadow-soft">
      <SkillIcon skill={skill} />
      <span className="whitespace-nowrap text-base font-semibold text-base-900">
        {skill.name}
      </span>
    </div>
  );
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (typeof skill.icon === "string") {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- TSG animated SVGs need <img> for CSS keyframes
      <img
        src={skill.icon}
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
        loading="lazy"
        decoding="async"
        aria-hidden
      />
    );
  }

  const Icon = skill.icon;
  return <Icon className="h-7 w-7" style={{ color: skill.color }} aria-hidden />;
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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 font-display text-3xl font-bold tracking-tight text-base-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-base-500">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
