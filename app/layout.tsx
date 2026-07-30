import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const siteUrl = "https://chinmaymittal.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chinmay Mittal — Software Engineer",
  description:
    "Portfolio of Chinmay Mittal, a software engineer and full-stack developer building fast, delightful web and app experiences.",
  keywords: [
    "Chinmay Mittal",
    "Software Engineer",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Chinmay Mittal" }],
  openGraph: {
    title: "Chinmay Mittal — Software Engineer",
    description:
      "Portfolio of Chinmay Mittal, a software engineer and full-stack developer.",
    url: siteUrl,
    siteName: "Chinmay Mittal",
    type: "website",
    images: [{ url: "/images/mine.png", width: 800, height: 800, alt: "Chinmay Mittal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmay Mittal — Software Engineer",
    description:
      "Portfolio of Chinmay Mittal, a software engineer and full-stack developer.",
    images: ["/images/mine.png"],
  },
  icons: {
    icon: "/logo/GitHub.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
