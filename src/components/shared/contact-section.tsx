"use client";

import * as React from "react";
import { CONTACT_INFO } from "@/data/site-content";
import {
  MapPin,
  Phone,
  Mail,
  FileDown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Icon3D } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-[#000000] text-white relative overflow-hidden border-t border-white/10">
      {/* Ambient bottom glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.15),transparent_70%)] blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Studio Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
                Let&apos;s Build Something Extraordinary.
              </h2>

              <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
                Whether you have an upcoming product launch, require enterprise app architecture, or seek high-throughput digital marketing, our partners are ready.
              </p>
            </div>

            <div className="space-y-4">
              {/* Headquarters */}
              <div className="flex items-start gap-4 p-5 rounded-[22px] apple-card-dark bg-[#0c0d12] border border-white/10">
                <Icon3D icon={MapPin} variant="sapphire" size="sm" glow={false} />
                <div>
                  <h3 className="text-[11px] uppercase font-mono tracking-wider text-[#2997ff] mb-1">
                    Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4 p-5 rounded-[22px] apple-card-dark bg-[#0c0d12] border border-white/10">
                <Icon3D icon={Phone} variant="emerald" size="sm" glow={false} />
                <div>
                  <h3 className="text-[11px] uppercase font-mono tracking-wider text-[#10b981] mb-1">
                    Direct Telephony
                  </h3>
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-medium text-white/90">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#2997ff] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Electronic Mail */}
              <div className="flex items-start gap-4 p-5 rounded-[22px] apple-card-dark bg-[#0c0d12] border border-white/10">
                <Icon3D icon={Mail} variant="purple" size="sm" glow={false} />
                <div>
                  <h3 className="text-[11px] uppercase font-mono tracking-wider text-[#a855f7] mb-1">
                    Electronic Mail
                  </h3>
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-medium text-white/90">
                    {CONTACT_INFO.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="hover:text-[#2997ff] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download Brochure */}
              <a
                href={CONTACT_INFO.socials.brochure}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-[22px] apple-glass-dark border border-white/12 hover:border-white/25 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Icon3D icon={FileDown} variant="amber" size="sm" glow={false} />
                  <div>
                    <p className="text-xs font-semibold text-white tracking-tight">
                      Official Company Brochure
                    </p>
                    <p className="text-[11px] text-[#86868b]">PDF Presentation • 2026 Edition</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#86868b] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Lead Form */}
          <div className="lg:col-span-7">
            <CardTilt3D maxTilt={4} intensity="subtle">
              <div className="apple-card-dark bg-[#0c0d12] p-8 sm:p-12 border border-white/12 rounded-[32px] shadow-2xl">
                {submitted ? (
                  <div className="py-14 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/30 flex items-center justify-center mx-auto text-[#10b981]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white tracking-tight">
                      Message Dispatched.
                    </h3>
                    <p className="text-sm text-[#86868b] max-w-md mx-auto">
                      Thank you for contacting Incinc Media. An executive partner will review your requirements and reach out within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                        Start a Conversation
                      </h3>
                      <p className="text-xs text-[#86868b] mt-1">
                        Fill out the brief below and our engineering team will get in touch.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-white/70 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Steve Jobs"
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#2997ff] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-white/70 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="steve@apple.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#2997ff] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#2997ff] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Project Scope & Timeline *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Describe your vision, target platform (Web/Mobile/Media), and estimated launch timeline..."
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#2997ff] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-[0_4px_20px_rgba(0,113,227,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Project Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </CardTilt3D>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
