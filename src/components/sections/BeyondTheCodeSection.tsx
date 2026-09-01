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
    <section className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// ENTREPRENEURSHIP, DISCIPLINE & LANGUAGES", "// KINH DOANH, KỶ LUẬT & NGÔN NGỮ")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Beyond the code.", "Phía sau những dòng code.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "What fuels Tyson's stamina, athletic discipline, commercial thinking, and curiosity outside of software engineering.",
              "Những yếu tố định hình nên sự bền bỉ, tính kỷ luật thể thao, tư duy kinh doanh và tinh thần tò mò của mình."
            )}
          </p>
        </div>

        {/* 4 Interests Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profileData.beyondCode.map((item, idx) => {
            const Icon = getInterestIcon(item.icon);
            const interest = isVi && item.interestVi ? item.interestVi : item.interest;
            const description = isVi && item.descriptionVi ? item.descriptionVi : item.description;

            return (
              <div
                key={item.interest}
                className="p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl space-y-4 font-sans transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                      N° 0{idx + 1}
                    </span>
                    <div className="p-2 bg-white/5 text-amber-400 rounded-sm border border-white/10">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
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
        <div className="p-8 bg-black/80 border border-white/20 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-3">
            <Globe2 className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white uppercase tracking-wider">
              {t("COMMUNICATION LANGUAGES:", "NGÔN NGỮ GIAO TIẾP:")}
            </span>
            <span className="text-slate-300">
              {t(
                "Vietnamese (Native) · English (Fluent) · Chinese (Basic)",
                "Tiếng Việt (Bản ngữ) · Tiếng Anh (Thành thạo) · Tiếng Trung (Cơ bản)"
              )}
            </span>
          </div>

          <div className="text-amber-400 font-bold uppercase tracking-widest text-[11px]">
            &ldquo;{t("Keep learning. Keep building. Keep helping.", "Không ngừng học hỏi. Không ngừng kiến tạo. Không ngừng chia sẻ.")}&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
