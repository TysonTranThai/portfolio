"use client";

import * as React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { PixelBot } from "./PixelArtIcons";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CyberHUDWidget() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";
  const [isOpen, setIsOpen] = React.useState(false);
  const [quoteIndex, setQuoteIndex] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState("");

  const builderQuotes = [
    {
      en: "Build. Learn. Help. Keep Going.",
      vi: "Xây dựng. Học hỏi. Giúp đỡ. Không ngừng vươn tới.",
      tag: "CORE MANTRA",
    },
    {
      en: "AI accelerates syntax. Human engineers command architecture.",
      vi: "AI viết code nhanh hơn. Kỹ sư con người nắm giữ kiến trúc.",
      tag: "PHILOSOPHY",
    },
    {
      en: "8-Step Agent Pipeline: IDEA → PLAN → AGENTS → SHIP.",
      vi: "Chuỗi 8 bước Chief of Agents: Ý TƯỞNG → KẾ HOẠCH → AGENTS → PHÁT HÀNH.",
      tag: "METHODOLOGY",
    },
    {
      en: "Not Limited: Removing barriers so everyone can build.",
      vi: "Not Limited: Xóa bỏ rào cản để mọi người cùng sáng tạo.",
      tag: "MISSION",
    },
  ];

  // Update clock every second in Vietnam Timezone
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % builderQuotes.length);
  };

  const currentQuote = builderQuotes[quoteIndex];

  return (
    <aside
      aria-label="Tyson System HUD"
      className="fixed bottom-5 right-5 z-40 font-mono text-xs select-none no-print"
    >
      {/* Expanded Cyber Panel */}
      {isOpen ? (
        <div className="w-[310px] sm:w-[360px] p-4 sm:p-5 rounded-md bg-[#090d16]/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(6,182,212,0.2)] text-white space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <PixelBot size={18} color="#06b6d4" className="animate-pulse" />
              <span className="text-[11px] tracking-wider uppercase">TYSON_SYS::TELEMETRY</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
                aria-label="Minimize HUD"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Node Status Grid */}
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
            <div className="p-2 bg-white/5 border border-white/10 rounded-sm">
              <span className="text-slate-400 block text-[9px] uppercase">{t("NODE TIME (VN)", "GIỜ VIỆT NAM")}</span>
              <span className="text-cyan-300 font-bold text-xs">{currentTime || "12:00:00"} GMT+7</span>
            </div>
            <div className="p-2 bg-white/5 border border-white/10 rounded-sm">
              <span className="text-slate-400 block text-[9px] uppercase">{t("AI PIPELINE", "TRẠNG THÁI AI")}</span>
              <span className="text-emerald-400 font-bold text-xs">8 AGENTS READY</span>
            </div>
          </div>

          {/* Equalizer Frequency Visualizer */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-[9px] text-slate-400 uppercase tracking-wider">
              <span>{t("SYSTEM PULSE", "XUNG NHỊP HỆ THỐNG")}</span>
              <span className="text-cyan-400">120 FPS // ACTIVE</span>
            </div>
            <div className="flex items-end gap-1 h-5 px-2 py-1 bg-black/60 rounded-sm border border-cyan-500/20">
              {[60, 90, 40, 100, 75, 50, 95, 30, 85, 65, 90, 45, 100, 70, 80, 55, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-400 rounded-none transition-all duration-300"
                  style={{
                    height: `${(h + ((i * 17) % 30)) % 100}%`,
                    animation: `pulseGlow ${1 + (i % 5) * 0.3}s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Interactive Quote Display */}
          <div
            onClick={handleNextQuote}
            className="p-3 bg-cyan-950/20 hover:bg-cyan-950/40 border border-cyan-500/30 rounded-sm cursor-pointer transition-all group space-y-1.5"
            title="Click to cycle thoughts"
          >
            <div className="flex items-center justify-between text-[9px]">
              <span className="text-cyan-400 font-bold tracking-widest uppercase">
                [{currentQuote.tag}]
              </span>
              <span className="text-slate-400 group-hover:text-cyan-300 transition-colors">
                {t("TAP TO CYCLE ↻", "BẤM ĐỔI Ý ↻")}
              </span>
            </div>
            <p className="text-xs text-slate-200 font-sans italic leading-snug">
              &ldquo;{isVi ? currentQuote.vi : currentQuote.en}&rdquo;
            </p>
          </div>

          {/* Footer Direct Contact Link */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px]">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-cyan-400 hover:underline uppercase font-bold flex items-center gap-1"
            >
              <span>{t("DIRECT COMMS →", "KẾT NỐI TRỰC TIẾP →")}</span>
            </a>
            <span className="text-slate-500 text-[9px]">v2.5_ACTIVE</span>
          </div>
        </div>
      ) : (
        /* Collapsed Floating Pill */
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#080d18]/90 hover:bg-[#0c1424] border border-cyan-500/40 hover:border-cyan-400 text-white backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.6),0_0_15px_rgba(6,182,212,0.25)] transition-all duration-300 hover:scale-105"
        >
          <PixelBot size={16} color="#06b6d4" className="group-hover:rotate-12 transition-transform" />
          <div className="flex items-center gap-2 text-[11px] font-bold">
            <span className="text-cyan-300">TYSON_SYS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] text-slate-400 hidden sm:inline font-mono">
            {currentTime}
          </span>
          <ChevronUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </aside>
  );
}
