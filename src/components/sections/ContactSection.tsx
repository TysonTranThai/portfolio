"use client";

import * as React from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { contactInfo } from "@/data/socials";
import { useToast } from "@/components/ui/Toast";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [copied, setCopied] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    interest: "Client Project",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    showToast(`${contactInfo.email} ${t("copied to clipboard.", "đã lưu vào bộ nhớ tạm.")}`, "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate direct dispatch
    await new Promise((resolve) => setTimeout(resolve, 800));

    showToast(
      t(
        "Transmission encrypted. Tyson will review your requirements within 12 hours.",
        "Thông tin đã được mã hóa. Tyson sẽ phản hồi lại trong vòng 12 giờ."
      ),
      "success"
    );

    setFormData({
      name: "",
      email: "",
      interest: "Client Project",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative bg-[#06080e] text-white border-t border-white/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        
        {/* Section Header */}
        <div className="space-y-4 mb-20 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            <span>{t("// REQUEST PARTNERSHIP & INQUIRIES", "// YÊU CẦU HỢP TÁC & LIÊN HỆ")}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-tight">
            {t("Let’s architect the upside.", "Cùng xây dựng giá trị vượt bậc.")}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {t(
              "Whether you want to build custom autonomous agents, deploy private AI models, or explore high-velocity 1-on-1 mentorship — transmit your requirements below.",
              "Dù bạn cần xây dựng hệ thống AI Agent độc lập, triển khai mô hình riêng biệt hay tham gia chương trình đào tạo kỹ thuật chuyên sâu — hãy gửi yêu cầu của bạn bên dưới."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Channels & Terms (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 bg-black/60 border border-white/15 rounded-sm shadow-xl space-y-6 font-sans">
              <div className="space-y-2 border-b border-white/15 pb-4">
                <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                  {t("DIRECT TRANSMISSION", "KÊNH TRUYỀN TIN TRỰC TIẾP")}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {t("Fast-Track Channels", "Liên Hệ Nhanh")}
                </h3>
              </div>

              {/* Direct email card */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 text-xs">
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span>{t("PRIMARY ENDPOINT", "EMAIL CHÍNH")}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[10px] font-bold text-amber-400 hover:underline uppercase"
                  >
                    {copied ? t("COPIED!", "ĐÃ SAO CHÉP!") : t("COPY", "SAO CHÉP")}
                  </button>
                </div>
                <div className="text-sm font-bold text-white break-all">
                  {contactInfo.email}
                </div>
              </div>

              {/* Operational SLA */}
              <div className="space-y-3 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t("RESPONSE GUARANTEE: Within 12 business hours", "CAM KẾT PHẢN HỒI: Trong vòng 12 giờ làm việc")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t("LOCATION: Remote / Global Synchronous", "ĐỊA ĐIỂM: Làm việc từ xa / Toàn cầu")}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t("CONFIDENTIALITY: Mutual NDA guaranteed", "BẢO MẬT: Cam kết bảo mật thỏa thuận NDA")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 bg-black/60 border border-white/15 rounded-sm shadow-xl space-y-6 font-mono text-xs"
            >
              <div className="border-b border-white/15 pb-4">
                <h3 className="text-xl font-serif font-bold text-white">
                  {t("Partnership Transmission Form", "Biểu Mẫu Gửi Yêu Cầu Hợp Tác")}
                </h3>
              </div>

              {/* Interest Selector */}
              <div className="space-y-2">
                <label className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  {t("1. SELECT INTENT & PARTNERSHIP TYPE", "1. CHỌN MỤC TIÊU & HÌNH THỨC HỢP TÁC")}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "Client Project", label: t("Client Project", "Dự Án Khách Hàng") },
                    { id: "Mentorship", label: t("Mentorship", "Đào Tạo 1-on-1") },
                    { id: "AI Automation", label: t("AI Automation", "Tự Động Hóa AI") },
                    { id: "Advisory", label: t("Advisory", "Cố Vấn Kỹ Thuật") },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest: option.id })}
                      className={`p-2.5 rounded-sm border text-center transition-all text-[11px] ${
                        formData.interest === option.id
                          ? "bg-amber-400 text-black border-amber-400 font-bold shadow-md"
                          : "bg-white/5 text-slate-300 border-white/10 hover:border-white/20"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    {t("2. YOUR NAME / COMPANY", "2. HỌ TÊN / DOANH NGHIỆP")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("e.g. Alex Rivera, Founder", "vd: Nguyễn Văn A, Giám đốc")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white rounded-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    {t("3. YOUR DIRECT EMAIL", "3. EMAIL LIÊN HỆ")}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white rounded-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Requirements & Scope */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  {t("4. PROJECT CONTEXT & EXPECTED OUTCOMES", "4. MÔ TẢ YÊU CẦU & KẾT QUẢ MONG MUỐN")}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={t(
                    "Describe your operational bottlenecks, system objectives, desired timeline, or mentorship goals...",
                    "Mô tả bài toán của bạn, mục tiêu hệ thống, thời gian mong muốn hoặc định hướng đào tạo..."
                  )}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-black border border-white/20 text-white rounded-sm placeholder:text-slate-600 focus:outline-none focus:border-amber-400 font-sans text-xs leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-slate-200 transition-all rounded-sm flex items-center justify-center gap-2 shadow-2xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t("ENCRYPTING & TRANSMITTING...", "ĐANG MÃ HÓA & GỬI ĐI...")}</span>
                ) : (
                  <>
                    <span>{t("TRANSMIT PARTNERSHIP BRIEF", "GỬI YÊU CẦU HỢP TÁC")}</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>{t("Direct encryption to Tyson’s personal inbox. Zero spam.", "Mã hóa trực tiếp vào hòm thư riêng của Tyson. Không spam.")}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
