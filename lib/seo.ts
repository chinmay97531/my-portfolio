import {
  githubUrl,
  leetcodeUrl,
  linkedinUrl,
  personEmail,
  personName,
  role,
  siteUrl,
  thaparName,
  zscalerName,
} from "@/lib/data";

export const siteTitle = `${personName} | ${role} | Thapar`;

export const siteDescription =
  `${personName} is a software engineer and full-stack developer from ${thaparName}. ` +
  `Building fast web and app experiences with React, Next.js, and TypeScript. Former Software Engineering Intern at ${zscalerName}.`;

export const siteKeywords = [
  personName,
  "Chinmay Mittal Thapar",
  "Chinmay Mittal Zscaler",
  "Chinmay Mittal software engineer",
  thaparName,
  zscalerName,
  role,
  "Full-Stack Developer",
  "Web Developer",
  "React",
  "Next.js",
  "Portfolio",
];

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personName,
    url: siteUrl,
    image: `${siteUrl}/images/mine.png`,
    email: personEmail,
    jobTitle: role,
    description: siteDescription,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: thaparName,
      sameAs: "https://www.thapar.edu/",
    },
    sameAs: [siteUrl, githubUrl, linkedinUrl, leetcodeUrl],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: personName,
    url: siteUrl,
    description: siteDescription,
    publisher: {
      "@type": "Person",
      name: personName,
    },
  };
}
