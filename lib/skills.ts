import type { ComponentType, SVGProps } from "react";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiReact,
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
  SiGithub,
  SiGitlab,
  SiDocker,
  SiLinux,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Cloud, DatabaseZap, ShieldCheck, Webhook, Boxes } from "lucide-react";

/** Animated icons from https://techstack-generator.vercel.app/ (stored locally). */
const TSG = "/skills/tsg";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = {
  name: string;
  color: string;
  /** Current logo (react-icons / lucide) — used when no TSG icon exists */
  icon: IconComponent;
  /** TechStack Generator animated SVG when available for this skill */
  image?: string;
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      {
        name: "Python",
        icon: SiPython,
        color: "#3776AB",
        image: `${TSG}/python-icon.svg`,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        image: `${TSG}/ts-icon.svg`,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        image: `${TSG}/js-icon.svg`,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "#00599C",
        image: `${TSG}/cpp-icon.svg`,
      },
      {
        name: "Java",
        icon: FaJava,
        color: "#E76F00",
        image: `${TSG}/java-icon.svg`,
      },
    ],
  },
  {
    label: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        image: `${TSG}/react-icon.svg`,
      },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      {
        name: "REST APIs",
        icon: Webhook,
        color: "#2DD4BF",
        image: `${TSG}/restapi-icon.svg`,
      },
      { name: "Auth / JWT", icon: ShieldCheck, color: "#5EEAD4" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Snowflake", icon: SiSnowflake, color: "#29B5E8" },
      { name: "Valkey", icon: DatabaseZap, color: "#2DD4BF" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "pgVector", icon: Boxes, color: "#5EEAD4" },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#FFFFFF",
        image: `${TSG}/github-icon.svg`,
      },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        image: `${TSG}/docker-icon.svg`,
      },
      {
        name: "AWS",
        icon: Cloud,
        color: "#FF9900",
        image: `${TSG}/aws-icon.svg`,
      },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

export const marqueeSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
