"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-[#080808]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <a href="#" className="text-lg font-semibold tracking-tight">
        Bohdan
      </a>
      <div className="flex gap-6 text-sm text-neutral-400">
        <a
          href="#work"
          className="transition-colors hover:text-white"
        >
          Work
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
