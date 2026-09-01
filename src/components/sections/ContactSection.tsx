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
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
    <section id="contact" className="py-20 md:py-28 bg-surface-100/50 dark:bg-surface-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Initiate Contact"
          title="Let's Build Something Exceptional"
          subtitle="Whether you need an AI agent, a full-stack web application, operational automation, or 1-on-1 vibe coding mentorship — I'm ready to collaborate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels & context (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 bg-white dark:bg-surface-100 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Direct Communication
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Reach out directly or use the inquiry form.
                </p>
              </div>

              {/* Email quick card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-surface-200 border border-slate-200/80 dark:border-surface-300/40 space-y-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Primary Email
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-mono font-bold text-slate-900 dark:text-white truncate">
                    {contactInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-white dark:bg-surface-100 hover:bg-slate-100 dark:hover:bg-surface-300 text-slate-600 dark:text-slate-300 transition-colors shadow-sm shrink-0"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status & Timezone */}
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Status:
                  </span>
                  <span>{profileData.availability.status} (Q3/Q4 Active)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                  <span>Timezone: {contactInfo.timezone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Response: {contactInfo.responseExpectation}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100 dark:border-surface-200/60">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Online Profiles &amp; Chat
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-surface-200/60 hover:bg-slate-100 dark:hover:bg-surface-200 border border-slate-200/60 dark:border-surface-300/40 flex items-center gap-2 text-xs font-medium text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      {renderSocialIcon(s.platform)}
                      <span className="truncate">{s.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Inquiry Router (Right 7 cols) */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 bg-white dark:bg-surface-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Select your objective to customize the inquiry routing.
                  </p>
                </div>

                {/* Objective Selector Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setInquiryType("client")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      inquiryType === "client"
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-md"
                        : "bg-slate-50 dark:bg-surface-200 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-surface-300 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase className="w-4 h-4 text-sky-400" />
                      <span className="text-xs font-bold">Client Project</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1">AI, Apps, Automation</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType("student")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      inquiryType === "student"
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-md"
                        : "bg-slate-50 dark:bg-surface-200 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-surface-300 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold">Student Mentorship</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1">Learn Vibe Coding</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType("collaborator")}
                    className={`p-3 rounded-xl border text-left transition-all col-span-2 sm:col-span-1 ${
                      inquiryType === "collaborator"
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-transparent shadow-md"
                        : "bg-slate-50 dark:bg-surface-200 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-surface-300 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold">Collaborate</span>
                    </div>
                    <p className="text-[10px] opacity-75 line-clamp-1">Build Together</p>
                  </button>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Project Goals / What You&apos;d Like to Build
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      inquiryType === "client"
                        ? "Describe your system requirements, timeline, or current automation bottlenecks..."
                        : inquiryType === "student"
                        ? "Tell me what application or idea you want to build and your current experience level..."
                        : "Tell me about the project, venture, or partnership idea..."
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-surface-200 border border-slate-200 dark:border-surface-300 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Direct routing to <span className="font-mono">{contactInfo.email}</span>
                  </span>

                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Send Inquiry
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
