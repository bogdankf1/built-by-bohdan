"use client";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Claude API",
  "TensorFlow.js",
  "Three.js",
  "Framer Motion",
  "Vercel",
];

export default function TechMarquee() {
  return (
    <div className="relative py-12 overflow-hidden border-y border-white/5">
      {/* Edge fade masks */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {[...techs, ...techs].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 sm:mx-10 text-sm font-mono text-neutral-500 uppercase tracking-widest"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* Invisible spacer to maintain height */}
      <div className="invisible text-sm font-mono uppercase tracking-widest">
        &nbsp;
      </div>
    </div>
  );
}
