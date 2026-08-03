"use client";

import { useEffect, useId } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  role,
  personName,
  githubUrl,
  githubCardUrl,
  githubChartUrl,
  linkedinUrl,
  linkedinCardUrl,
  resumeUrl,
  resumeCardUrl,
  leetcodeUrl,
  leetcodeCardUrl,
} from "@/lib/data";

const chartImageUrls = [
  githubCardUrl,
  githubChartUrl,
  leetcodeCardUrl,
  linkedinCardUrl,
  resumeCardUrl,
];

export default function Hero() {
  useEffect(() => {
    chartImageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center pt-28 pb-36 sm:pb-40"
    >
      <div className="section-shell relative z-10">
        <div className="flex w-full justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex w-full max-w-xl flex-col items-center text-center lg:items-end lg:text-right"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-sm text-accent-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
              <span className="text-gradient animate-gradient-x">{role}</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg lg:ml-auto">
              Building fast, scalable products that solve real problems.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-end">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-base-950 shadow-lg shadow-accent/20 transition-all hover:scale-[1.03] hover:shadow-accent/35"
              >
                View my work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 font-semibold text-white/80 transition-all hover:border-accent/40 hover:bg-white/[0.06] hover:text-white"
              >
                About me
              </a>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-end">
              <ChartHoverLink
                href={githubUrl}
                label="GitHub"
                images={[
                  {
                    src: githubCardUrl,
                    alt: "GitHub streak stats for chinmay97531",
                  },
                  {
                    src: githubChartUrl,
                    alt: "GitHub contribution chart for chinmay97531",
                  },
                ]}
              >
                <Github size={20} />
              </ChartHoverLink>
              <ChartHoverLink
                href={linkedinUrl}
                label="LinkedIn"
                images={[
                  {
                    src: linkedinCardUrl,
                    alt: `LinkedIn profile preview for ${personName}`,
                  },
                ]}
              >
                <Linkedin size={20} />
              </ChartHoverLink>
              <ChartHoverLink
                href={leetcodeUrl}
                label="LeetCode"
                images={[
                  {
                    src: leetcodeCardUrl,
                    alt: "LeetCode stats and heatmap for Chinmay9753",
                  },
                ]}
              >
                <SiLeetcode size={19} />
              </ChartHoverLink>
              <ChartHoverLink
                href={resumeUrl}
                label="Resume"
                images={[
                  {
                    src: resumeCardUrl,
                    alt: `Resume preview for ${personName}`,
                  },
                ]}
              >
                <FileText size={20} />
              </ChartHoverLink>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-5 z-0 w-full select-none overflow-hidden sm:bottom-8"
        aria-hidden="true"
      >
        <div
          className="flex w-max animate-marquee"
          style={{ ["--marquee-duration" as string]: "22s" }}
        >
          {[0, 1, 2, 3].map((copy) => (
            <span
              key={copy}
              className="bg-gradient-to-b from-white/[0.16] to-white/[0.02] bg-clip-text pr-12 font-display text-5xl font-black leading-none tracking-[0.06em] text-transparent sm:pr-16 sm:text-7xl md:text-8xl lg:text-9xl"
            >
              CHINMAY&nbsp;MITTAL
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ChartHoverLink({
  href,
  label,
  images,
  children,
}: {
  href: string;
  label: string;
  images: { src: string; alt: string }[];
  children: React.ReactNode;
}) {
  const tooltipId = useId();

  return (
    <div className="group/chart relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        aria-describedby={tooltipId}
        className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent focus-visible:-translate-y-1 focus-visible:border-accent/50 focus-visible:text-accent focus-visible:outline-none"
      >
        {children}
      </a>

      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-[min(92vw,360px)] -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover/chart:pointer-events-auto group-hover/chart:opacity-100 group-focus-within/chart:pointer-events-auto group-focus-within/chart:opacity-100"
      >
        <div className="glass overflow-hidden rounded-2xl border border-white/10 p-2 shadow-2xl shadow-black/50 ring-1 ring-white/5">
          <div className="flex flex-col gap-2">
            {images.map((image) => (
              // eslint-disable-next-line @next/next/no-img-element -- external SVG/PNG card services
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={500}
                height={200}
                loading="eager"
                decoding="async"
                className="h-auto w-full rounded-xl bg-base-800"
              />
            ))}
          </div>
        </div>
        <div className="mx-auto h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/10 bg-[rgba(17,23,34,0.85)]" />
      </div>
    </div>
  );
}
