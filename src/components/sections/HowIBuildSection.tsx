"use client";

import * as React from "react";
import {
  Sparkles,
  Lightbulb,
  Search,
  FileCode,
  Terminal,
  ShieldCheck,
  RefreshCw,
  CheckCircle2,
} from "lucide-react";
import { personalWorkflowSteps } from "@/data/workflows";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HowIBuildSection() {
  const [activeStepIndex, setActiveStepIndex] = React.useState(0);
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Lightbulb;
      case 1:
        return Search;
      case 2:
        return FileCode;
      case 3:
        return Terminal;
      case 4:
        return ShieldCheck;
      case 5:
        return RefreshCw;
      default:
        return Sparkles;
    }
  };

  const activeStep = personalWorkflowSteps[activeStepIndex];

  return (
    <section id="how-i-build" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// PERSONAL BUILDER LIFECYCLE", "// QUY TRÌNH PHÁT TRIỂN DỰ ÁN CỦA TYSON")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("How I build: Idea to Continuous Improvement.", "Cách mình xây dựng: Từ ý tưởng đến liên tục hoàn thiện.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Idea → Experiment → Build → Break → Fix → Improve. Learning through hands-on execution and compounding technical wisdom.",
              "Ý Tưởng → Thử Nghiệm → Xây Dựng → Thử Thách → Sửa Lỗi → Hoàn Thiện. Tích lũy kinh nghiệm qua thực thi thực tế."
            )}
          </p>
        </div>

        {/* Step Selector Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 font-mono">
          {personalWorkflowSteps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            const isActive = activeStepIndex === idx;
            const title = isVi && step.titleVi ? step.titleVi : step.title;

            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  "p-4 rounded-sm border text-left transition-all duration-200 flex flex-col justify-between h-28 relative group",
                  isActive
                    ? "bg-amber-400 text-black border-amber-400 font-bold shadow-xl scale-102 z-10"
                    : "bg-black/60 text-slate-300 border-white/15 hover:border-white/40 hover:bg-white/5"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={cn("text-xs font-serif font-bold", isActive ? "text-black" : "text-amber-400")}>
                    {step.step}
                  </span>
                  <Icon className={cn("w-4 h-4", isActive ? "text-black" : "text-slate-400")} />
                </div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider line-clamp-1">
                  {title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Blueprint Inspector */}
        {activeStep && (
          <div className="p-8 sm:p-12 rounded-sm bg-black/70 border border-white/20 shadow-2xl backdrop-blur-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-6 gap-4 font-mono">
              <div className="space-y-1">
                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                  STAGE {activeStep.step} {"//"} {isVi && activeStep.numberVi ? activeStep.numberVi : activeStep.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {isVi && activeStep.titleVi ? activeStep.titleVi : activeStep.title}
                </h3>
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/15 text-xs text-slate-300 rounded-sm">
                GOAL: <strong className="text-amber-400">{isVi && activeStep.subtitleVi ? activeStep.subtitleVi : activeStep.subtitle}</strong>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
              {isVi && activeStep.descriptionVi ? activeStep.descriptionVi : activeStep.description}
            </p>

            <div className="p-6 bg-white/5 border border-white/10 rounded-sm space-y-3 font-sans text-xs">
              <span className="font-mono text-amber-400 font-bold uppercase tracking-widest">
                {t("// VERIFIED OUTPUT CONTRACTS", "// KẾT QUẢ ĐẦU RA XÁC THỰC")}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-200">
                {(isVi && activeStep.outputsVi ? activeStep.outputsVi : activeStep.outputs).map((out, i) => (
                  <li key={i} className="flex items-start gap-2 bg-black/40 p-3 rounded-sm border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
