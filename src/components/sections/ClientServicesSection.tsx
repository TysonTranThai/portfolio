"use client";

import * as React from "react";
import Link from "next/link";
import {
  Bot,
  Zap,
  MessageSquare,
  Code2,
  Terminal,
  Compass,
  Rocket,
  CheckCircle2,
  Clock,
  Users,
  Sparkles,
  Building2,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ClientService } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ClientServicesSection() {
  const [selectedService, setSelectedService] = React.useState<ClientService | null>(null);
  const { language, t } = useLanguage();
  const isVi = language === "vi";

  const getServiceConfig = (id: string, index: number) => {
    switch (id) {
      case "ai-integration":
        return {
          icon: Zap,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-business-automation":
        return {
          icon: Zap,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-agent-development":
        return {
          icon: Bot,
          color: "text-violet-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-customer-support":
        return {
          icon: MessageSquare,
          color: "text-cyan-400",
          number: `N° 0${index + 1}`,
        };
      case "custom-software-saas":
        return {
          icon: Code2,
          color: "text-blue-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-infrastructure-hosting":
        return {
          icon: Terminal,
          color: "text-cyan-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-consulting-advisory":
        return {
          icon: Compass,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
      case "ai-product-mvp":
        return {
          icon: Rocket,
          color: "text-rose-400",
          number: `N° 0${index + 1}`,
        };
      default:
        return {
          icon: Bot,
          color: "text-amber-400",
          number: `N° 0${index + 1}`,
        };
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-amber">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{t("// FOR BUSINESSES · SERVICES & ADVISORY", "// DÀNH CHO DOANH NGHIỆP · DỊCH VỤ & TƯ VẤN THỰC CHIẾN")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Practical AI solutions tailored to your business.", "Giải pháp AI thực tế may đo riêng cho doanh nghiệp.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "I help businesses figure out where AI actually makes sense and then build the solution: autonomous agents, automated operations, sovereign infrastructure, and full-stack software.",
              "Mình hỗ trợ doanh nghiệp tìm ra chính xác vị trí AI tạo ra đòn bẩy thực tế và trực tiếp xây dựng giải pháp: tác tử tự hành, tự động hóa quy trình, hạ tầng máy chủ riêng và phần mềm full-stack."
            )}
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* BUSINESS-TO-AI VALUE ASSEMBLY PIPELINE */}
        {/* ---------------------------------------------------- */}
        <div className="mb-16 p-6 sm:p-8 bg-black/85 border border-amber-500/30 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-400 opacity-60 animate-neon-shimmer" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-4 mb-6 gap-2 font-mono">
            <div className="text-xs text-amber-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>{t("// BUSINESS-TO-AI VALUE ASSEMBLY PIPELINE", "// QUY TRÌNH CHUYỂN ĐỔI GIÁ TRỊ DOANH NGHIỆP")}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-wider">
              {t("CLEAR ROI · ZERO FLUFF", "HIỆU QUẢ THỰC · KHÔNG CƯỜNG ĐIỆU")}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
            <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-sm space-y-2 relative">
              <div className="text-[10px] text-amber-400 font-bold">STAGE 01</div>
              <div className="text-sm font-serif font-bold text-white">{t("1. Real Problem", "1. Chẩn Đoán Vấn Đề")}</div>
              <p className="text-[11px] font-sans text-slate-400">{t("Identify bottlenecks where AI delivers measurable leverage.", "Xác định điểm nghẽn nơi AI thực sự tạo ra đột phá.")}</p>
            </div>

            <div className="p-4 bg-violet-950/20 border border-violet-500/30 rounded-sm space-y-2 relative">
              <div className="text-[10px] text-violet-400 font-bold">STAGE 02</div>
              <div className="text-sm font-serif font-bold text-white">{t("2. Custom AI Agent", "2. May Đo AI Agent")}</div>
              <p className="text-[11px] font-sans text-slate-400">{t("Engineer autonomous agents tailored to your team's workflow.", "Lập trình tác tử tự hành tương thích với quy trình sẵn có.")}</p>
            </div>

            <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-sm space-y-2 relative">
              <div className="text-[10px] text-cyan-400 font-bold">STAGE 03</div>
              <div className="text-sm font-serif font-bold text-white">{t("3. Self-Hosted Infra", "3. Triển Khai Hạ Tầng")}</div>
              <p className="text-[11px] font-sans text-slate-400">{t("Host on sovereign GPU/VPS with zero vendor lock-in.", "Vận hành trên máy chủ riêng biệt, an toàn dữ liệu 100%.")}</p>
            </div>

            <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-sm space-y-2 relative">
              <div className="text-[10px] text-emerald-400 font-bold">STAGE 04</div>
              <div className="text-sm font-serif font-bold text-white">{t("4. Verified ROI", "4. Bàn Giao & Đo Lường")}</div>
              <p className="text-[11px] font-sans text-slate-400">{t("Cut hours of manual toil and scale operations nonstop.", "Cắt giảm hàng chục giờ thủ công và tự động hóa 24/7.")}</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const config = getServiceConfig(service.id, idx);
            const Icon = config.icon;
            const title = isVi && service.titleVi ? service.titleVi : service.title;
            const category = isVi && service.categoryVi ? service.categoryVi : service.category;
            const description = isVi && service.descriptionVi ? service.descriptionVi : service.description;
            const deliverables = isVi && service.deliverablesVi ? service.deliverablesVi : service.deliverables;

            return (
              <div
                key={service.id}
                className="flex flex-col justify-between p-8 bg-black/70 border border-amber-500/20 hover:border-amber-400/50 rounded-sm shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Top Number & Tag */}
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <span className="text-2xl font-serif font-bold text-amber-400 font-mono">
                      {config.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-0.5 bg-white/5 border border-white/10 text-slate-300 uppercase">
                      {category}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className={`w-4 h-4 ${config.color}`} />
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                        {title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                      {description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1 font-mono">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                      {t("KEY DELIVERABLES:", "BÀN GIAO CHÍNH:")}
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300 font-sans">
                      {deliverables.slice(0, 3).map((del, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-white/15 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider underline underline-offset-4"
                  >
                    {t("SPECS →", "CHI TIẾT →")}
                  </button>

                  <Link
                    href="#contact"
                    className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-[11px] rounded-sm transition-colors shadow-md"
                  >
                    {t("INQUIRE", "TƯ VẤN")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Service Modal */}
        {selectedService && (
          <Modal
            isOpen={Boolean(selectedService)}
            onClose={() => setSelectedService(null)}
            title={isVi && selectedService.titleVi ? selectedService.titleVi : selectedService.title}
            maxWidth="2xl"
          >
            <div className="space-y-6 text-sm text-slate-300 font-sans">
              <div className="p-4 bg-amber-950/30 border border-amber-500/30 text-xs text-amber-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isVi && selectedService.taglineVi ? selectedService.taglineVi : selectedService.tagline}</span>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-1.5 text-base">
                  {t("Scope Overview", "Tổng Quan Phạm Vi")}
                </h4>
                <p className="leading-relaxed text-slate-200">
                  {isVi && selectedService.descriptionVi ? selectedService.descriptionVi : selectedService.description}
                </p>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  {t("Deliverables Contract", "Hợp Đồng Bàn Giao")}
                </h4>
                <ul className="space-y-2 text-xs">
                  {(isVi && selectedService.deliverablesVi ? selectedService.deliverablesVi : selectedService.deliverables).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-black border border-white/15">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400 text-xs mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <span>{t("WHO THIS IS FOR", "ĐỐI TƯỢNG PHÙ HỢP")}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {(isVi && selectedService.targetAudienceVi ? selectedService.targetAudienceVi : selectedService.targetAudience).map((target, i) => (
                      <li key={i}>• {target}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-black border border-white/15">
                  <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400 text-xs mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t("DELIVERY TIMELINE", "THỜI GIAN TRIỂN KHAI")}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {(isVi && selectedService.timelineGuideVi ? selectedService.timelineGuideVi : selectedService.timelineGuide) || (t("1–3 weeks depending on architecture scope", "1–3 tuần tùy quy mô kiến trúc"))}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-serif font-bold text-white mb-2 text-base">
                  {t("Example Use Cases", "Trường Hợp Ứng Dụng Thực Tế")}
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {(isVi && selectedService.exampleUseCasesVi ? selectedService.exampleUseCasesVi : selectedService.exampleUseCases).map((useCase, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase rounded-sm text-center"
                >
                  {t("Close", "Đóng")}
                </button>
                <Link
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase rounded-sm text-center shadow-md transition-colors"
                >
                  {isVi && selectedService.ctaTextVi ? selectedService.ctaTextVi : selectedService.ctaText}
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}
