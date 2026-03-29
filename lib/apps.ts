export type AppStatus = "Live" | "In Progress";

export interface App {
  name: string;
  description: string;
  tags: string[];
  status: AppStatus;
  url: string;
}

export const apps: App[] = [
  {
    name: "Race Grid",
    description: "Motorsport calendar combining F1, WEC & IndyCar",
    tags: ["React"],
    status: "Live",
    url: "https://race-grid.com",
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
    status: "In Progress",
    url: "https://wealth-vault-inky.vercel.app",
  },
  {
    name: "Meal Craft",
    description: "AI-powered meal planning assistant",
    tags: ["Next.js", "Claude API"],
    status: "In Progress",
    url: "https://meal-craft-five.vercel.app",
  },
  {
    name: "ML Playground",
    description: "Interactive machine learning demos in the browser",
    tags: ["TensorFlow.js", "Three.js"],
    status: "Live",
    url: "https://ml-playground-sigma.vercel.app",
  },
];
