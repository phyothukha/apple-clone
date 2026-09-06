import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://apple-clone-peach.vercel.app";
const title = "Apple Website Clone";
const description =
  "A pixel-perfect front-end clone of Apple's website homepage, recreating the iPhone, iPad, MacBook Air, Apple Watch, Vision Pro, and Apple Card sections with Next.js, TypeScript, and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Phyo Thu Kha",
    "apple website clone",
    "apple.com clone",
    "mern stack developer",
    "Next.js portfolio project",
  ],
  authors: [{ name: "Phyo Thu Kha" }],
  creator: "Phyo Thu Kha",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: title,
    locale: "en_US",
    images: [
      {
        url: "/showcase.png",
        width: 800,
        height: 600,
        alt: `${title} preview screenshot`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/showcase.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
