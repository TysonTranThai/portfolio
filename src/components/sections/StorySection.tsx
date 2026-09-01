"use client";

import * as React from "react";
import {
  Compass,
  CheckCircle2,
  Sparkles,
  Layers,
  Briefcase,
  Sliders,
  HeartHandshake,
  Wrench,
  BookOpen,
} from "lucide-react";
import {
  PixelBot,
  PixelLightning,
  PixelHeart,
  PixelStar,
  PixelTerminal,
  PixelGamepad,
} from "@/components/ui/PixelArtIcons";
import {
  CRTMonitor,
  FloppyDisk,
  TactileBasketball,
  AIChip,
  ServerBlade,
  SpecNotebook,
} from "@/components/world/TactileObjects";
import { profileData } from "@/data/profile";
import { storyData } from "@/data/story";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function StorySection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getEraPixelIcon = (index: number) => {
    switch (index) {
      case 0:
        return <PixelTerminal size={14} color="#38bdf8" />;
      case 1:
        return <PixelStar size={14} color="#818cf8" />;
      case 2:
        return <PixelGamepad size={14} color="#fb923c" />;
      case 3:
        return <PixelLightning size={14} color="#fbbf24" />;
      case 4:
        return <PixelHeart size={14} color="#f472b6" />;
      default:
        return <PixelBot size={14} color="#34d399" />;
    }
  };

  const getEraPhysicalArtifact = (index: number) => {
    switch (index) {
      case 0:
        return <CRTMonitor className="transform group-hover:rotate-6 transition-transform" />;
      case 1:
        return <FloppyDisk className="transform group-hover:-rotate-6 transition-transform" />;
      case 2:
        return <TactileBasketball className="transform group-hover:rotate-12 transition-transform" />;
      case 3:
        return <AIChip className="transform group-hover:scale-105 transition-transform" />;
      case 4:
        return <SpecNotebook className="transform group-hover:rotate-3 transition-transform" />;
      default:
        return <ServerBlade className="transform group-hover:rotate-3 transition-transform" />;
    }
  };

  const valuePillars = [
    {
      title: t("AI + Practical Engineering", "AI + Thực Thi Thực Chiến"),
      desc: t(
        "Not just talking about AI trends — actually engineering working multi-agent systems, prompt guardrails, and private inference infrastructure.",
        "Không chỉ thảo luận lý thuyết — mình trực tiếp lập trình hệ thống AI Agent, xây dựng cơ chế kiểm soát và vận hành hạ tầng riêng."
      ),
      icon: Sparkles,
      color: "text-blue-400 border-blue-500/20",
    },
    {
      title: t("Full-Stack Systems Thinking", "Tư Duy Toàn Diện (Full-Stack)"),
      desc: t(
        "Able to think and build across UI interfaces, backend APIs, relational databases, AI models, Linux servers, and cloud deployment.",
        "Bao quát toàn bộ quy trình: từ giao diện người dùng, backend API, cơ sở dữ liệu, mô hình AI cho đến máy chủ Linux và triển khai cloud."
      ),
      icon: Layers,
      color: "text-violet-400 border-violet-500/20",
    },
    {
      title: t("Commercial & Business Intuition", "Thấu Hiểu Kinh Doanh Thực Tế"),
      desc: t(
        "Direct experience with physical e-commerce and digital products. I evaluate whether technology actually solves a business problem and delivers ROI.",
        "Kinh nghiệm thực tiễn từ thương mại điện tử và sản phẩm số. Đánh giá tính hiệu quả thực tế của công nghệ trước khi bắt tay lập trình."
      ),
      icon: Briefcase,
      color: "text-amber-400 border-amber-500/20",
    },
    {
      title: t("Adaptive & Custom-Tailored", "Tùy Biến Theo Nhu Cầu Riêng"),
      desc: t(
        "Every client solution and student mentorship plan is tailored specifically to the individual workflow and learning speed — never one-size-fits-all.",
        "Mọi giải pháp cho doanh nghiệp và lộ trình học đều được thiết kế riêng biệt theo mục tiêu cụ thể — tuyệt đối không rập khuôn."
      ),
      icon: Sliders,
      color: "text-cyan-400 border-cyan-500/20",
    },
    {
      title: t("Democratization & Accessibility", "Tối Ưu Chi Phí & Dễ Tiếp Cận"),
      desc: t(
        "Deeply committed to keeping technology affordable and accessible so that anyone can turn ideas into reality without financial gatekeeping.",
        "Tâm huyết trong việc xóa bỏ rào cản chi phí, giúp mọi người tự do phát triển ý tưởng mà không bị giới hạn bởi ngân sách."
      ),
      icon: HeartHandshake,
      color: "text-emerald-400 border-emerald-500/20",
    },
    {
      title: t("Relentless Builder Mindset", "Tinh Thần Builder Tự Học"),
      desc: t(
        "I learn through actually building, breaking, fixing, and deploying real systems every single day while continually improving.",
        "Học hỏi qua thực hành thực tế: tự tay xây dựng, thử nghiệm, sửa lỗi và hoàn thiện sản phẩm mỗi ngày."
      ),
      icon: Wrench,
      color: "text-rose-400 border-rose-500/20",
    },
  ];

  const bioParagraphs = (isVi && profileData.bioParagraphsVi) ? profileData.bioParagraphsVi : profileData.bioParagraphs;
  const coreMantras = (isVi && profileData.coreMantrasVi) ? profileData.coreMantrasVi : profileData.coreMantras;

  return (
    <section id="intro" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-blue">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* ---------------------------------------------------- */}
        {/* 1. SHORT PERSONAL INTRODUCTION */}
        {/* ---------------------------------------------------- */}
        <div className="mb-24 p-8 sm:p-14 bg-black/80 border border-blue-500/25 rounded-sm shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>{t("// WHO IS TYSON?", "// TYSON LÀ AI?")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            {isVi && profileData.introLeadVi ? profileData.introLeadVi : profileData.introLead}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 text-sm text-slate-300 font-sans leading-relaxed border-t border-white/15">
            {bioParagraphs.map((para, idx) => (
              <p key={idx} className="space-y-2">
                {para}
              </p>
            ))}
          </div>

          {/* Core Mantra Ribbon */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-bold uppercase tracking-widest">{t("CORE MANTRA:", "PHƯƠNG CHÂM:")}</span>
              <span className="text-white font-bold tracking-widest">{coreMantras.join("  //  ")}</span>
            </div>
            <div className="text-slate-400 text-[11px] flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>{t("EDUCATION: SNA Marianapolis International School", "HỌC TẬP: Trường Quốc Tế SNA Marianapolis")}</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. MY STORY: THE CHRONOLOGICAL JOURNEY */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
            <span>{t("// THE STORY & EVOLUTION", "// CÂU CHUYỆN & HÀNH TRÌNH")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("How a kid with a computer became an AI Engineer & Developer.", "Từ cậu bé tò mò máy tính đến Kỹ sư AI & Lập trình viên Full-Stack.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "The honest trajectory: early childhood computer curiosity, a sports and business detour, and a powerful reawakening through the modern AI revolution.",
              "Hành trình thực tế: niềm đam mê máy tính từ nhỏ, giai đoạn rèn luyện thể thao & kinh doanh, và bước chuyển mình mạnh mẽ cùng làn sóng AI hiện đại."
            )}
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[1px] before:bg-blue-500/20 mb-28">
          {storyData.map((milestone, idx) => {
            const era = isVi && milestone.eraVi ? milestone.eraVi : milestone.era;
            const yearOrGrade = isVi && milestone.yearOrGradeVi ? milestone.yearOrGradeVi : milestone.yearOrGrade;
            const category = isVi && milestone.categoryVi ? milestone.categoryVi : milestone.category;
            const title = isVi && milestone.titleVi ? milestone.titleVi : milestone.title;
            const subtitle = isVi && milestone.subtitleVi ? milestone.subtitleVi : milestone.subtitle;
            const description = isVi && milestone.descriptionVi ? milestone.descriptionVi : milestone.description;
            const keyLearnings = isVi && milestone.keyLearningsVi ? milestone.keyLearningsVi : milestone.keyLearnings;

            return (
              <div key={idx} className="relative group">
                {/* Node Mark with Pixel Era Icon */}
                <div className="absolute -left-[36px] sm:-left-[46px] top-5 w-7 h-7 rounded-sm bg-black/90 border border-cyan-400/60 shadow-[0_0_12px_rgba(6,182,212,0.4)] flex items-center justify-center group-hover:scale-115 transition-transform z-10">
                  {getEraPixelIcon(idx)}
                </div>

                <div className="p-8 sm:p-10 bg-black/70 border border-blue-500/20 hover:border-cyan-400/50 rounded-sm shadow-xl space-y-6 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/15 pb-4 font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {era}
                      </span>
                      <span className="text-slate-500 text-xs">{"//"}</span>
                      <span className="text-xs text-slate-300 uppercase tracking-widest">
                        {yearOrGrade}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-400 px-2 py-0.5 bg-white/5 border border-white/10 rounded-sm uppercase tracking-widest">
                      {category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {title}
                        </h3>
                        <p className="text-xs font-mono text-cyan-400/80 mt-1 uppercase tracking-wider">
                          {subtitle}
                        </p>
                      </div>

                      <p className="text-sm text-slate-300 font-sans leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {/* Tactile Physical Artifact Showcase for this Era */}
                    <div className="md:col-span-4 flex items-center justify-center p-4 bg-white/[0.02] border border-white/10 rounded-sm shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-computational-grid opacity-20 pointer-events-none" />
                      <div className="relative z-10 flex items-center justify-center py-2">
                        {getEraPhysicalArtifact(idx)}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2 font-mono text-xs">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                      {t("KEY REALIZATIONS & SKILLS:", "BÀI HỌC VÀ KỸ NĂNG CỐT LÕI:")}
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-300 font-sans text-xs">
                      {keyLearnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-sm border border-white/10">
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

        {/* ---------------------------------------------------- */}
        {/* 3. WHY WORK WITH TYSON? (UNIQUE VALUE PILLARS) */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            <span>{t("// UNIQUE VALUE & APPROACH", "// GIÁ TRỊ KHÁC BIỆT")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Why work with Tyson?", "Tại sao nên đồng hành cùng mình?")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Combining deep hands-on AI implementation with commercial intuition, adaptability, and an unyielding commitment to builder independence.",
              "Kết hợp giữa năng lực lập trình AI thực chiến, tư duy kinh doanh thực tế, sự linh hoạt và cam kết đồng hành tối đa."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 bg-black/70 border border-white/15 hover:border-cyan-400/50 rounded-sm shadow-xl space-y-4 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-serif font-bold text-cyan-400 font-mono">
                    PILLAR N° 0{idx + 1}
                  </span>
                  <div className="p-2 bg-white/5 text-cyan-400 rounded-sm border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
