"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { navigationItems, ctaButton } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeAccentPicker } from "./ThemeAccentPicker";
import { CommandMenu } from "./CommandMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between",
          isScrolled
            ? "bg-slate-950/85 dark:bg-surface-950/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
            : "bg-slate-950/60 dark:bg-surface-950/60 backdrop-blur-md border border-white/10"
        )}
      >
        {/* Brand / Identifier */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
        >
          <div className="w-8 h-8 rounded-xl bg-white text-slate-950 flex items-center justify-center font-mono font-bold text-xs shadow-md group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-emerald-400 transition-colors font-mono">
              TYSON_TRAN
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI_SYSTEMS_ONLINE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/#" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-xs font-mono rounded-full transition-all duration-200 relative flex items-center gap-1.5 select-none",
                  isActive
                    ? "bg-white text-slate-950 font-bold shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-400 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <ThemeAccentPicker />
          <CommandMenu />
          <ThemeToggle />

          <div className="hidden sm:block">
            <Button
              variant="primary"
              size="sm"
              href={ctaButton.href}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="rounded-full shadow-md font-mono text-xs font-bold uppercase"
            >
              {ctaButton.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-white/10 p-4 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl font-mono text-xs">
          <div className="grid grid-cols-2 gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-white/5"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500/20 text-emerald-400 rounded">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center font-mono font-bold"
            >
              WORK_WITH_ME →
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              leftIcon={<FileText className="w-4 h-4" />}
              className="w-full justify-center font-mono"
            >
              CAT /CV.PDF
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
