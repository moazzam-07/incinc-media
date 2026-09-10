"use client";

import * as React from "react";
import Link from "next/link";
import { ImageStreamHero, type StreamImage } from "@/components/ui/image-stream-hero";
import { ArrowRight, Play, Sparkles } from "lucide-react";

// Portfolio showcases streaming in the 3D perspective corridor
const PORTFOLIO_STREAM_IMAGES: StreamImage[] = [
  {
    src: "/assets/portfolio/Nandeep Full Page.jpg",
    alt: "Nandeep Machine Tools Enterprise Web Platform",
  },
  {
    src: "/assets/portfolio/Mynex Technology.jpg",
    alt: "Mynex Technology Corporate Portal",
  },
  {
    src: "/assets/portfolio/Al Kahf Full Page.jpeg",
    alt: "Al Kahf General Trading LLC UAE",
  },
  {
    src: "/assets/portfolio/Vision-Fitness Full.png",
    alt: "Vision Fitness Brand & Platform",
  },
  {
    src: "/assets/portfolio/Saab-Mall Full.png",
    alt: "Saab Mall Grocery & E-Commerce Mobile App",
  },
  {
    src: "/assets/portfolio/Azoz-Wall Full.jpeg",
    alt: "Azoz Operable Wall Acoustic System",
  },
  {
    src: "/assets/portfolio/Dashboard Full.png",
    alt: "Azoz Attendance Enterprise SaaS Dashboard",
  },
  {
    src: "/assets/portfolio/Agneyastra-Foundation Full.png",
    alt: "Agneyastra Foundation Social Initiative",
  },
  {
    src: "/assets/portfolio/Radical Full.png",
    alt: "Radical Minds Technologies BPO Platform",
  },
  {
    src: "/assets/portfolio/Zero-Broker Full.png",
    alt: "Zero Broker Real Estate Web Platform",
  },
  {
    src: "/assets/portfolio/Hasmukh-Sons Full web.png",
    alt: "Hasmukhlal & Sons Heritage Jewellery",
  },
  {
    src: "/assets/portfolio/Silver-Star Full Page.jpeg",
    alt: "Silver Star Traditional Silver Jewellery",
  },
];

export function HeroCorridor() {
  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#000000] text-white">
      {/* Ambient Apple Keynote Glow (Top Radial Light) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,113,227,0.22),rgba(41,151,255,0.08)_40%,transparent_70%)] blur-[80px]"
      />

      <ImageStreamHero
        images={PORTFOLIO_STREAM_IMAGES}
        cards={11}
        speed={24}
        axis={52}
        className="h-[640px] sm:h-[720px] lg:h-[780px] w-full"
      >
        {/* Soft Vignette Overlay to ensure text readability */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.65)_50%,rgba(0,0,0,0.3)_100%)]"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-between py-8 sm:py-12 px-6 text-center">
          {/* Apple Keynote Eyebrow Capsule */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-dark border border-white/15 text-xs font-medium text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-4 select-none">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
            <span className="tracking-wide">Creative Powerhouse & Digital Engineering</span>
          </div>

          {/* Monolithic Apple Headline */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-white leading-[1.05]">
              <span className="bg-gradient-to-b from-white via-white/95 to-white/60 bg-clip-text text-transparent">
                Bring your vision to life.
              </span>
              <br />
              <span className="text-[#2997ff] drop-shadow-[0_0_35px_rgba(41,151,255,0.3)]">
                With Incinc Media.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-normal text-[#86868b] leading-relaxed">
              Your dream. Our expertise. A future built together. We architect scalable enterprise software, cinematic media productions, and enduring brand identities for 300+ global brands.
            </p>
          </div>

          {/* Apple Stadium Pill CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-[0_4px_20px_rgba(0,113,227,0.45),inset_0_1px_0_rgba(255,255,255,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#cinema"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-medium apple-glass-dark text-white/90 hover:text-white hover:bg-white/10 border border-white/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Watch 2026 Showreel</span>
            </Link>
          </div>

          {/* Trust Metric Micro Ticker */}
          <div className="flex items-center gap-6 sm:gap-10 pt-4 text-xs font-medium text-[#86868b]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" />
              <span>300+ Global Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
              <span>150+ Flagship Builds</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
              <span>Mumbai Studio & Labs</span>
            </div>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}

export default HeroCorridor;
