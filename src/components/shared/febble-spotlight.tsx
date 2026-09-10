"use client";

import * as React from "react";
import { FEBBLE_SPOT_PRODUCT } from "@/data/site-content";
import {
  Wifi,
  ArrowUpRight,
  RotateCw,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { Icon3D } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

export function FebbleSpotlight() {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [simulatedTap, setSimulatedTap] = React.useState(false);

  const triggerSimulatedTap = () => {
    setSimulatedTap(true);
    setTimeout(() => {
      setSimulatedTap(false);
    }, 4500);
  };

  return (
    <section id="hardware" className="py-28 bg-[#f5f5f7] text-[#1d1d1f] relative overflow-hidden border-y border-[#e5e5e7]">
      {/* Dynamic Simulated Phone Tap Banner (Apple Dynamic Island Notification) */}
      {simulatedTap && (
        <div className="fixed top-20 inset-x-0 z-50 flex justify-center px-4 pointer-events-none animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="pointer-events-auto bg-[#000000] text-white px-5 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/20 flex items-center gap-4 max-w-md w-full">
            <div className="w-9 h-9 rounded-full bg-[#0071e3] flex items-center justify-center shrink-0">
              <Wifi className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-[#2997ff] uppercase tracking-wider">
                NFC Tag Read Instantly
              </p>
              <p className="text-sm font-bold text-white truncate">
                Rustabh Chheda — Incinc Media
              </p>
            </div>
            <a
              href="https://febblespot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-full hover:bg-white/90 shrink-0"
            >
              Open Card
            </a>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header (Apple Light Canvas) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d2d2d7] text-xs font-semibold text-[#0071e3] uppercase tracking-[0.2em] shadow-sm select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hardware Innovation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#1d1d1f] leading-[1.08]">
            Febble Spot.
            <br />
            <span className="text-[#0071e3]">Connect faster. Impress smarter.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed">
            The next-generation smart NFC digital business card engineered by Incinc Media.
            Exchange your full digital presence, portfolio, and payment handles in a single physical tap.
          </p>
        </div>

        {/* Apple Hardware Presentation Stage */}
        <div className="bg-white rounded-[32px] border border-[#e5e5e7] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: 3D Interactive Card Showcase */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <CardTilt3D maxTilt={9} intensity="strong" className="w-full max-w-md">
                {/* Perspective Flip Container */}
                <div
                  className="relative w-full aspect-[1.586/1] rounded-[22px] transition-transform duration-700 select-none shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* FRONT OF CARD (Space Titanium Obsidian Finish) */}
                  <div
                    className="absolute inset-0 rounded-[22px] p-7 flex flex-col justify-between overflow-hidden border border-white/20 backface-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, #1f232a 0%, #111317 50%, #08090b 100%)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    {/* Metallic Hairline Brushed Sheen */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4) 0%, transparent 60%)",
                      }}
                    />

                    {/* Top Row: Incinc Logo & NFC Contactless Waveform */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src="/assets/images/logo.png"
                          alt="Incinc Media"
                          className="h-6 w-auto object-contain brightness-200"
                        />
                        <span className="text-xs font-semibold tracking-wider text-white/90">
                          INCINC
                        </span>
                      </div>

                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-8 h-8 rounded-full bg-[#0071e3]/30 animate-ping" />
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                          <Wifi className="w-4 h-4 text-[#2997ff]" />
                        </div>
                      </div>
                    </div>

                    {/* Center: Gold-Plated EMV Chip Graphic */}
                    <div className="relative z-10 my-auto flex items-center gap-4">
                      <div className="w-11 h-9 rounded-md bg-gradient-to-br from-[#e0b86b] via-[#c99a45] to-[#8a631c] p-0.5 shadow-md flex items-center justify-center border border-[#ffea9f]/40">
                        <div className="w-full h-full border border-black/30 rounded-[3px] grid grid-cols-2 gap-0.5 p-0.5 opacity-80">
                          <div className="border border-black/20" />
                          <div className="border border-black/20" />
                          <div className="border border-black/20" />
                          <div className="border border-black/20" />
                        </div>
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                        NTAG216 HIGH FREQ
                      </span>
                    </div>

                    {/* Bottom Row: Name & Febble Spot Signature */}
                    <div className="relative z-10 flex items-end justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white/50 tracking-wider uppercase">
                          Executive Partner
                        </p>
                        <p className="text-sm font-bold text-white tracking-wide">
                          RUSTABH CHHEDA
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold tracking-widest text-[#2997ff]">
                          FEBBLE SPOT
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped) */}
                  <div
                    className="absolute inset-0 rounded-[22px] p-7 flex flex-col justify-between overflow-hidden border border-white/20"
                    style={{
                      background:
                        "linear-gradient(135deg, #14161b 0%, #0c0d10 50%, #050608 100%)",
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {/* Magnetic Stripe / Induction Antenna Bar */}
                    <div className="w-full h-9 bg-black/80 -mx-7 px-7 border-y border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40">
                      <span>SECURE CONTACTLESS INDUCTION</span>
                      <span>ISO/IEC 14443-A</span>
                    </div>

                    {/* Center details */}
                    <div className="flex items-center justify-between my-2">
                      <div className="space-y-1">
                        <p className="text-[10px] font-mono text-[#86868b]">
                          SERIAL: 2026-INCN-NFC-08819
                        </p>
                        <p className="text-[10px] text-white/80 max-w-[200px] leading-relaxed">
                          Tap onto any smartphone back or scan QR code for instant profile synchronization.
                        </p>
                      </div>

                      {/* Mock High-Density QR Code */}
                      <div className="w-16 h-16 bg-white rounded-lg p-1.5 shadow-md flex items-center justify-center">
                        <div className="w-full h-full border border-black grid grid-cols-3 p-0.5 gap-0.5">
                          <div className="bg-black" />
                          <div className="border border-black" />
                          <div className="bg-black" />
                          <div className="border border-black" />
                          <div className="bg-black" />
                          <div className="border border-black" />
                          <div className="bg-black" />
                          <div className="border border-black" />
                          <div className="bg-black" />
                        </div>
                      </div>
                    </div>

                    {/* Back footer */}
                    <div className="text-[10px] text-white/40 flex items-center justify-between font-mono">
                      <span>ENGINEERED BY INCINC MEDIA</span>
                      <span>FEBBLESPOT.COM</span>
                    </div>
                  </div>
                </div>
              </CardTilt3D>

              {/* Card Controls (Flip & Simulate Tap) */}
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#f0f0f2] hover:bg-[#e4e4e7] text-[#1d1d1f] border border-[#d2d2d7] transition-all cursor-pointer"
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#0071e3]" />
                  <span>{isFlipped ? "View Front Face" : "Flip to Back Face"}</span>
                </button>

                <button
                  onClick={triggerSimulatedTap}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Wifi className="w-3.5 h-3.5 text-white" />
                  <span>Simulate Phone Tap</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Highlights & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <Icon3D icon={Zap} variant="sapphire" size="md" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#1d1d1f] tracking-tight">
                    Never Run Out of Business Cards Again.
                  </h3>
                  <p className="text-xs text-[#0071e3] font-semibold uppercase tracking-wider">
                    Lifetime Reusable • Zero Apps Needed
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6e6e73] leading-relaxed">
                Febble Spot eliminates wasteful paper cards forever. Update your job title, telephone number, portfolio, and booking calendar in real-time in the cloud—anyone who taps your card sees your latest credentials immediately.
              </p>

              {/* Hardware Feature Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "1-Tap Universal NFC Contact Transfer",
                  "Real-Time Dynamic Cloud Profile Sync",
                  "Apple & Google Wallet Integrated",
                  "Passive Induction — Zero Battery Ever",
                  "Lead Generation & Tap Analytics",
                  "Custom Titanium, Matte & Wood Finishes",
                ].map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#1d1d1f]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0071e3] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Hardware Specs Bar */}
              <div className="border-t border-[#e5e5e7] pt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-[#1d1d1f] tracking-tight">0.8 mm</p>
                  <p className="text-[11px] text-[#6e6e73]">Aerospace Profile</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1d1d1f] tracking-tight">13.56 MHz</p>
                  <p className="text-[11px] text-[#6e6e73]">High Frequency NFC</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1d1d1f] tracking-tight">100%</p>
                  <p className="text-[11px] text-[#6e6e73]">Passive Power</p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={FEBBLE_SPOT_PRODUCT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Explore Febble Spot Cards</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FebbleSpotlight;
