"use client";

import { motion } from "framer-motion";
import { Lightbulb, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "Spot a problem worth solving",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Prototype fast, iterate faster",
  },
  {
    icon: Rocket,
    title: "Ship",
    description: "Deploy, measure, improve",
  },
];

export default function HowIBuild() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-semibold tracking-tight mb-16"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        How I build
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-px border-t border-dashed border-white/10" />

        {steps.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.2 }}
          >
            <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-md border border-white/10 bg-[#0a0a0a]">
              <Icon size={24} className="text-accent" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-neutral-500">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
