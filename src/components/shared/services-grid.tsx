"use client";

import * as React from "react";
import { SERVICES_CATALOG, type ServiceItem } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Check } from "lucide-react";

export function ServicesGrid() {
  const [selectedService, setSelectedService] = React.useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
              Comprehensive Digital & Creative Solutions.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#707070] leading-relaxed">
            From custom enterprise software and mobile applications to full-funnel digital marketing and cinematic media production.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOG.map((svc, idx) => {
            const isFeatured = idx === 0 || idx === 1; // Top 2 are major engineering services
            return (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className={`group p-8 rounded-[24px] border border-[#e0e0e0] flex flex-col justify-between transition-all hover:border-[#141414] hover:bg-[#f3f3f3]/50 cursor-pointer ${
                  isFeatured ? "bg-[#f3f3f3]/60 lg:col-span-1" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <Badge variant="neutral" className="bg-white border border-[#e0e0e0]/70 text-xs">
                      {svc.tag}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-[#f3f3f3] flex items-center justify-center text-[#707070] group-hover:text-[#141414] group-hover:bg-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#141414] mb-3 leading-snug">
                    {svc.name}
                  </h3>

                  <p className="text-sm text-[#707070] leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>
                </div>

                <div className="border-t border-[#e0e0e0]/60 pt-4 mt-auto">
                  <p className="text-xs font-semibold text-[#141414] mb-2">Key Deliverables:</p>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-[#707070]">
                    {svc.deliverables.slice(0, 3).map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#141414] shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-[24px] p-8 border border-[#e0e0e0] shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <Badge variant="neutral" className="mb-2">
                  {selectedService.tag}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141414]">
                  {selectedService.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 text-[#707070] hover:text-[#141414] hover:bg-[#f3f3f3] rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            <p className="text-base text-[#707070] leading-relaxed mb-8">
              {selectedService.fullDesc}
            </p>

            <div className="bg-[#f3f3f3] p-6 rounded-[16px] mb-8">
              <h4 className="text-sm font-bold text-[#141414] mb-3">
                Included Deliverables & Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#141414]">
                    <Check className="w-4 h-4 text-[#0066ff] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#e0e0e0] hover:bg-[#f3f3f3]"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#141414] text-white hover:bg-[#262626]"
              >
                Discuss This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ServicesGrid;
