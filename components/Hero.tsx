"use client";

import { motion } from "framer-motion";

const lines = [
  { text: "I build things", className: "font-semibold" },
  { text: "for the web.", className: "text-neutral-400" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
          {lines.map((line, i) => (
            <motion.span
              key={i}
              className={`block ${line.className}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-6 text-lg text-neutral-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Full-stack developer. Turning ideas into apps.
        </motion.p>
      </div>
    </section>
  );
}
