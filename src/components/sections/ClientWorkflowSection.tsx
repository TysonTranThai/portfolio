"use client";

import * as React from "react";
import { clientWorkflowSteps } from "@/data/workflows";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ClientWorkflowSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#06080e] text-white border-t border-white/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// THE CLIENT ENGAGEMENT ROADMAP", "// LỘ TRÌNH TRIỂN KHAI CHO DOANH NGHIỆP")}</span>
          </div>

          <h2 className="section-headline-fluid font-serif text-white">
            {t("How we execute together.", "Quy trình hợp tác & bàn giao chuẩn mực.")}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "A structured, transparent delivery pipeline ensuring zero surprises, high-speed iteration, and production-grade reliability from day one.",
              "Quy trình triển khai minh bạch, bài bản từng bước: loại bỏ mọi rủi ro bất ngờ, tối ưu tốc độ lặp và đảm bảo độ ổn định vận hành ngay từ ngày đầu tiên."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {clientWorkflowSteps.map((step, idx) => {
            const number = isVi && step.numberVi ? step.numberVi : step.number;
            const title = isVi && step.titleVi ? step.titleVi : step.title;
            const subtitle = isVi && step.subtitleVi ? step.subtitleVi : step.subtitle;
            const description = isVi && step.descriptionVi ? step.descriptionVi : step.description;
            const outputs = isVi && step.outputsVi ? step.outputsVi : step.outputs;

            return (
              <div
                key={step.step}
                className="p-6 sm:p-8 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl flex flex-col justify-between space-y-4 sm:space-y-6 transition-all group"
              >
                <div className="space-y-3 sm:space-y-3.5">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-xl sm:text-2xl font-serif font-bold text-amber-400 font-mono">
                      {number}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-slate-400">
                      STAGE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-amber-400 font-semibold">
                    {subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/15 font-mono">
                  <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-2">
                    {t("OUTPUT CONTRACT:", "KẾT QUẢ ĐẦU RA:")}
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {outputs.map((out, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-relaxed">{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
