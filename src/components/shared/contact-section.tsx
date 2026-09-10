"use client";

import * as React from "react";
import { CONTACT_INFO } from "@/data/site-content";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, FileDown, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="py-24 bg-white border-t border-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
                Let&apos;s Build Something Remarkable.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#707070] leading-relaxed">
                Whether you have an upcoming product launch, require enterprise app architecture, or seek high-impact digital marketing, our partners are ready.
              </p>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/70">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-[#707070] mb-1">
                    Headquarters
                  </h3>
                  <p className="text-xs sm:text-sm text-[#141414] font-medium leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              {/* Direct Calls */}
              <div className="flex items-start gap-4 p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/70">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-[#707070] mb-1">
                    Direct Lines
                  </h3>
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-medium text-[#141414]">
                    {CONTACT_INFO.phones.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="hover:text-[#0066ff] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Inquiries */}
              <div className="flex items-start gap-4 p-5 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/70">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#141414] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase font-bold text-[#707070] mb-1">
                    Electronic Mail
                  </h3>
                  <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-medium text-[#141414]">
                    {CONTACT_INFO.emails.map((email, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${email}`}
                        className="hover:text-[#0066ff] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Official Brochure Download */}
              <div className="pt-2">
                <a
                  href={CONTACT_INFO.socials.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button variant="outline" className="w-full gap-2 justify-center">
                    <FileDown className="w-4 h-4 text-[#141414]" />
                    <span>Download Incinc Media Brochure (PDF)</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[24px] bg-[#ffffff] border border-[#e0e0e0] shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[#0066ff] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#141414]">
                    Inquiry Received.
                  </h3>
                  <p className="text-sm text-[#707070] max-w-md mx-auto">
                    Thank you for reaching out to Incinc Media. An executive partner will review your requirements and respond within 24 hours.
                  </p>
                  <Button
                    variant="soft"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#141414]">
                      Tell Us About Your Project.
                    </h3>
                    <p className="text-xs text-[#707070] mt-1">
                      Fill out the details below and we will prepare a tailored proposal.
                    </p>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#141414] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Mehta"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-12 px-4 rounded-[16px] bg-[#f0f0f0] text-sm text-[#141414] placeholder:text-[#adadad] focus:outline-none focus:ring-2 focus:ring-[#141414] transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#141414] uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-12 px-4 rounded-[16px] bg-[#f0f0f0] text-sm text-[#141414] placeholder:text-[#adadad] focus:outline-none focus:ring-2 focus:ring-[#141414] transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-[#141414] uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full h-12 px-4 rounded-[16px] bg-[#f0f0f0] text-sm text-[#141414] placeholder:text-[#adadad] focus:outline-none focus:ring-2 focus:ring-[#141414] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#141414] uppercase tracking-wider">
                      Project Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your vision, target timeline, and specific deliverables..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-4 rounded-[16px] bg-[#f0f0f0] text-sm text-[#141414] placeholder:text-[#adadad] focus:outline-none focus:ring-2 focus:ring-[#141414] transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full font-semibold"
                  >
                    Send Project Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
