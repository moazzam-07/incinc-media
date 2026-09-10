"use client";

import * as React from "react";
import { Marquee } from "@/components/ui/marquee";
import clientsData from "@/data/clients.json";
import { Sparkles } from "lucide-react";

export function ClientMarquee() {
  // Split clients into two rows for dynamic dual-rail effect
  const firstRow = clientsData.slice(0, Math.ceil(clientsData.length / 2));
  const secondRow = clientsData.slice(Math.ceil(clientsData.length / 2));

  return (
    <section id="clients" className="py-24 bg-[#f5f5f7] border-b border-[#e5e5e7] overflow-hidden text-[#1d1d1f]">
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-semibold text-[#0071e3] uppercase tracking-[0.2em] shadow-sm select-none">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Global Ecosystem</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#1d1d1f]">
          Trusted by 300+ Industry Leaders.
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-[#6e6e73]">
          From enterprise institutions to high-growth tech platforms across India, GCC, and global markets.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Left/Right Fade Gradient Scrims matching #f5f5f7 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 sm:w-44 bg-gradient-to-r from-[#f5f5f7] via-[#f5f5f7]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 sm:w-44 bg-gradient-to-l from-[#f5f5f7] via-[#f5f5f7]/80 to-transparent z-10" />

        {/* Row 1 */}
        <Marquee pauseOnHover className="[--duration:50s]">
          {firstRow.map((client, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-[#e5e5e7] hover:border-[#1d1d1f]/40 shadow-xs hover:shadow-md transition-all hover:scale-105 cursor-pointer shrink-0"
              title={client.name}
            >
              <img
                src={`/assets/clients/${encodeURIComponent(client.logo)}`}
                alt={client.name}
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-semibold text-[#1d1d1f] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 (Reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {secondRow.map((client, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white border border-[#e5e5e7] hover:border-[#1d1d1f]/40 shadow-xs hover:shadow-md transition-all hover:scale-105 cursor-pointer shrink-0"
              title={client.name}
            >
              <img
                src={`/assets/clients/${encodeURIComponent(client.logo)}`}
                alt={client.name}
                className="h-6 sm:h-7 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-semibold text-[#1d1d1f] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default ClientMarquee;
