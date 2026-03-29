"use client";

import { motion } from "framer-motion";
import { Rocket, Layers, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "5 Apps Shipped",
    description: "From idea to production",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    description: "Frontend to backend to deploy",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Building with Claude & TensorFlow.js",
  },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
      <motion.p
        className="text-lg sm:text-xl text-neutral-400 text-center max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        I&apos;m Bohdan — a full-stack developer who loves turning ideas into
        real products. From AI-powered tools to motorsport calendars — if it
        can be built, I&apos;m building it.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        {highlights.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            className="border border-white/5 bg-white/[0.02] rounded-md p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
          >
            <Icon size={24} className="text-accent mb-3" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-neutral-500 mt-1">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
