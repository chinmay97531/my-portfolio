import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import { personName, siteUrl } from "@/lib/data";
import {
  getPersonJsonLd,
  getWebSiteJsonLd,
  siteDescription,
  siteKeywords,
  siteTitle,
} from "@/lib/seo";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: personName,
    type: "website",
    locale: "en_US",
    images: [
      { url: "/images/mine.png", width: 800, height: 800, alt: personName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/mine.png"],
  },
  icons: {
    icon: "/logo/favicon.svg",
    apple: "/logo/favicon.svg",
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
  const structuredData = [getPersonJsonLd(), getWebSiteJsonLd()];

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        {/* Warm the journey slideshow so production intro does not wait on cold image fetches. */}
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
        <link rel="preload" as="image" href="/images/mine.webp" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
