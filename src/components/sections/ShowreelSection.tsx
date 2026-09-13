'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BlurFade } from '@/components/magicui/BlurFade';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-section-lg bg-canvas overflow-hidden">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <BlurFade>
              <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
                Showreel
              </span>
            </BlurFade>
            <BlurFade delay={0.1}>
              <h2 className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-ink mt-2">
                Craft in motion.
              </h2>
            </BlurFade>
          </div>

          <BlurFade delay={0.2}>
            <p className="text-[15px] text-ink-muted max-w-[400px] leading-relaxed">
              A brief retrospective of our cinematic production, digital interfaces, and high-impact brand narratives.
            </p>
          </BlurFade>
        </div>

        {/* Video Showcase Card */}
        <BlurFade delay={0.3}>
          <div className="relative rounded-[28px] overflow-hidden bg-ink border border-hairline/60 shadow-[0_24px_50px_-15px_rgba(0,0,0,0.1)] group aspect-video max-w-[1120px] mx-auto">
            <video
              ref={videoRef}
              src="/assets/videos/video-t_Mub37E.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/20 pointer-events-none" />

            {/* Video Controls Bar */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-11 h-11 rounded-full bg-white/85 hover:bg-white text-ink flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 active:scale-95"
                  aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-ink" /> : <Play className="w-4 h-4 fill-ink ml-0.5" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="w-11 h-11 rounded-full bg-white/85 hover:bg-white text-ink flex items-center justify-center backdrop-blur-md shadow-lg transition-all duration-300 active:scale-95"
                  aria-label={isMuted ? 'Unmute showreel' : 'Mute showreel'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="hidden sm:inline-block text-[13px] font-medium text-white/90 drop-shadow">
                  Incinc Media Official Reel
                </span>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[12px] font-mono tracking-tight">
                4K SHOWCASE
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
