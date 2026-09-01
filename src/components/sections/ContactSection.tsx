"use client";

import * as React from "react";
import {
  Mail,
  Send,
  MapPin,
  Clock,
  ShieldCheck,
  Briefcase,
  Layers,
  GraduationCap,
  Copy,
  Check,
  Terminal,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PixelBot } from "@/components/ui/PixelArtIcons";
import { CommsAntenna } from "@/components/world/TactileObjects";
import { contactInfo } from "@/data/socials";
import { useToast } from "@/components/ui/Toast";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = React.useState(false);
  const [copiedTelegram, setCopiedTelegram] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    showToast(`${contactInfo.email} ${t("copied to clipboard.", "đã lưu vào bộ nhớ tạm.")}`, "success");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText(contactInfo.telegram);
    setCopiedTelegram(true);
    showToast(`${contactInfo.telegram} ${t("copied to clipboard.", "đã lưu vào bộ nhớ tạm.")}`, "success");
    setTimeout(() => setCopiedTelegram(false), 2000);
  };

  const directChannels = [
    {
      id: "email",
      label: t("PRIMARY EMAIL", "HÒM THƯ CHÍNH"),
      value: contactInfo.email,
      subtext: t("Best for detailed inquiries, project briefs & proposals", "Phù hợp cho trao đổi chi tiết, kế hoạch dự án & hợp tác"),
      icon: Mail,
      actionText: copiedEmail ? t("COPIED!", "ĐÃ SAO CHÉP!") : t("COPY EMAIL", "SAO CHÉP"),
      onAction: handleCopyEmail,
      linkUrl: `mailto:${contactInfo.email}`,
      linkText: t("OPEN INBOX ↗", "MỞ EMAIL ↗"),
      color: "text-cyan-400 border-cyan-500/30 hover:border-cyan-400/60 bg-cyan-950/15",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    },
    {
      id: "telegram",
      label: t("TELEGRAM DIRECT", "TELEGRAM TRỰC TIẾP"),
      value: contactInfo.telegram,
      subtext: t("Instant messaging, quick syncs & fast chats", "Nhắn tin trao đổi nhanh, cập nhật tiến độ công việc"),
      icon: Send,
      actionText: copiedTelegram ? t("COPIED!", "ĐÃ SAO CHÉP!") : t("COPY HANDLE", "SAO CHÉP"),
      onAction: handleCopyTelegram,
      linkUrl: contactInfo.telegramUrl,
      linkText: t("OPEN TELEGRAM ↗", "MỞ CHAT ↗"),
      color: "text-blue-400 border-blue-500/30 hover:border-blue-400/60 bg-blue-950/15",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    },
    {
      id: "github",
      label: t("GITHUB PROFILE", "KHO MÃ NGUỒN GITHUB"),
      value: "github.com/TysonTranThai",
      subtext: t("Open-source repos, GPU Rental Kit & technical experiments", "Mã nguồn mở, công cụ GPU Rental Kit & các dự án cá nhân"),
      icon: GithubIcon,
      actionText: t("VIEW REPOS ↗", "XEM REPO ↗"),
      onAction: () => window.open("https://github.com/TysonTranThai", "_blank"),
      linkUrl: "https://github.com/TysonTranThai",
      linkText: t("VISIT GITHUB ↗", "TRUY CẬP ↗"),
      color: "text-violet-400 border-violet-500/30 hover:border-violet-400/60 bg-violet-950/15",
      badgeColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    },
    {
      id: "linkedin",
      label: t("LINKEDIN NETWORK", "MẠNG LƯỚI LINKEDIN"),
      value: "linkedin.com/in/tysontran",
      subtext: t("Professional networking, verified profile & career updates", "Kết nối nghề nghiệp, hồ sơ chuyên môn & cập nhật mới nhất"),
      icon: LinkedinIcon,
      actionText: t("CONNECT ↗", "KẾT NỐI ↗"),
      onAction: () => window.open("https://linkedin.com/in/tysontran", "_blank"),
      linkUrl: "https://linkedin.com/in/tysontran",
      linkText: t("VISIT PROFILE ↗", "XEM PROFILE ↗"),
      color: "text-amber-400 border-amber-500/30 hover:border-amber-400/60 bg-amber-950/15",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    },
  ];

  const engagementPaths = [
    {
      role: t("1. HIRING & RECRUITERS", "1. TUYỂN DỤNG & ĐỐI TÁC KỸ THUẬT"),
      desc: t(
        "Available for remote AI engineering roles, contract builds, and full-stack software development.",
        "Sẵn sàng nhận vị trí Kỹ sư AI từ xa, phát triển hệ thống AI theo hợp đồng dự án và lập trình full-stack."
      ),
      icon: Briefcase,
      accent: "text-blue-400 border-blue-500/20",
    },
    {
      role: t("2. BUSINESSES & STARTUPS", "2. DOANH NGHIỆP & STARTUP"),
      desc: t(
        "Custom autonomous AI agents, workflow automation pipelines, bare-metal Linux/GPU server setups, and rapid MVP delivery.",
        "Xây dựng tác tử AI tự hành, tự động hóa quy trình vận hành, thiết lập máy chủ GPU/Linux riêng và phát triển MVP thần tốc."
      ),
      icon: Layers,
      accent: "text-amber-400 border-amber-500/20",
    },
    {
      role: t("3. LEARNERS & ASPIRING BUILDERS", "3. HỌC TẬP & CỐ VẤN 1-ON-1"),
      desc: t(
        "1-on-1 practical mentorship in spec-driven vibe coding, prompt engineering, and building real web applications from scratch.",
        "Cố vấn trực tiếp 1-on-1 về phương pháp Vibe Coding theo đặc tả, kỹ nghệ prompt và tự tay làm ra sản phẩm hoàn chỉnh."
      ),
      icon: GraduationCap,
      accent: "text-emerald-400 border-emerald-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#06080e] text-white border-t border-white/15 atmosphere-blue overflow-hidden">
      {/* Decorative Grid Scanlines */}
      <div className="absolute inset-0 bg-computational-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10 space-y-16">
        
        {/* ---------------------------------------------------- */}
        {/* 1. SECTION HEADER + COMMS DISH */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
              <PixelBot size={16} color="#06b6d4" className="animate-pulse" />
              <span>{t("// DIRECT TRANSMISSION & CONTACT INFO", "// KÊNH LIÊN HỆ & THÔNG TIN KẾT NỐI")}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
              {t("Let's build something extraordinary.", "Hãy cùng kiến tạo những điều tuyệt vời.")}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
              {t(
                "No intermediaries, no bureaucratic delays. Reach out directly through any of the verified channels below — whether for engineering roles, client automation systems, or 1-on-1 mentorship.",
                "Không qua trung gian, không thủ tục rườm rà. Kết nối trực tiếp với mình qua các kênh liên hệ chính thức bên dưới — dù bạn cần tuyển dụng kỹ sư, xây dựng giải pháp AI cho doanh nghiệp hay cố vấn học tập 1-on-1."
              )}
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
            <div className="p-4 rounded-sm bg-black/60 border border-cyan-500/30 shadow-2xl relative">
              <CommsAntenna className="transform hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. DIRECT COMMUNICATION CHANNELS (4 CARDS GRID) */}
        {/* ---------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {directChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.id}
                className={`p-6 sm:p-8 rounded-sm border shadow-2xl space-y-5 transition-all duration-300 group flex flex-col justify-between ${channel.color}`}
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Label */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-sm bg-white/5 border border-white/10 text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold tracking-wider uppercase text-white">
                        {channel.label}
                      </span>
                    </div>
                    <span className={`text-[10px] font-mono tracking-widest px-2 py-0.5 rounded-sm border ${channel.badgeColor} uppercase`}>
                      ACTIVE
                    </span>
                  </div>

                  {/* Channel Value */}
                  <div className="space-y-1">
                    <div className="text-lg sm:text-xl font-mono font-bold text-white tracking-wide break-all select-all group-hover:text-cyan-300 transition-colors">
                      {channel.value}
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed">
                      {channel.subtext}
                    </p>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                  <button
                    onClick={channel.onAction}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase rounded-sm border border-white/15 transition-all text-[11px]"
                  >
                    {channel.id === "email" && copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : channel.id === "telegram" && copiedTelegram ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-300" />
                    )}
                    <span>{channel.actionText}</span>
                  </button>

                  <a
                    href={channel.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-bold transition-colors uppercase tracking-widest text-[11px]"
                  >
                    <span>{channel.linkText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. OPERATIONAL SLA & WORKING LOGISTICS TABLET */}
        {/* ---------------------------------------------------- */}
        <div className="p-8 sm:p-12 bg-black/85 border border-blue-500/30 rounded-sm shadow-2xl space-y-8 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/15 pb-4 gap-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>{t("OPERATIONAL SLA & DIRECT PROTOCOLS", "CAM KẾT VẬN HÀNH & NGUYÊN TẮC HỢP TÁC")}</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{t("STATUS: OPEN FOR NEW ENGAGEMENTS", "TRẠNG THÁI: SẴN SÀNG NHẬN DỰ ÁN")}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1.5">
              <div className="flex items-center gap-2 text-blue-400 font-mono font-bold text-[11px] uppercase">
                <Clock className="w-3.5 h-3.5" />
                <span>{t("RESPONSE SLA", "TỐC ĐỘ PHẢN HỒI")}</span>
              </div>
              <p className="text-slate-200 text-xs">
                {t("Within 12 hours guaranteed across all channels.", "Cam kết phản hồi trong vòng 12h trên mọi kênh.")}
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-[11px] uppercase">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t("LOCATION & TIME", "ĐỊA ĐIỂM & MÚI GIỜ")}</span>
              </div>
              <p className="text-slate-200 text-xs">
                {t("Vietnam · GMT+7 (Available for remote global sync).", "Việt Nam · GMT+7 (Làm việc từ xa linh hoạt toàn cầu).")}
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-[11px] uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t("CONFIDENTIALITY", "BẢO MẬT DỮ LIỆU")}</span>
              </div>
              <p className="text-slate-200 text-xs">
                {t("Mutual NDA & 100% private data sovereignty guaranteed.", "Cam kết bảo mật NDA & làm chủ 100% dữ liệu.")}
              </p>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-[11px] uppercase">
                <Zap className="w-3.5 h-3.5" />
                <span>{t("DELIVERY VELOCITY", "TỐC ĐỘ TRIỂN KHAI")}</span>
              </div>
              <p className="text-slate-200 text-xs">
                {t("Rapid iterations, functional MVPs in days, continuous deployment.", "Ra mắt MVP chỉ trong vài ngày, cập nhật liên tục.")}
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 4. THREE WAYS TO COLLABORATE (INFO GUIDE) */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/15 pb-4 font-mono text-xs">
            <span className="text-slate-400 font-bold uppercase tracking-widest">
              {t("// TAILORED COLLABORATION PATHWAYS", "// CÁC HÌNH THỨC ĐỒNG HÀNH")}
            </span>
            <span className="text-cyan-400 font-mono text-[11px]">SELECT YOUR PATH</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementPaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 bg-black/60 border rounded-sm shadow-xl space-y-3 font-sans ${path.accent}`}
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-white uppercase">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{path.role}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {path.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
