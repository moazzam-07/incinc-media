"use client";

import * as React from "react";
import { PROCESS_STEPS } from "@/data/site-content";
import {
  Compass,
  FileText,
  Palette,
  Code2,
  Rocket,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Icon3D, type Icon3DVariant } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

const STEP_ICONS: Array<{ icon: typeof Compass; variant: Icon3DVariant }> = [
  { icon: Compass, variant: "sapphire" },
  { icon: FileText, variant: "cyan" },
  { icon: Palette, variant: "purple" },
  { icon: Code2, variant: "emerald" },
  { icon: Rocket, variant: "amber" },
  { icon: CheckCircle, variant: "rose" },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = React.useState(0);
  const current = PROCESS_STEPS[activeStep];
  const conf = STEP_ICONS[activeStep % STEP_ICONS.length];

  return (
    <section id="process" className="py-28 bg-[#000000] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
            Proprietary 6D Delivery Engine.
          </h2>

          <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
            Every client build follows a six-phase precision engineering lifecycle designed to eliminate technical risk and deliver rapid commercial velocity.
          </p>
        </div>

        {/* Apple Segmented Phase Pills */}
        <div className="flex flex-wrap gap-2 mb-10 p-1.5 apple-glass-dark rounded-full border border-white/12 w-fit select-none">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-black shadow-md scale-102"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <span>
                  0{step.step}. {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Card with 3D Bezel & Tilt */}
        <CardTilt3D maxTilt={4} intensity="subtle">
          <div className="apple-card-dark bg-[#0c0d12] border border-white/12 rounded-[32px] p-8 sm:p-12 lg:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <Icon3D icon={conf.icon} variant={conf.variant} size="lg" glow />

                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-[#2997ff] bg-[#2997ff]/10 border border-[#2997ff]/20 uppercase">
                      Phase 0{current.step} • {current.tagline}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mt-1.5">
                      {current.title}.
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
                  {current.description}
                </p>

                {/* Step Controls */}
                <div className="flex items-center gap-3 pt-4">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold apple-glass-dark border border-white/12 text-white/80 hover:text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous Phase</span>
                  </button>

                  <button
                    disabled={activeStep === PROCESS_STEPS.length - 1}
                    onClick={() =>
                      setActiveStep((prev) =>
                        Math.min(PROCESS_STEPS.length - 1, prev + 1)
                      )
                    }
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white disabled:opacity-25 disabled:cursor-not-allowed transition-all shadow-md cursor-pointer"
                  >
                    <span>Next Phase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Media Frame */}
              <div className="lg:col-span-6">
                <div className="rounded-[22px] overflow-hidden border border-white/10 bg-[#161820] aspect-16/10 shadow-2xl relative group">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-white/80">
                      Step 0{current.step} Protocol Documentation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardTilt3D>
      </div>
    </section>
  );
}

export default ProcessTimeline;
