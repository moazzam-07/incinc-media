'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/magicui/BlurFade';
import { GlossyButton } from '@/components/magicui/GlossyButton';
import { company } from '@/data/company';
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Monochrome elegant confetti burst
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#141414', '#525252', '#a3a3a3', '#e5e5e5'],
    });
  };

  return (
    <section id="contact" className="bg-canvas-soft border-t border-hairline-soft/60">
      <div className="max-w-content mx-auto px-6 md:px-8 py-section-lg">
        <BlurFade>
          <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
            Start a Conversation
          </span>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="text-[clamp(34px,5vw,56px)] font-bold leading-[1] tracking-[-0.03em] text-ink mt-3 mb-16 max-w-[640px]">
            Let&apos;s build something remarkable.
          </h2>
        </BlurFade>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.2}>
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-hairline/70 shadow-[0_8px_30px_rgb(0,0,0,0.02)] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-12 flex flex-col items-center text-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-canvas-soft border border-hairline/80 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-7 h-7 text-ink" />
                      </div>
                      <h3 className="text-[24px] font-bold text-ink tracking-tight mb-2">
                        Message Received
                      </h3>
                      <p className="text-[15px] text-ink-muted max-w-[420px] leading-relaxed mb-8">
                        Thank you for reaching out. A partner from our executive team will review your requirements and respond within 24 hours.
                      </p>
                      <GlossyButton
                        variant="secondary"
                        onClick={() => {
                          setSubmitted(false);
                          setFormState({ name: '', email: '', phone: '', message: '' });
                        }}
                      >
                        Send another inquiry
                      </GlossyButton>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5"
                    >
                      <div>
                        <label className="text-[12px] font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="E.g. Alexander Wright"
                          className="w-full px-4 py-3.5 bg-canvas-field/80 rounded-xl text-[15px] text-ink placeholder:text-ink-faint outline-none focus:ring-2 focus:ring-ink/10 transition-all border border-transparent focus:border-hairline"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-[12px] font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                            Business Email
                          </label>
                          <input
                            type="email"
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="alex@enterprise.com"
                            className="w-full px-4 py-3.5 bg-canvas-field/80 rounded-xl text-[15px] text-ink placeholder:text-ink-faint outline-none focus:ring-2 focus:ring-ink/10 transition-all border border-transparent focus:border-hairline"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-[12px] font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                            Contact Phone
                          </label>
                          <input
                            type="tel"
                            value={formState.phone}
                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                            placeholder="+91 98200 00000"
                            className="w-full px-4 py-3.5 bg-canvas-field/80 rounded-xl text-[15px] text-ink placeholder:text-ink-faint outline-none focus:ring-2 focus:ring-ink/10 transition-all border border-transparent focus:border-hairline"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[12px] font-semibold text-ink-muted uppercase tracking-wider mb-2 block">
                          Project Scope & Vision
                        </label>
                        <textarea
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Briefly describe your objectives, timelines, and current challenges..."
                          rows={4}
                          className="w-full px-4 py-3.5 bg-canvas-field/80 rounded-xl text-[15px] text-ink placeholder:text-ink-faint outline-none focus:ring-2 focus:ring-ink/10 transition-all border border-transparent focus:border-hairline resize-none"
                          required
                        />
                      </div>

                      <div className="pt-2">
                        <GlossyButton
                          variant="primary"
                          className="w-full !py-4 !text-[15px]"
                          icon={<Send className="w-4 h-4" />}
                        >
                          Submit Project Inquiry
                        </GlossyButton>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          </div>

          {/* Contact Details & Direct Outreach (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <BlurFade delay={0.3}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[12px] font-semibold text-ink uppercase tracking-widest mb-4">
                    Direct Lines
                  </h3>
                  <div className="space-y-3">
                    {company.contact.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 text-[15px] text-ink-muted hover:text-ink transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-full bg-white border border-hairline/80 flex items-center justify-center group-hover:border-ink transition-colors shrink-0">
                          <Phone className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                        </span>
                        <span className="font-medium">{phone}</span>
                      </a>
                    ))}
                    {company.contact.emails.slice(0, 2).map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="flex items-center gap-3 text-[15px] text-ink-muted hover:text-ink transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-full bg-white border border-hairline/80 flex items-center justify-center group-hover:border-ink transition-colors shrink-0">
                          <Mail className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                        </span>
                        <span className="font-medium">{email}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-semibold text-ink uppercase tracking-widest mb-3">
                    Studio Location
                  </h3>
                  <div className="flex items-start gap-3 text-[14px] text-ink-muted leading-relaxed">
                    <span className="w-8 h-8 rounded-full bg-white border border-hairline/80 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-ink" strokeWidth={1.5} />
                    </span>
                    <p className="max-w-[340px] font-light">{company.contact.address}</p>
                  </div>
                </div>

                {/* Febble Spot proprietary hardware card */}
                <div className="p-6 rounded-2xl bg-white border border-hairline/80 shadow-[0_4px_16px_rgba(0,0,0,0.02)] relative overflow-hidden group">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="/assets/images/febble-logo.webp"
                      alt="Febble Spot"
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <p className="text-[14px] font-bold text-ink">Febble Spot</p>
                      <p className="text-[11px] text-ink-muted font-mono uppercase">Smart NFC Technology</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-ink-muted leading-relaxed font-light">
                    Connect faster with our proprietary NFC business card hardware.
                  </p>
                  <a
                    href="https://febblespot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-ink mt-3 hover:text-ink-muted transition-colors"
                  >
                    Explore Hardware
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
