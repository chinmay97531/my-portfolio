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
  SiGitlab,
  SiDocker,
  SiLinux,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DatabaseZap, ShieldCheck, Webhook, Boxes } from "lucide-react";

// A common type both react-icons and lucide-react icons satisfy.
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type Skill = {
  name: string;
  icon: IconComponent;
  color: string;
};

export type SkillCategory = {
  label: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
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
      { name: "REST APIs", icon: Webhook, color: "#2DD4BF" },
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
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

// A flat list used by the continuously-scrolling marquee.
export const marqueeSkills: Skill[] = skillCategories.flatMap((c) => c.skills);
