"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 sm:px-8 py-3 transition-colors duration-300 font-mono text-[11px] uppercase tracking-widest ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-dashed border-ink/30"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-2 text-ink font-semibold">
        <Logo size={22} />
        <span className="hidden sm:inline">Built by Bohdan</span>
        <span className="sm:hidden">BxB</span>
      </Link>
      <div className="flex items-center gap-5 text-ink-dim">
        <Link
          href="/#about"
          className="transition-colors hover:text-ink"
        >
          About
        </Link>
        <Link
          href="/#contact"
          className="transition-colors hover:text-ink"
        >
          Contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
