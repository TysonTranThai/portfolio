"use client";

import * as React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/experience";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ExperienceSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  return (
    <section id="experience" className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// CHRONOLOGY & SYSTEM MILESTONES", "// KINH NGHIỆM THỰC CHIẾN & DỰ ÁN")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Track record & verified impact.", "Hành trình phát triển & kết quả thực tế.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Real-world software engineering engagements, client automation pipelines, open-source architectures, and builder coaching.",
              "Kinh nghiệm phát triển phần mềm thực tế, chuỗi tự động hóa doanh nghiệp, kiến trúc mã nguồn mở và hoạt động cố vấn builder."
            )}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:left-4 sm:before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/20">
          {experienceData.map((item, idx) => {
            const role = isVi && item.roleVi ? item.roleVi : item.role;
            const organizationOrProject = isVi && item.organizationOrProjectVi ? item.organizationOrProjectVi : item.organizationOrProject;
            const period = isVi && item.periodVi ? item.periodVi : item.period;
            const summary = isVi && item.summaryVi ? item.summaryVi : item.summary;
            const responsibilities = isVi && item.responsibilitiesVi ? item.responsibilitiesVi : item.responsibilities;

            return (
              <div key={item.id} className="relative pl-10 sm:pl-20 group">
                {/* Timeline node */}
                <div className="absolute left-2 sm:left-6 top-6 w-5 h-5 rounded-full bg-black border-2 border-amber-400 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>

                <div className="p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl space-y-5 font-sans transition-all">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4">
                    <div>
                      <span className="text-xs font-mono text-amber-400 font-bold">
                        EPOCH N° 0{idx + 1}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-white mt-1">
                        {role}
                      </h3>
                      <div className="text-xs font-mono text-slate-400 mt-1 uppercase tracking-wider">
                        {organizationOrProject}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{period}</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                      {t("VERIFIED RESPONSIBILITIES & OUTCOMES:", "TRÁCH NHIỆM & KẾT QUẢ BÀN GIAO:")}
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 font-mono">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
