"use client";

import * as React from "react";
import teamData from "@/data/team.json";
import { Sparkles, Eye, Target, MapPin } from "lucide-react";
import { Icon3D } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#0a0a0d] text-white relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded in 2020 • Mumbai, India</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
              We Craft Experiences That Inspire, Engage & Convert.
            </h2>

            <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
              Founded in 2020 in Mumbai, Incinc Media is a premier digital solutions and creative services powerhouse dedicated to helping enterprises build undisputed market supremacy.
            </p>

            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              We specialize in engineering remarkable web platforms and scalable mobile applications, paired with data-driven performance marketing, corporate branding, and commercial video production.
            </p>

            {/* Vision & Mission 3D Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <CardTilt3D maxTilt={6} intensity="subtle">
                <div className="p-6 rounded-[24px] apple-glass-dark bg-[#0e0f14] border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon3D icon={Eye} variant="cyan" size="sm" glow={false} />
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    To be recognized as the premier global digital partner, transforming ambitious businesses into market leaders through technical mastery.
                  </p>
                </div>
              </CardTilt3D>

              <CardTilt3D maxTilt={6} intensity="subtle">
                <div className="p-6 rounded-[24px] apple-glass-dark bg-[#0e0f14] border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon3D icon={Target} variant="amber" size="sm" glow={false} />
                    <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-xs text-[#86868b] leading-relaxed">
                    To deliver exceptional digital products and high-impact brand narratives with zero compromises, elevating client standards and driving compounding growth.
                  </p>
                </div>
              </CardTilt3D>
            </div>
          </div>

          {/* Office Image Visual */}
          <div className="lg:col-span-6">
            <CardTilt3D maxTilt={5} intensity="subtle">
              <div className="rounded-[32px] overflow-hidden border border-white/12 bg-[#14161f] aspect-4/3 relative shadow-2xl group">
                <img
                  src="/assets/images/our-office.jpg"
                  alt="Incinc Media Headquarters Mumbai"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-8">
                  <div className="text-white space-y-1">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-glass-dark text-[11px] font-mono text-[#2997ff] border border-white/15">
                      <MapPin className="w-3 h-3 text-[#2997ff]" />
                      <span>Studio Headquarters</span>
                    </span>
                    <p className="text-xl sm:text-2xl font-semibold tracking-tight">
                      Incinc Media Studios & Engineering Labs
                    </p>
                    <p className="text-xs text-[#86868b]">
                      Vikhroli West, Mumbai, Maharashtra 400079
                    </p>
                  </div>
                </div>
              </div>
            </CardTilt3D>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="border-t border-white/10 pt-20">
          <div className="max-w-2xl mb-12 space-y-2">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#2997ff]">
              Leadership & Craft
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.03em] text-white">
              Meet The Core Team.
            </h2>
            <p className="text-sm text-[#86868b]">
              The technologists, designers, strategists, and producers powering every client breakthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamData.map((member, idx) => (
              <CardTilt3D key={idx} maxTilt={6} intensity="subtle">
                <div className="apple-card-dark bg-[#0c0d12] p-5 flex flex-col justify-between h-full group hover:border-[#2997ff]/40 transition-all">
                  <div>
                    {/* Portrait Frame */}
                    <div className="relative aspect-square rounded-[20px] overflow-hidden bg-[#161820] mb-4 border border-white/10">
                      <img
                        src={`/assets/team/${encodeURIComponent(member.photo)}`}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/assets/images/placeholder-team.jpg";
                        }}
                      />
                    </div>

                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-[#2997ff] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#86868b] mt-0.5">
                      {member.designation}
                    </p>
                  </div>

                  {/* Social Handles */}
                  <div className="flex items-center gap-2 pt-4 mt-4 border-t border-white/8 text-white/40">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0071e3] transition-colors p-1"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#f43f5e] transition-colors p-1"
                        aria-label={`${member.name} Instagram`}
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#2997ff] transition-colors p-1"
                        aria-label={`${member.name} Twitter`}
                      >
                        <TwitterIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardTilt3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
