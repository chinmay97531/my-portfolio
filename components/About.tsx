"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./Skills";

const highlights = [
  {
    label: "Focus",
    value: "Software Engineering",
  },
  {
    label: "Currently",
    value: "Software Engineering Intern at Zscaler",
  },
  {
    label: "Education",
    value: "B.E. Computer Engineering, Thapar Institute",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-20 sm:py-24">
      <SectionHeading
        eyebrow="About"
        title="A bit about me"
        subtitle="Engineer, builder, and lifelong learner — focused on shipping products that feel fast and useful."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="space-y-4 text-base leading-relaxed text-base-700 sm:text-[1.05rem]"
        >
          <p>
            I&apos;m Chinmay Mittal, a software engineer who enjoys turning messy
            ideas into clean, reliable products. I care about thoughtful UI,
            solid APIs, and systems that stay maintainable as they grow.
          </p>
          <p>
            Right now I&apos;m building an enterprise QBR platform at Zscaler
            with Next.js, FastAPI, and PostgreSQL. Before that, I led an
            AI + IoT food spoilage detection project at Thapar — from ML models
            to a real-time mobile dashboard.
          </p>
          <p>
            Outside of work, I&apos;m usually shipping side projects, leveling
            up on DSA, or exploring better ways to design developer-facing
            experiences.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="surface flex h-fit flex-col gap-4 rounded-2xl p-6 shadow-soft"
        >
          {highlights.map((item) => (
            <li key={item.label} className="border-b border-base-100 pb-4 last:border-0 last:pb-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm font-medium text-base-900 sm:text-base">
                {item.value}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
