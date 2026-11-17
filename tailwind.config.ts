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
        midnight: {
          bg: "#0B1120",       // Main Midnight Navy Background
          card: "#151F32",     // Primary Elevated Card Surface
          border: "#1E293B",   // Border & Line Accent
          primary: "#2563EB",  // Primary Accent: Electric / Royal Blue
          hover: "#1D4ED8",    // Deep Electric Blue Hover
          accent: "#22D3EE",   // Secondary Accent: Electric Cyan
          glow: "rgba(37, 99, 235, 0.25)",
        },
        ocean: {
          navy: "#0B1120",
          surface: "#151F32",
          border: "#1E293B",
          primary: "#2563EB",
          hover: "#1D4ED8",
          bright: "#2563EB",
          cyan: "#22D3EE",
          mist: "#F8FAFC",
          card: "#FFFFFF",
          glow: "rgba(37, 99, 235, 0.25)",
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
