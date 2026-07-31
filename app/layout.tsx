import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
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
    images: [
      {
        url: "/images/mine.png",
        width: 800,
        height: 800,
        alt: "Chinmay Mittal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinmay Mittal — Software Engineer",
    description:
      "Portfolio of Chinmay Mittal, a software engineer and full-stack developer.",
    images: ["/images/mine.png"],
  },
  icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F8FA",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/journey/thapar-campus.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/journey/elc-intern.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/journey/zscaler-intern.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/mine.webp"
          type="image/webp"
        />
      </head>
      <body className="font-sans antialiased text-base-900">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
