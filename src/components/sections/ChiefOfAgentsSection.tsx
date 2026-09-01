"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  Workflow,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ChiefOfAgentsSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const workflowSteps = [
    { num: "01", name: isVi ? "Ý TƯỞNG" : "IDEA", desc: isVi ? "Ý tưởng sản phẩm & yêu cầu ban đầu" : "Product intent & requirements", icon: Sparkles },
    { num: "02", name: isVi ? "KẾ HOẠCH" : "PLAN", desc: isVi ? "Đặc tả kiến trúc & schema kiểu dữ liệu" : "Architecture specs & schema contracts", icon: Workflow },
    { num: "03", name: isVi ? "PHÂN RÃ" : "DECOMPOSE", desc: isVi ? "Cây tác vụ độc lập & thứ tự phụ thuộc" : "Atomic task graph with dependencies", icon: Layers },
    { num: "04", name: isVi ? "TÁC TỬ" : "AGENTS", desc: isVi ? "Phân vai tác tử chuyên biệt (Coder/Reviewer)" : "Specialized agent role assignment", icon: Bot },
    { num: "05", name: isVi ? "XÂY DỰNG" : "BUILD", desc: isVi ? "Thực thi song song trên từng module" : "Concurrent execution across modules", icon: Code2 },
    { num: "06", name: isVi ? "KIỂM DUYỆT" : "REVIEW", desc: isVi ? "Kiểm tra kiểu dữ liệu, lint & code diff" : "Type checks & code diff inspection", icon: ShieldCheck },
    { num: "07", name: isVi ? "SỬA LỖI" : "FIX", desc: isVi ? "Vòng lặp tự động sửa lỗi & vá mã nguồn" : "Self-healing revision loops", icon: Zap },
    { num: "08", name: isVi ? "XUẤT BẢN" : "SHIP", desc: isVi ? "Sản phẩm hoàn thiện, sẵn sàng chạy thật" : "Validated, production-ready release", icon: Terminal },
  ];

  return (
    <section id="chief-of-agents" className="py-20 sm:py-28 lg:py-36 relative bg-[#070913] text-white border-t border-white/15 atmosphere-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-widest">
            <Bot className="w-4 h-4 text-violet-400 shrink-0" />
            <span>{t("// FLAGSHIP TECHNICAL SYSTEM · EXPLORATION", "// DỰ ÁN KỸ THUẬT TIÊU BIỂU · NGHIÊN CỨU & PHÁT TRIỂN")}</span>
          </div>

          <h2 className="section-headline-fluid font-serif text-white">
            Chief of Agents
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "An AI-native project coordination framework designed to translate Tyson's vibe coding workflow into software that coordinates specialized AI agents in parallel.",
              "Khung điều phối dự án gốc AI được thiết kế để đóng gói quy trình Vibe Coding thực chiến của mình thành phần mềm có khả năng điều phối đa tác tử AI chạy song song."
            )}
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. THE CORE PROBLEM & MULTI-AGENT SWARM VISUALIZATION */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          {/* Problem Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-black/70 border border-violet-500/20 hover:border-violet-400/40 rounded-sm shadow-xl space-y-4 transition-all flex flex-col justify-between">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase tracking-widest border-b border-white/10 pb-3">
                <Zap className="w-4 h-4 shrink-0" />
                <span>{t("THE REAL PROBLEM", "VẤN ĐỀ THỰC TẾ")}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-serif font-bold text-white">
                {t("Vibe coding sounds easy, but building production systems is hard.", "Vibe coding nghe có vẻ dễ, nhưng xây dựng hệ thống chạy thật rất khó.")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {t(
                  "Most AI coding attempts fail when applications grow beyond a single file: context limits break down, subtle bugs propagate across imports, and unvalidated hallucinations corrupt the codebase.",
                  "Hầu hết các nỗ lực lập trình với AI thất bại khi dự án vượt quá một file: ngữ cảnh bị tràn, lỗi logic lan ra nhiều module và AI bị ảo giác gây hỏng mã nguồn."
                )}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-violet-300">
              <span>{t("SOLUTION: STRUCTURED CONCURRENT SWARM", "GIẢI PHÁP: MẠNG LƯỚI TÁC TỬ SONG SONG")}</span>
              <span className="text-emerald-400 font-bold">100% DETERMINISTIC</span>
            </div>
          </div>

          {/* 3D Multi-Agent Swarm Orchestrator Node (5 cols) */}
          <div className="lg:col-span-5 p-5 sm:p-6 bg-violet-950/20 border border-violet-500/30 rounded-sm shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-computational-grid opacity-25 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/10 pb-2 font-mono text-xs text-violet-300 relative z-10">
              <span className="font-bold">{"// MULTI-AGENT TOPOLOGY"}</span>
              <span className="text-emerald-400 flex items-center gap-1 text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                4 AGENTS ONLINE
              </span>
            </div>

            <div className="relative py-6 sm:py-8 flex items-center justify-center min-h-[160px] z-10">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-dashed border-violet-500/30 animate-spin" style={{ animationDuration: "25s" }} />
              </div>

              <div className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-700 to-cyan-500 p-0.5 shadow-[0_0_30px_rgba(139,92,246,0.5)] flex items-center justify-center text-center font-mono">
                <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center p-1">
                  <span className="text-[6px] sm:text-[7px] text-cyan-400 font-bold">CHIEF</span>
                  <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white animate-bounce" />
                  <span className="text-[5px] sm:text-[6px] text-slate-400">MASTER</span>
                </div>
              </div>

              <div className="absolute top-1 left-2 sm:left-4 px-2 py-0.5 sm:py-1 rounded-xs bg-black/90 border border-blue-400/50 text-[7px] sm:text-[8px] font-mono text-blue-300 shadow-md">
                🧠 PLANNER
              </div>
              <div className="absolute top-1 right-2 sm:right-4 px-2 py-0.5 sm:py-1 rounded-xs bg-black/90 border border-emerald-400/50 text-[7px] sm:text-[8px] font-mono text-emerald-300 shadow-md">
                ⚡ CODER
              </div>
              <div className="absolute bottom-1 left-2 sm:left-4 px-2 py-0.5 sm:py-1 rounded-xs bg-black/90 border border-amber-400/50 text-[7px] sm:text-[8px] font-mono text-amber-300 shadow-md">
                🛡️ REVIEWER
              </div>
              <div className="absolute bottom-1 right-2 sm:right-4 px-2 py-0.5 sm:py-1 rounded-xs bg-black/90 border border-rose-400/50 text-[7px] sm:text-[8px] font-mono text-rose-300 shadow-md">
                🚀 SHIPPER
              </div>
            </div>

            <div className="text-[8px] sm:text-[9px] font-mono text-slate-400 flex items-center justify-between border-t border-white/10 pt-2 relative z-10">
              <span>ORCHESTRATION: CONCURRENT</span>
              <span className="text-cyan-400 font-bold">8X VELOCITY</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. THE VISUAL 8-STEP AGENT WORKFLOW */}
        {/* ---------------------------------------------------- */}
        <div className="mb-16 sm:mb-20 p-5 sm:p-8 lg:p-12 bg-black/85 border border-violet-500/30 rounded-sm shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden">
          {/* Ambient Glowing Laser Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 opacity-70 animate-neon-shimmer" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-4 gap-2 font-mono">
            <div className="text-xs text-violet-300 font-bold uppercase tracking-widest flex items-center gap-2">
              <Cpu className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{t("// CHIEF OF AGENTS · VISUAL COORDINATION PIPELINE", "// SƠ ĐỒ ĐIỀU PHỐI CỦA CHIEF OF AGENTS")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span className="text-[10px] sm:text-[11px] text-cyan-300 font-mono font-bold tracking-wider truncate">
                IDEA → PLAN → DECOMPOSE → AGENTS → BUILD → REVIEW → FIX → SHIP
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 font-mono">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-3 sm:p-4 bg-violet-950/20 hover:bg-violet-900/30 border border-violet-500/25 hover:border-cyan-400 rounded-sm flex flex-col justify-between min-h-[120px] sm:min-h-[140px] h-full relative group transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-violet-400 font-serif font-bold text-xs sm:text-sm group-hover:text-cyan-300 transition-colors">
                      {step.num}
                    </span>
                    <Icon className="w-3.5 h-3.5 text-violet-300 group-hover:scale-125 group-hover:text-cyan-300 transition-all" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-bold text-white font-serif tracking-wider group-hover:text-cyan-300 transition-colors">
                      {step.name}
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight font-sans mt-1 line-clamp-2">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator for Desktop */}
                  {idx < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-cyan-400 text-[10px] font-bold z-10 select-none opacity-50 group-hover:opacity-100 transition-opacity">
                      ›
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. MANIFESTO: AI MAKES CODING EASIER... */}
        {/* ---------------------------------------------------- */}
        <div className="p-6 sm:p-10 lg:p-14 bg-black/90 border border-violet-500/30 rounded-sm shadow-2xl space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-violet-400 font-bold uppercase tracking-widest">
            <Terminal className="w-4 h-4 shrink-0" />
            <span>{t("THE ENGINEERING MANIFESTO", "TUYÊN NGÔN KỸ THUẬT")}</span>
          </div>

          <blockquote className="space-y-1.5 sm:space-y-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              AI makes coding easier.
            </h3>
            <h3 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-violet-300 tracking-tight leading-tight">
              It doesn&apos;t make software engineering disappear.
            </h3>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            <p>
              {t(
                "AI can dramatically accelerate research, syntax drafting, boilerplate creation, error fixing, and prototyping. It operates at machine speed to write code.",
                "AI có thể đẩy nhanh tốc độ nghiên cứu, viết code mẫu, sửa lỗi cú pháp và dựng prototype. AI có thể viết code với tốc độ của máy móc."
              )}
            </p>
            <p>
              {t(
                "However, human builders must still command architecture, system design, data boundaries, security, and verification. Chief of Agents makes that engineering process structured, repeatable, and accessible to everyone.",
                "Tuy nhiên, kỹ sư con người vẫn phải nắm giữ vai trò kiến trúc, thiết kế hệ thống, phân chia luồng dữ liệu, bảo mật và xác thực. Chief of Agents biến quy trình kỹ thuật đó thành một phương pháp bài bản, có thể lặp lại và dễ tiếp cận cho tất cả mọi người."
              )}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs">
              <Code2 className="w-4 h-4 text-violet-400 shrink-0" />
              <span>{t("METHODOLOGY: SPEC-DRIVEN MULTI-AGENT ORCHESTRATION", "PHƯƠNG PHÁP: ĐIỀU PHỐI ĐA TÁC TỬ THEO ĐẶC TẢ")}</span>
            </div>

            <Link
              href="#projects"
              className="inline-flex items-center gap-1.5 text-violet-300 hover:text-white uppercase font-bold tracking-widest text-[11px] self-start sm:self-auto touch-target"
            >
              <span>{t("EXPLORE CASE STUDY", "XEM CHI TIẾT DỰ ÁN")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
