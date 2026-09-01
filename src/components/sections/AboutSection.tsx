"use client";

import * as React from "react";
import { Sparkles, Terminal, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function AboutSection() {
  const { t } = useLanguage();

  const principles = [
    {
      roman: "I.",
      title: t("Shared Upside & Zero Retainers", "Chia Sẻ Lợi Nhuận & Không Phí Duy Trì"),
      subtitle: t("Pay for outcomes, not billable hours", "Chi trả cho kết quả thực tế, không tính giờ"),
      desc: t(
        "Traditional agencies sell time and junior headcount. We align our incentives directly with your business growth — taking compensation through performance equity, rev-share, or milestone deliveries.",
        "Các agency truyền thống bán thời gian và nhân sự trung cấp. Chúng tôi liên kết trực tiếp lợi ích với sự tăng trưởng của bạn — nhận thù lao qua chia sẻ doanh thu, cổ phần hiệu suất hoặc nghiệm thu mốc hoàn thành."
      ),
      metric: "0% Retainer Bloat",
      icon: Sparkles,
    },
    {
      roman: "II.",
      title: t("Autonomous Agent Architectures", "Kiến Trúc AI Agent Tự Vận Hành"),
      subtitle: t("Beyond simple ChatGPT wrappers", "Vượt xa các ứng dụng bọc ChatGPT đơn giản"),
      desc: t(
        "We build multi-agent orchestration pipelines that execute complex multi-step workflows, retrieve real-time vectorized knowledge, and self-correct with deterministic tool use.",
        "Chúng tôi phát triển các chuỗi điều phối đa tác tử AI (multi-agent) xử lý quy trình phức tạp nhiều bước, truy xuất tri thức vector hóa theo thời gian thực và tự sửa lỗi chính xác."
      ),
      metric: "< 12ms Tool Dispatch",
      icon: Terminal,
    },
    {
      roman: "III.",
      title: t("Private Self-Hosted Infrastructure", "Hạ Tầng Riêng Biệt Tự Vận Hành"),
      subtitle: t("Zero vendor lock-in & full data sovereignty", "Không phụ thuộc nhà cung cấp & làm chủ dữ liệu"),
      desc: t(
        "Deploy open-source LLMs (DeepSeek, Llama 3, Qwen) on bare-metal Linux VPS clusters using vLLM and Ollama with automated SSL, backups, and sub-second token streaming.",
        "Triển khai mô hình mã nguồn mở (DeepSeek, Llama 3, Qwen) trên cụm máy chủ Linux riêng biệt với vLLM/Ollama, tự động hóa bảo mật SSL, sao lưu và stream dữ liệu tức thì."
      ),
      metric: "100% Data Sovereignty",
      icon: Cpu,
    },
    {
      roman: "IV.",
      title: t("Spec-Driven Vibe Coding", "Lập Trình Vibe Coding Chuẩn Đặc Tả"),
      subtitle: t("10x implementation velocity with strict rigor", "Tốc độ triển khai gấp 10 lần với kỷ luật nghiêm ngặt"),
      desc: t(
        "We pilot AI coding agents with rigorous interface contracts, exhaustive test suites, and strict modularity — shipping production apps in days that traditionally take quarters.",
        "Chúng tôi điều phối các AI coding agent dựa trên hợp đồng giao diện chặt chẽ, bộ kiểm thử toàn diện và cấu trúc module — bàn giao sản phẩm sau vài ngày thay vì hàng quý."
      ),
      metric: "10x Delivery Velocity",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// THE MODEL & PHILOSOPHY", "// MÔ HÌNH & TRIẾT LÝ")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Aligned incentives. Zero fluff.", "Cùng chung mục tiêu. Không phí dư thừa.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Most agencies charge for hours spent sitting in meetings. We build mission-critical systems that generate revenue, cut operational burn, and scale autonomously.",
              "Đa số đơn vị tính phí theo giờ họp và nhân sự. Chúng tôi xây dựng các hệ thống cốt lõi tạo ra doanh thu, cắt giảm chi phí vận hành và tự động hóa tăng trưởng."
            )}
          </p>
        </div>

        {/* 4 Pillars Grid with Roman Numerals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.roman}
                className="relative p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-2xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 font-classical tracking-wider">
                      {item.roman}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-slate-300">
                      {item.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-amber-400/80 mt-1 uppercase tracking-wider font-semibold">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans pt-1">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Architectural Signature */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-amber-400" />
                    <span className="uppercase text-[11px]">{t("OPERATIONAL CONTRACT", "HỢP ĐỒNG VẬN HÀNH")}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
