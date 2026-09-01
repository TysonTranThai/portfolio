"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Layers,
  Terminal,
  Cpu,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhatIDoSection() {
  const { t } = useLanguage();

  const domains = [
    {
      num: "N° 01",
      title: t("Autonomous AI Agents", "Hệ Thống AI Agent Tự Vận Hành"),
      category: t("INTELLIGENT SYSTEMS", "HỆ THỐNG THÔNG MINH"),
      desc: t(
        "Design, build, and deploy multi-agent swarms equipped with tool execution, vector search retrieval (RAG), and deterministic safety guardrails.",
        "Thiết kế, xây dựng và triển khai mạng lưới đa tác tử AI có khả năng thực thi công cụ, truy xuất cơ sở tri thức (RAG) và kiểm soát an toàn tuyệt đối."
      ),
      points: [
        t("Custom tool access & function calling", "Tích hợp công cụ và gọi hàm tùy chỉnh"),
        t("Multi-turn context & conversational memory", "Bộ nhớ hội thoại ngữ cảnh dài hạn"),
        t("Self-healing error recovery & audit logs", "Tự phục hồi lỗi và ghi log giám sát"),
      ],
      icon: Bot,
    },
    {
      num: "N° 02",
      title: t("Modern Web & Full-Stack SaaS", "Phần Mềm Web & Nền Tảng SaaS"),
      category: t("SYSTEM ARCHITECTURE", "KIẾN TRÚC HỆ THỐNG"),
      desc: t(
        "Production-grade web apps, internal dashboards, and client portals built with Next.js 15, React, TypeScript, and modern PostgreSQL databases.",
        "Phát triển ứng dụng web, dashboard quản trị và cổng thông tin doanh nghiệp hoàn chỉnh với Next.js 15, React, TypeScript và PostgreSQL."
      ),
      points: [
        t("Server-rendered high performance architectures", "Kiến trúc render máy chủ tốc độ cao"),
        t("Real-time collaborative interfaces", "Giao diện cộng tác thời gian thực"),
        t("End-to-end type safety with TypeScript & Prisma", "Đảm bảo tính an toàn dữ liệu từ đầu đến cuối"),
      ],
      icon: Layers,
    },
    {
      num: "N° 03",
      title: t("Private Linux & AI Infrastructure", "Hạ Tầng AI & Máy Chủ Linux"),
      category: t("INFRASTRUCTURE & OPS", "HẠ TẦNG & VẬN HÀNH"),
      desc: t(
        "Setup, optimize, and manage bare-metal Linux VPS servers, self-hosted open-weight LLMs (vLLM, Ollama), Docker containers, and CI/CD pipelines.",
        "Thiết lập, tối ưu và quản trị máy chủ Linux VPS độc lập, mô hình AI tự lưu trữ (vLLM, Ollama), container Docker và chuỗi tự động hóa CI/CD."
      ),
      points: [
        t("Self-hosted inference with zero token markup", "Vận hành mô hình riêng không chịu phí token đắt đỏ"),
        t("Automated SSL, firewalls, and daily snapshots", "Bảo mật SSL, tường lửa và sao lưu định kỳ"),
        t("High-concurrency Nginx reverse proxy routing", "Điều phối lưu lượng truy cập lớn qua Nginx"),
      ],
      icon: Terminal,
    },
    {
      num: "N° 04",
      title: t("Workflow Automation & Meshes", "Tự Động Hóa Quy Trình Nghiệp Vụ"),
      category: t("AUTOMATION PIPELINES", "CHUỖI TỰ ĐỘNG HÓA"),
      desc: t(
        "Automate repetitive manual operations into self-healing background pipelines connecting CRMs, databases, email, and messaging platforms.",
        "Chuyển đổi quy trình thủ công tốn thời gian thành chuỗi xử lý ngầm tự động liên kết CRM, cơ sở dữ liệu, email và các kênh chat."
      ),
      points: [
        t("Event-driven webhook orchestrations", "Kích hoạt xử lý theo sự kiện thời gian thực"),
        t("Intelligent document parsing & vectorization", "Phân tích và trích xuất dữ liệu tài liệu tự động"),
        t("Automated notifications & sync flows", "Đồng bộ dữ liệu và thông báo đa kênh"),
      ],
      icon: Cpu,
    },
    {
      num: "N° 05",
      title: t("Builder Coaching & Mentorship", "Đào Tạo & Cố Vấn Kỹ Thuật"),
      category: t("THE ACADEMY", "HỌC VIỆN BUILDER"),
      desc: t(
        "Hands-on mentorship for founders, software engineers, and creative builders looking to master spec-driven vibe coding and multi-agent AI systems.",
        "Chương trình đào tạo thực chiến 1-on-1 cho founder, kỹ sư và builder muốn làm chủ kỹ thuật Vibe Coding theo đặc tả và làm chủ hệ thống AI."
      ),
      points: [
        t("Spec-first AI prompt and context engineering", "Kỹ nghệ ngữ cảnh và viết prompt chuẩn đặc tả"),
        t("Autonomous multi-agent orchestration", "Điều phối hệ thống AI Agent độc lập"),
        t("Real production project delivery from scratch", "Xây dựng và triển khai sản phẩm thật từ con số 0"),
      ],
      icon: GraduationCap,
    },
  ];

  return (
    <section id="what-i-do" className="py-28 md:py-36 relative bg-[#070b14] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// CAPABILITIES & DOMAINS", "// NĂNG LỰC & LĨNH VỰC")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Core architectural capabilities.", "Các năng lực kiến trúc cốt lõi.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "From autonomous reasoning systems and private self-hosted inference clusters to modern full-stack web applications and builder coaching.",
              "Từ các hệ thống suy luận tự vận hành, hạ tầng AI độc lập cho đến ứng dụng web hiện đại và chương trình đào tạo kỹ sư."
            )}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.num}
                className="flex flex-col justify-between p-8 sm:p-10 bg-black/60 border border-white/15 hover:border-amber-400/50 rounded-sm shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <span className="text-xs font-serif font-bold text-amber-400 font-mono">
                      {d.num}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {d.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {d.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans pt-1">
                      {d.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
                      {t("DELIVERABLE CAPABILITIES:", "NĂNG LỰC BÀN GIAO:")}
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {d.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold group-hover:text-amber-300 transition-colors uppercase tracking-widest text-[11px]"
                  >
                    <span>{t("ENGAGE DOMAIN", "KHÁM PHÁ THÊM")}</span>
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
