"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Code2,
  Terminal,
  Compass,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { PixelLightning } from "@/components/ui/PixelArtIcons";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhatIDoSection() {
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const visualStoryFlows = [
    {
      title: t("AI ENGINEERING & AGENTS", "KỸ NGHỆ AI & TÁC TỬ TỰ HÀNH"),
      subtitle: t("Autonomous Reasoning & Execution", "Suy Luận & Thực Thi Tự Động"),
      flow: ["AI AGENTS", "TOOLS", "WORKFLOWS", "AUTOMATION", "RESULT"],
      flowVi: ["AI AGENTS", "CÔNG CỤ", "QUY TRÌNH", "TỰ ĐỘNG HÓA", "KẾT QUẢ"],
      accent: "text-violet-400 border-violet-500/30 bg-violet-950/20",
      desc: t(
        "Autonomous LLM agents with function calling, structured prompt engineering, vector search (RAG), and event-driven automation pipelines.",
        "Xây dựng tác tử LLM tự hành với cơ chế gọi hàm, kỹ nghệ prompt chuẩn đặc tả, tra cứu vector (RAG) và tự động hóa theo sự kiện."
      ),
    },
    {
      title: t("FULL-STACK DEVELOPMENT", "LẬP TRÌNH FULL-STACK"),
      subtitle: t("Production-Grade Applications", "Ứng Dụng Web Chuẩn Vận Hành"),
      flow: ["FRONTEND", "BACKEND", "DATABASE", "API", "DEPLOYMENT"],
      flowVi: ["FRONTEND", "BACKEND", "DATABASE", "API", "TRIỂN KHAI"],
      accent: "text-blue-400 border-blue-500/30 bg-blue-950/20",
      desc: t(
        "Modern responsive web applications, robust TypeScript APIs, database schemas, secure authentication, and scalable SaaS platforms.",
        "Ứng dụng web tương thích mọi thiết bị, backend API an toàn với TypeScript, cơ sở dữ liệu quan hệ, phân quyền OAuth và SaaS."
      ),
    },
    {
      title: t("AI INFRASTRUCTURE & HOSTING", "HẠ TẦNG AI & MÁY CHỦ RIÊNG"),
      subtitle: t("Self-Hosted Sovereign Models", "Vận Hành Mô Hình Độc Lập"),
      flow: ["MODEL", "SERVER", "API", "GATEWAY", "APPLICATION"],
      flowVi: ["MÔ HÌNH", "MÁY CHỦ", "API", "CỔNG ĐỊNH TUYẾN", "ỨNG DỤNG"],
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
      desc: t(
        "Bare-metal Linux VPS clusters hosting open-weight LLMs (DeepSeek, Llama 3) with vLLM, automated SSL, and reverse proxies.",
        "Máy chủ Linux VPS riêng biệt chạy mô hình mã nguồn mở (DeepSeek, Llama 3) với vLLM, chứng chỉ SSL và cổng định tuyến Nginx."
      ),
    },
    {
      title: t("AI CONSULTING & STRATEGY", "TƯ VẤN CHIẾN LƯỢC & GIẢI PHÁP AI"),
      subtitle: t("Pragmatic Business ROI", "Đòn Bẩy Kinh Doanh Thực Tiễn"),
      flow: ["DISCOVER", "AUDIT", "ARCHITECTURE", "IMPLEMENT", "MEASURE"],
      flowVi: ["KHẢO SÁT", "ĐÁNH GIÁ", "KIẾN TRÚC", "TRIỂN KHAI", "ĐO LƯỜNG"],
      accent: "text-amber-400 border-amber-500/30 bg-amber-950/20",
      desc: t(
        "Helping businesses identify high-ROI AI opportunities, automate repetitive workflows, and choose the most cost-effective models.",
        "Đồng hành cùng doanh nghiệp tìm ra cơ hội ứng dụng AI hiệu quả nhất, tự động hóa điểm nghẽn và tối ưu chi phí vận hành."
      ),
    },
    {
      title: t("EDUCATION & MENTORSHIP", "GIẢNG DẠY & CỐ VẤN BUILDER"),
      subtitle: t("100% Independence Methodology", "Lộ Trình Hướng Tới Tự Chủ"),
      flow: ["LEARN", "BUILD", "BREAK", "DEBUG", "UNDERSTAND", "INDEPENDENCE"],
      flowVi: ["HỌC HỎI", "XÂY DỰNG", "THỬ THÁCH", "GỠ LỖI", "HIỂU BẢN CHẤT", "TỰ CHỦ"],
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
      desc: t(
        "Guiding students and creators to build real software with AI coding agents and spec-driven vibe coding without getting stuck in error loops.",
        "Hướng dẫn học viên và người khởi nghiệp tự tay phát triển phần mềm với tác tử AI và Vibe Coding chuẩn đặc tả."
      ),
    },
  ];

  const capabilityCategories = [
    {
      num: "N° 01",
      title: t("AI Engineering", "Kỹ Nghệ AI"),
      category: "INTELLIGENT SYSTEMS",
      desc: t(
        "LLM applications, autonomous multi-agent coordination, structured prompt engineering, AI APIs, model integration, and RAG vector search.",
        "Ứng dụng mô hình ngôn ngữ lớn, điều phối đa tác tử AI, kỹ nghệ prompt chuẩn đặc tả, tích hợp API AI và truy xuất vector RAG."
      ),
      items: [
        t("Autonomous multi-agent swarms & tool calling", "Mạng lưới đa tác tử tự động & gọi hàm ngoài"),
        t("Structured prompt engineering & guardrails", "Kỹ nghệ prompt đặc tả & cơ chế kiểm soát"),
        t("Vector databases & retrieval-augmented generation", "Cơ sở dữ liệu vector & tra cứu thông minh RAG"),
      ],
      icon: Bot,
      color: "text-violet-400",
    },
    {
      num: "N° 02",
      title: t("Full-Stack Development", "Lập Trình Full-Stack"),
      category: "FULL-STACK SOFTWARE",
      desc: t(
        "Modern frontend interfaces, robust backend APIs, relational databases, authentication, SaaS platforms, and developer tooling.",
        "Giao diện người dùng hiện đại, backend API mạnh mẽ, cơ sở dữ liệu quan hệ, phân quyền xác thực và phần mềm SaaS."
      ),
      items: [
        t("Next.js 15, React, TypeScript & Tailwind CSS", "Next.js 15, React, TypeScript & Tailwind CSS"),
        t("REST APIs, Webhooks, Supabase & PostgreSQL", "REST API, Webhook, Supabase & PostgreSQL"),
        t("OAuth authentication & responsive interfaces", "Xác thực OAuth & giao diện tương thích đa thiết bị"),
      ],
      icon: Code2,
      color: "text-blue-400",
    },
    {
      num: "N° 03",
      title: t("AI Infrastructure & Hosting", "Hạ Tầng AI & Máy Chủ"),
      category: "SYSTEM INFRASTRUCTURE",
      desc: t(
        "Linux server management, Docker containerization, VPS provisioning, self-hosted AI model serving (vLLM/Ollama), and API gateways.",
        "Quản trị máy chủ Linux, container Docker, thiết lập VPS, vận hành mô hình AI riêng biệt (vLLM/Ollama) và cổng định tuyến API."
      ),
      items: [
        t("Linux (Ubuntu), Docker, and GPU server provisioning", "Máy chủ Linux, Docker & cấu hình GPU chuyên dụng"),
        t("vLLM & Ollama high-throughput model serving", "Vận hành mô hình hiệu năng cao với vLLM & Ollama"),
        t("Nginx reverse proxy, SSL/Certbot, and firewalls", "Điều phối Nginx, chứng chỉ SSL và tường lửa bảo mật"),
      ],
      icon: Terminal,
      color: "text-cyan-400",
    },
    {
      num: "N° 04",
      title: t("AI Consulting & Automation", "Tư Vấn AI & Tự Động Hóa"),
      category: "BUSINESS STRATEGY",
      desc: t(
        "Helping startups and businesses identify high-ROI AI opportunities, automate repetitive workflows, and integrate AI seamlessly.",
        "Đồng hành cùng doanh nghiệp tìm ra cơ hội ứng dụng AI hiệu quả nhất, tự động hóa điểm nghẽn và tích hợp công nghệ liền mạch."
      ),
      items: [
        t("Operational friction audits & AI feasibility reports", "Đánh giá quy trình vận hành & tính khả thi ứng dụng AI"),
        t("24/7 customer support bots & internal search", "Bot hỗ trợ khách hàng 24/7 & tra cứu tài liệu nội bộ"),
        t("Workflow automation & cross-platform syncing", "Tự động hóa luồng làm việc & đồng bộ dữ liệu đa kênh"),
      ],
      icon: Compass,
      color: "text-amber-400",
    },
    {
      num: "N° 05",
      title: t("Education & Mentorship", "Giảng Dạy & Cố Vấn Builder"),
      category: "PEDAGOGY & SKILLS",
      desc: t(
        "Teaching vibe coding, AI coding agents, programming fundamentals, web development, and practical AI engineering workflows.",
        "Hướng dẫn phương pháp Vibe Coding, chỉ huy tác tử lập trình AI, nền tảng phát triển web và quy trình kỹ nghệ AI thực chiến."
      ),
      items: [
        t("Spec-driven vibe coding & AI agent steering", "Lập trình Vibe Coding theo đặc tả & chỉ huy Agent"),
        t("Project-first learning: idea to live deployment", "Học qua dự án thực tế: từ ý tưởng đến chạy thật"),
        t("Debugging, error recovery, and system mastery", "Kỹ năng đọc log, gỡ lỗi và tự chủ làm chủ hệ thống"),
      ],
      icon: GraduationCap,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="what-i-do" className="py-20 sm:py-28 lg:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            <PixelLightning size={16} color="#06b6d4" className="shrink-0" />
            <span>{t("// WHAT I DO · TECHNICAL CAPABILITIES & OUTCOMES", "// NĂNG LỰC CÔNG NGHỆ & KẾT QUẢ ĐẦU RA")}</span>
          </div>

          <h2 className="section-headline-fluid font-serif text-white">
            {t("What I build & how it works.", "Những gì mình xây dựng & cách vận hành.")}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "I work across AI systems, full-stack software, infrastructure, consulting, and teaching — focusing on real outcomes rather than empty buzzwords.",
              "Mình làm việc trên các hệ thống AI, phần mềm full-stack, hạ tầng máy chủ, tư vấn và giảng dạy — tập trung vào kết quả thực tế thay vì thuật ngữ sáo rỗng."
            )}
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 1. VISUAL OUTCOME FLOWS */}
        {/* ---------------------------------------------------- */}
        <div className="mb-16 sm:mb-24 space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4 font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2 text-[11px] sm:text-xs">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t("// VISUAL SYSTEM FLOWS", "// SƠ ĐỒ LUỒNG VẬN HÀNH")}</span>
            </span>
            <span className="text-slate-400 font-mono text-[10px] sm:text-[11px]">ARCHITECTURE IN MOTION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {visualStoryFlows.map((item, idx) => {
              const flowList = isVi ? item.flowVi : item.flow;
              return (
                <div
                  key={idx}
                  className={`p-5 sm:p-8 bg-black/70 border rounded-sm shadow-xl space-y-4 sm:space-y-5 transition-all group ${item.accent}`}
                >
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-mono text-slate-400">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      FLOW 0{idx + 1}
                    </span>
                  </div>

                  {/* Flow Diagram Ribbon */}
                  <div className="p-3 sm:p-3.5 bg-black/60 border border-white/10 rounded-sm font-mono text-xs flex flex-wrap items-center gap-1.5 sm:gap-2 text-slate-200">
                    {flowList.map((node, nIdx) => (
                      <React.Fragment key={nIdx}>
                        <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-white/5 border border-white/15 rounded-sm font-bold text-white text-[10px] sm:text-[11px]">
                          {node}
                        </span>
                        {nIdx < flowList.length - 1 && (
                          <span className="text-cyan-400 font-bold text-xs">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. THE 5 CORE CAPABILITY DOMAINS */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4 font-mono text-xs">
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-[11px] sm:text-xs">
              {t("// 5 CORE CAPABILITY DOMAINS", "// 5 LĨNH VỰC NĂNG LỰC CHUYÊN MÔN")}
            </span>
            <span className="text-slate-400 font-mono text-[10px] sm:text-[11px]">HANDS-ON SPECIALIZATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {capabilityCategories.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.num}
                  className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-black/60 border border-white/15 hover:border-cyan-400/50 rounded-sm shadow-xl transition-all duration-300 group"
                >
                  <div className="space-y-4 sm:space-y-5">
                    <div className="flex items-center justify-between border-b border-white/15 pb-3 sm:pb-4">
                      <span className="text-xs font-serif font-bold text-cyan-400 font-mono">
                        {d.num}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-slate-300 uppercase">
                        {d.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-sm bg-white/5 border border-white/10 ${d.color} group-hover:bg-white/10 transition-colors shrink-0`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {d.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                        {d.desc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                        {t("DELIVERABLE CAPABILITIES:", "NĂNG LỰC BÀN GIAO:")}
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                        {d.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold group-hover:text-cyan-300 transition-colors uppercase tracking-widest text-[11px] touch-target"
                    >
                      <span>{t("DISCUSS PROJECT", "THẢO LUẬN DỰ ÁN")}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
