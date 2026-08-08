"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./Skills";

export default function Experience({
  alwaysExpanded = false,
}: {
  alwaysExpanded?: boolean;
}) {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="Real-world impact I've delivered as an engineer, from enterprise platforms to research-driven IoT systems."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-fg/10 to-transparent sm:left-1/2" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-0"
            >
              {/* Timeline node */}
              <span className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-accent/40 bg-base-950 text-accent sm:left-1/2">
                <Briefcase size={15} />
              </span>

              <div
                tabIndex={alwaysExpanded ? undefined : 0}
                className={`group glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 focus-visible:-translate-y-1 focus-visible:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                  <div className="min-w-0">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={exp.logoWidth}
                      height={exp.logoHeight}
                      className="w-auto object-contain object-left"
                      style={{ height: exp.logoHeight >= 48 ? 52 : 28 }}
                    />
                  </div>
                  <span className="shrink-0 pt-1 text-xs font-medium text-fg/50">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-fg">
                  {exp.role}
                </h3>
                <p className="text-xs text-fg/45">{exp.location}</p>

                {exp.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-fg/65">
                    {exp.summary}
                  </p>
                )}

                <div
                  className={
                    alwaysExpanded
                      ? "mt-0"
                      : "grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-within:grid-rows-[1fr]"
                  }
                >
                  <div className={alwaysExpanded ? "" : "overflow-hidden"}>
                    <ul
                      className={`mt-4 space-y-2 ${
                        alwaysExpanded
                          ? ""
                          : "opacity-100 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
                      }`}
                    >
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-fg/55"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-4 flex flex-wrap gap-2 ${
                        alwaysExpanded
                          ? ""
                          : "opacity-100 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100"
                      }`}
                    >
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs font-medium text-fg/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
