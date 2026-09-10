"use client";

import * as React from "react";
import { Marquee } from "@/components/ui/marquee";
import clientsData from "@/data/clients.json";

export function ClientMarquee() {
  // Split clients into two rows for dynamic dual-rail effect
  const firstRow = clientsData.slice(0, Math.ceil(clientsData.length / 2));
  const secondRow = clientsData.slice(Math.ceil(clientsData.length / 2));

  return (
    <section id="clients" className="py-20 bg-white border-y border-[#f0f0f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
          Global Client Network
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
          Trusted by 300+ Brands & Enterprises.
        </h2>
        <p className="max-w-xl mx-auto mt-2 text-sm text-[#707070]">
          From Fortune 500 financial institutions to breakthrough startups across India, the UAE, and global markets.
        </p>
      </div>

      <div className="relative flex flex-col gap-4">
        {/* Left/Right Fade Gradient Scrims matching canvas */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Row 1 */}
        <Marquee pauseOnHover className="[--duration:55s]">
          {firstRow.map((client, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#f3f3f3] border border-[#e0e0e0]/70 hover:border-[#141414]/30 transition-all hover:scale-105 cursor-pointer shrink-0"
              title={client.name}
            >
              <img
                src={`/assets/clients/${encodeURIComponent(client.logo)}`}
                alt={client.name}
                className="h-7 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-semibold text-[#141414] whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Row 2 (Reversed) */}
        <Marquee reverse pauseOnHover className="[--duration:55s]">
          {secondRow.map((client, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#f3f3f3] border border-[#e0e0e0]/70 hover:border-[#141414]/30 transition-all hover:scale-105 cursor-pointer shrink-0"
              title={client.name}
            >
              <img
                src={`/assets/clients/${encodeURIComponent(client.logo)}`}
                alt={client.name}
                className="h-7 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
              <span className="text-xs font-semibold text-[#141414] whitespace-nowrap">
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
