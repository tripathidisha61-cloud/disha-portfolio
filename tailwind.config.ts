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
        midnightTeal: {
          bg: "#0B1724",       // Midnight Blue Canvas
          surface: "#132238",  // Midnight Blue Card Surface
          border: "#1E3554",   // Silver Midnight Border
          primary: "#0D9488",  // Teal Primary CTA
          hover: "#0F766E",    // Deep Teal Hover
          accent: "#2DD4BF",   // Bright Pale Aqua Accent
          silver: "#CBD5E1",   // Silver highlight
          glow: "rgba(13, 148, 136, 0.25)",
        },
        graphite: {
          bg: "#0B1724",       // Graphite Black Background
          surface: "#132238",  // Premium Surface / Cards
          border: "#1E3554",   // Platinum Border
          primary: "#0D9488",  // Blue Primary CTA
          hover: "#0F766E",    // Primary Hover
          accent: "#2DD4BF",   // Engineering Blue Accent
          platinum: "#E2E8F0", // Platinum highlight
          card: "#FFFFFF",
          glow: "rgba(13, 148, 136, 0.25)",
        },
        midnight: {
          bg: "#0B1724",       // Main Midnight Navy Background
          card: "#132238",     // Primary Elevated Card Surface
          border: "#1E3554",   // Border & Line Accent
          primary: "#0D9488",  // Primary Accent: Electric / Royal Blue
          hover: "#0F766E",    // Deep Electric Blue Hover
          accent: "#2DD4BF",   // Secondary Accent: Electric Cyan
          glow: "rgba(13, 148, 136, 0.25)",
        },
        ocean: {
          navy: "#0B1724",
          surface: "#132238",
          border: "#1E3554",
          primary: "#0D9488",
          hover: "#0F766E",
          bright: "#0D9488",
          cyan: "#2DD4BF",
          mist: "#F8FAFC",
          card: "#FFFFFF",
          glow: "rgba(13, 148, 136, 0.25)",
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
