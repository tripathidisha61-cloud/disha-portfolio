"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg border border-[#D8E2D7] dark:border-[#203F40] bg-[#EBF1EA] dark:bg-[#122526]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg text-slate-700 hover:text-[#142522] dark:text-[#A6B8B2] dark:hover:text-[#5CC8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] border border-[#D8E2D7] dark:border-[#203F40] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#246D61] dark:focus-visible:ring-[#5CC8B2]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#D6F36A] transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#246D61] transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
