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
        corporate: {
          bg: "#F8FAFC",       // Main Background (Slate-50)
          card: "#FFFFFF",     // White Card Surfaces
          border: "#E2E8F0",   // Slate-200 Border
          text: "#0F172A",     // Slate-900 Main Text
          muted: "#64748B",    // Slate-500 Muted Text
          inset: "#F1F5F9",    // Slate-100 Inset Surface
        },
        royalBlue: {
          primary: "#2563EB",  // Royal Blue (Blue-600)
          hover: "#1D4ED8",    // Deep Royal Blue (Blue-700)
          accent: "#06B6D4",   // Cyan-500 Accent
          light: "#EFF6FF",    // Soft Blue-50 Tint
          glow: "rgba(37, 99, 235, 0.20)",
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
