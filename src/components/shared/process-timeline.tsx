"use client";

import * as React from "react";
import { PROCESS_STEPS } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = React.useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
            The Methodology
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
            Our Proprietary 6D Delivery Engine.
          </h2>
          <p className="mt-3 text-base text-[#707070]">
            Every engagement follows a rigorous six-stage development lifecycle designed to eliminate uncertainty and deliver flawless commercial software.
          </p>
        </div>

        {/* Step Selector Pills (Mobbin Segmented Control Style) */}
        <div className="flex flex-wrap gap-2 mb-10 p-2 bg-[#f3f3f3] rounded-full border border-[#e0e0e0]/70 w-fit">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeStep === idx
                  ? "bg-white text-[#141414] shadow-sm"
                  : "text-[#707070] hover:text-[#141414]"
              }`}
            >
              <span>0{step.step}. {step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#f3f3f3]/50 border border-[#e0e0e0] rounded-[24px] p-8 sm:p-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#141414] bg-white border border-[#e0e0e0] px-3 py-1 rounded-full">
                Phase 0{current.step}
              </span>
              <Badge variant="neutral" className="bg-white">
                {current.tagline}
              </Badge>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-[#141414]">
              {current.title}.
            </h3>

            <p className="text-base sm:text-lg text-[#707070] leading-relaxed">
              {current.description}
            </p>

            {/* Step navigation buttons */}
            <div className="flex items-center gap-3 pt-4">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-5 py-2 rounded-full text-xs font-semibold border border-[#e0e0e0] bg-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#f3f3f3] transition-colors"
              >
                ← Previous
              </button>
              <button
                disabled={activeStep === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-[#141414] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#262626] transition-colors"
              >
                Next Phase →
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[20px] overflow-hidden border border-[#e0e0e0] bg-white aspect-16/10 shadow-sm relative">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessTimeline;
