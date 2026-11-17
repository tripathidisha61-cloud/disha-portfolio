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
        aether: {
          // Dark mode: Deep Ocean
          darkBg: "#0D1B29",          // Deepest Ocean - Main background
          darkSurface: "#122638",     // Midnight Surface - Alternate section
          darkCard: "#1A334A",        // Original Deep Blue - Cards and navigation
          darkElevated: "#1E536E",    // Ocean Blue - Elevated cards / hover
          darkPrimary: "#18A3B7",     // Teal - Primary buttons & actions
          darkAccent: "#27E6EC",      // Electric Cyan - Highlights & indicators
          darkSecondary: "#5AA5CD",   // Arctic Blue - Links & secondary emphasis
          darkViolet: "#6F71A1",      // Mystic Violet - AI/ML & creative highlights
          darkText: "#F2FAFC",        // Primary Text - Headings
          darkMuted: "#B5C8D5",       // Secondary Text - Descriptions
          darkBorder: "#29495D",      // Borders - Card outlines & dividers

          // Light mode: Arctic Ocean
          lightBg: "#F3F8FA",         // Arctic White - Main background
          lightSurface: "#FFFFFF",    // Pure White - Cards & elevated surfaces
          lightSection: "#E5F0F4",    // Ice Blue - Alternate section background
          lightElevated: "#D5E9EB",   // Pale Teal - Selected surfaces
          lightPrimary: "#147F91",    // Ocean Teal - Primary buttons & links
          lightHover: "#106675",      // Deep Teal - Hover & active buttons
          lightSecondary: "#397FA5",  // Sky Blue - Secondary accents
          lightViolet: "#62658F",     // Muted Violet - AI/ML highlights
          lightText: "#142F40",       // Primary Text - Headings
          lightMuted: "#536B79",      // Secondary Text - Body paragraphs
          lightBorder: "#D9E6EC",     // Borders - Dividers & card outlines
          glow: "rgba(24, 163, 183, 0.25)",
          cyanGlow: "rgba(39, 230, 236, 0.35)",
        },
        midnightEng: {
          bg: "#0B1718",          // Main background
          bgSecondary: "#122526", // Secondary background
          card: "#193334",        // Card background
          surface: "#1E2B42",     // Elevated surface
          border: "#203F40",      // Border
          primary: "#2563EB",     // Primary blue
          electric: "#5CC8B2",    // Electric blue
          cyan: "#D6F36A",        // Cyan accent
          text: "#F1F5EF",        // Main text
          secondaryText: "#A6B8B2", // Secondary text
          muted: "#94A3B8",       // Muted text
          glow: "rgba(96, 165, 250, 0.25)",
        },
        royalSlate: {
          bg: "#F1F5EF",        // Light Canvas Background (Slate-50)
          text: "#0F172A",      // Dark Slate High-Contrast Text (Slate-900)
          surface: "#FFFFFF",   // Pure White Card Surface
          border: "#E2E8F0",    // Slate Border (Slate-200)
          primary: "#2563EB",   // Royal Blue Primary CTA (Blue-600)
          hover: "#1D4ED8",     // Royal Blue Hover (Blue-700)
          accent: "#3B82F6",    // Blue Accent (Blue-500)
          lightAccent: "#DBEAFE", // Blue Subtle Badge BG (Blue-100)
          darkBg: "#0F172A",    // Dark Slate Canvas (Slate-900)
          darkSurface: "#1E293B", // Dark Slate Surface (Slate-800)
          darkBorder: "#334155", // Dark Border (Slate-700)
          glow: "rgba(37, 99, 235, 0.25)",
        },
        midnightTeal: {
          bg: "#0F172A",       // Midnight Blue Canvas
          surface: "#1E293B",  // Midnight Blue Card Surface
          border: "#334155",   // Silver Midnight Border
          primary: "#2563EB",  // Teal Primary CTA
          hover: "#1D4ED8",    // Deep Teal Hover
          accent: "#3B82F6",   // Bright Pale Aqua Accent
          silver: "#CBD5E1",   // Silver highlight
          glow: "rgba(37, 99, 235, 0.25)",
        },
        graphite: {
          bg: "#0F172A",       // Graphite Black Background
          surface: "#1E293B",  // Premium Surface / Cards
          border: "#334155",   // Platinum Border
          primary: "#2563EB",  // Blue Primary CTA
          hover: "#1D4ED8",    // Primary Hover
          accent: "#3B82F6",   // Engineering Blue Accent
          platinum: "#E2E8F0", // Platinum highlight
          card: "#FFFFFF",
          glow: "rgba(37, 99, 235, 0.25)",
        },
        midnight: {
          bg: "#0F172A",       // Main Midnight Navy Background
          card: "#1E293B",     // Primary Elevated Card Surface
          border: "#334155",   // Border & Line Accent
          primary: "#2563EB",  // Primary Accent: Electric / Royal Blue
          hover: "#1D4ED8",    // Deep Electric Blue Hover
          accent: "#3B82F6",   // Secondary Accent: Electric Cyan
          glow: "rgba(37, 99, 235, 0.25)",
        },
        ocean: {
          navy: "#0F172A",
          surface: "#1E293B",
          border: "#334155",
          primary: "#2563EB",
          hover: "#1D4ED8",
          bright: "#2563EB",
          cyan: "#3B82F6",
          mist: "#F1F5EF",
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
