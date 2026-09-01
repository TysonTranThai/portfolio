"use client";

import * as React from "react";
import {
  Copy,
  Clock,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Users,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon, TelegramIcon } from "@/components/ui/Icons";
import { contactInfo, socialLinks } from "@/data/socials";
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

    const subject = `[${inquiryType.toUpperCase()} PARTNERSHIP] from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryType}\n\nProject Scope:\n${message}`;
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    showToast("Opening mail client...", "info");
  };

  const renderSocialIcon = (platform: string) => {
    if (platform === "GitHub") return <GithubIcon className="w-4 h-4" />;
    if (platform === "LinkedIn") return <LinkedinIcon className="w-4 h-4" />;
    if (platform === "Telegram") return <TelegramIcon className="w-4 h-4" />;
    return <TwitterXIcon className="w-4 h-4" />;
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{"// REQUEST PARTNERSHIP & INQUIRIES"}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            Start a partnership.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Whether you need autonomous AI systems architected, private LLMs hosted, or 1-on-1 mentorship — let’s align on the scope and upside.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Transmission Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-sm bg-black/60 border border-white/20 shadow-2xl backdrop-blur-xl space-y-6">
              <div className="border-b border-white/15 pb-4 space-y-1">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                  DIRECT CHANNEL
                </span>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-mono text-white select-all">
                    {contactInfo.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-sm bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400">
                  <Clock className="w-4 h-4" />
                  <span>RESPONSE TIME: UNDER 12 HOURS</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>LOCATION: VIETNAM · AVAILABLE GLOBALLY</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest block mb-3">
                  CONNECT ON NETWORK
                </span>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((s) => (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-white/5 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white rounded-sm text-xs font-mono flex items-center gap-2 transition-colors"
                    >
                      {renderSocialIcon(s.platform)}
                      <span>{s.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Partnership Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-12 rounded-sm bg-black/70 border border-white/20 shadow-2xl backdrop-blur-xl space-y-6"
            >
              {/* Intent Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                  SELECT PARTNERSHIP TYPE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                  {[
                    { id: "client", label: "Client Brief", icon: Briefcase },
                    { id: "student", label: "Mentorship", icon: GraduationCap },
                    { id: "collaborator", label: "Co-Build", icon: Users },
                    { id: "general", label: "Advisory", icon: Users },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setInquiryType(tab.id as InquiryType)}
                      className={`p-3 rounded-sm border text-left transition-all ${
                        inquiryType === tab.id
                          ? "bg-amber-400 text-black border-amber-400 font-bold"
                          : "bg-white/5 text-slate-300 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                <div className="space-y-1.5">
                  <label className="text-slate-400 uppercase tracking-wider block">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Aurelius"
                    className="w-full p-3.5 bg-white/5 border border-white/15 rounded-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@emperor.ai"
                    className="w-full p-3.5 bg-white/5 border border-white/15 rounded-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Message / Scope Field */}
              <div className="space-y-1.5 font-mono text-xs">
                <label className="text-slate-400 uppercase tracking-wider block">
                  Project Scope &amp; Target Outcomes
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe what you want to build, automate, or learn..."
                  className="w-full p-3.5 bg-white/5 border border-white/15 rounded-sm text-white focus:outline-none focus:border-amber-400 resize-none font-sans text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-white text-black hover:bg-slate-200 font-mono text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>Transmit Partnership Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
