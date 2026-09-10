"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export function VideoCallout() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[24px] overflow-hidden border border-[#e0e0e0] bg-[#141414] text-white min-h-[480px] flex items-center">
          {/* Ambient Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-35"
          >
            <source src="/assets/videos/video-t_Mub37E.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent z-10" />

          {/* Content */}
          <div className="relative z-20 p-8 sm:p-14 lg:p-16 max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-white/70">
              Agency Showreel
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Be open and feel free to contact us.
            </h2>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
              Incinc Media has a proven track record of delivering top-notch solutions to clients both nationally and internationally. Our team of experts is dedicated to helping you achieve your goals and driving meaningful, compounding digital growth.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-white text-[#141414] hover:bg-[#f3f3f3] gap-2 rounded-full font-semibold"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <button
                onClick={() => setIsPlaying(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Watch Brand Intro</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-[24px] overflow-hidden aspect-16/9 border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-30 p-2 text-white/80 hover:text-white bg-black/60 rounded-full"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/SDm5-WkNjY8?autoplay=1"
              title="Incinc Media Intro"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoCallout;
