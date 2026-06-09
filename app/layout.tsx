import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Built by Bohdan - Software Engineer Building with AI",
  description:
    "Portfolio of Bohdan Burukhin, software engineer with 8+ years across web, backend, and mobile, now building AI-powered apps and tools. Engineered, not prompted.",
  keywords: [
    "Built by Bohdan",
    "Bohdan Burukhin",
    "Software engineer",
    "Full-stack engineer",
    "Frontend engineer",
    "Mobile developer",
    "AI engineer",
    "Claude developer",
    "Next.js developer",
    "React developer",
  ],
  authors: [{ name: "Bohdan Burukhin" }],
  creator: "Bohdan Burukhin",
  metadataBase: new URL("https://built-by-bohdan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Built by Bohdan - Software Engineer Building with AI",
    description:
      "Portfolio of Bohdan Burukhin, software engineer with 8+ years across web, backend, and mobile, now building AI-powered apps and tools.",
    url: "https://built-by-bohdan.com",
    siteName: "Built by Bohdan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built by Bohdan - Software Engineer Building with AI",
    description:
      "Portfolio of Bohdan Burukhin, software engineer with 8+ years across web, backend, and mobile, now building AI-powered apps and tools.",
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
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t===null?true:t==='dark';if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bohdan Burukhin",
              url: "https://built-by-bohdan.com",
              jobTitle: "Software Engineer",
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
      <body className="font-mono antialiased bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
