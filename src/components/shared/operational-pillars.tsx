"use client";

import * as React from "react";
import { OPERATIONAL_PILLARS } from "@/data/site-content";
import { Compass, Lightbulb, Monitor, ShieldCheck, Sparkles } from "lucide-react";
import { Icon3D, type Icon3DVariant } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

const PILLAR_CONFIG: Array<{
  icon: typeof Lightbulb;
  variant: Icon3DVariant;
}> = [
  { icon: Lightbulb, variant: "amber" },
  { icon: Compass, variant: "purple" },
  { icon: Monitor, variant: "sapphire" },
  { icon: ShieldCheck, variant: "emerald" },
];

export function OperationalPillars() {
  return (
    <section className="py-28 bg-[#0a0a0d] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
            Four Pillars of Execution.
          </h2>

          <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
            Greatness is the result of many small disciplines done exceptionally well.
            Our operating philosophy guarantees architectural predictability and market dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONAL_PILLARS.map((pillar, idx) => {
            const conf = PILLAR_CONFIG[idx % PILLAR_CONFIG.length];
            return (
              <CardTilt3D key={idx} maxTilt={6} intensity="subtle" className="h-full">
                <div className="apple-card-dark h-full p-8 flex flex-col justify-between hover:border-[#2997ff]/40 transition-all duration-300 bg-[#0e0f14] group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Icon3D
                        icon={conf.icon}
                        variant={conf.variant}
                        size="md"
                        glow
                      />
                      <span className="text-xs font-mono text-white/40">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-[#2997ff] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-medium text-white/80 italic mb-4">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#86868b] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OperationalPillars;
