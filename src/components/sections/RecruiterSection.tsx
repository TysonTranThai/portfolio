"use client";

import * as React from "react";
import Link from "next/link";
import {
  Briefcase,
  FileText,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function RecruiterSection() {
  const { t } = useLanguage();

  return (
    <section id="for-recruiters" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>{t("// FOR RECRUITERS & ENGINEERING LEADERS", "// DÀNH CHO NHÀ TUYỂN DỤNG & ĐỐI TÁC KỸ THUẬT")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("30-Second Technical Snapshot.", "Tóm Tắt Nhanh Năng Lực Kỹ Thuật (30 Giây).")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "An honest, scannable overview of Tyson's core technical roles, strengths, what he brings to a team, and authentic independent background.",
              "Bảng tổng quan trung thực, nhanh gọn về vai trò chuyên môn, thế mạnh cốt lõi, giá trị đem lại và kinh nghiệm thực chiến của mình."
            )}
          </p>
        </div>

        {/* 30-Second Scannable Executive Tablet */}
        <div className="p-8 sm:p-14 bg-black/80 border border-blue-500/30 rounded-sm shadow-2xl space-y-10">
          
          {/* Top Quick Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/15 font-mono text-xs">
            
            {/* Identity & Focus */}
            <div className="space-y-2">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block">
                {t("CANDIDATE / PROFILE", "ỨNG VIÊN / HỒ SƠ")}
              </span>
              <div className="text-base font-bold text-white font-serif">
                {profileData.fullName} ({profileData.preferredName})
              </div>
              <div className="text-xs text-blue-300 font-semibold">
                AI Engineer · Full-Stack Developer
              </div>
            </div>

            {/* Core Roles */}
            <div className="space-y-2">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block">
                {t("PRIMARY DISCIPLINES", "LĨNH VỰC CHÍNH")}
              </span>
              <div className="text-sm font-bold text-white">
                AI Engineering &amp; Full-Stack
              </div>
              <div className="text-xs text-slate-400">
                {t("AI Agents, Web Apps, Automation & Infra", "Tác tử AI, Web Full-Stack, Tự Động Hóa & Hạ Tầng")}
              </div>
            </div>

            {/* School Info */}
            <div className="space-y-2">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block">
                {t("EDUCATION", "HỌC VẤN")}
              </span>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                <span>SNA Marianapolis</span>
              </div>
              <div className="text-xs text-slate-400">
                {t("International School · Self-Directed Engineering", "Trường Quốc Tế SNA Marianapolis · Tự nghiên cứu Kỹ nghệ")}
              </div>
            </div>

            {/* Work Style */}
            <div className="space-y-2">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest block">
                {t("EXPERIENCE MODEL", "MÔ HÌNH HOẠT ĐỘNG")}
              </span>
              <div className="text-sm font-bold text-white">
                Independent · Builder-First
              </div>
              <div className="text-xs text-slate-400">
                {t("Projects · Client Builds · Mentorship", "Dự án độc lập · Triển khai cho khách · Giảng dạy")}
              </div>
            </div>
          </div>

          {/* Detailed Matrix Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans">
            
            {/* Core Strengths */}
            <div className="space-y-3 p-6 bg-blue-950/20 border border-blue-500/20 rounded-sm">
              <div className="flex items-center gap-2 font-mono text-blue-300 font-bold uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{t("CORE STRENGTHS", "THẾ MẠNH CỐT LÕI")}</span>
              </div>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>AI Engineering (LLM apps, prompt architectures)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Full-Stack Development (Next.js 15, TypeScript, React)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Autonomous AI Agents &amp; Tool Calling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Business Workflow Automation &amp; Webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>AI Infrastructure (Linux VPS, vLLM, Docker)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>AI Product Development &amp; Rapid MVP Delivery</span>
                </li>
              </ul>
            </div>

            {/* What I Bring */}
            <div className="space-y-3 p-6 bg-violet-950/20 border border-violet-500/20 rounded-sm">
              <div className="flex items-center gap-2 font-mono text-violet-300 font-bold uppercase tracking-wider text-[11px]">
                <Zap className="w-3.5 h-3.5 text-violet-400" />
                <span>{t("WHAT I BRING", "GIÁ TRỊ ĐEM LẠI")}</span>
              </div>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("Strong hands-on building mindset", "Tinh thần tự tay xây dựng sản phẩm thực tế")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("Self-directed rapid learning ability", "Khả năng tự học công nghệ mới cực nhanh")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("Cross-stack end-to-end understanding", "Tư duy bao quát toàn diện từ UI đến Server")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("AI-native spec-driven development workflow", "Quy trình lập trình tốc độ cao cùng AI theo đặc tả")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("Business awareness & ROI intuition", "Tư duy kinh doanh & trực giác về hiệu quả thực tế")}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>{t("Ability to explain technical concepts clearly", "Khả năng truyền đạt khái niệm kỹ thuật rõ ràng")}</span>
                </li>
              </ul>
            </div>

            {/* Languages & Experience Reality */}
            <div className="space-y-3 p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm">
              <div className="flex items-center gap-2 font-mono text-cyan-300 font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>{t("AUTHENTIC BACKGROUND", "LỊCH SỬ KINH NGHIỆM")}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t(
                  "Transparent background: Independent builder, product creator, AI consultant, and technical mentor. No fabricated employment claims — proven track record through real live repositories and deployed production systems.",
                  "Hồ sơ kinh nghiệm minh bạch: Kỹ sư độc lập, tác giả sản phẩm, cố vấn AI cho doanh nghiệp và người hướng dẫn kỹ thuật. Không thêu dệt kinh nghiệm công ty ảo — năng lực được chứng minh qua các kho mã nguồn và hệ thống chạy thật."
                )}
              </p>
              <div className="pt-2 border-t border-white/10 space-y-1 font-mono text-[11px]">
                <div className="text-slate-400">
                  <span className="text-cyan-300 font-bold">{t("Languages:", "Ngôn ngữ:")}</span> Vietnamese (Native) · English (Fluent) · Chinese (Basic)
                </div>
                <div className="text-emerald-400 font-semibold pt-1">
                  ● {t("Available for Remote Contracts & Client Builds", "Sẵn sàng nhận dự án từ xa & hợp đồng xây dựng")}
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-slate-200 transition-colors shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>{t("VIEW FULL ATS-FRIENDLY CV", "XEM CV ĐẦY ĐỦ (CHUẨN ATS)")}</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-bold uppercase tracking-widest text-[11px]"
            >
              <span>{t("DISCUSS ROLES OR CONTRACTS →", "THẢO LUẬN VỊ TRÍ HOẶC HỢP ĐỒNG →")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
