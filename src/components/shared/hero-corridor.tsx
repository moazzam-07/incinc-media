"use client";

import * as React from "react";
import Link from "next/link";
import { ImageStreamHero, type StreamImage } from "@/components/ui/image-stream-hero";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

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
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      <ImageStreamHero
        images={PORTFOLIO_STREAM_IMAGES}
        cards={10}
        speed={22}
        axis={52}
        className="h-[620px] sm:h-[680px] lg:h-[740px] w-full"
      >
        <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 px-6 text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3f3f3] border border-[#e0e0e0]/70 text-xs font-semibold text-[#141414] tracking-tight mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#141414]" />
            <span>Digital Solutions & Creative Powerhouse</span>
          </div>

          {/* Centered Headline with Mobbin typography voice: 652 weight, tight 1.0 leading, terminal period */}
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141414] leading-[1.05]">
              Bring your vision to life with Incinc Media.
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl font-light text-[#707070] leading-relaxed">
              Your dream. Our expertise. A future built together. We craft
              scalable software, cinematic media, and distinct brand identities
              for 300+ clients worldwide.
            </p>
          </div>

          {/* Action CTAs in Stadium Pills */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-6">
            <Link href="#contact">
              <Button
                variant="primary"
                size="lg"
                className="gap-2.5 rounded-full font-medium"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link href="#works">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full font-medium"
              >
                Explore Works ↗
              </Button>
            </Link>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}

export default HeroCorridor;
