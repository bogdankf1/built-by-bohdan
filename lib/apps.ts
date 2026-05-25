export type AppStatus = "Live" | "In Progress" | "Offline" | "Redesigning";

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
  device: "phone" | "tablet" | "desktop";
  width: number;
  height: number;
}

export interface App {
  name: string;
  description: string;
  tags: string[];
  status: AppStatus;
  url: string;
  featured?: boolean;
  hidden?: boolean;
  longDescription?: string;
  features?: string[];
  screenshots?: Screenshot[];
}

export const apps: App[] = [
  {
    name: "Race Grid",
    description: "Motorsport calendar combining F1, WEC & IndyCar",
    tags: ["React"],
    status: "Live",
    url: "https://race-grid.com",
    featured: true,
    longDescription:
      "One calendar for every major motorsport series — F1, IndyCar, WEC, IMSA, NASCAR, DTM, GT World Challenge, and more. Pick the series you care about, switch between month, week, and day views, and never miss a quali, sprint, or main race again.\n\nBuilt mobile-first and fully responsive: scan the next race on your phone in the morning, plan your weekend on a tablet, and dig into the full season grid on your laptop — same data, same UI, no compromises.",
    features: [
      "12+ series in one place — F1, IndyCar, WEC, IMSA, NASCAR, DTM, GTWC, ELMS",
      "Month, week, and day calendar views",
      "Per-series browse with season progress (e.g. F1 round 5/22)",
      "Session-level detail: qualifying, sprint, and race times with circuit info",
      "Multi-year history — 2022 through 2026",
      "Circuits and standings views",
      "Mobile-first, responsive from phone to desktop",
    ],
    screenshots: [
      {
        src: "/apps/race-grid/iphone-series.png",
        alt: "Race Grid series listing on iPhone",
        caption: "Series view · iPhone",
        device: "phone",
        width: 1304,
        height: 2864,
      },
      {
        src: "/apps/race-grid/ipad-calendar.png",
        alt: "Race Grid daily calendar on iPad",
        caption: "Calendar daily view · iPad",
        device: "tablet",
        width: 3118,
        height: 2280,
      },
      {
        src: "/apps/race-grid/macbook-monthview.png",
        alt: "Race Grid month calendar in browser on MacBook",
        caption: "Calendar month view · MacBook",
        device: "desktop",
        width: 3818,
        height: 2408,
      },
    ],
  },
  {
    name: "Port Pulse",
    description: "Live portfolio tracker from broker screenshots",
    tags: ["Next.js", "Claude API"],
    status: "Live",
    url: "https://port-pulse-seven.vercel.app",
    featured: true,
  },
  {
    name: "Bolsa",
    description: "Retro CRT terminal for paper trading stocks & ETFs",
    tags: ["Next.js", "Supabase", "Alpaca"],
    status: "Live",
    url: "https://bolsa-dun.vercel.app",
    featured: true,
  },
  {
    name: "AI Paddock",
    description:
      "Desktop app that visualizes Claude Code agent activity as a race car at Spa-Francorchamps",
    tags: ["Tauri", "React", "PixiJS"],
    status: "In Progress",
    url: "https://github.com/bogdankf1/paddock-ai",
    featured: true,
  },
  {
    name: "Dash Dot",
    description: "Duolingo-style Morse code learning app",
    tags: ["Next.js", "Supabase"],
    status: "Live",
    url: "https://dash-dot-five.vercel.app",
  },
  {
    name: "Wealth Vault",
    description: "Personal finance SaaS for tracking and growing wealth",
    tags: ["Next.js", "Supabase"],
    status: "Redesigning",
    url: "https://wealth-vault-inky.vercel.app",
  },
  {
    name: "Meal Craft",
    description: "AI-powered meal planning assistant — currently being redesigned",
    tags: ["Next.js", "Claude API"],
    status: "Redesigning",
    url: "https://meal-craft-five.vercel.app",
  },
  {
    name: "ML Playground",
    description: "Interactive machine learning demos in the browser",
    tags: ["TensorFlow.js", "Three.js"],
    status: "Offline",
    url: "https://ml-playground-sigma.vercel.app",
    hidden: true,
  },
];
