"use client";

import * as React from "react";
import { Activity, Cpu, Rocket, BookOpen, Globe2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function BeyondTheCodeSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case "Activity":
        return Activity;
      case "Cpu":
        return Cpu;
      case "Rocket":
        return Rocket;
      default:
        return BookOpen;
    }
  };

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// ENTREPRENEURSHIP, DISCIPLINE & LANGUAGES", "// KINH DOANH, KỶ LUẬT & NGÔN NGỮ")}</span>
          </div>

          <h2 className="section-headline-fluid font-serif text-white">
            {t("Beyond the code.", "Phía sau những dòng code.")}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "What fuels Tyson's stamina, athletic discipline, commercial thinking, and curiosity outside of software engineering.",
              "Những yếu tố định hình nên sự bền bỉ, tính kỷ luật thể thao, tư duy kinh doanh và tinh thần tò mò của mình."
            )}
          </p>
        </div>

        {/* 4 Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {profileData.beyondCode.map((item, idx) => {
            const Icon = getInterestIcon(item.icon);
            const interest = isVi && item.interestVi ? item.interestVi : item.interest;
            const description = isVi && item.descriptionVi ? item.descriptionVi : item.description;

            return (
              <div
                key={item.interest}
                className="p-6 sm:p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl space-y-3.5 sm:space-y-4 font-sans transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                      N° 0{idx + 1}
                    </span>
                    <div className="p-2 bg-white/5 text-amber-400 rounded-sm border border-white/10 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {interest}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages & Philosophy Bar */}
        <div className="p-5 sm:p-8 bg-black/80 border border-white/20 rounded-sm shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Globe2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-bold text-white uppercase tracking-wider text-[11px] sm:text-xs">
              {t("COMMUNICATION LANGUAGES:", "NGÔN NGỮ GIAO TIẾP:")}
            </span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              {t(
                "Vietnamese (Native) · English (Fluent) · Chinese (Basic)",
                "Tiếng Việt (Bản ngữ) · Tiếng Anh (Thành thạo) · Tiếng Trung (Cơ bản)"
              )}
            </span>
          </div>

          <div className="text-amber-400 font-bold uppercase tracking-widest text-[10px] sm:text-[11px]">
            &ldquo;{t("Keep learning. Keep building. Keep helping.", "Không ngừng học hỏi. Không ngừng kiến tạo. Không ngừng chia sẻ.")}&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
