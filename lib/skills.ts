import type { ComponentType, SVGProps } from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSnowflake,
  SiGit,
  SiGitlab,
  SiLinux,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { DatabaseZap, ShieldCheck, Boxes } from "lucide-react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = {
  name: string;
  /** Animated TSG SVG path, or a react-icons / lucide component. */
  icon: string | IconComponent;
  color?: string;
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

/** Animated SVGs from https://techstack-generator.vercel.app/ */
const tsg = (slug: string) => `/skills/${slug}-icon.svg`;

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: tsg("python") },
      { name: "TypeScript", icon: tsg("ts") },
      { name: "JavaScript", icon: tsg("js") },
      { name: "C++", icon: tsg("cpp") },
      { name: "Java", icon: tsg("java") },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: tsg("react") },
      { name: "Next.js", icon: SiNextdotjs, color: "#14161C" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#14161C" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "REST APIs", icon: tsg("restapi") },
      { name: "Auth / JWT", icon: ShieldCheck, color: "#1D4ED8" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "Valkey", icon: DatabaseZap, color: "#1D4ED8" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "pgVector", icon: Boxes, color: "#1E3A8A" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Docker", icon: tsg("docker") },
      { name: "Linux", icon: SiLinux, color: "#333333" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#14161C" },
    ],
  },
];

export const marqueeSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
