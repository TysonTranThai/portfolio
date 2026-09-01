"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sparkles,
  Users2,
  BookOpen,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { PixelHeart } from "@/components/ui/PixelArtIcons";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function NotLimitedSection() {
  const { t } = useLanguage();

  const initiatives = [
    {
      title: "Not Limited Platform",
      tagline: t("Free & accessible builder guidance", "Nền tảng hướng dẫn lập trình mở & dễ tiếp cận"),
      desc: t(
        "A central ecosystem offering straightforward workflows, shared AI tools, and step-by-step guides so anyone can build functional software without expensive courses or software subscriptions.",
        "Hệ sinh thái cung cấp quy trình tinh gọn, công cụ AI dùng chung và tài liệu thực hành từng bước giúp mọi người tự xây dựng phần mềm mà không cần tốn tiền mua khóa học hay dịch vụ đắt đỏ."
      ),
      icon: Sparkles,
      status: "ACTIVE MISSION",
    },
    {
      title: "Not Limited Team",
      tagline: t("Collaborative agent workspaces for creators", "Không gian làm việc nhóm tích hợp AI Agent"),
      desc: t(
        "Tooling concepts designed to help young builders and non-technical teams collaborate seamlessly with shared AI agent workflows and project contexts.",
        "Bộ công cụ hỗ trợ các bạn trẻ và nhóm khởi nghiệp cùng làm việc, chia sẻ ngữ cảnh dự án và đồng hành phát triển cùng các AI Agent."
      ),
      icon: Users2,
      status: "IN DEVELOPMENT",
    },
    {
      title: "Code Journey",
      tagline: t("The community where the journey began", "Cộng đồng khởi nguồn niềm đam mê"),
      desc: t(
        "An educational project and community where learners discover programming and AI through collaborative building and mutual knowledge sharing.",
        "Dự án giáo dục và cộng đồng nơi mọi người cùng nhau học lập trình và công nghệ AI qua các buổi thực hành dự án thực tế."
      ),
      icon: BookOpen,
      status: "COMMUNITY INITIATIVE",
    },
  ];

  return (
    <section id="not-limited" className="py-28 md:py-36 relative bg-[#060a12] text-white border-t border-white/15 atmosphere-cyan">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            <PixelHeart size={16} color="#ec4899" className="animate-pulse" />
            <span>{t("// NOT LIMITED · COMMUNITY & TOOLS", "// NOT LIMITED · CỘNG ĐỒNG & CÔNG CỤ")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Democratizing software building.", "Xóa bỏ rào cản kỹ thuật cho mọi người.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "People shouldn't be prevented from pursuing their ideas simply because they don't know how to code, lack deep technical knowledge, or can't afford expensive tools.",
              "Không ai nên bị giới hạn khả năng hiện thực hóa ý tưởng chỉ vì chưa từng học lập trình, thiếu kiến thức kỹ thuật chuyên sâu hay không có ngân sách cho các công cụ đắt đỏ."
            )}
          </p>
        </div>

        {/* Honest Motivation Highlight Box */}
        <div className="mb-16 p-8 sm:p-12 bg-black/80 border border-cyan-500/30 rounded-sm shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500 via-cyan-400 to-amber-400 opacity-60 animate-neon-shimmer" />

          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <PixelHeart size={14} color="#f472b6" />
              <span>{t("THE HONEST STORY & MOTIVATION", "ĐỘNG LỰC & CÂU CHUYỆN CHÂN THẬT")}</span>
            </span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-mono text-[11px]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{t("HELPING PEOPLE + SUSTAINABLE BUSINESS", "VÌ CỘNG ĐỒNG + KINH DOANH BỀN VỮNG")}</span>
            </span>
          </div>

          <blockquote className="text-lg sm:text-xl font-serif italic text-white leading-relaxed">
            &ldquo;{t(
              "I wanted to build something that could help people, and I also wanted to build something sustainable as a business.",
              "Mình muốn tạo ra một thứ có thể giúp đỡ mọi người, đồng thời cũng muốn xây dựng một mô hình có thể tự duy trì và phát triển bền vững như một doanh nghiệp."
            )}&rdquo;
          </blockquote>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
            {t(
              "Not Limited started free. The hope is to keep it free for as long as possible. If that isn't financially sustainable over the long term, the objective is to keep it as affordable as possible. No hype, no gatekeeping — just practical leverage for builders.",
              "Not Limited khởi đầu hoàn toàn miễn phí. Mục tiêu của mình là duy trì miễn phí lâu nhất có thể. Nếu trong dài hạn điều đó không đảm bảo tính bền vững về tài chính, mục tiêu là giữ mức giá dễ tiếp cận nhất có thể cho tất cả mọi người. Không cường điệu, không rào cản — chỉ có giải pháp thực tế cho những người muốn kiến tạo."
            )}
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 bg-black/60 border border-cyan-500/20 hover:border-cyan-400/50 rounded-sm shadow-xl space-y-5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono">
                    <span className="text-xs text-cyan-400 font-bold tracking-widest uppercase">
                      {item.status}
                    </span>
                    <span className="text-xs font-serif text-slate-400 font-bold">
                      N° 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 rounded-sm group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400/80">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-2">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold group-hover:text-cyan-300 transition-colors uppercase tracking-widest text-[11px]"
                  >
                    <span>{t("CONNECT WITH NOT LIMITED", "KẾT NỐI VỚI NOT LIMITED")}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
