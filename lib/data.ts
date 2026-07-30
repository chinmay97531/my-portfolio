export type Skill = {
  name: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const roles = ["Software Engineer", "App Developer", "Web Developer"];

export const skills: Skill[] = [
  { name: "HTML5", icon: "/logo/html.png" },
  { name: "CSS3", icon: "/logo/css.png" },
  { name: "JavaScript", icon: "/logo/JS.png" },
  { name: "TypeScript", icon: "/logo/typescript.png" },
  { name: "Node.js", icon: "/logo/nodsJs.png" },
  { name: "Express", icon: "/logo/express.svg" },
  { name: "React", icon: "/logo/React.png" },
  { name: "Next.js", icon: "/logo/NextJs.png" },
  { name: "Tailwind CSS", icon: "/logo/TailwindCSS.png" },
  { name: "MongoDB", icon: "/logo/MongoDB.png" },
  { name: "PostgreSQL", icon: "/logo/postgre.png" },
  { name: "C", icon: "/logo/c.png" },
  { name: "C++", icon: "/logo/c++.png" },
  { name: "Java", icon: "/logo/java.png" },
  { name: "Python", icon: "/logo/Python.png" },
];

export const projects: Project[] = [
  {
    title: "RAG Bot",
    description:
      "A retrieval-augmented generation chatbot that answers questions from your own knowledge base.",
    image: "/projects/ragbot.webp",
    href: "https://ragbot-actual-ai.app.genez.io/",
    tags: ["AI", "RAG", "Full-Stack"],
  },
  {
    title: "TaskFlow",
    description:
      "A clean, intuitive task management app to plan and track your day.",
    image: "/projects/taskflow.webp",
    href: "https://frontend-task-management-app-seven.vercel.app/",
    tags: ["React", "Productivity"],
  },
  {
    title: "Brainly App",
    description:
      "A second-brain app to capture, organize, and revisit your links, notes, and ideas.",
    image: "/projects/brainly.webp",
    href: "https://brainly-frontend-gamma.vercel.app/",
    tags: ["React", "TypeScript"],
  },
  {
    title: "Learning Management System",
    description:
      "A collaborative learning platform enabling students to study and work together.",
    image: "/projects/lms.webp",
    href: "https://github.com/chinmay97531/project-frontend-software-engineering",
    tags: ["React", "Full-Stack"],
  },
  {
    title: "Food Spoilage Detection",
    description:
      "An app that detects food spoilage using image classification to reduce waste.",
    image: "/projects/food-spoilage.webp",
    href: "https://github.com/chinmay97531/Food-Spoilage-Frontend",
    tags: ["ML", "Reac-Native"],
  },
  {
    title: "Course Selling App",
    description:
      "A robust backend for a course-selling platform with auth, courses, and purchases.",
    image: "/projects/course-selling.webp",
    href: "https://github.com/chinmay97531/Backend-for-Course-Selling-App",
    tags: ["Node.js", "Express", "MongoDB"],
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
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Code Catch Game",
    description:
      "A fun browser game where you catch falling code snippets to score points.",
    image: "/projects/code-catch.webp",
    href: "https://code-catch-game.vercel.app/",
    tags: ["Game", "JavaScript"],
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
  "https://drive.google.com/file/d/1rIWQOrihQxYF7UINyPUvl5jj5a7zGaCq/view";

export const githubUrl = "https://github.com/chinmay97531";
export const linkedinUrl = "https://www.linkedin.com/in/chinmay-mittal-695825257/";
export const leetcodeUrl = "https://leetcode.com/u/Chinmay9753";
export const emailUrl = "mailto:chinmaymittal0000@gmail.com";
