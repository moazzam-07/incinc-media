"use client";

import * as React from "react";
import { FEBBLE_SPOT_PRODUCT } from "@/data/site-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Wifi } from "lucide-react";

export function FebbleSpotlight() {
  return (
    <section className="py-24 bg-[#f3f3f3] border-y border-[#e0e0e0]/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[24px] border border-[#e0e0e0] p-8 md:p-14 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                {/* Mobbin Signature Electric Blue Commercial Badge */}
                <Badge variant="popular" className="px-3.5 py-1 text-xs">
                  {FEBBLE_SPOT_PRODUCT.badge}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs text-[#707070] font-medium">
                  <Wifi className="w-3.5 h-3.5 text-[#0066ff]" />
                  <span>NFC Enabled Contact Card</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={FEBBLE_SPOT_PRODUCT.logo}
                  alt={FEBBLE_SPOT_PRODUCT.name}
                  className="h-10 w-auto object-contain"
                />
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
                {FEBBLE_SPOT_PRODUCT.tagline}.
              </h2>

              <p className="text-base text-[#707070] leading-relaxed max-w-xl">
                {FEBBLE_SPOT_PRODUCT.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {FEBBLE_SPOT_PRODUCT.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#141414]">
                    <CheckCircle2 className="w-4 h-4 text-[#0066ff] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href={FEBBLE_SPOT_PRODUCT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="gap-2">
                    <span>Visit Febble Spot</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-[20px] overflow-hidden border border-[#e0e0e0] bg-[#f3f3f3] aspect-4/3 relative group">
                <img
                  src={FEBBLE_SPOT_PRODUCT.banner}
                  alt="Febble Spot NFC Networking"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest font-semibold text-white/80 mb-1">
                      Proprietary Hardware
                    </p>
                    <p className="text-base font-bold">
                      Smart Tap Physical Business Cards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FebbleSpotlight;
