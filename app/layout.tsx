import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var dark=localStorage.getItem("theme")==="dark";var root=document.documentElement;root.classList.toggle("dark",dark);root.classList.toggle("light",!dark);root.style.colorScheme=dark?"dark":"light";}catch(e){document.documentElement.classList.add("light");}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [getPersonJsonLd(), getWebSiteJsonLd()];

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} light`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
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
        <ThemeProvider>
          <Preloader />
          <Background />
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
