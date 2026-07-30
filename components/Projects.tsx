"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "./Skills";

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
          <motion.a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
          >
            <div className="relative aspect-video overflow-hidden bg-base-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
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
        ))}
      </div>
    </section>
  );
}
