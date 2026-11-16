import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          dark: "#062018",       // Dark Forest Green (Dark background, deep headings)
          surface: "#0F2E23",    // Forest Pine Card Surface (Dark mode)
          border: "#1A4736",     // Forest Border (Dark mode)
          emerald: "#059669",    // Emerald Green (Brand Primary)
          hover: "#047857",      // Deep Emerald Hover
          mint: "#10B981",       // Mint Green (Interactive & High Visibility)
          pale: "#34D399",       // Pale Mint Green (Badges, Accents, Glows)
          dew: "#F2FBF7",        // Pale Green Dew Canvas (Light mode)
          card: "#FFFFFF",       // Pure White Surface (Light mode)
          glow: "rgba(5, 150, 105, 0.20)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
