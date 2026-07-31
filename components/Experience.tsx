"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./Skills";

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="Building products that matter — from enterprise platforms to research-driven systems."
      />

      <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5">
        {experiences.map((exp, i) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="surface relative overflow-hidden rounded-2xl p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift sm:p-8"
          >
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1 bg-accent"
            />

            <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3 pl-2">
              <div>
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={exp.logoWidth}
                  height={exp.logoHeight}
                  className="w-auto object-contain object-left"
                  style={{ height: exp.logoHeight >= 48 ? 48 : 26 }}
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-base-900 sm:text-xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-base-500">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="shrink-0 rounded-md bg-base-50 px-2.5 py-1 text-xs font-medium text-base-700 ring-1 ring-base-200">
                {exp.period}
              </span>
            </div>

            {exp.summary && (
              <p className="mt-4 pl-2 text-sm leading-relaxed text-base-700 sm:text-[0.95rem]">
                {exp.summary}
              </p>
            )}

            <ul className="mt-5 space-y-2.5 pl-2">
              {exp.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-base-700"
                >
                  <span
                    aria-hidden
                    className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 pl-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-base-50 px-2.5 py-1 text-xs font-medium text-base-700 ring-1 ring-base-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
