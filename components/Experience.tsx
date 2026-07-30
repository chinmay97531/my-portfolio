"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./Skills";

export default function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="Real-world impact I've delivered as an engineer, from enterprise platforms to research-driven IoT systems."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-white/10 to-transparent sm:left-1/2" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-12 sm:pl-0"
            >
              {/* Timeline node */}
              <span className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full border border-accent/40 bg-base-950 text-accent sm:left-1/2">
                <Briefcase size={15} />
              </span>

              <div
                className={`glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10 sm:w-[calc(50%-2rem)] ${
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
                  <span className="shrink-0 pt-1 text-xs font-medium text-white/50">
                    {exp.period}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-xs text-white/45">{exp.location}</p>

                {exp.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {exp.summary}
                  </p>
                )}

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-white/55"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
