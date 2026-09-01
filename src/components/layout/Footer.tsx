"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { contactInfo, socialLinks } from "@/data/socials";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <GithubIcon className="w-3.5 h-3.5" />;
      case "linkedin":
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      default:
        return <TelegramIcon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="relative bg-black text-white border-t border-white/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-14 py-20 space-y-16">
        
        {/* Top Monogram & Dispatch Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-white/15 pb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-white/20 flex items-center justify-center text-white shadow-xl">
                <svg
                  className="w-5 h-5 text-amber-400"
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
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                {profileData.fullName}
              </h3>
            </div>
            <p className="text-xs text-slate-300 font-mono max-w-md">
              {t(
                "Autonomous AI Architect & Full-Stack Systems Builder. Aligning incentives through shared upside and deterministic execution.",
                "Kiến trúc sư AI & Kỹ sư phát triển hệ thống toàn diện. Gắn kết lợi ích qua chia sẻ giá trị và thực thi chuẩn xác."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <LanguageToggle />

            <a
              href={`mailto:${contactInfo.email}`}
              className="px-4 py-2 bg-white/5 border border-white/15 rounded-sm hover:border-amber-400 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{contactInfo.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-sm text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs">
          <div className="space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
              {t("NAVIGATION", "ĐIỀU HƯỚNG")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#about" className="hover:text-white">{t("The Philosophy", "Triết Lý")}</Link></li>
              <li><Link href="#what-i-do" className="hover:text-white">{t("Capabilities", "Năng Lực")}</Link></li>
              <li><Link href="#projects" className="hover:text-white">{t("The Work", "Dự Án")}</Link></li>
              <li><Link href="#services" className="hover:text-white">{t("Services & Terms", "Dịch Vụ")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
              {t("SYSTEM LAB", "HỆ THỐNG LAB")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#how-i-build" className="hover:text-white">{t("Pipeline Spec", "Quy Trình Xây Dựng")}</Link></li>
              <li><Link href="#teaching" className="hover:text-white">{t("The Academy", "Học Viện Builder")}</Link></li>
              <li><Link href="#experience" className="hover:text-white">{t("Chronology", "Kinh Nghiệm")}</Link></li>
              <li><Link href="#tech-stack" className="hover:text-white">{t("Technical Armory", "Công Nghệ")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
              {t("TRANSMISSION", "KẾT NỐI")}
            </span>
            <ul className="space-y-2 text-slate-300">
              {socialLinks.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-1.5"
                  >
                    {getSocialIcon(s.platform)}
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-amber-400 font-bold uppercase tracking-widest text-[10px]">
              {t("DOCUMENTS", "TÀI LIỆU")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/cv" className="hover:text-white">{t("Curriculum Vitae (PDF)", "Hồ sơ CV (PDF)")}</Link></li>
              <li><Link href="#contact" className="hover:text-white">{t("Partnership Inquiries", "Yêu Cầu Hợp Tác")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Telemetry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Tran Thai Son (Tyson). {t("All rights reserved.", "Đã đăng ký bản quyền.")}
          </div>
          <div className="flex items-center gap-4 text-[10px]">
            <span>LAT: 10.8231° N, LON: 106.6297° E</span>
            <span>{"//"} DETERMINISTIC REASONING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
