"use client";

import * as React from "react";
import { OPERATIONAL_PILLARS } from "@/data/site-content";
import { Compass, Lightbulb, Monitor, ShieldCheck } from "lucide-react";

const ICONS = [Lightbulb, Compass, Monitor, ShieldCheck];

export function OperationalPillars() {
  return (
    <section className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
            The Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
            Four Pillars of Digital Execution.
          </h2>
          <p className="mt-3 text-base text-[#707070]">
            Greatness is the result of many small things done exceptionally well.
            Our operating philosophy guarantees predictability and technical superiority.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPERATIONAL_PILLARS.map((pillar, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <div
                key={idx}
                className="p-8 rounded-[24px] bg-white border border-[#e0e0e0]/80 flex flex-col justify-between hover:border-[#141414]/30 transition-all hover:bg-[#f3f3f3]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[#141414]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-[#adadad]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141414] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#141414]/80 italic mb-4">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                </div>

                <p className="text-sm text-[#707070] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OperationalPillars;
