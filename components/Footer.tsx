"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import type { ReactNode } from "react";

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socials: { icon: () => ReactNode; href: string; label: string }[] = [
  { icon: GithubIcon, href: "https://github.com/bogdankf1", label: "GitHub" },
  {
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/bogdankf1/",
    label: "LinkedIn",
  },
  {
    icon: YouTubeIcon,
    href: "https://www.youtube.com/@bogdanburukhin2436",
    label: "YouTube",
  },
  {
    icon: () => <Send size={20} />,
    href: "https://t.me/bohdan_burukhin",
    label: "Telegram",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-dashed border-ink/30"
    >
      <div className="px-4 sm:px-8 py-20 max-w-5xl mx-auto">
        <div className="title-block mb-3">
          <span className="title-block-tag">FIG.03</span>
          <span>Contact</span>
        </div>
        <motion.div
          className="flex flex-col items-start gap-10 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase font-sans">
            Let&apos;s build something together
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            {socials.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="brackets group flex items-center gap-3 border border-ink/25 hover:border-ink/70 transition-colors p-4 bg-paper/40"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <span className="br br-tl" />
                <span className="br br-tr" />
                <span className="br br-bl" />
                <span className="br br-br" />
                <div className="text-ink">
                  <Icon />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-ink-dim group-hover:text-ink transition-colors">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>

          <a
            href="mailto:bohdan.burukhin@gmail.com"
            className="flex items-center gap-2 font-mono text-sm text-ink hover:text-stamp transition-colors"
          >
            <Mail size={16} />
            bohdan.burukhin@gmail.com
          </a>

          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
            &copy; {new Date().getFullYear()} Bohdan Burukhin · Rev 2026.05
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
