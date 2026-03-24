"use client";

import { motion } from "framer-motion";
import type { App } from "@/lib/apps";

interface AppCardProps {
  app: App;
  index: number;
}

export default function AppCard({ app, index }: AppCardProps) {
  return (
    <motion.a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/5 bg-white/[0.02] p-6 rounded-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{app.name}</h3>
        <span
          className={`shrink-0 rounded px-2 py-0.5 text-xs font-mono ${
            app.status === "Live"
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-amber-500/10 text-amber-400"
          }`}
        >
          {app.status}
        </span>
      </div>
      <p className="mt-2 text-sm text-neutral-400">{app.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {app.tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-white/5 px-2 py-0.5 text-xs font-mono text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
