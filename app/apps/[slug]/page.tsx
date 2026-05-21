import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { apps } from "@/lib/apps";
import { slugify } from "@/lib/slug";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return apps.map((a) => ({ slug: slugify(a.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((a) => slugify(a.name) === slug);
  if (!app) return {};
  return {
    title: `${app.name} — Built by Bohdan`,
    description: app.description,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = apps.find((a) => slugify(a.name) === slug);
  if (!app) notFound();

  const idx = apps.findIndex((a) => slugify(a.name) === slug) + 1;

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />

      <section className="flex-1 px-4 sm:px-8 pt-24 pb-16 max-w-4xl mx-auto w-full">
        <div className="title-block justify-between">
          <div className="flex items-center gap-3">
            <span className="title-block-tag">DETAIL</span>
            <span>
              FIG.01 · Item [{String(idx).padStart(2, "0")}]
            </span>
          </div>
          <span>Scale 1:1</span>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:text-ink transition-colors"
        >
          <ArrowLeft size={12} /> Back to index
        </Link>

        <div className="mt-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-dim flex items-center gap-3 flex-wrap">
            <span className="text-stamp">{app.status}</span>
            <span>·</span>
            <span>{app.tags.join(" · ")}</span>
          </div>
          <h1 className="mt-4 text-5xl sm:text-7xl font-semibold font-sans uppercase tracking-tight leading-[1.02]">
            <span className="text-stamp">◇</span> {app.name}
          </h1>
          <p className="mt-8 font-sans text-lg sm:text-xl text-ink max-w-2xl leading-relaxed">
            {app.description}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brackets group inline-flex items-center gap-3 px-6 py-4 border border-ink/40 hover:border-stamp transition-colors"
          >
            <span className="br br-tl" />
            <span className="br br-tr" />
            <span className="br br-bl" />
            <span className="br br-br" />
            <span className="font-mono text-sm uppercase tracking-widest text-ink group-hover:text-stamp transition-colors">
              Launch app
            </span>
            <ExternalLink
              size={16}
              className="text-ink group-hover:text-stamp transition-colors"
            />
          </a>
        </div>

        <div className="title-block mt-20">
          <span>Rev 2026.05</span>
          <span>·</span>
          <span>End of figure</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
