"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { personName, thaparName, zscalerName } from "@/lib/data";
import { SectionHeading } from "./Skills";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        aria-hidden="true"
      />

      <div className="section-shell">
        <SectionHeading
          eyebrow="Who I am"
          title="About me"
          subtitle="A bit about the person behind the projects."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-stretch lg:gap-14">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-3xl border border-fg/10 bg-gradient-to-br from-fg/[0.05] to-transparent p-8 sm:p-10"
          >
            <div
              className="absolute bottom-8 left-0 top-8 w-1 rounded-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative space-y-5 pl-5 text-base leading-relaxed text-fg/65 sm:pl-6 sm:text-lg">
              <p>
                I&apos;m{" "}
                <strong className="font-semibold text-fg">{personName}</strong>
                — a software engineer and full-stack developer who loves
                building things that feel fast, clear, and useful.
              </p>
              <p>
                I&apos;m studying Computer Engineering at{" "}
                <strong className="font-semibold text-fg">{thaparName}</strong>
                , where I keep sharpening how I think about systems, products,
                and craft. Outside of classes, I&apos;m usually sketching
                ideas, shipping side projects, or refining something until it
                feels right.
              </p>
              <p>
                I care about clean architecture, performance, and user
                experience — and I enjoy turning messy problems into software
                people actually want to use. Curious by nature, I like learning
                across the stack and exploring where web, AI, and real-world
                systems meet.
              </p>
            </div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="flex flex-col justify-center gap-5"
          >
            <div className="rounded-2xl border border-fg/10 bg-fg/[0.03] p-5">
              <div className="flex items-center gap-3 text-accent">
                <GraduationCap size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Education
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-snug text-fg">
                {thaparName}
              </p>
              <p className="mt-1 text-sm text-fg/45">
                Computer Engineering · Patiala
              </p>
            </div>

            <div className="rounded-2xl border border-fg/10 bg-fg/[0.03] p-5">
              <div className="flex items-center gap-3 text-accent">
                <Briefcase size={18} />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Internship
                </span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold leading-snug text-fg">
                {zscalerName}
              </p>
              <p className="mt-1 text-sm text-fg/45">
                Software Engineering Intern · Feb–Aug 2026
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
