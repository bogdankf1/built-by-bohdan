"use client";

import { motion } from "framer-motion";
import { apps } from "@/lib/apps";
import AppCard from "./AppCard";

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold tracking-tight mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Apps I&apos;ve built
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {apps.map((app, i) => (
          <AppCard key={app.name} app={app} index={i} />
        ))}
      </div>
    </section>
  );
}
