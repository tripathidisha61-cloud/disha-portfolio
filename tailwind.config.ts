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
        navy: {
          almostBlack: "#050B14", // Almost-Black Navy (Dark background, deep headings)
          midnight: "#0E1B33",    // Midnight Navy Card Surface (Dark mode)
          border: "#1E2D4A",      // Midnight Navy Border (Dark mode)
          primary: "#3B6FD8",     // Slate Blue (Brand Primary Authority)
          hover: "#2B58B8",       // Deep Slate Blue Hover
          bright: "#5B8BF7",      // Slate Blue Bright (Interactive & High Visibility)
          cool: "#8DA4C4",        // Cool Grey (Badges, Accents, Glows)
          canvas: "#F4F6FA",      // Cool Grey Mist Canvas (Light mode)
          card: "#FFFFFF",        // Pure White Surface (Light mode)
          glow: "rgba(59, 111, 216, 0.20)",
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
