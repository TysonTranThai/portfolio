"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const classicalNavItems = [
    { label: t("THE PHILOSOPHY", "TRIẾT LÝ"), href: "#about" },
    { label: t("THE WORK", "DỰ ÁN"), href: "#projects" },
    { label: t("THE SERVICES", "DỊCH VỤ"), href: "#services" },
    { label: t("THE ACADEMY", "ĐÀO TẠO"), href: "#teaching" },
    { label: t("QUESTIONS", "CÂU HỎI"), href: "#contact" },
  ];

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print",
        isScrolled
          ? "bg-[#060a12]/90 backdrop-blur-xl border-b border-white/15 py-3"
          : "bg-transparent py-4 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Neoclassical Obsidian Brand Box */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black border border-white/20 flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform">
            <svg
              className="w-5 h-5 text-amber-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-sm text-white font-bold uppercase">
              TYSON TRAN
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-300 uppercase">
              {t("AI ARCHITECT", "KIẾN TRÚC SƯ AI")}
            </span>
          </div>
        </Link>

        {/* Center: Classical Uppercase Spaced Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] font-mono tracking-widest text-slate-200">
          {classicalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors duration-150 relative py-1 hover:underline underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Utilities: Language Switcher + CTA Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle />

          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-sm bg-white hover:bg-slate-200 text-black text-[11px] font-mono tracking-widest uppercase font-bold shadow-lg transition-all flex items-center gap-2"
            >
              <span>{t("APPLY", "HỢP TÁC")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            className="lg:hidden p-2 rounded-sm bg-black/80 border border-white/20 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-3">
          <div className="p-6 bg-black/95 border border-white/20 rounded-md backdrop-blur-2xl space-y-4 font-mono text-xs tracking-widest text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-slate-400">{t("SELECT LANGUAGE", "CHỌN NGÔN NGỮ")}</span>
              <LanguageToggle />
            </div>

            {classicalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 border-b border-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 text-center bg-white text-black font-bold uppercase rounded-sm"
              >
                {t("REQUEST PARTNERSHIP →", "YÊU CẦU HỢP TÁC →")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
