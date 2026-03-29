import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Built by Bohdan — Full-Stack Developer & Builder",
  description:
    "Built by Bohdan — portfolio of Bohdan Burukhin, a full-stack developer building web apps, AI-powered tools, and interactive experiences.",
  keywords: [
    "Built by Bohdan",
    "Bohdan Burukhin",
    "full-stack developer",
    "web developer portfolio",
    "React developer",
    "Next.js developer",
  ],
  authors: [{ name: "Bohdan Burukhin" }],
  creator: "Bohdan Burukhin",
  metadataBase: new URL("https://built-by-bohdan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Built by Bohdan — Full-Stack Developer & Builder",
    description:
      "Portfolio of Bohdan Burukhin — full-stack developer building web apps, AI-powered tools, and interactive experiences.",
    url: "https://built-by-bohdan.com",
    siteName: "Built by Bohdan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Bohdan — Full-Stack Developer & Builder",
    description:
      "Portfolio of Bohdan Burukhin — full-stack developer building web apps, AI-powered tools, and interactive experiences.",
  },
  verification: {
    google: "sppIBCb_jg-ZKDvamrfY5SRI7BWy01_AM68urJvPUSk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bohdan Burukhin",
              url: "https://built-by-bohdan.com",
              jobTitle: "Full-Stack Developer",
              sameAs: [
                "https://github.com/bogdankf1",
                "https://www.linkedin.com/in/bogdankf1/",
                "https://www.youtube.com/@bogdanburukhin2436",
                "https://t.me/bohdan_burukhin",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
