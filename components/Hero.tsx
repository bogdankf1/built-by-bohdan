import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { apps, type App } from "@/lib/apps";
import { slugify } from "@/lib/slug";

const statusInk: Record<App["status"], string> = {
  Live: "text-emerald-700 dark:text-emerald-400",
  "In Progress": "text-stamp",
  Redesigning: "text-sky-700 dark:text-sky-400",
  Offline: "text-ink-dim",
};

export default function Hero() {
  const visible = apps.filter((a) => !a.hidden);

  return (
    <section
      id="apps"
      className="relative min-h-screen flex flex-col px-4 sm:px-8 pt-20 sm:pt-24 pb-8 overflow-x-clip"
    >
      <div className="title-block justify-between">
        <div className="flex items-center gap-3">
          <span className="title-block-tag">FIG.01</span>
          <span className="hidden sm:inline">Builds · Index</span>
          <span className="sm:hidden">Builds</span>
        </div>
        <span>Scale 1:1</span>
      </div>

      <div className="flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full py-8">
        <div className="relative">
          <div className="absolute -top-2 right-0 hidden md:flex items-start gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-dim">
            <div className="border-t border-dashed border-ink-dim w-16 mt-2.5" />
            <div className="border-l border-ink-dim pl-2 py-0.5">
              Since 2018
            </div>
          </div>

          <h1 className="fade-up font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] uppercase">
            Bohdan
            <br />
            Burukhin
          </h1>

          <p
            className="fade-up mt-5 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-ink-dim"
            style={{ animationDelay: "0.12s" }}
          >
            Software Engineer · 8+ yrs · Web · Backend · Mobile
          </p>

          <p
            className="fade-up mt-3 font-mono text-sm sm:text-base text-ink-dim max-w-md"
            style={{ animationDelay: "0.2s" }}
          >
            I build <span className="text-stamp font-semibold">things</span>{" "}
            with AI — engineered, not prompted.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {visible.map((app, i) => (
            <HeroCard key={app.name} app={app} index={i} />
          ))}
        </div>
      </div>

      <div className="title-block justify-between">
        <span>Rev 2026.05</span>
        <a
          href="#about"
          className="flex items-center gap-2 hover:text-ink transition-colors"
        >
          <span>↓ Profile</span>
        </a>
      </div>
    </section>
  );
}

function HeroCard({ app, index }: { app: App; index: number }) {
  return (
    <div
      className="fade-up relative"
      style={{ animationDelay: `${0.25 + index * 0.05}s` }}
    >
      <Link
        href={`/apps/${slugify(app.name)}`}
        className="brackets group flex h-full flex-col p-4 border border-ink/25 hover:border-ink/70 transition-colors bg-paper/40"
      >
        <span className="br br-tl" />
        <span className="br br-tr" />
        <span className="br br-bl" />
        <span className="br br-br" />

        <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim flex items-center justify-between">
          <span>[{String(index + 1).padStart(2, "0")}]</span>
          <span className={`pr-7 ${statusInk[app.status]}`}>{app.status}</span>
        </div>
        <div className="mt-2 text-base font-semibold flex items-center gap-2 font-sans uppercase tracking-tight pr-7">
          <span className="text-stamp">◇</span>
          {app.name}
        </div>
        <p className="mt-1 font-mono text-[11px] text-ink-dim leading-relaxed">
          {app.description}
        </p>
      </Link>
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${app.name} in new tab`}
        className="absolute top-3 right-3 z-10 flex h-5 w-5 items-center justify-center text-ink-dim hover:text-stamp transition-colors"
      >
        <ExternalLink size={13} />
      </a>
    </div>
  );
}
