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
        teal: {
          navy: "#0A1E2F",       // Deep Navy (Dark background, deep headings)
          surface: "#102A43",    // Deep Navy Card Surface (Dark mode)
          border: "#1E4265",     // Navy Border (Dark mode)
          primary: "#0D9488",    // Teal (Brand Primary)
          hover: "#0F766E",      // Deep Teal Hover
          turquoise: "#14B8A6",  // Turquoise (Interactive & High Visibility)
          aqua: "#2DD4BF",       // Pale Aqua (Badges, Accents, Glows)
          canvas: "#F8FCFC",     // Clean White & Pale Aqua Canvas (Light mode)
          card: "#FFFFFF",       // Pure White Surface (Light mode)
          glow: "rgba(13, 148, 136, 0.20)",
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
