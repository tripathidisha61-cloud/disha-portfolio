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
          ? "bg-[#F7F9FC]/90 dark:bg-[#0A1020]/90 backdrop-blur-md border-b border-[#DBEAFE]/60 dark:border-[#263B5A] shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-mono text-base font-semibold tracking-tight text-[#101828] dark:text-[#F8FAFC] hover:opacity-90 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.35)] group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4" />
            </div>
            <span>
              disha<span className="text-[#22D3EE]">.dev</span>
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
                      ? "text-[#2563EB] dark:text-[#60A5FA] bg-[#2563EB]/10 dark:bg-[#2563EB]/20 font-semibold"
                      : "text-slate-600 dark:text-[#C9D4E5] hover:text-[#101828] dark:hover:text-[#F8FAFC] hover:bg-slate-100 dark:hover:bg-[#172238]"
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
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-[#0A1020] dark:hover:text-white rounded-lg border border-slate-200 dark:border-[#263B5A] bg-white dark:bg-[#172238]/80 hover:bg-sky-50 dark:hover:bg-[#263B5A] transition-colors shadow-xs"
                aria-label="Open Command Palette (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#2563EB]" />
                <kbd className="hidden lg:inline-block text-[10px] font-mono px-1 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  ⌘K
                </kbd>
              </button>
            )}

            {onOpenRecruiter && (
              <button
                type="button"
                onClick={onOpenRecruiter}
                className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA] hover:bg-[#2563EB]/20 transition-colors"
                aria-label="Open Recruiter Fast-Track"
              >
                <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Fast-Track</span>
              </button>
            )}

            <Link
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-[#263B5A] hover:bg-sky-50 dark:hover:bg-[#172238] text-[#0A1020] dark:text-[#F7F9FC] transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
            </Link>

            <ThemeToggle />

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg text-slate-600 dark:text-slate-400 hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
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
        <div className="md:hidden border-b border-slate-200 dark:border-[#263B5A] bg-[#F7F9FC]/95 dark:bg-[#0A1020]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1 transition-all">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-[#172238] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-[#263B5A] space-y-2">
              {onOpenCommandPalette && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#263B5A]"
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#2563EB]" />
                    <span>Search Everything (⌘K)</span>
                  </span>
                  <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
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
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium border border-[#2563EB]/30 bg-[#2563EB]/10 text-[#2563EB] dark:text-[#60A5FA]"
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#2563EB]" />
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
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#0A1020] dark:text-white bg-sky-100/70 dark:bg-[#172238]"
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
