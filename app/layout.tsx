import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple Webite Clone",
  description:
    "Innovative solutions for mobile and web app development. Discover cutting-edge tools, resources, and services for your app development needs.",
  icons: {
    icon: [{ url: "/icon.tsx" }],
  },
  keywords: ["Phyo Thu Kha", "snake game", "mern stack developer"],
  openGraph: {
    title: "Apple Webite Clone",
    description:
      "Innovative solutions for mobile and web app development. Discover cutting-edge tools, resources, and services for your app development needs.",
    url: "https://apple-clone-peach.vercel.app/",
    images: [
      {
        url: "https://apple-clone-peach.vercel.app/showcase.png",
        width: 800,
        height: 600,
        alt: "Description of the image for screen readers",
      },
    ],
    type: "website",
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
      </body>
    </html>
  );
}
