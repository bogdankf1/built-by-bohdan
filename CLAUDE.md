# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (Turbopack via Next 16)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — Next lint
- `npx tsc --noEmit` — typecheck without emitting (no separate script defined)

No test suite is set up.

## Design system: blueprint / cyanotype

The visual identity is an architectural-drawing aesthetic — graph-paper grid, schematic callouts, numbered figures, monospace labels. Two color modes:

- **Light**: warm cream paper (`#ece4d1`), deep navy ink (`#0f2849`), red stamp (`#b91c1c`)
- **Dark** (default): cyanotype deep blue (`#0c2547`), pale cream ink (`#e9eef5`), warm orange stamp (`#ff8c42`)

### Theming mechanics

Tailwind colors are defined as `rgb(var(--paper-rgb) / <alpha-value>)` in `tailwind.config.ts`, so `bg-paper/40`, `text-ink-dim`, etc. work in both modes without `dark:` variants scattered through components. CSS variables are defined in `:root` (light) and overridden in `.dark` (dark) in `app/globals.css`.

To add a new themed color: add `--foo-rgb: r g b;` to both `:root` and `.dark` in `globals.css`, then add `foo: "rgb(var(--foo-rgb) / <alpha-value>)"` to `tailwind.config.ts`.

The `dark` class is set on `<html>` by an inline script in `app/layout.tsx`'s `<head>` *before* React hydrates — this prevents flash-of-wrong-theme. The script reads `localStorage.theme` (default `dark` if unset). `<html>` has `suppressHydrationWarning` because the class added by that script intentionally differs from SSR output. `ThemeToggle` syncs its state from the live DOM class on mount, not from React state.

### Section convention

Each section opens with a `title-block` (mono uppercase spec line) tagged `FIG.NN · Title`. Currently: FIG.01 Builds (Hero), FIG.02 Profile (About), FIG.03 Contact (Footer). Detail pages use `DETAIL · FIG.01 · Item [NN]`.

### Custom utilities (in `globals.css`, not Tailwind)

- `.title-block` + `.title-block-tag` — schematic section labels
- `.brackets` + `.br.br-{tl,tr,bl,br}` — red corner brackets that fade in on hover. Apply `brackets` to the parent and drop four `<span class="br br-..." />` inside.

The body has the graph-paper grid + paper-grain texture baked into `body { ... }` and `body::after { ... }` — don't replicate per-section.

## Apps catalog → routes & UI

`lib/apps.ts` is the single source of truth. Adding/removing an entry there affects:

1. **Hero grid** (`components/Hero.tsx`) — filters by `!a.hidden`, renders all visible apps
2. **Per-app detail page** (`app/apps/[slug]/page.tsx`) — `generateStaticParams` builds a route for each visible app; slug derived via `lib/slug.ts` (`name.toLowerCase().replace(/\s+/g, "-")`)

Flags:
- `featured?: boolean` — historical, no longer affects layout (all visible apps shown in hero)
- `hidden?: boolean` — excludes from hero grid AND from `generateStaticParams`, so no detail route is built. Use this to temporarily disable an app rather than deleting it.

### Card behavior

Cards in both `Hero.tsx` and `AppCard.tsx` use the same pattern: outer `<Link>` to `/apps/{slug}`, plus an absolutely positioned `<a target="_blank">` external-link icon overlaying the top-right. Nested anchors are invalid, so the external link sits as a sibling overlay (`z-10`), not inside the Link. Status badge has `pr-7` to leave room for the icon.

## Page structure

`app/page.tsx` renders `<Nav>`, `<Hero>`, `<About>`, `<Footer>` — that's the entire home page. Detail pages at `app/apps/[slug]/page.tsx` reuse `<Nav>` and `<Footer>`. Nav links use `/#about` and `/#contact` (with leading slash) so they work from detail routes too.

## Skills

Always invoke available skills (listed in the session's available-skills system reminder) whenever the task matches one of them — don't reimplement what a skill already does. Match per skill description, not just by keyword: e.g. PR review work → `review-pr`, addressing review comments → `address-review`, implementing a ticket → `implement-ticket`, Figma writes → `figma:figma-use` (mandatory before any `use_figma` call), Claude API / Anthropic SDK work → `claude-api`, security review → `security-review`, recurring tasks → `loop` / `schedule`. The available list varies by session, so check it before reaching for a manual workflow.

## Positioning

Copy leans "software engineer first, AI second" — 8+ years full-stack, AI framed as part of the stack. Don't rewrite the Hero/About copy toward generic "AI engineer" framing without checking; this was an intentional repositioning.
