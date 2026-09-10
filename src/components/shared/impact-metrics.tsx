"use client";

import * as React from "react";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SITE_METRICS } from "@/data/site-content";
import { Award, Briefcase, Users, Globe2 } from "lucide-react";
import { Icon3D } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

export function ImpactMetrics() {
  const metrics = [
    {
      label: "Projects Completed",
      value: SITE_METRICS.projectsDone,
      suffix: "+",
      caption: "Flawlessly delivered web, mobile, and software platforms",
      icon: Briefcase,
      variant: "sapphire" as const,
    },
    {
      label: "Active Sprints",
      value: SITE_METRICS.ongoingProjects,
      suffix: "+",
      caption: "Ongoing engineering sprints and digital transformations",
      icon: Award,
      variant: "emerald" as const,
    },
    {
      label: "Client Retention",
      value: SITE_METRICS.satisfiedCustomers,
      suffix: "+",
      caption: "Long-term client partnerships with 98% retention",
      icon: Users,
      variant: "purple" as const,
    },
    {
      label: "Global Brands",
      value: SITE_METRICS.globalClients,
      suffix: "+",
      caption: "Enterprises served across India, GCC, and USA",
      icon: Globe2,
      variant: "amber" as const,
    },
  ];

  return (
    <section className="py-24 bg-[#f5f5f7] text-[#1d1d1f] relative border-b border-[#e5e5e7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <CardTilt3D key={idx} maxTilt={6} intensity="subtle">
              <div className="p-8 rounded-[28px] bg-white border border-[#e5e5e7] flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] transition-all h-full">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <Icon3D icon={m.icon} variant={m.variant} size="sm" glow={false} />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#6e6e73]">
                      Metric 0{idx + 1}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mb-2">
                    {m.label}
                  </p>
                  <div className="text-5xl font-semibold tracking-[-0.035em] text-[#1d1d1f] flex items-baseline">
                    <NumberTicker value={m.value} />
                    <span className="text-[#0071e3]">{m.suffix}</span>
                  </div>
                </div>

                <p className="text-xs text-[#6e6e73] mt-6 leading-relaxed">
                  {m.caption}
                </p>
              </div>
            </CardTilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImpactMetrics;
