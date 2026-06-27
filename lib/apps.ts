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
  hidden?: boolean;
  longDescription?: string;
  features?: string[];
  screenshots?: Screenshot[];
}

export function isLaunchable(app: App): boolean {
  return app.status !== "In Progress" && app.status !== "Redesigning";
}

export const apps: App[] = [
  {
    name: "Race Grid",
    description: "Motorsport calendar combining F1, WEC & IndyCar",
    tags: ["React"],
    status: "Live",
    url: "https://race-grid.com",
    longDescription:
      "One calendar for every major motorsport series: F1, IndyCar, WEC, IMSA, NASCAR, DTM, GT World Challenge, and more. Pick the series you care about, switch between month, week, and day views, and never miss a quali, sprint, or main race again.\n\nBuilt mobile-first and fully responsive: scan the next race on your phone in the morning, plan your weekend on a tablet, and dig into the full season grid on your laptop. Same data, same UI, no compromises.",
    features: [
      "12+ series in one place: F1, IndyCar, WEC, IMSA, NASCAR, DTM, GTWC, ELMS",
      "Month, week, and day calendar views",
      "Per-series browse with season progress (e.g. F1 round 5/22)",
      "Session-level detail: qualifying, sprint, and race times with circuit info",
      "Multi-year history: 2022 through 2026",
      "Circuits and standings views",
      "Mobile-first, responsive from phone to desktop",
    ],
    screenshots: [
      {
        src: "/apps/race-grid/iphone-series.webp",
        alt: "Race Grid series listing on iPhone",
        caption: "Series view · iPhone",
        device: "phone",
        width: 1304,
        height: 2864,
      },
      {
        src: "/apps/race-grid/ipad-calendar.webp",
        alt: "Race Grid daily calendar on iPad",
        caption: "Calendar daily view · iPad",
        device: "tablet",
        width: 1920,
        height: 1404,
      },
      {
        src: "/apps/race-grid/macbook-monthview.webp",
        alt: "Race Grid month calendar in browser on MacBook",
        caption: "Calendar month view · MacBook",
        device: "desktop",
        width: 1920,
        height: 1211,
      },
    ],
  },
  {
    name: "Wealth Vault",
    description: "Personal finance SaaS for tracking and growing wealth",
    tags: ["Next.js", "FastAPI", "LangGraph"],
    status: "Live",
    url: "https://wealth-vault-inky.vercel.app",
    longDescription:
      "Wealth Vault is a full personal finance platform: income, expenses, accounts, portfolio, goals, budgets, subscriptions, installments, debts, and taxes, all in one place. Track net worth across multiple currencies with live exchange rates, connect a bank through Monobank, and read every module back as charts: subscriptions and expenses by category, how income is allocated, and where your money actually sits.\n\nThe AI work runs deeper than a chat box. Drop in a bank statement or a screenshot and a vision pipeline pulls out the transactions, categorizes them, and learns from your corrections. The Ask AI button is a LangGraph agent with a real routing, compute, retrieve, and validate graph, so questions like \"can I afford this?\" or \"how did spending change last quarter?\" get answered from your own numbers and streamed back token by token. Underneath it, a pgvector RAG store embeds your documents and records for semantic search and citations.",
    features: [
      "Ten finance modules: income, expenses, accounts, portfolio, goals, budgets, subscriptions, installments, debts, taxes",
      "Net worth across multiple currencies with live exchange rates and a fallback cache",
      "Bank sync through Monobank, plus statement and screenshot import via a vision pipeline",
      "AI categorization that learns from your corrections",
      "Ask AI: a LangGraph agent that answers from your real numbers with built-in financial tools, streamed token by token",
      "pgvector RAG store for semantic search and cited answers over your own records",
      "AI insights surface spending patterns, savings opportunities, and anomalies",
      "Tier-based access with Stripe billing, PWA install, mobile nav, and light and dark themes",
    ],
    screenshots: [
      {
        src: "/apps/wealth-vault/iphone-portfolio.webp",
        alt: "Wealth Vault Apple stock asset detail on iPhone",
        caption: "Asset detail · iPhone",
        device: "phone",
        width: 1304,
        height: 3017,
      },
      {
        src: "/apps/wealth-vault/ipad-analytics.webp",
        alt: "Wealth Vault financial analytics charts on iPad",
        caption: "Financial analytics · iPad",
        device: "tablet",
        width: 2280,
        height: 3118,
      },
      {
        src: "/apps/wealth-vault/macbook-dashboard.webp",
        alt: "Wealth Vault dashboard with net worth and analytics in browser on MacBook",
        caption: "Dashboard · MacBook",
        device: "desktop",
        width: 3802,
        height: 2414,
      },
    ],
  },
  {
    name: "Alvorada",
    description: "Civilization-style 4X strategy game in the browser",
    tags: ["TypeScript", "React", "Canvas"],
    status: "Live",
    url: "https://alvorada-omega.vercel.app",
    longDescription:
      "Alvorada is a turn-based 4X strategy game in the spirit of Civilization, played entirely in the browser. Found cities, work the land around them, send warriors and settlers across a hex world, and climb a tech tree that runs from Pottery and Bronze Working in the Ancient Era all the way to the Industrial age. Win by conquest or by the weight of your civilization's score.\n\nUnder the parchment map is a pure, deterministic game engine: no backend, no image assets, every tile, unit, and banner painted procedurally onto a canvas. A whole match is captured by its config and action log, so replays come out bit-identical, which is the foundation a future multiplayer mode will stand on. The rival AI plays by the same rules and the same fog you do, and the Counsel screen shows every decision it made with the reason behind it.",
    features: [
      "Hex-map 4X loop: explore, expand, build, and fight for victory by conquest or score",
      "Tech tree from the Ancient Era to the Industrial age, from Pottery to Electricity",
      "Found and grow cities, assign specialists, and build wonders like the Pyramids and the Great Library",
      "Workers reshape the land: farms, mines, roads, lumber mills, and cleared forest",
      "Units promote with XP, fortify, embark, and go obsolete as better ones arrive",
      "Explainable AI: the Counsel screen lists every rival decision with its stated reason",
      "Deterministic engine: a match replays bit for bit from its action log alone",
      "Runs fully client-side: autosave each round, export and import saves, no account needed",
    ],
    screenshots: [
      {
        src: "/apps/alvorada/ipad-tech-tree.webp",
        alt: "Alvorada tech tree on iPad",
        caption: "Tech tree · iPad",
        device: "tablet",
        width: 3118,
        height: 2280,
      },
      {
        src: "/apps/alvorada/macbook-map.webp",
        alt: "Alvorada hex world map with a city and unit in browser on MacBook",
        caption: "World map · MacBook",
        device: "desktop",
        width: 3802,
        height: 2414,
      },
    ],
  },
  {
    name: "Bolsa",
    description: "Retro CRT terminal for paper trading stocks & ETFs",
    tags: ["Next.js", "Supabase", "Alpaca"],
    status: "Live",
    url: "https://bolsa-dun.vercel.app",
    longDescription:
      "Bolsa is a phosphor-green CRT terminal for paper trading stocks and ETFs against Alpaca's paper account. Watchlists, candlestick and line charts across nine timeframes, market and limit orders, live quotes, portfolio P&L, and a full trade log. Keyboard-first, no chrome, no real money on the line.\n\nThe twist is the MCP server: every tool the UI exposes is also wired up for Claude (or any MCP-aware agent) to drive directly. Start a named session, watch the agent log its reasoning in real time over Supabase realtime, place orders, run backtests on historical bars. The human spectates through the same view, and can hit STOP at any moment.",
    features: [
      "Retro CRT aesthetic: phosphor green, scanlines, keyboard-first, no chrome",
      "Watchlist, positions, agent, and P&L panels in one terminal view",
      "Candlestick and line charts across 9 timeframes (1m to 1Y)",
      "Market and limit orders against Alpaca's paper account",
      "Live quotes plus portfolio metrics: day P&L, unrealized, cash, position count",
      "Trade log with per-fill P&L and CSV export",
      "Backtest historical bars per symbol and timeframe",
      "MCP server lets Claude drive every action, with a STOP switch you own",
    ],
    screenshots: [
      {
        src: "/apps/bolsa/ipad-positions.webp",
        alt: "Bolsa positions panel on iPad",
        caption: "Positions · iPad",
        device: "tablet",
        width: 2280,
        height: 3118,
      },
      {
        src: "/apps/bolsa/macbook-terminal.webp",
        alt: "Bolsa terminal with watchlist, chart, order entry, and trade log on MacBook",
        caption: "Terminal · MacBook",
        device: "desktop",
        width: 3824,
        height: 2386,
      },
      {
        src: "/apps/bolsa/ipad-pnl.webp",
        alt: "Bolsa P&L and backtests panel on iPad",
        caption: "P&L and backtests · iPad",
        device: "tablet",
        width: 3118,
        height: 2280,
      },
    ],
  },
  {
    name: "Dash Dot",
    description: "Duolingo-style Morse code learning app",
    tags: ["Next.js", "Supabase"],
    status: "Live",
    url: "https://dash-dot-five.vercel.app",
    longDescription:
      "Learn Morse code the same way you'd learn a language: short daily lessons, mnemonics, hearts, and a streak you don't want to break. Dash Dot teaches every letter and number with audio, visual, and tap-along practice, and tracks every lesson, accuracy %, and letter mastered.\n\nChapters introduce a handful of characters at a time, easy pairs first, harder ones later. Practice mode mixes everything you've learned so far. No install, just open the URL and pick up where you left off.",
    features: [
      "Full Morse alphabet: 26 letters + 10 numbers",
      "Audio, visual, and mnemonic for every character",
      "Chapter-based progression, easy pairs first",
      "Practice mode mixes everything you've learned",
      "Hearts, XP, and a Duolingo-style streak loop",
      "Progress dashboard: XP, mastery, accuracy, lessons completed",
      "Auth and per-account progress stored in Supabase",
      "Works on phone, tablet, and desktop. Same login everywhere",
    ],
    screenshots: [
      {
        src: "/apps/dash-dot/iphone-chapters.webp",
        alt: "Dash Dot chapter list on iPhone",
        caption: "Chapters · iPhone",
        device: "phone",
        width: 1304,
        height: 3017,
      },
      {
        src: "/apps/dash-dot/ipad-progress.webp",
        alt: "Dash Dot progress dashboard on iPad",
        caption: "Progress dashboard · iPad",
        device: "tablet",
        width: 1920,
        height: 1404,
      },
      {
        src: "/apps/dash-dot/macbook-exercise.webp",
        alt: "Dash Dot exercise view in browser on MacBook",
        caption: "Exercise view · MacBook",
        device: "desktop",
        width: 1920,
        height: 1210,
      },
    ],
  },
  {
    name: "Jogora",
    description: "Duolingo-style platform for learning game theory",
    tags: ["Next.js", "Supabase"],
    status: "Live",
    url: "https://jogora.vercel.app",
    longDescription:
      "Jogora teaches game theory the way you'd learn a language: short lessons, daily streaks, XP, and a glossary that grows as you go. Concepts come in intuition-first: read a scenario, build a payoff matrix, find the dominant move, then meet the formal definition. Manuscript-style typography keeps it feeling closer to a textbook than a flashcard app.\n\nWorks fully anonymous out of the box. Progress lives in localStorage, no login required. Sign in with Google to sync your XP, streak, and lesson history across devices. Every term you encounter lands in a searchable glossary, grouped by the chapter where it first appeared.",
    features: [
      "Chapter-based curriculum: Foundations, Core Concepts, and beyond",
      "Mixed exercise types: multiple choice, matrix building, numeric input",
      "Intuition-first pedagogy: scenario → matrix → formal definition",
      "Searchable glossary auto-built from the lessons you've completed",
      "XP, hearts, and a streak counter to keep you coming back",
      "Anonymous-first: full app works without an account",
      "Optional Google sign-in syncs progress across phone, tablet, and laptop",
      "Manuscript-style typography with light and dark modes",
    ],
    screenshots: [
      {
        src: "/apps/jogora/iphone-glossary.webp",
        alt: "Jogora glossary on iPhone",
        caption: "Glossary · iPhone",
        device: "phone",
        width: 1304,
        height: 3017,
      },
      {
        src: "/apps/jogora/ipad-lesson.webp",
        alt: "Jogora lesson exercise on iPad",
        caption: "Lesson exercise · iPad",
        device: "tablet",
        width: 2280,
        height: 3118,
      },
      {
        src: "/apps/jogora/macbook-chapter.webp",
        alt: "Jogora chapter overview in browser on MacBook",
        caption: "Chapter overview · MacBook",
        device: "desktop",
        width: 3824,
        height: 2416,
      },
    ],
  },
  {
    name: "Amperender",
    description: "Learn electricity with a live circuit simulator",
    tags: ["Next.js", "TypeScript"],
    status: "Live",
    url: "https://amperender.vercel.app",
    longDescription:
      "Amperender teaches electricity from the absolute basics (what is voltage?) up through real electronics, with a live circuit simulator at the heart of every concept. Drag a slider, watch the current change, then meet Ohm's law once the intuition is already there. Water-pipe analogies first, formal equations after.\n\nThree modes work together: Learning runs the structured curriculum (units → lessons → exercises, Duolingo-style), Workshop offers pre-built scenarios to poke at (Ohm's law, voltage divider, transistor as switch, MCU drives an LED), and Sandbox is a blank schematic where you wire up your own circuits with batteries, resistors, LEDs, switches, and ammeters. Every concept is technically honest, no misleading oversimplification.",
    features: [
      "Live circuit simulator: solves the circuit as you drag knobs",
      "Three modes: Learning curriculum, Workshop scenarios, free Sandbox",
      "Pre-built scenarios: Ohm's law, voltage divider, AC mains, transistor switch, MCU drives an LED",
      "Schematic editor with batteries, resistors, LEDs, switches, ammeters, wires",
      "Three save slots in the sandbox for your own circuits",
      "Intuition-first pedagogy: water analogies before formal equations",
      "Anonymous-first: full experience without an account",
      "XP, streaks, and lesson unlocking gate progression naturally",
    ],
    screenshots: [
      {
        src: "/apps/amperender/iphone-sandbox.webp",
        alt: "Amperender sandbox on iPhone",
        caption: "Sandbox · iPhone",
        device: "phone",
        width: 1304,
        height: 3017,
      },
      {
        src: "/apps/amperender/ipad-lessons.webp",
        alt: "Amperender lesson list on iPad",
        caption: "Lessons · iPad",
        device: "tablet",
        width: 3118,
        height: 2280,
      },
      {
        src: "/apps/amperender/macbook-circuit.webp",
        alt: "Amperender Ohm's law workshop scenario on MacBook",
        caption: "Workshop · MacBook",
        device: "desktop",
        width: 3820,
        height: 2405,
      },
    ],
  },
  {
    name: "Port Pulse",
    description: "Live portfolio tracker from broker screenshots",
    tags: ["Next.js", "Claude API"],
    status: "Live",
    url: "https://port-pulse-seven.vercel.app",
    longDescription:
      "Port Pulse turns a screenshot of your broker into a live portfolio dashboard. Drop in a screenshot from any broker, let Claude vision extract your holdings, then watch the portfolio update against the live market: sector breakdowns, risk metrics, P&L per position, and a heatmap view sized by allocation.\n\nNo CSV exports, no manual data entry, no broker integrations. Screenshot in, live portfolio out.",
    features: [
      "Drop in any broker screenshot. Claude vision extracts every position",
      "Live market prices via real-time quote feed",
      "Table and heatmap views, switch with one tap",
      "Sector allocation donut chart with totals and percentages",
      "Risk metrics: Sharpe, Beta vs SPY, volatility, max drawdown",
      "Per-position P&L with absolute and percentage change",
      "Multiple portfolios, multi-symbol support",
      "Light and dark themes, responsive phone to desktop",
    ],
    screenshots: [
      {
        src: "/apps/port-pulse/iphone-holdings.webp",
        alt: "Port Pulse holdings list on iPhone",
        caption: "Holdings list · iPhone",
        device: "phone",
        width: 1304,
        height: 2864,
      },
      {
        src: "/apps/port-pulse/ipad-heatmap.webp",
        alt: "Port Pulse heatmap view on iPad",
        caption: "Heatmap view · iPad",
        device: "tablet",
        width: 1920,
        height: 1404,
      },
      {
        src: "/apps/port-pulse/macbook-table.webp",
        alt: "Port Pulse table view in browser on MacBook",
        caption: "Table view · MacBook",
        device: "desktop",
        width: 1920,
        height: 1210,
      },
    ],
  },
  {
    name: "Paddock AI",
    description:
      "Desktop app that races Claude Code agents around Spa-Francorchamps",
    tags: ["Tauri", "React", "PixiJS"],
    status: "In Progress",
    url: "https://github.com/bogdankf1/paddock-ai",
    longDescription:
      "Paddock AI is a desktop app that wraps Claude Code and turns every running agent into a race car on the Spa-Francorchamps circuit. The metaphor is load-bearing: planning is a pit stop, executing is a hot lap, tokens are fuel, and errors raise yellow or red flags over the track. Type a prompt, hit run, and watch the agent drive its lap in real time.\n\nEach prompt spawns its own car, colored and shaped by model family, so an Opus run and a Sonnet run can share the track at once with separate fuel gauges and transcripts. Follow-up messages resume the same agent, and a weather overlay shifts as error states pile up across the grid. It is built as a native shell in Tauri and Rust, with a Pixi.js canvas for the track and React for the panels, driving the claude CLI as a streaming subprocess.",
    features: [
      "Every Claude Code agent becomes a car driving a lap of Spa-Francorchamps",
      "Load-bearing metaphor: planning is a pit stop, executing a hot lap, tokens are fuel",
      "Multi-agent: each prompt spawns its own car, colored and shaped by model family (F1, GT, kart)",
      "Cars move between pit lane and track as Claude lifecycle events fire",
      "Per-agent fuel gauge tracks token burn in real time",
      "Structured transcript per agent, with follow-ups that resume the same run",
      "Weather overlay reacts to error state across the whole grid",
      "Native shell in Tauri and Rust, Pixi.js track, React panels, claude CLI subprocess",
    ],
    screenshots: [
      {
        src: "/apps/paddock-ai/macbook-track.webp",
        alt: "Paddock AI desktop app showing two Claude agents as cars on the Spa-Francorchamps track on MacBook",
        caption: "Two agents on track · MacBook",
        device: "desktop",
        width: 3802,
        height: 2414,
      },
    ],
  },
  {
    name: "Meal Craft",
    description: "AI-powered meal planning assistant, currently being redesigned",
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
