"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight, Terminal, Search, Zap } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
  onOpenRecruiter?: () => void;
}

export function Navbar({ onOpenCommandPalette, onOpenRecruiter }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F7F3]/90 dark:bg-[#0B1718]/90 backdrop-blur-md border-b border-[#D8E2D7] dark:border-[#203F40] shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-[#142522] dark:text-[#F1F5EF] hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[#246D61] dark:bg-[#5CC8B2] text-white dark:text-[#0B1718] flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(92,200,178,0.35)] group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              disha<span className="text-[#8BAE44] dark:text-[#D6F36A]">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname === "/" && activeSection === link.href.replace("/", ""));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#246D61] dark:text-[#D6F36A] bg-[#8BAE44]/15 dark:bg-[#D6F36A]/10 font-semibold"
                      : "text-slate-600 dark:text-[#A6B8B2] hover:text-[#142522] dark:hover:text-[#F1F5EF] hover:bg-[#EBF1EA] dark:hover:bg-[#193334]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {onOpenCommandPalette && (
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 dark:text-[#A6B8B2] hover:text-[#142522] dark:hover:text-[#F1F5EF] rounded-lg border border-[#D8E2D7] dark:border-[#203F40] bg-white dark:bg-[#193334] hover:bg-[#EBF1EA] dark:hover:bg-[#203F40] transition-colors shadow-xs"
                aria-label="Open Command Palette (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#246D61] dark:text-[#5CC8B2]" />
                <kbd className="hidden lg:inline-block text-[10px] font-mono px-1 py-0.5 rounded bg-[#EBF1EA] dark:bg-[#122526] text-slate-600 dark:text-[#A6B8B2]">
                  ⌘K
                </kbd>
              </button>
            )}

            {onOpenRecruiter && (
              <button
                type="button"
                onClick={onOpenRecruiter}
                className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#8BAE44]/40 bg-[#8BAE44]/10 text-[#246D61] hover:bg-[#8BAE44]/20 dark:border-[#D6F36A]/30 dark:bg-[#D6F36A]/10 dark:text-[#D6F36A] dark:hover:bg-[#D6F36A]/20 transition-colors"
                aria-label="Open Recruiter Fast-Track"
              >
                <Zap className="w-3.5 h-3.5 text-[#8BAE44] dark:text-[#D6F36A]" />
                <span>Fast-Track</span>
              </button>
            )}

            <Link
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D8E2D7] dark:border-[#203F40] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] text-[#142522] dark:text-[#F1F5EF] transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-slate-600 dark:text-[#A6B8B2] hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D8E2D7] dark:border-[#203F40] bg-[#F4F7F3]/95 dark:bg-[#0B1718]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1 transition-all">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-[#EBF1EA] dark:hover:bg-[#193334] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[#D8E2D7] dark:border-[#203F40] space-y-2">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-[#D8E2D7] dark:border-[#203F40]"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#246D61] dark:text-[#5CC8B2]" />
                    <span>Search Everything (⌘K)</span>
                  </span>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#EBF1EA] dark:bg-[#122526]">
                    ⌘K
                  </kbd>
                </button>
              )}

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRecruiter();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium border border-[#8BAE44]/40 bg-[#8BAE44]/10 text-[#246D61] dark:border-[#D6F36A]/30 dark:bg-[#D6F36A]/10 dark:text-[#D6F36A]"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#8BAE44] dark:text-[#D6F36A]" />
                    <span>Recruiter Fast-Track (60s)</span>
                  </span>
                  <span className="text-[10px] font-mono font-bold">HOT</span>
                </button>
              )}

              <Link
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#142522] dark:text-white bg-[#EBF1EA] dark:bg-[#193334]"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
