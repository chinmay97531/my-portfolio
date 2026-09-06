export type Skill = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  /** Live demo URL shown as a moving preview on hover (when embeddable). */
  liveUrl?: string;
  tags: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Experience = {
  role: string;
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  period: string;
  location: string;
  summary?: string;
  stack: string[];
  points: string[];
};

export const role = "Software Engineer";

export const siteUrl = "https://chinmaymittal.dev";
export const personName = "Chinmay Mittal";
export const personEmail = "chinmaymittal0000@gmail.com";
export const thaparName = "Thapar Institute of Engineering & Technology";
export const zscalerName = "Zscaler";

export const experiences: Experience[] = [
  {
    role: "Software Engineering Intern",
    company: "Zscaler",
    logo: "/logo/zscaler.webp",
    logoWidth: 124,
    logoHeight: 32,
    period: "Feb 2026 – Aug 2026",
    location: "Mohali, Punjab",
    summary:
      "Built an enterprise-grade Quarterly Business Review (QBR) platform with the Product Business Operations team at Zscaler, streamlining creation and management of executive business review presentations using Next.js, FastAPI, PostgreSQL, Valkey, and AWS.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Snowflake", "GitLab", "Valkey"],
    points: [
      "Architected and developed an enterprise-grade QBR platform",
      "Integrated business and operational data from Snowflake and Amazon RDS (PostgreSQL) into scalable dashboards.",
      "Built a modular page framework supporting predefined templates and dynamic user-generated content.",
    ],
  },
  {
    role: "ELC Summer Intern",
    company: "Thapar Institute of Engineering & Technology",
    logo: "/logo/thapar.webp",
    logoWidth: 111,
    logoHeight: 56,
    period: "Jun 2025 – Jul 2025",
    location: "Patiala, Punjab",
    summary:
      "Led the development of a Smart AI-powered IoT Food Spoilage Detection system integrating ML, IoT, and full-stack technologies.",
    stack: ["Machine Learning", "IoT", "React Native", "REST APIs"],
    points: [
      "Led an 8-member team to develop an AI-powered IoT food spoilage detection system achieving 90% prediction accuracy.",
      "Built a real-time data pipeline with anomaly detection and automated alerts using REST APIs.",
      "Optimized ML inference by 32% and developed a low-latency React Native dashboard for real-time analytics.",
    ],
  },
];

/** Legacy image paths — Skills marquee uses `@/lib/skills` (TSG + current icons). */
export const skills: Skill[] = [
  { name: "HTML5", icon: "/logo/html.png" },
  { name: "CSS3", icon: "/logo/css.png" },
  { name: "JavaScript", icon: "/skills/tsg/js-icon.svg" },
  { name: "TypeScript", icon: "/skills/tsg/ts-icon.svg" },
  { name: "Node.js", icon: "/logo/nodsJs.png" },
  { name: "Express", icon: "/logo/express.svg" },
  { name: "React", icon: "/skills/tsg/react-icon.svg" },
  { name: "Next.js", icon: "/logo/NextJs.png" },
  { name: "Tailwind CSS", icon: "/logo/TailwindCSS.png" },
  { name: "MongoDB", icon: "/logo/MongoDB.png" },
  { name: "PostgreSQL", icon: "/logo/postgre.png" },
  { name: "C", icon: "/logo/c.png" },
  { name: "C++", icon: "/skills/tsg/cpp-icon.svg" },
  { name: "Java", icon: "/skills/tsg/java-icon.svg" },
  { name: "Python", icon: "/skills/tsg/python-icon.svg" },
];

export const projects: Project[] = [
  {
    title: "VidMind",
    description:
      "A RAG-powered chatbot that lets you ask questions about any YouTube video by simply providing its URL.",
    image: "/projects/vidmind.webp",
    href: "https://vidmindai.vercel.app/",
    liveUrl: "https://vidmindai.vercel.app/",
    tags: ["AI", "RAG", "Full-Stack"],
  },
  {
    title: "TaskFlow",
    description:
      "A clean, intuitive task management app to plan and track your day.",
    image: "/projects/taskflow.webp",
    href: "https://frontend-task-management-app-seven.vercel.app/",
    liveUrl: "https://frontend-task-management-app-seven.vercel.app/",
    tags: ["React", "Express", "MongoDB", "JavaScript"],
  },
  {
    title: "BrainBox",
    description:
      "A second-brain app to capture, organize, and revisit your links, notes, and ideas.",
    image: "/projects/brainbox.webp",
    href: "https://brainboxapp.vercel.app/",
    liveUrl: "https://brainboxapp.vercel.app/",
    tags: ["React", "TypeScript", "Express", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "Learning Management System",
    description:
      "A collaborative learning platform enabling students to study and work together.",
    image: "/projects/lms.webp",
    href: "https://github.com/chinmay97531/project-frontend-software-engineering",
    tags: ["Full-Stack"],
  },
  {
    title: "Food Spoilage Detection",
    description:
      "An app that detects food spoilage using image classification to reduce waste.",
    image: "/projects/food-spoilage.webp",
    href: "https://github.com/chinmay97531/Food-Spoilage-Frontend",
    tags: ["ML", "React Native", "IoT"],
  },
  {
    title: "Course Selling App",
    description:
      "A robust backend for a course-selling platform with auth, courses, and purchases.",
    image: "/projects/course-selling.webp",
    href: "https://github.com/chinmay97531/Backend-for-Course-Selling-App",
    tags: ["Express", "MongoDB"],
  },
  {
    title: "Cartoonizing App",
    description:
      "Turn ordinary photos into stylized cartoon art with image processing.",
    image: "/projects/cartoonizing.webp",
    href: "https://github.com/chinmay97531/AnimatingImage",
    tags: ["Python", "OpenCV"],
  },
  {
    title: "Netflix Clone",
    description:
      "A pixel-faithful Netflix landing page clone built with vanilla web tech.",
    image: "/projects/netflix.webp",
    href: "https://chinmay97531.github.io/Netflix-Clone/",
    liveUrl: "https://chinmay97531.github.io/Netflix-Clone/",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Code Catch Game",
    description:
      "A fun browser game where you catch falling code snippets to score points.",
    image: "/projects/code-catch.webp",
    href: "https://code-catch-game.vercel.app/",
    liveUrl: "https://code-catch-game.vercel.app/",
    tags: ["Phaser3", "JavaScript"],
  },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/chinmay97531", icon: "/logo/GitHub.svg" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chinmay-mittal-695825257/",
    icon: "/logo/LinkedIn.svg",
  },
  { label: "Email", href: "mailto:chinmaymittal0000@gmail.com", icon: "/logo/Gmail.svg" },
];

export const resumeUrl =
  "https://drive.google.com/file/d/1Y6tmkbjvyeyjTaEtCDShYBtX9nM9PEGa/view";
export const resumeCardUrl = "/previews/resume.webp";

export const githubUrl = "https://github.com/chinmay97531";
export const githubCardUrl =
  "https://streak-stats.demolab.com/?user=chinmay97531&theme=dark&hide_border=true&background=111722&ring=2dd4bf&fire=2dd4bf&currStreakLabel=e7ecf3&sideLabels=e7ecf3&dates=94a3b8";
export const githubChartUrl =
  "https://ghchart.rshah.org/2dd4bf/chinmay97531";
export const linkedinUrl = "https://www.linkedin.com/in/chinmay-mittal-695825257/";
export const linkedinCardUrl = "/previews/linkedin.webp";
export const leetcodeUrl = "https://leetcode.com/u/Chinmay9753";
export const leetcodeCardUrl =
  "https://leetcard.jacoblin.cool/Chinmay9753?theme=dark&font=Sora&ext=heatmap";
export const emailUrl = "mailto:chinmaymittal0000@gmail.com";
