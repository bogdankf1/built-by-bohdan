"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { App, AppStatus } from "@/lib/apps";
import { slugify } from "@/lib/slug";

interface AppCardProps {
  app: App;
  index: number;
  direction?: "left" | "right";
}

const statusInk: Record<AppStatus, string> = {
  Live: "text-emerald-700 dark:text-emerald-400",
  "In Progress": "text-stamp",
  Redesigning: "text-sky-700 dark:text-sky-400",
  Offline: "text-ink-dim",
};

export default function AppCard({ app, index, direction }: AppCardProps) {
  const xOffset = direction === "left" ? -40 : direction === "right" ? 40 : 0;

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: xOffset, y: direction ? 0 : 16 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/apps/${slugify(app.name)}`}
        className="brackets group flex h-full flex-col p-5 border border-ink/25 hover:border-ink/70 transition-colors bg-paper/40"
      >
        <span className="br br-tl" />
        <span className="br br-tr" />
        <span className="br br-bl" />
        <span className="br br-br" />

        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim flex items-center justify-between">
          <span>[{String(index + 1).padStart(2, "0")}]</span>
          <span className={`pr-7 ${statusInk[app.status]}`}>{app.status}</span>
        </div>
        <h3 className="mt-2 text-xl font-semibold font-sans uppercase tracking-tight flex items-center gap-2 pr-7">
          <span className="text-stamp">◇</span>
          {app.name}
        </h3>
        <p className="mt-2 font-mono text-xs text-ink-dim leading-relaxed">
          {app.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
          {app.tags.map((tag) => (
            <span key={tag}>· {tag}</span>
          ))}
        </div>
      </Link>
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${app.name} in new tab`}
        className="absolute top-4 right-4 z-10 flex h-5 w-5 items-center justify-center text-ink-dim hover:text-stamp transition-colors"
      >
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
}
