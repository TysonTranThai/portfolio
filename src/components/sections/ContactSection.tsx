"use client";

import * as React from "react";
import {
  Copy,
  CheckCircle2,
  Clock,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, TelegramIcon } from "@/components/ui/Icons";
import { contactInfo, socialLinks } from "@/data/socials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

type InquiryType = "client" | "student" | "collaborator" | "general";

export function ContactSection() {
  const [inquiryType, setInquiryType] = React.useState<InquiryType>("client");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    showToast("Email copied to clipboard: " + contactInfo.email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      showToast("Please fill in your name and email.", "error");
      return;
    }

    const subject = `[${inquiryType.toUpperCase()} INQUIRY] from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    showToast("Opening email client...", "info");
  };

  const renderSocialIcon = (platform: string) => {
    if (platform === "GitHub") return <GithubIcon className="w-3.5 h-3.5" />;
    if (platform === "LinkedIn") return <LinkedinIcon className="w-3.5 h-3.5" />;
    if (platform === "Telegram") return <TelegramIcon className="w-3.5 h-3.5" />;
    return <TwitterXIcon className="w-3.5 h-3.5" />;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-computational-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Transmission"
          title="Let's Build Something Exceptional"
          subtitle="Whether you need an AI agent, a full-stack web application, operational automation, or 1-on-1 vibe coding mentorship — I'm ready to collaborate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & context (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              glowColor="rgba(16, 185, 129, 0.2)"
              className="p-8 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10 space-y-6"
            >
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                  DIRECT_COMMUNICATION_CHANNEL
                </span>
                <h3 className="text-xl font-bold text-white font-sans mt-1">
                  Connect Directly
                </h3>
              </div>

              {/* Email quick card */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400">
                  PRIMARY_ENDPOINT
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono font-bold text-emerald-400 truncate">
                    {contactInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-colors shadow-sm shrink-0"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status & Timezone */}
              <div className="space-y-2.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-bold text-white">
                    STATUS:
                  </span>
                  <span className="text-emerald-400">ONLINE (Accepting Q3/Q4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>TIMEZONE: {contactInfo.timezone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>RESPONSE_TIME: {contactInfo.responseExpectation}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  ONLINE_PROFILES
                </div>
                <div className="grid grid-cols-2 gap-2 font-mono">
                  {socialLinks.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Tyson's ${s.platform}`}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      {renderSocialIcon(s.platform)}
                      <span className="truncate">{s.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Interactive Inquiry Router (Right 7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard
              glowColor="rgba(16, 185, 129, 0.2)"
              className="p-8 bg-slate-950/80 dark:bg-surface-100/80 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    INQUIRY_ROUTER
                  </span>
                  <h3 className="text-xl font-bold text-white font-sans mt-1">
                    Send Project Brief / Application
                  </h3>
                </div>

                {/* Objective Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono">
                  <button
                    type="button"
                    onClick={() => setInquiryType("client")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      inquiryType === "client"
                        ? "bg-white text-slate-950 border-emerald-400 shadow-md font-bold"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs">Client Project</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1 font-sans">AI &amp; Automation</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType("student")}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      inquiryType === "student"
                        ? "bg-white text-slate-950 border-emerald-400 shadow-md font-bold"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs">Mentorship</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1 font-sans">Learn Vibe Coding</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType("collaborator")}
                    className={`p-3 rounded-2xl border text-left transition-all col-span-2 sm:col-span-1 ${
                      inquiryType === "collaborator"
                        ? "bg-white text-slate-950 border-emerald-400 shadow-md font-bold"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-xs">Collaborate</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1 font-sans">Build Together</p>
                  </button>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300">
                      YOUR_NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300">
                      EMAIL_ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-sans">
                  <label className="text-xs font-mono font-semibold text-slate-300">
                    PROJECT_GOALS_OR_INQUIRY_DETAILS
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      inquiryType === "client"
                        ? "Describe your system requirements, architecture goals, or timeline..."
                        : inquiryType === "student"
                        ? "Tell me what application or idea you want to build..."
                        : "Tell me about the venture or partnership idea..."
                    }
                    className="w-full px-4 py-3 bg-black/60 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] font-mono text-slate-500">
                    ROUTING: <span className="text-emerald-400">{contactInfo.email}</span>
                  </span>

                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="font-mono text-xs font-bold uppercase shadow-xl"
                  >
                    Send Transmission
                  </Button>
                </div>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
