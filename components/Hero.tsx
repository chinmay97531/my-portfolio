"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileUser } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  role,
  githubUrl,
  githubCardUrl,
  githubChartUrl,
  linkedinUrl,
  linkedinCardUrl,
  resumeUrl,
  leetcodeUrl,
  leetcodeCardUrl,
} from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const chartImageUrls = [
  githubCardUrl,
  githubChartUrl,
  leetcodeCardUrl,
  linkedinCardUrl,
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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-24 sm:pb-28"
    >
      <div className="section-shell">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-base-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-base-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to opportunities
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-base-900 sm:text-5xl lg:text-[3.5rem]"
            >
              Chinmay Mittal
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 font-display text-xl font-medium text-accent sm:text-2xl"
            >
              {role}
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-base-500 sm:text-lg"
            >
              I design and build fast, accessible web and app experiences —
              from polished front-ends to reliable back-ends.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#about" className="btn-primary group">
                About me
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a href="#projects" className="btn-secondary">
                View my work
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex items-center gap-2"
            >
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
                <Github size={18} />
              </ChartHoverLink>
              <ChartHoverLink
                href={linkedinUrl}
                label="LinkedIn"
                images={[
                  {
                    src: linkedinCardUrl,
                    alt: "LinkedIn profile preview for Chinmay Mittal",
                  },
                ]}
              >
                <Linkedin size={18} />
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
                <SiLeetcode size={17} />
              </ChartHoverLink>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-base-200 bg-white px-3.5 text-sm font-semibold text-base-800 transition-all hover:border-accent/40 hover:text-accent focus-visible:border-accent focus-visible:text-accent focus-visible:outline-none"
              >
                <FileUser size={16} strokeWidth={2} aria-hidden />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-accent/15 via-transparent to-base-900/5"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lift">
                <Image
                  src="/images/mine.webp"
                  alt="Chinmay Mittal"
                  fill
                  sizes="(max-width: 640px) 340px, 380px"
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
        className="grid h-10 w-10 place-items-center rounded-lg border border-base-200 bg-white text-base-700 transition-all hover:border-accent/40 hover:text-accent focus-visible:border-accent focus-visible:text-accent focus-visible:outline-none"
      >
        {children}
      </a>

      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-[min(92vw,340px)] -translate-x-1/2 opacity-0 transition-all duration-200 ease-out group-hover/chart:pointer-events-auto group-hover/chart:opacity-100 group-focus-within/chart:pointer-events-auto group-focus-within/chart:opacity-100"
      >
        <div className="overflow-hidden rounded-xl border border-base-200 bg-white p-1.5 shadow-lift">
          <div className="flex flex-col gap-2">
            {images.map((image) => (
              // eslint-disable-next-line @next/next/no-img-element -- preview assets / external cards
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={500}
                height={200}
                loading="eager"
                decoding="async"
                className="h-auto w-full rounded-lg bg-base-50"
              />
            ))}
          </div>
        </div>
        <div className="mx-auto h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-base-200 bg-white" />
      </div>
    </div>
  );
}
