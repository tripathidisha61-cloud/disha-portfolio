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
        ocean: {
          navy: "#0B192C",       // Deep Navy (Background in Dark, Primary Text in Light)
          surface: "#112240",    // Deep Navy Card Surface (Dark mode)
          border: "#1E3A5F",     // Deep Navy Border (Dark mode)
          primary: "#0284C7",    // Ocean Blue (Brand Primary)
          hover: "#0369A1",      // Deep Ocean Blue Hover
          bright: "#0EA5E9",     // Bright Blue (Interactive & High Visibility)
          cyan: "#38BDF8",       // Light Cyan (Badges, Accents, Glows)
          mist: "#F0F7FF",       // Ocean Mist Light Canvas
          card: "#FFFFFF",       // Pure White Surface (Light mode)
          glow: "rgba(2, 132, 199, 0.20)",
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
