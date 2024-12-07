import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "P£rsona Vault",
  description:
    "Unlock the stories within. A dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling.",
  metadataBase: new URL("https://persona-vault.vercel.app"),
  openGraph: {
    title: "P£rsona Vault",
    description:
      "Unlock the stories within. A dynamic, gamified card carousel for showcasing professional personality profiles with stunning visuals and interactive storytelling.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "P£rsona Vault",
      },
    ],
    siteName: "P£rsona Vault",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
