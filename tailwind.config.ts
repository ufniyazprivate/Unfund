import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        unfund: {
          navy: "#0A1128",       // Deep Imperial Navy (Primary background/typography)
          dark: "#050814",       // Pure Dark Accent
          cream: "#F7F4EE",      // Warm Cream / Paper Tint
          gold: "#C5A059",       // Metallic Gold Accent
          goldHover: "#B38F48",  // Hover state for Gold CTA
          cardDark: "#101830",   // Glassmorphism card dark base
          borderDark: "#1E294B", // High-contrast structural border
          emerald: "#10B981",    // Verification Status Badge Emerald
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;