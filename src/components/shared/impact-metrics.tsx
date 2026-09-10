"use client";

import * as React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SITE_METRICS } from "@/data/site-content";

export function ImpactMetrics() {
  const metrics = [
    {
      label: "Projects Done",
      value: SITE_METRICS.projectsDone,
      suffix: "+",
      caption: "Flawlessly executed web, mobile, and software platforms",
    },
    {
      label: "Ongoing Projects",
      value: SITE_METRICS.ongoingProjects,
      suffix: "+",
      caption: "Active engineering sprints and digital transformations",
    },
    {
      label: "Satisfied Customers",
      value: SITE_METRICS.satisfiedCustomers,
      suffix: "+",
      caption: "Long-term client partnerships with 98% retention",
    },
    {
      label: "Global Client Network",
      value: SITE_METRICS.globalClients,
      suffix: "+",
      caption: "Brands served across India, GCC, and international markets",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[24px] bg-[#f3f3f3] border border-[#e0e0e0]/70 flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div>
                <p className="text-xs font-semibold text-[#707070] uppercase tracking-wider mb-2">
                  {m.label}
                </p>
                <div className="text-5xl font-bold tracking-tight text-[#141414] flex items-baseline">
                  <NumberTicker value={m.value} />
                  <span>{m.suffix}</span>
                </div>
              </div>
              <p className="text-xs text-[#707070] mt-6 leading-relaxed">
                {m.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactMetrics;
