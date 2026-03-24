# Portfolio Site — Claude Code Brief

## Overview

Build a personal portfolio website for Bohdan, a full-stack developer & builder.
The site showcases his apps, communicates who he is, and provides minimal contact info.
No auth, no backend, no database. Pure Next.js static site.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Use `next/font` with Google Fonts
- **SEO**: Next.js Metadata API
- **Deployment target**: Vercel (static export friendly)

---

## Aesthetic Direction

**Dark futuristic** — think Vercel, Linear, Raycast.

- Background: near-black (`#080808` or `#0a0a0a`)
- Text: crisp off-white (`#f0f0f0`)
- Accent: a single sharp color — electric blue (`#3b82f6`) or acid green (`#a3e635`) — pick whichever feels more "builder" during implementation
- Subtle grain/noise texture overlay on the background (CSS or SVG filter)
- Sharp, geometric typography — use **Geist** (display) + **Geist Mono** (code/labels) from Google Fonts or Vercel's Geist package
- Micro-animations: staggered fade-in on page load, subtle hover lift on cards, smooth underline on links
- No rounded-corner excess — use `rounded-md` at most on cards, sharp elsewhere
- Grid lines or dot-grid background pattern in the hero section (subtle, low opacity)

---

## Page Structure

Single-page layout (`/`). All sections scroll vertically.

### 1. Navigation (sticky top bar)

- Left: Name or monogram — `Bohdan` in Geist, semibold
- Right: Anchor links — `Work`, `Contact`
- On mobile: same layout, no hamburger needed (links collapse gracefully or stay as icons)
- Subtle `backdrop-blur` + semi-transparent background when scrolled

### 2. Hero Section

- Large headline (2–3 lines), something like:
  > **I build things**
  > for the web.
- Subline: `Full-stack developer. Turning ideas into apps.`
- Animated text reveal on load (staggered per word or line using Framer Motion)
- Dot-grid or subtle geometric SVG pattern in the background
- No CTA button — just the statement. Let the work section speak.

### 3. Work / Apps Section (`#work`)

Section heading: `Work` or `Apps I've built`

Display apps as a **grid of cards** (2 columns desktop, 1 column mobile).

Each card:
- App name (large, sharp)
- One-line description
- Tech tags (small monospace labels, e.g. `Next.js`, `Supabase`)
- Status badge: `Live` / `In Progress`
- Subtle hover effect: slight upward translate + border glow in accent color
- Click → opens external URL in new tab

#### Apps to include:

| Name | Description | Tags | Status | URL |
|---|---|---|---|---|
| Dash Dot | Duolingo-style Morse code learning app | `Next.js` `Supabase` | Live | _placeholder_ |
| Wealth Vault | Personal finance SaaS for tracking and growing wealth | `Next.js` `Supabase` | In Progress | _placeholder_ |
| MealCraft | AI-powered meal planning assistant | `Next.js` `Claude API` | In Progress | _placeholder_ |
| Race Grid | Motorsport calendar combining F1, WEC & IndyCar | `React` | Live | _placeholder_ |
| ML Playground | Interactive machine learning demos in the browser | `TensorFlow.js` `Three.js` | Live | _placeholder_ |

All URLs are `#` placeholders — easy to swap later.

### 4. Footer / Contact (`#contact`)

Minimal. Two rows:

**Row 1** — Social links as icon buttons (Lucide icons):
- GitHub
- LinkedIn
- YouTube
- Telegram

**Row 2** — Email as plain text link: `hello@bohdan.dev` (placeholder)

Small copyright line: `© 2025 Bohdan`

No contact form.

---

## SEO

Use Next.js `metadata` export in `app/layout.tsx`:

```ts
export const metadata: Metadata = {
  title: 'Bohdan — Full-Stack Developer & Builder',
  description: 'Full-stack developer building web apps, tools, and learning experiences. Explore my work.',
  openGraph: {
    title: 'Bohdan — Full-Stack Developer & Builder',
    description: 'Full-stack developer building web apps, tools, and learning experiences.',
    url: 'https://bohdan.dev', // placeholder
    siteName: 'Bohdan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bohdan — Full-Stack Developer & Builder',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

Add a `robots.txt` and basic `sitemap.xml` via Next.js route handlers or static files.

---

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 640px`) | Single column, reduced font sizes, nav links hidden or icon-only |
| Tablet (`640–1024px`) | Single column cards, full nav |
| Desktop (`> 1024px`) | 2-column card grid, full layout |

Use Tailwind responsive prefixes throughout (`sm:`, `md:`, `lg:`).

---

## File Structure

```
/app
  layout.tsx         ← metadata, fonts, global styles
  page.tsx           ← composes all sections
/components
  Nav.tsx
  Hero.tsx
  Work.tsx
  AppCard.tsx
  Footer.tsx
/lib
  apps.ts            ← app data array (name, description, tags, status, url)
/public
  favicon.ico
  og-image.png       ← placeholder OG image (can be simple dark card with name)
```

---

## Implementation Notes

- Keep `apps.ts` as a simple typed array — easy to update URLs or add apps later
- All animations via Framer Motion `motion.div` with `initial`, `animate`, `transition` — no CSS keyframes
- Grain texture: use an SVG `feTurbulence` filter or a tiny base64 PNG overlay at 3–5% opacity
- Dot-grid hero background: pure CSS using `radial-gradient` on `background-image`
- No `<form>` elements anywhere on the page
- Ensure `<a>` tags for external links have `target="_blank" rel="noopener noreferrer"`
- All images (if any) use `next/image` with `alt` text
- Lighthouse score target: 95+ on Performance, 100 on Accessibility and SEO

---

## Out of Scope

- Authentication
- Backend / API routes
- CMS
- Blog
- Contact form
- Dark/light toggle (dark only)
