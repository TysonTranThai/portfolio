"use client";

import * as React from "react";
import { skillsData } from "@/data/skills";
import { Cpu, Code2, Layers, Terminal, Wrench } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TechStackSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getCategoryConfig = (category: string) => {
    if (category.includes("AI")) {
      return { icon: Cpu, color: "text-amber-400" };
    }
    if (category.includes("Software") || category.includes("Phần Mềm")) {
      return { icon: Code2, color: "text-cyan-400" };
    }
    if (category.includes("Infrastructure") || category.includes("Hạ Tầng")) {
      return { icon: Terminal, color: "text-amber-400" };
    }
    if (category.includes("Data") || category.includes("Dữ Liệu")) {
      return { icon: Layers, color: "text-emerald-400" };
    }
    return { icon: Wrench, color: "text-rose-400" };
  };

  return (
    <section id="tech-stack" className="py-20 sm:py-28 lg:py-36 relative bg-[#060910] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// THE TECHNICAL ARMORY", "// CÔNG NGHỆ & KỸ NĂNG CHUYÊN MÔN")}</span>
          </div>

          <h2 className="section-headline-fluid font-serif text-white">
            {t("Tools of the craft.", "Vũ khí công nghệ & kỹ năng thực chiến.")}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "An honest breakdown of the languages, frameworks, inference engines, and cloud infrastructure we command in production.",
              "Bảng phân loại trung thực về ngôn ngữ, framework, mô hình AI và hạ tầng đám mây được sử dụng trong các hệ thống thực tế."
            )}
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 sm:mb-12 text-xs font-mono">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">{t("PROFICIENCY LEVEL:", "MỨC ĐỘ THÀNH THẠO:")}</span>
          <span className="px-2.5 sm:px-3 py-1 bg-amber-400/10 text-amber-400 border border-amber-400/30 rounded-sm font-semibold text-[10px] sm:text-xs">
            ● {t("Experienced (Daily Production)", "Thành Thạo (Dùng Hàng Ngày)")}
          </span>
          <span className="px-2.5 sm:px-3 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 rounded-sm font-semibold text-[10px] sm:text-xs">
            ● {t("Working Knowledge (Production Capable)", "Vận Dụng Tốt (Đạt Chuẩn Chạy Thật)")}
          </span>
          <span className="px-2.5 sm:px-3 py-1 bg-white/5 text-slate-300 border border-white/15 rounded-sm text-[10px] sm:text-xs">
            ● {t("Exploring (Active R&D)", "Đang Nghiên Cứu & Thử Nghiệm")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((category, idx) => {
            const config = getCategoryConfig(category.category);
            const Icon = config.icon;
            const categoryName = isVi && category.categoryVi ? category.categoryVi : category.category;

            return (
              <div
                key={category.category}
                className="p-6 sm:p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl space-y-4 sm:space-y-6 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${config.color} shrink-0`} />
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-amber-300 transition-colors">
                      {categoryName}
                    </h3>
                  </div>
                  <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                    N° 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2 sm:space-y-3 font-mono text-xs">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 sm:p-2.5 rounded-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all gap-2"
                    >
                      <span className="font-bold text-white text-xs truncate">{skill.name}</span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest shrink-0">
                        {isVi
                          ? (skill.level === "Experienced" ? "Thành Thạo" : skill.level === "Working Knowledge" ? "Vận Dụng Tốt" : skill.level)
                          : skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
