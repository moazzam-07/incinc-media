"use client";

import * as React from "react";
import { SERVICES_CATALOG, type ServiceItem } from "@/data/site-content";
import {
  Smartphone,
  Cpu,
  Compass,
  Palette,
  Clapperboard,
  Camera,
  TrendingUp,
  Search,
  Share2,
  Users,
  Award,
  ArrowUpRight,
  Check,
  Sparkles,
  X,
} from "lucide-react";
import { Icon3D, type Icon3DVariant } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

const SERVICE_ICONS: Record<
  string,
  { icon: typeof Smartphone; variant: Icon3DVariant }
> = {
  "app-dev": { icon: Smartphone, variant: "sapphire" },
  "software-solutions": { icon: Cpu, variant: "cyan" },
  "branding-strategy": { icon: Compass, variant: "amber" },
  "graphic-design": { icon: Palette, variant: "purple" },
  "video-production": { icon: Clapperboard, variant: "rose" },
  "shoots-production": { icon: Camera, variant: "titanium" },
  "digital-marketing": { icon: TrendingUp, variant: "emerald" },
  "seo": { icon: Search, variant: "sapphire" },
  "smm": { icon: Share2, variant: "purple" },
  "influencer-marketing": { icon: Users, variant: "amber" },
  "talent-partnerships": { icon: Award, variant: "rose" },
};

export function ServicesGrid() {
  const [selectedService, setSelectedService] = React.useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-28 bg-[#08080a] text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.12),transparent_70%)] blur-[90px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header (Apple Keynote Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
              Comprehensive Digital & Creative Power.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#86868b] leading-relaxed">
            From bespoke enterprise platforms and custom mobile software to commercial film production and multi-channel performance marketing.
          </p>
        </div>

        {/* 3D Bento Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOG.map((svc) => {
            const conf = SERVICE_ICONS[svc.id] || { icon: Sparkles, variant: "sapphire" };
            const IconComponent = conf.icon;

            return (
              <CardTilt3D key={svc.id} maxTilt={6} intensity="subtle" className="h-full">
                <div
                  onClick={() => setSelectedService(svc)}
                  className="group apple-card-dark h-full p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#2997ff]/40 hover:bg-[#111217] cursor-pointer relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      {/* 3D Tactile Icon */}
                      <Icon3D
                        icon={IconComponent}
                        variant={conf.variant}
                        size="md"
                        glow
                      />

                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-medium apple-glass-dark text-white/80 border border-white/10">
                          {svc.tag}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#86868b] group-hover:text-white group-hover:border-white/20 transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2.5 tracking-tight group-hover:text-[#2997ff] transition-colors">
                      {svc.name}
                    </h3>

                    <p className="text-sm text-[#86868b] leading-relaxed mb-6">
                      {svc.shortDesc}
                    </p>
                  </div>

                  <div className="border-t border-white/8 pt-4 mt-auto">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#2997ff] mb-2.5">
                      Core Deliverables
                    </p>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#a1a1a6]">
                      {svc.deliverables.slice(0, 3).map((del, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#2997ff] shrink-0" />
                          <span className="truncate">{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>

      {/* Apple Liquid Glass Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl apple-glass-dark bg-[#0e1015]/95 rounded-[32px] p-8 sm:p-10 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                {(() => {
                  const conf = SERVICE_ICONS[selectedService.id] || {
                    icon: Sparkles,
                    variant: "sapphire",
                  };
                  return (
                    <Icon3D
                      icon={conf.icon}
                      variant={conf.variant}
                      size="lg"
                      glow
                    />
                  );
                })()}

                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#2997ff] bg-[#2997ff]/10 border border-[#2997ff]/20">
                    {selectedService.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                    {selectedService.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-8">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-[#2997ff]">
                All Engineering & Creative Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/8 flex items-center gap-2.5 text-xs font-medium text-white/90"
                  >
                    <Check className="w-4 h-4 text-[#2997ff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#86868b]">
                Customized according to your enterprise scale.
              </span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all shadow-md"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesGrid;
