"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigationItems, ctaButton } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeAccentPicker } from "./ThemeAccentPicker";
import { CommandMenu } from "./CommandMenu";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [timeStr, setTimeStr] = React.useState("");
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "Asia/Ho_Chi_Minh",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        setTimeStr(now.toLocaleTimeString("en-US", options));
      } catch {
        setTimeStr("15:30 GMT+7");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print px-4 sm:px-8 py-3",
        isScrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Monogram */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
        >
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-mono font-black text-xs shadow-md group-hover:scale-105 transition-transform">
            T
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white font-mono">
              TYSON TRAN
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              AI BUILDER &amp; ARCHITECT
            </span>
          </div>
        </Link>

        {/* Center: Apple-style Floating Pill Menu */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-2xl shadow-xl">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/#" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-200 select-none",
                  isActive
                    ? "bg-white text-black font-bold shadow-md"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Live Local Time & Utilities */}
        <div className="flex items-center gap-3">
          {/* Live Location & Clock (like Image 2) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>VIETNAM</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-200">{timeStr || "GMT+7"}</span>
          </div>

          <ThemeAccentPicker />
          <CommandMenu />
          <ThemeToggle />

          <div className="hidden sm:block">
            <Button
              variant="primary"
              size="sm"
              href={ctaButton.href}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              className="rounded-full shadow-md font-mono text-xs font-bold uppercase bg-white text-black hover:bg-slate-200"
            >
              {ctaButton.label}
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-3 rounded-2xl bg-black/95 backdrop-blur-2xl border border-white/15 p-4 space-y-3 shadow-2xl font-mono text-xs animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 border border-white/5"
              >
                <span>{item.label}</span>
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
              START A PROJECT →
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
