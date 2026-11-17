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
      <div className="w-9 h-9 rounded-lg border border-[#D9E6EC] dark:border-[#29495D] bg-[#E5F0F4] dark:bg-[#122638]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded-lg text-slate-700 hover:text-[#142F40] dark:text-[#B5C8D5] dark:hover:text-[#18A3B7] hover:bg-[#E5F0F4] dark:hover:bg-[#1A334A] border border-[#D9E6EC] dark:border-[#29495D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#147F91] dark:focus-visible:ring-[#18A3B7]"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#27E6EC] transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#147F91] transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
