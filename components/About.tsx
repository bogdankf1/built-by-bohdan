"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 py-20 max-w-4xl mx-auto"
    >
      <div className="title-block mb-6">
        <span className="title-block-tag">FIG.02</span>
        <span>Profile</span>
      </div>

      <motion.p
        className="text-lg sm:text-2xl text-ink max-w-2xl leading-relaxed font-sans"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        I&apos;m Bohdan — a software engineer with 8+ years in production.
        Frontend by background, full-stack by trade — web, backend, and
        mobile. I&apos;ve been shipping real apps long before AI was the
        headline. Now I apply that craft to AI-powered tools, treating
        Claude, vision, and ML as part of the stack — not the whole story.
      </motion.p>
    </section>
  );
}
