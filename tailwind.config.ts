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
        graphite: {
          bg: "#111315",       // Graphite Black Background
          surface: "#20252B",  // Premium Surface / Cards
          border: "#2D3540",   // Platinum Border
          primary: "#3B82F6",  // Blue Primary CTA
          hover: "#2563EB",    // Primary Hover
          accent: "#60A5FA",   // Engineering Blue Accent
          platinum: "#E2E8F0", // Platinum highlight
          card: "#FFFFFF",
          glow: "rgba(96, 165, 250, 0.25)",
        },
        midnight: {
          bg: "#111315",       // Main Midnight Navy Background
          card: "#20252B",     // Primary Elevated Card Surface
          border: "#2D3540",   // Border & Line Accent
          primary: "#3B82F6",  // Primary Accent: Electric / Royal Blue
          hover: "#2563EB",    // Deep Electric Blue Hover
          accent: "#60A5FA",   // Secondary Accent: Electric Cyan
          glow: "rgba(96, 165, 250, 0.25)",
        },
        ocean: {
          navy: "#111315",
          surface: "#20252B",
          border: "#2D3540",
          primary: "#3B82F6",
          hover: "#2563EB",
          bright: "#3B82F6",
          cyan: "#60A5FA",
          mist: "#F8FAFC",
          card: "#FFFFFF",
          glow: "rgba(96, 165, 250, 0.25)",
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
