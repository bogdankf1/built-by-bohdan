import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bohdan — Full-Stack Developer & Builder",
  description:
    "Full-stack developer building web apps, tools, and learning experiences. Explore my work.",
  openGraph: {
    title: "Bohdan — Full-Stack Developer & Builder",
    description:
      "Full-stack developer building web apps, tools, and learning experiences.",
    url: "https://bohdan.dev",
    siteName: "Bohdan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bohdan — Full-Stack Developer & Builder",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
