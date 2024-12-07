"use client";
import { Metadata } from "next";

import { default as NextHead } from "next/head";
import { useEffect } from "react";

export const Head = ({ title = "P£rsona Vault" }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
    </NextHead>
  );
};

export const metadata: Metadata = {
  title: "P£rsona Vault",
  description:
    "Unlock the stories within. A dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling.",
  openGraph: {
    title: "P£rsona Vault",
    description:
      "Unlock the stories within. A dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling.",
    url: "https://persona-vault.vercel.app",
    siteName: "P£rsona Vault",
    images: [
      {
        url: "/og-image.png", // Ensure this image is added to your public folder
        width: 1200,
        height: 630,
        alt: "P£rsona Vault",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "P£rsona Vault",
    description:
      "Unlock the stories within. A dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling.",
    images: ["/og-image.png"],
  },
};
