"use client";

import { useEffect, useId } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import {
  role,
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

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const chartImageUrls = [
  githubCardUrl,
  githubChartUrl,
  leetcodeCardUrl,
  linkedinCardUrl,
  resumeCardUrl,
];

export default function Hero() {
  // Preload hover charts so the first hover feels instant.
  useEffect(() => {
    chartImageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-40 sm:pb-48"
    >
      <div className="section-shell">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="order-2 md:order-1"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for opportunities
            </motion.span>

            <motion.p
              variants={item}
              className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
            >
              Hi, I&apos;m Chinmay Mittal
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              I&apos;m a{" "}
              <span className="text-gradient animate-gradient-x">{role}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg"
            >
              I design and build fast, accessible, and delightful web and app
              experiences — from polished front-ends to robust back-ends.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-base-950 transition-transform hover:scale-105"
              >
                View my work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="flex items-center gap-3">
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
                      alt: "LinkedIn profile preview for Chinmay Mittal",
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
                      alt: "Resume preview for Chinmay Mittal",
                    },
                  ]}
                >
                  <FileText size={20} />
                </ChartHoverLink>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 flex justify-center md:order-2"
          >
            <div className="group relative flex items-center justify-center">
              {/* Soft spotlight glow behind the photo */}
              <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/30 via-sky-400/20 to-transparent blur-3xl sm:h-[380px] sm:w-[380px]" />
              <div className="relative animate-float">
                <Image
                  src="/images/mine.webp"
                  alt="Chinmay Mittal"
                  width={420}
                  height={420}
                  priority
                  className="h-[300px] w-[300px] rounded-full object-cover ring-1 ring-white/10 drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)] sm:h-[400px] sm:w-[400px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Oversized editorial name band */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-4 flex w-full select-none justify-center overflow-hidden sm:bottom-8"
        aria-hidden="true"
      >
        <span className="bg-gradient-to-b from-white/[0.12] to-white/[0.02] bg-clip-text font-display text-[19vw] font-black leading-none tracking-tighter text-transparent">
          CHINMAY&nbsp;MITTAL
        </span>
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
        {/* Anchor caret */}
        <div className="mx-auto h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-b border-r border-white/10 bg-[rgba(17,23,34,0.85)]" />
      </div>
    </div>
  );
}
