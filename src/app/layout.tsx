import React from "react";
import type { Metadata } from "next";
import { Bitter, Moirai_One } from "next/font/google";
import { Providers } from "./Providers";
import "../index.css";

const moirai = Moirai_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-moirai",
  display: "swap",
  preload: false,
});
const bitter = Bitter({
  subsets: ["latin"],
  weight: "500",
  style: ["normal", "italic"],
  variable: "--font-bitter",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Abhay Verma | Software Engineer",
  description:
    "Portfolio of Abhay Verma, a Software Engineer and Full Stack Developer specializing in Web Development, Machine Learning, and Competitive Coding.",
  keywords: [
    "Abhay Verma",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Competitive Coder",
    "Portfolio",
  ],
  authors: [{ name: "Abhay Verma" }],
  creator: "Abhay Verma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhay-verma.vercel.app/",
    title: "Abhay Verma | Software Engineer",
    description:
      "Portfolio of Abhay Verma, a Software Engineer and Full Stack Developer specializing in Web Development, Machine Learning, and Competitive Coding.",
    siteName: "Abhay Verma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Verma | Software Engineer",
    description:
      "Portfolio of Abhay Verma, a Software Engineer and Full Stack Developer specializing in Web Development, Machine Learning, and Competitive Coding.",
  },
  icons: {
    icon: "/Abhay.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${moirai.variable} ${bitter.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
