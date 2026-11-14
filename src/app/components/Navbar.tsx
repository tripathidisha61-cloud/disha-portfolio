"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/data";
import { Menu, X, ArrowUpRight, Terminal, Search, Zap } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette?: () => void;
  onOpenRecruiter?: () => void;
}

export function Navbar({ onOpenCommandPalette, onOpenRecruiter }: NavbarProps) {
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
          ? "bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-slate-900 dark:text-[#F8FAFC] hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[#3B82F6] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              disha<span className="text-[#22D3EE]">.dev</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#3B82F6] dark:text-[#22D3EE] bg-blue-500/10 dark:bg-[#3B82F6]/15 font-semibold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#151F32]"
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
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#151F32]/80 hover:bg-slate-100 dark:hover:bg-[#1E293B] transition-colors"
                aria-label="Open Command Palette (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#3B82F6]" />
                <kbd className="hidden lg:inline-block text-[10px] font-mono px-1 py-0.5 rounded bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  ⌘K
                </kbd>
              </button>
            )}

            {onOpenRecruiter && (
              <button
                type="button"
                onClick={onOpenRecruiter}
                className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] dark:text-[#22D3EE] hover:bg-[#3B82F6]/20 transition-colors"
                aria-label="Open Recruiter Fast-Track"
              >
                <Zap className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Fast-Track</span>
              </button>
            )}

            <Link
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#151F32] text-slate-800 dark:text-slate-200 transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#151F32] transition-colors"
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
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1 transition-all">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-neutral-200 dark:border-neutral-800 space-y-2">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-neutral-500" />
                    <span>Search Everything (⌘K)</span>
                  </span>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">
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
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
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
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
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
