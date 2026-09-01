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
    { label: t("STORY", "CÂU CHUYỆN"), href: "/#intro" },
    { label: t("CHIEF OF AGENTS", "HỆ THỐNG"), href: "/#chief-of-agents" },
    { label: t("WORK", "DỰ ÁN"), href: "/#projects" },
    { label: t("SERVICES", "DỊCH VỤ"), href: "/#services" },
    { label: t("TEACHING", "GIẢNG DẠY"), href: "/#teaching" },
    { label: t("RECRUITERS", "TUYỂN DỤNG"), href: "/#for-recruiters" },
    { label: t("CV", "HỒ SƠ"), href: "/cv" },
    { label: t("CONTACT", "LIÊN HỆ"), href: "/#contact" },
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
          ? "bg-[#06080e]/90 backdrop-blur-xl border-b border-white/15 py-3"
          : "bg-transparent py-4 sm:py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Identity Box */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg shrink-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-black border border-blue-500/30 flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-wider text-xs sm:text-sm text-white font-bold uppercase">
              TYSON TRAN
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-cyan-300 uppercase">
              {t("AI ENGINEER · FULL-STACK", "KỸ SƯ AI · FULL-STACK")}
            </span>
          </div>
        </Link>

        {/* Center: Spaced Navigation */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-[11px] font-mono tracking-widest text-slate-200">
          {classicalNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cyan-300 transition-colors duration-150 relative py-1 hover:underline underline-offset-8"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Utilities: Language Switcher + CTA Button */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <LanguageToggle />

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="px-4 lg:px-5 py-2 sm:py-2.5 rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-[10px] lg:text-[11px] font-mono tracking-widest uppercase font-bold shadow-lg shadow-blue-500/20 transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>{t("WORK WITH ME", "HỢP TÁC")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile/Tablet Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-black/80 border border-white/20 text-white touch-target hover:border-cyan-400/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden max-w-7xl mx-auto px-4 mt-2 sm:mt-3">
          <div className="p-5 sm:p-6 bg-black/95 border border-blue-500/30 rounded-md backdrop-blur-2xl space-y-3 font-mono text-xs tracking-widest text-slate-200 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-slate-400 text-[11px]">{t("SELECT LANGUAGE", "CHỌN NGÔN NGỮ")}</span>
              <LanguageToggle />
            </div>

            {classicalNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center py-2.5 border-b border-white/10 hover:text-cyan-300 min-h-[44px]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3.5 text-center bg-blue-500 text-white font-bold uppercase rounded-sm shadow-lg text-xs tracking-widest min-h-[44px]"
              >
                {t("WORK WITH TYSON →", "HỢP TÁC CÙNG MÌNH →")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
