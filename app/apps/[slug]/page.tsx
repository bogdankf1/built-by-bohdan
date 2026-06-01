import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { apps, isLaunchable, type Screenshot } from "@/lib/apps";
import { slugify } from "@/lib/slug";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return apps.filter((a) => !a.hidden).map((a) => ({ slug: slugify(a.name) }));
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

const deviceMaxW: Record<Screenshot["device"], string> = {
  phone: "max-w-[280px] sm:max-w-[320px]",
  tablet: "max-w-3xl",
  desktop: "max-w-5xl lg:max-w-[1320px]",
};

const devicePairedMaxW: Record<Screenshot["device"], string> = {
  phone: "max-w-[280px] sm:max-w-[320px] lg:max-w-[200px]",
  tablet: "max-w-3xl lg:max-w-[1080px]",
  desktop: "max-w-5xl",
};

function groupScreenshots(shots: Screenshot[]): Screenshot[][] {
  const rows: Screenshot[][] = [];
  let buf: Screenshot[] = [];
  for (const s of shots) {
    if (s.device === "desktop") {
      if (buf.length > 0) {
        rows.push(buf);
        buf = [];
      }
      rows.push([s]);
    } else {
      buf.push(s);
      if (buf.length === 2) {
        rows.push(buf);
        buf = [];
      }
    }
  }
  if (buf.length > 0) rows.push(buf);
  return rows;
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

      <section className="flex-1 pt-24 pb-16 w-full">
        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
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

        <div className="mt-10 max-w-3xl">
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

        {isLaunchable(app) && (
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
        )}

        {app.longDescription && (
          <div className="mt-20">
            <div className="title-block mb-6">
              <span className="title-block-tag">
                {idx}.1
              </span>
              <span>Overview</span>
            </div>
            <div className="font-sans text-base sm:text-lg text-ink leading-relaxed max-w-2xl whitespace-pre-line">
              {app.longDescription}
            </div>
          </div>
        )}

        {app.features && app.features.length > 0 && (
          <div className="mt-16">
            <div className="title-block mb-6">
              <span className="title-block-tag">
                {idx}.2
              </span>
              <span>Features</span>
            </div>
            <ul className="space-y-3 max-w-2xl">
              {app.features.map((f, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-baseline font-sans text-sm sm:text-base text-ink"
                >
                  <span className="font-mono text-stamp text-[10px] uppercase tracking-widest shrink-0">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        </div>

        {app.screenshots && app.screenshots.length > 0 && (
          <div className="px-4 sm:px-8 max-w-[1400px] mx-auto mt-16">
            <div className="title-block mb-8">
              <span className="title-block-tag">
                {idx}.3
              </span>
              <span>Screens</span>
            </div>
            <div className="flex flex-col gap-14 items-center">
              {groupScreenshots(app.screenshots).map((row, rowIdx) => {
                const paired = row.length === 2;
                return (
                  <div
                    key={rowIdx}
                    className={
                      paired
                        ? "w-full flex flex-col lg:flex-row gap-14 lg:gap-10 lg:items-center lg:justify-center"
                        : "w-full flex flex-col items-center"
                    }
                  >
                    {row.map((s) => {
                      const ssIdx = app.screenshots!.indexOf(s);
                      const maxW = paired
                        ? devicePairedMaxW[s.device]
                        : deviceMaxW[s.device];
                      return (
                        <figure
                          key={s.src}
                          className="w-full flex flex-col items-center"
                        >
                          <div className="title-block mb-3">
                            <span className="text-ink">
                              SS-{String(ssIdx + 1).padStart(2, "0")}
                            </span>
                            <span>· {s.device}</span>
                          </div>
                          <div
                            className={`brackets brackets-on relative w-full ${maxW} p-2 sm:p-3 border border-ink/30 bg-paper-deep/40`}
                          >
                            <span className="br br-tl" />
                            <span className="br br-tr" />
                            <span className="br br-bl" />
                            <span className="br br-br" />
                            <Image
                              src={s.src}
                              alt={s.alt}
                              width={s.width}
                              height={s.height}
                              className="w-full h-auto"
                              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 70vw, 1024px"
                            />
                          </div>
                          {s.caption && (
                            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-widest text-ink-dim text-center">
                              {s.caption}
                            </figcaption>
                          )}
                        </figure>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="px-4 sm:px-8 max-w-5xl mx-auto">
          <div className="title-block mt-24">
            <span>Rev 2026.05</span>
            <span>·</span>
            <span>End of figure</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
