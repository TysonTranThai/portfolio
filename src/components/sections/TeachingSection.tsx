"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { PixelTerminal } from "@/components/ui/PixelArtIcons";
import { SpecNotebook } from "@/components/world/TactileObjects";
import { teachingData, teachingAudiences } from "@/data/teaching";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TeachingSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  return (
    <section id="teaching" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-emerald">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
            <PixelTerminal size={16} color="#34d399" />
            <span>{t("// LEARN WITH TYSON · PRACTICAL MENTORSHIP", "// HỌC CÙNG TYSON · CỐ VẤN BUILDER THỰC CHIẾN")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Learn to build real software with AI.", "Học cách tự tay tạo ra phần mềm thật với AI.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "I teach people how to use AI to build real software — even if they don't come from a traditional programming background.",
              "Mình hướng dẫn mọi người cách sử dụng AI để tự tay phát triển phần mềm hoàn chỉnh — ngay cả khi bạn chưa từng có nền tảng lập trình truyền thống."
            )}
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. CORE TEACHING PHILOSOPHY BANNER + TACTILE WORKBENCH */}
        {/* ---------------------------------------------------- */}
        <div className="mb-20 p-8 sm:p-12 rounded-sm bg-black/85 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>{t("THE CORE TEACHING PHILOSOPHY", "TRIẾT LÝ GIẢNG DẠY CỐT LÕI")}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{t("100% INDEPENDENCE GOAL", "MỤC TIÊU 100% TỰ CHỦ")}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-white leading-snug">
                &ldquo;{t(
                  "I don't want to just give you the answer. I want to teach you how to figure it out yourself.",
                  "Mình không muốn chỉ đưa cho bạn câu trả lời có sẵn. Mình muốn hướng dẫn bạn phương pháp tự mình tìm ra cách giải quyết mọi vấn đề."
                )}&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                {t(
                  "This is not traditional tutoring or syntax memorization. We work through real projects specifically tailored to your goals and pace. The objective is giving you the confidence, workflow, and repeatable methodology to build and ship anything you imagine independently.",
                  "Đây không phải là hình thức gia sư thông thường hay học vẹt cú pháp lý thuyết. Chúng ta cùng làm các dự án thực tế được thiết kế riêng theo tốc độ và mục tiêu của bạn. Đích đến là mang lại cho bạn sự tự tin, quy trình chuẩn và phương pháp luận để tự mình xây dựng bất kỳ sản phẩm nào."
                )}
              </p>
            </div>

            {/* Tactile Workbench Spec Artifact */}
            <div className="lg:col-span-4 flex items-center justify-center p-6 bg-white/[0.02] border border-emerald-500/20 rounded-sm shadow-inner relative overflow-hidden">
              <div className="absolute inset-0 bg-computational-grid opacity-20 pointer-events-none" />
              <div className="relative z-10 transform hover:scale-105 transition-transform">
                <SpecNotebook />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. WHO THIS IS FOR (5 TARGET AUDIENCE CARDS) */}
        {/* ---------------------------------------------------- */}
        <div className="mb-24 space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
            <span className="text-emerald-400 font-bold uppercase tracking-widest">
              {t("// WHO THIS IS FOR", "// ĐỐI TƯỢNG PHÙ HỢP")}
            </span>
            <span className="text-slate-400 font-mono text-[11px]">{t("BEGINNER TO ADVANCED BUILDER", "TỪ NGƯỜI MỚI ĐẾN BUILDER")}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingAudiences.map((aud, idx) => {
              const title = isVi && aud.titleVi ? aud.titleVi : aud.title;
              const badge = isVi && aud.badgeVi ? aud.badgeVi : aud.badge;
              const description = isVi && aud.descriptionVi ? aud.descriptionVi : aud.description;
              const outcome = isVi && aud.outcomeVi ? aud.outcomeVi : aud.outcome;

              return (
                <div
                  key={idx}
                  className="p-8 bg-black/60 border border-emerald-500/20 hover:border-emerald-400/50 rounded-sm shadow-xl space-y-4 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <span className="text-xs font-serif font-bold text-emerald-400 font-mono">
                        TIER 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 uppercase">
                        {badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
                      {t("TARGET OUTCOME:", "KẾT QUẢ ĐẠT ĐƯỢC:")}
                    </div>
                    <div className="flex items-start gap-1.5 text-xs text-slate-200 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. THE 7-STEP INDEPENDENCE LEARNING FLOW */}
        {/* ---------------------------------------------------- */}
        <div className="mb-24 p-8 sm:p-12 bg-black/80 border border-emerald-500/30 rounded-sm shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-4 gap-2 font-mono">
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-widest">
              {t("// 7-STEP INDEPENDENCE LEARNING ROADMAP", "// LỘ TRÌNH 7 BƯỚC ĐẾN SỰ TỰ CHỦ")}
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              LEARN → BUILD → BREAK → DEBUG → UNDERSTAND → BUILD INDEPENDENTLY
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 font-mono">
            {teachingData.learningFlow.map((step, idx) => {
              const name = isVi && step.nameVi ? step.nameVi : step.name;
              const desc = isVi && step.descVi ? step.descVi : step.desc;

              return (
                <div
                  key={step.step}
                  className="p-4 bg-emerald-950/20 border border-emerald-500/20 rounded-sm flex flex-col justify-between min-h-[140px] h-full relative group hover:border-emerald-400/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-serif font-bold text-sm">
                      {step.step}
                    </span>
                    {idx < teachingData.learningFlow.length - 1 && (
                      <span className="text-slate-600 text-xs hidden lg:block">→</span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white font-serif">{name}</div>
                    <p className="text-[10px] text-slate-400 leading-tight font-sans mt-1">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 4. CURRICULUM TOPICS */}
        {/* ---------------------------------------------------- */}
        <div className="mb-16 space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
            <span className="text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>{t("// PRACTICAL CURRICULUM MODULES", "// CÁC MODULE KIẾN THỨC THỰC CHIẾN")}</span>
            </span>
            <span className="text-slate-400 font-mono text-[11px]">PROJECT-DRIVEN CURRICULUM</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachingData.curriculumTopics.map((topic, idx) => {
              const title = isVi && topic.titleVi ? topic.titleVi : topic.title;
              const description = isVi && topic.descriptionVi ? topic.descriptionVi : topic.description;
              const items = isVi && topic.itemsVi ? topic.itemsVi : topic.items;

              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-8 bg-black/60 border border-emerald-500/20 hover:border-emerald-400/50 rounded-sm shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3">
                      <span className="text-xl font-serif font-bold text-emerald-400 font-mono">
                        MOD 0{idx + 1}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 bg-emerald-500/10 text-emerald-300 uppercase">
                        PRACTICAL
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {description}
                    </p>

                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1.5">
                        {t("Key Competencies:", "Kỹ năng trọng tâm:")}
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300 font-sans">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mentorship Application Card */}
        <div className="p-8 sm:p-12 rounded-sm bg-black/85 border border-emerald-500/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t("1-ON-1 BUILDER MENTORSHIP // ADAPTIVE COACHING", "CỐ VẤN TRỰC TIẾP 1-ON-1 // LỘ TRÌNH CÁ NHÂN HÓA")}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              {t("Ready to build software with AI independently?", "Sẵn sàng tự tay xây dựng phần mềm với AI?")}
            </h3>
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {t(
                "Accepting motivated creators, students, and aspiring founders. Walk through everything specifically for your goals.",
                "Nhận học viên có động lực, sinh viên và người khởi nghiệp. Toàn bộ lộ trình được thiết kế riêng biệt theo mục tiêu của bạn."
              )}
            </p>
          </div>

          <Link
            href="#contact"
            className="px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-black font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 rounded-sm shrink-0 flex items-center gap-2"
          >
            <span>{t("Apply For Mentorship", "Đăng Ký Tham Gia")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
