"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ChevronDown, Cpu, Layers, Terminal, GraduationCap } from "lucide-react";
import { FloatingObject } from "@/components/world/FloatingObject";
import meCutout from "../../../public/images/me-cutout.png";
import {
  RetroGameboy,
  SpecNotebook,
  HoloDisc,
  MiniCodeTerminal,
  TactileBasketball,
  ServerBlade,
} from "@/components/world/TactileObjects";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useToast } from "@/components/ui/Toast";

export function HeroSection() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const { language, t } = useLanguage();
  const { showToast } = useToast();
  const isVi = language === "vi";

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only calculate parallax on non-touch devices
      if (window.innerWidth >= 768) {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
        const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#06080e] text-white select-none border-b border-white/15">
      
      {/* ---------------------------------------------------- */}
      {/* 1. LAYERED MULTI-COLOR AMBIENT ATMOSPHERE */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div
          style={{
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          }}
          className="absolute -top-32 right-1/4 w-[450px] sm:w-[650px] lg:w-[750px] h-[450px] sm:h-[650px] lg:h-[750px] bg-gradient-to-b from-blue-600/20 via-indigo-600/12 to-transparent rounded-full blur-[100px] sm:blur-[140px] transition-transform duration-700 ease-out"
        />
        <div className="absolute top-[8%] left-[5%] w-[250px] sm:w-[450px] lg:w-[550px] h-[250px] sm:h-[450px] lg:h-[550px] bg-blue-600/15 rounded-full blur-[90px] sm:blur-[120px]" />
        <div className="absolute top-[35%] right-[5%] w-[220px] sm:w-[400px] lg:w-[500px] h-[220px] sm:h-[400px] lg:h-[500px] bg-violet-600/15 rounded-full blur-[90px] sm:blur-[130px]" />
        <div className="absolute bottom-[5%] left-[20%] w-[280px] sm:w-[500px] lg:w-[600px] h-[280px] sm:h-[500px] lg:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px]" />

        {/* Concentric Cybernetic Sonar Waves */}
        <div className="absolute top-1/2 right-4 sm:right-10 lg:right-28 -translate-y-1/2 w-[380px] h-[380px] sm:w-[600px] sm:h-[600px] lg:w-[850px] lg:h-[850px] flex items-center justify-center opacity-25 sm:opacity-35 pointer-events-none">
          <div className="absolute w-[160px] sm:w-[220px] h-[160px] sm:h-[220px] rounded-full border border-blue-400/30 animate-ping" />
          <div className="absolute w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] rounded-full border border-violet-400/25" />
          <div className="absolute w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full border border-cyan-400/20 border-dashed animate-spin" style={{ animationDuration: "60s" }} />
          <div className="hidden sm:block absolute w-[700px] h-[700px] rounded-full border border-white/10" />
          <div className="hidden lg:block absolute w-[880px] h-[880px] rounded-full border border-blue-500/10" />
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 2. ARCHITECTURAL BLUEPRINT GRID OVERLAY */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 sm:top-24 left-0 right-0 h-[1px] bg-white/10" />
        <div className="absolute bottom-20 sm:bottom-24 left-0 right-0 h-[1px] bg-white/10" />
        <div className="absolute top-0 bottom-0 left-4 sm:left-10 lg:left-14 w-[1px] bg-white/10" />
        <div className="absolute top-0 bottom-0 right-4 sm:right-10 lg:right-14 w-[1px] bg-white/10" />
        <div className="hidden xl:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5" />
      </div>

      {/* ---------------------------------------------------- */}
      {/* 3. TACTILE SPATIAL OBJECTS WORLD (DESKTOP CINEMATIC CANVAS >= 1024px) */}
      {/* ---------------------------------------------------- */}

      {/* Object 1: Retro Gameboy Console (Desktop Top-Left Perimeter) */}
      <FloatingObject
        initialX={-20}
        initialY={-15}
        depth={1.4}
        rotation={-14}
        floatDelay="0s"
        floatDuration="5.4s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={15}
        priority="high"
        label={t("TYSON_OS // PLAYFUL ENGINEERING", "TYSON_OS // KỸ NGHỆ THỰC CHIẾN")}
        className="hidden 2xl:block top-[16%] left-[1.5%]"
        onClick={() => showToast(t("🎮 Tyson OS: Spec-driven, high-velocity vibe coding.", "🎮 Tyson OS: Lập trình Vibe Coding tốc độ cao chuẩn đặc tả."))}
      >
        <RetroGameboy />
      </FloatingObject>

      {/* Object 2: Architecture Spec Notebook (Desktop Top-Right Perimeter) */}
      <FloatingObject
        initialX={20}
        initialY={-20}
        depth={1.6}
        rotation={16}
        floatDelay="1.2s"
        floatDuration="6.2s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={18}
        priority="high"
        label={t("ARCHITECTURE_NOTEBOOK // SPECS > VIBE", "SỔ TAY KIẾN TRÚC // ĐẶC TẢ > VIBE")}
        className="hidden xl:block top-[12%] right-[2%] 2xl:right-[4%]"
        onClick={() => showToast(t("📖 Spec-Driven Architecture: Measure twice, code once.", "📖 Kiến trúc theo đặc tả: Đo đạc kỹ càng, thực thi chuẩn xác."))}
      >
        <SpecNotebook />
      </FloatingObject>

      {/* Object 3: Mini Frosted Glass Terminal (Desktop Mid-Right Perimeter) */}
      <FloatingObject
        initialX={15}
        initialY={20}
        depth={1.3}
        rotation={-6}
        floatDelay="0.8s"
        floatDuration="5.8s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={25}
        priority="medium"
        label={t("CHIEF_OF_AGENTS.TS // LIVE CODE", "CHIEF_OF_AGENTS.TS // CODE THỰC CHIẾN")}
        className="hidden xl:block top-[48%] right-[1%] 2xl:right-[2%]"
        onClick={() => showToast(t("⚡ Multi-Agent Swarm: 8 agents orchestrating concurrent builds.", "⚡ Mạng lưới đa tác tử: 8 agent điều phối lập trình song song."))}
      >
        <MiniCodeTerminal />
      </FloatingObject>

      {/* Object 4: Holographic CD Disc (Desktop Center-Bottom Perimeter) */}
      <FloatingObject
        initialX={0}
        initialY={25}
        depth={1.8}
        rotation={14}
        floatDelay="1.8s"
        floatDuration="6.5s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={22}
        priority="medium"
        label={t("NEURAL_DISC // DEEPSEEK 70B", "ĐĨA QUANG AI // DEEPSEEK 70B")}
        className="hidden 2xl:block bottom-[6%] left-[48%]"
        onClick={() => showToast(t("💎 Neural Disc: Self-hosted LLM inference pipelines.", "💎 Đĩa quang AI: Tự vận hành mô hình suy luận cục bộ."))}
      >
        <HoloDisc />
      </FloatingObject>

      {/* Object 5: Tactile Basketball (Desktop Bottom-Left Perimeter) */}
      <FloatingObject
        initialX={-15}
        initialY={15}
        depth={1.5}
        rotation={-14}
        floatDelay="2.2s"
        floatDuration="5.6s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={24}
        priority="medium"
        label={t("ATHLETIC_DISCIPLINE // GRADE 8 DETOUR", "KỶ LUẬT THỂ THAO // BÓNG RỔ LỚP 8")}
        className="hidden 2xl:block bottom-[10%] left-[1.5%]"
        onClick={() => showToast(t("🏀 Athletic Discipline: Physical grit, resilience, and focus under pressure.", "🏀 Kỷ luật thể thao: Sự bền bỉ, kiên cường và tập trung cao độ."))}
      >
        <TactileBasketball />
      </FloatingObject>

      {/* Object 6: Server Blade GPU Rack (Desktop Bottom-Right Perimeter) */}
      <FloatingObject
        initialX={20}
        initialY={30}
        depth={1.2}
        rotation={8}
        floatDelay="1.5s"
        floatDuration="6.8s"
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        zIndex={20}
        priority="low"
        label={t("vLLM_INFRA // 24GB VRAM COMPUTE", "HẠ TẦNG vLLM // MÁY CHỦ GPU 24GB")}
        className="hidden xl:block bottom-[6%] right-[2%] 2xl:right-[4%]"
        onClick={() => showToast(t("🖥️ Private GPU Infra: Bare-metal Linux & sovereign AI hosting.", "🖥️ Hạ tầng GPU riêng: Máy chủ Linux & tự chủ mô hình AI."))}
      >
        <ServerBlade />
      </FloatingObject>

      {/* ---------------------------------------------------- */}
      {/* 4. HERO STAGE: RECOMPOSED COMPOSITION PER SCREEN CLASS */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pt-24 sm:pt-28 lg:pt-36 pb-10 sm:pb-14 w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        {/* Left Column: Art-Directed Headline & Narrative (7 cols on desktop) */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          
          {/* Cyber Status Ticker */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-cyan-950/40 border border-cyan-400/30 rounded-sm font-mono text-[9px] sm:text-[10px] text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] max-w-full overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="text-cyan-400 font-bold truncate">TYSON_SYS::ONLINE</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 hidden sm:inline truncate">{t("8 AI AGENTS READY", "8 AGENTS TỰ HÀNH")}</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-emerald-400 font-bold truncate">{t("HANDS-ON BUILDER", "KỸ SƯ THỰC CHIẾN")}</span>
          </div>

          {/* Primary Fluid Art-Directed Headline */}
          <div className="space-y-1 sm:space-y-1.5 relative">
            <h1 className="hero-headline-fluid font-serif text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
              {isVi ? "KỸ SƯ AI." : "AI ENGINEER."}
            </h1>
            <h2 className="hero-headline-fluid font-serif text-blue-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
              {isVi ? "LẬP TRÌNH VIÊN FULL-STACK." : "FULL-STACK DEVELOPER."}
            </h2>
            <h2 className="hero-headline-fluid font-serif text-violet-300 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
              {isVi ? "TƯ VẤN AI." : "AI CONSULTANT."}
            </h2>
            <h2 className="hero-headline-fluid font-serif text-emerald-400 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
              {isVi ? "GIẢNG DẠY." : "EDUCATOR."}
            </h2>
          </div>

          {/* Supporting Lead Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-sans max-w-xl text-balance">
            {t(
              "I engineer AI systems and full-stack software, help businesses integrate AI into their workflows, and teach people how to build with modern AI tools.",
              "Mình xây dựng các hệ thống AI, phần mềm full-stack, giải pháp tự động hóa và hạ tầng AI — đồng thời hỗ trợ doanh nghiệp tích hợp AI vào cách họ thực sự làm việc."
            )}
          </p>

          {/* Core Capability Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 font-mono text-[10px] sm:text-[11px]">
            <span className="px-2.5 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/25 text-blue-300 rounded-sm flex items-center gap-1.5 shadow-sm">
              <Cpu className="w-3 h-3 text-blue-400 shrink-0" />
              <span>Multi-Agent AI</span>
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-violet-500/10 border border-violet-500/25 text-violet-300 rounded-sm flex items-center gap-1.5 shadow-sm">
              <Layers className="w-3 h-3 text-violet-400 shrink-0" />
              <span>Next.js & TypeScript</span>
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 rounded-sm flex items-center gap-1.5 shadow-sm">
              <Terminal className="w-3 h-3 text-cyan-400 shrink-0" />
              <span>Linux & VPS Infra</span>
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 rounded-sm flex items-center gap-1.5 shadow-sm">
              <GraduationCap className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>Spec-Driven Vibe Coding</span>
            </span>
          </div>

          {/* Primary Action Buttons (Responsive Grid/Flex: Stack on mobile, horizontal on tablet/desktop) */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-xs sm:text-sm font-mono tracking-widest uppercase font-bold shadow-lg shadow-blue-500/25 transition-all group touch-target text-center"
            >
              <span>{t("WORK WITH ME", "HỢP TÁC CÙNG MÌNH")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-sm bg-black/60 hover:bg-black/80 text-white text-xs sm:text-sm font-mono tracking-widest uppercase border border-white/25 hover:border-cyan-400/50 backdrop-blur-md transition-all touch-target text-center"
            >
              <span>{t("VIEW MY WORK", "XEM DỰ ÁN")}</span>
            </Link>

            <Link
              href="/cv"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 sm:py-4 rounded-sm text-slate-300 hover:text-white text-xs font-mono tracking-widest uppercase transition-all border border-white/10 hover:border-white/20 sm:border-transparent touch-target text-center"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t("DOWNLOAD CV", "TẢI CV (PDF)")}</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Integrated Portrait Block (5 cols on desktop, centered block on mobile/tablet) */}
        <div className="lg:col-span-5 relative flex items-center justify-center pt-6 sm:pt-8 lg:pt-0">
          
          {/* Subtle Multi-Color Halo Rim Behind Tyson */}
          <div className="absolute w-[240px] sm:w-[340px] lg:w-[420px] h-[300px] sm:h-[440px] lg:h-[550px] bg-gradient-to-tr from-blue-600/25 via-violet-600/20 to-cyan-500/20 rounded-full blur-[70px] sm:blur-[80px] pointer-events-none" />

          {/* Interactive Parallax Portrait Container */}
          <div
            style={{
              transform: `perspective(1000px) rotateY(${-mousePos.x * 5}deg) rotateX(${mousePos.y * 5}deg)`,
            }}
            className="relative w-[210px] h-[300px] xs:w-[240px] xs:h-[340px] sm:w-[300px] sm:h-[420px] md:w-[320px] md:h-[450px] lg:w-[360px] lg:h-[500px] transition-transform duration-300 ease-out"
          >
            {/* Architectural Frame Lines */}
            <div className="absolute -inset-2 sm:-inset-3 border border-white/15 rounded-sm pointer-events-none" />
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 text-cyan-400 font-mono text-[9px] sm:text-[10px]">+</div>
            <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-cyan-400 font-mono text-[9px] sm:text-[10px]">+</div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 text-cyan-400 font-mono text-[9px] sm:text-[10px]">+</div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 text-cyan-400 font-mono text-[9px] sm:text-[10px]">+</div>

            {/* Tyson's Portrait Cutout */}
            <Image
              src={meCutout}
              alt="Tran Thai Son (Tyson) — AI Engineer & Full-Stack Developer"
              fill
              priority
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 340px, 360px"
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            />

            {/* Bottom Vignette Scrim so Portrait Merges Naturally into Page */}
            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 bg-gradient-to-t from-[#06080e] via-[#06080e]/70 to-transparent pointer-events-none" />

            {/* Floating Telemetry Badge 1 (Top Left) */}
            <div className="absolute top-2 -left-2 sm:-left-5 lg:-left-7 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-black/90 border border-blue-400/50 backdrop-blur-xl font-mono text-[9px] sm:text-[10px] text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-1.5 sm:gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping shrink-0" />
              <span>{t("BUILD · LEARN · HELP", "XÂY DỰNG · HỌC HỎI · GIÚP ĐỠ")}</span>
            </div>

            {/* Floating Telemetry Badge 2 (Bottom Right) */}
            <div className="absolute bottom-5 sm:bottom-6 -right-2 sm:-right-5 lg:-right-7 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-black/90 border border-emerald-400/50 backdrop-blur-xl font-mono text-[9px] sm:text-[10px] text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-1.5 sm:gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{t("HANDS-ON BUILDER", "KỸ SƯ THỰC CHIẾN")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 5. BOTTOM ARCHITECTURAL TELEMETRY HUD */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 pb-6 sm:pb-8 w-full flex items-center justify-between text-[11px] sm:text-xs font-mono text-white/80">
        <div className="flex items-center gap-2 sm:gap-3 truncate pr-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="tracking-widest uppercase truncate">
            {t(
              "BUILDING REAL SYSTEMS · ALWAYS IMPROVING",
              "KIẾN TẠO HỆ THỐNG THỰC TẾ · KHÔNG NGỪNG HOÀN THIỆN"
            )}
          </span>
        </div>

        <a
          href="#intro"
          className="hidden sm:inline-flex items-center gap-2 hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] sm:text-[11px] shrink-0"
        >
          <span>{t("DISCOVER MY STORY", "KHÁM PHÁ CÂU CHUYỆN")}</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
