"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-30 h-[600px] w-[600px] rounded-full opacity-0 sm:opacity-100"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
