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
    <footer className="relative bg-[#04060a] text-white border-t border-white/20 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-14 py-20 space-y-16">
        
        {/* Top Monogram & Dispatch Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-white/15 pb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black border border-blue-500/30 flex items-center justify-center text-white shadow-xl">
                <svg
                  className="w-5 h-5 text-cyan-400"
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
                {profileData.fullName} ({profileData.preferredName})
              </h3>
            </div>
            <p className="text-xs text-slate-300 font-mono max-w-md">
              {t(
                "AI Engineer · Full-Stack Developer · AI Consultant · Educator. Engineering real software and empowering builders.",
                "Kỹ Sư AI · Lập Trình Viên Full-Stack · Tư Vấn AI · Giảng Dạy. Kiến tạo phần mềm thực tế và đồng hành cùng người học."
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <LanguageToggle />

            <a
              href={`mailto:${contactInfo.email}`}
              className="px-3.5 py-2 bg-white/5 border border-white/15 rounded-sm hover:border-cyan-400 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-[11px] max-w-full"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span className="truncate">{contactInfo.email}</span>
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
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">
              {t("NARRATIVE & WORK", "CÂU CHUYỆN & DỰ ÁN")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#intro" className="hover:text-white">{t("My Story", "Câu Chuyện")}</Link></li>
              <li><Link href="#chief-of-agents" className="hover:text-white">{t("Chief of Agents", "Chief of Agents")}</Link></li>
              <li><Link href="#not-limited" className="hover:text-white">{t("Not Limited Mission", "Sứ Mệnh Not Limited")}</Link></li>
              <li><Link href="#projects" className="hover:text-white">{t("Selected Projects", "Dự Án Tiêu Biểu")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">
              {t("SERVICES & LEARNING", "DỊCH VỤ & GIẢNG DẠY")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="#what-i-do" className="hover:text-white">{t("What I Do", "Năng Lực Chuyên Môn")}</Link></li>
              <li><Link href="#services" className="hover:text-white">{t("For Businesses", "Dành Cho Doanh Nghiệp")}</Link></li>
              <li><Link href="#teaching" className="hover:text-white">{t("Learn With Tyson", "Học Cùng Mình")}</Link></li>
              <li><Link href="#for-recruiters" className="hover:text-white">{t("For Recruiters", "Dành Cho Tuyển Dụng")}</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-violet-400 font-bold uppercase tracking-widest text-[10px]">
              {t("CONNECT", "KẾT NỐI")}
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
            <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px]">
              {t("DOCUMENTS", "TÀI LIỆU")}
            </span>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/cv" className="hover:text-white">{t("Curriculum Vitae (ATS-PDF)", "Hồ sơ CV (Chuẩn ATS)")}</Link></li>
              <li><Link href="#contact" className="hover:text-white">{t("Direct Inquiry Transmission", "Gửi Yêu Cầu Hợp Tác")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Telemetry */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Tran Thai Son (Tyson). {t("All rights reserved.", "Đã đăng ký bản quyền.")}
          </div>
          <div className="flex items-center gap-4 text-[10px] text-cyan-400 font-bold">
            <span>{t("BUILD · LEARN · HELP · KEEP GOING", "XÂY DỰNG · HỌC HỎI · GIÚP ĐỠ · KHÔNG NGỪNG VƯƠN TỚI")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
