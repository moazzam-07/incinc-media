"use client";

import * as React from "react";
import Link from "next/link";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Clapperboard,
  Cpu,
  Smartphone,
  Flame,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Icon3D } from "@/components/ui/icon-3d";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

interface ChannelItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  badge: "sapphire" | "purple" | "emerald" | "amber";
  icon: typeof Clapperboard;
  videoSrc: string;
  isMain?: boolean;
}

const CHANNELS: ChannelItem[] = [
  {
    id: "showreel",
    title: "2026 Agency Showreel",
    category: "Master Reel",
    duration: "1:45",
    description: "Cinematic overview of Incinc Media's flagship projects, software architectures, and studio productions.",
    badge: "sapphire",
    icon: Clapperboard,
    videoSrc: "/assets/videos/video-t_Mub37E.mp4",
    isMain: true,
  },
  {
    id: "hardware",
    title: "Febble Spot NFC Innovation",
    category: "Hardware Reveal",
    duration: "2:10",
    description: "The next-generation titanium smart business card engineered by Incinc Media with 1-tap instant cloud sync.",
    badge: "purple",
    icon: Cpu,
    videoSrc: "/assets/videos/video-t_Mub37E.mp4",
  },
  {
    id: "apps",
    title: "Enterprise Mobile & Web Apps",
    category: "Engineering Labs",
    duration: "1:30",
    description: "Custom iOS, Android, and SaaS platforms engineered for high throughput and zero downtime.",
    badge: "emerald",
    icon: Smartphone,
    videoSrc: "/assets/videos/video-t_Mub37E.mp4",
  },
  {
    id: "studio",
    title: "Commercial Shoots & Campaigns",
    category: "Studio & Creative",
    duration: "2:40",
    description: "Full-service commercial photography, fashion lookbooks, and high-conversion social ad campaigns.",
    badge: "amber",
    icon: Flame,
    videoSrc: "/assets/videos/video-t_Mub37E.mp4",
  },
];

export function CinemaDisplay() {
  const [activeChannel, setActiveChannel] = React.useState<ChannelItem>(CHANNELS[0]);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Synchronize playback state
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(p) ? 0 : p);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen?.();
    }
  };

  return (
    <section id="cinema" className="py-28 bg-[#000000] text-white relative overflow-hidden">
      {/* Ambient Blue Stage Lighting behind display */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] lg:w-[1300px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.18),rgba(0,113,227,0.06)_45%,transparent_70%)] blur-[100px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header (Apple Keynote Monolithic Voice) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-lg select-none">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
            Precision Engineering.
            <br />
            <span className="bg-gradient-to-r from-[#2997ff] via-[#82bfff] to-[#d8b4fe] bg-clip-text text-transparent">
              Cinematic Reality.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#86868b] leading-relaxed">
            Experience the craft, scale, and emotional resonance of Incinc Media.
            Every frame engineered to captivate and convert.
          </p>
        </div>

        {/* 3D Apple Cinema Display Frame */}
        <CardTilt3D
          maxTilt={5}
          intensity="medium"
          className="w-full max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            className="apple-cinema-bezel rounded-[28px] sm:rounded-[36px] p-3 sm:p-4.5 bg-[#0a0b0e] relative shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]"
          >
            {/* Top Display Bezel Bar (Apple Studio Display Camera dot & Mic) */}
            <div className="flex items-center justify-between px-4 py-2 text-xs text-[#86868b] select-none">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1c1f26] border border-white/10" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                  Incinc Pro Cinema Display
                </span>
              </div>

              {/* Center Camera Aperture */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#101217] border border-[#2b303c] shadow-inner flex items-center justify-center">
                  <span className="w-1 h-1 rounded-full bg-[#2997ff]/60 animate-pulse" />
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#2997ff]">
                  4K HDR • 60 FPS
                </span>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div className="relative aspect-16/9 rounded-[20px] sm:rounded-[26px] overflow-hidden bg-black group">
              <video
                ref={videoRef}
                src={activeChannel.videoSrc}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover select-none"
              />

              {/* Dynamic Bottom Glass HUD Controls */}
              <div className="absolute inset-x-4 bottom-4 z-30 flex flex-col gap-2 pointer-events-none">
                {/* Thin Scrubber Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm pointer-events-auto cursor-pointer">
                  <div
                    className="h-full bg-gradient-to-r from-[#0071e3] to-[#2997ff] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Glass Control Bar */}
                <div className="apple-glass-dark rounded-full px-4 py-2 flex items-center justify-between pointer-events-auto border border-white/15 shadow-2xl">
                  {/* Left: Play / Channel Title */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-full bg-white text-black hover:bg-white/90 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-black" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-black translate-x-0.5" />
                      )}
                    </button>

                    <div className="hidden sm:block">
                      <p className="text-xs font-semibold text-white tracking-tight">
                        {activeChannel.title}
                      </p>
                      <p className="text-[10px] text-[#86868b]">
                        {activeChannel.category} • {activeChannel.duration}
                      </p>
                    </div>
                  </div>

                  {/* Center: Live Equalizer Soundwaves */}
                  <div className="flex items-center gap-1">
                    <span className="w-0.5 h-3 bg-[#2997ff] rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-0.5 h-5 bg-[#2997ff] rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-0.5 h-4 bg-[#2997ff] rounded-full animate-bounce [animation-delay:300ms]" />
                    <span className="w-0.5 h-6 bg-[#2997ff] rounded-full animate-bounce [animation-delay:100ms]" />
                    <span className="w-0.5 h-2 bg-[#2997ff] rounded-full animate-bounce [animation-delay:250ms]" />
                  </div>

                  {/* Right: Sound Toggle & Fullscreen */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                      title={isMuted ? "Unmute sound" : "Mute sound"}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-[#86868b]" />
                          <span className="text-[11px] text-[#86868b] hidden md:inline">
                            Sound Off
                          </span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-4 h-4 text-[#2997ff]" />
                          <span className="text-[11px] text-[#2997ff] hidden md:inline font-semibold">
                            Sound On
                          </span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-2 rounded-full hover:bg-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Apple Aluminum Stand Base */}
            <div
              aria-hidden
              className="w-48 h-3.5 mx-auto mt-2 bg-gradient-to-b from-[#2a2d36] to-[#12141a] rounded-b-xl border-x border-b border-white/10 shadow-lg"
            />
          </div>
        </CardTilt3D>

        {/* 3D Multi-Channel Reel Selector Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {CHANNELS.map((ch) => {
            const isActive = activeChannel.id === ch.id;
            return (
              <div
                key={ch.id}
                onClick={() => {
                  setActiveChannel(ch);
                  setIsPlaying(true);
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    videoRef.current.play();
                  }
                }}
                className={`p-5 rounded-[22px] border transition-all cursor-pointer group flex flex-col justify-between ${
                  isActive
                    ? "apple-glass-dark bg-[#161820]/90 border-[#2997ff]/60 shadow-[0_12px_30px_-8px_rgba(41,151,255,0.3)] -translate-y-1"
                    : "apple-glass-dark bg-[#0e0f14]/60 border-white/10 hover:border-white/20 hover:bg-[#121319]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* 3D Tactile Icon */}
                    <Icon3D
                      icon={ch.icon}
                      variant={ch.badge}
                      size="sm"
                      glow={isActive}
                    />
                    <span className="text-[11px] font-mono text-[#86868b] px-2 py-0.5 rounded-full bg-white/5 border border-white/8">
                      {ch.duration}
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-widest font-semibold text-[#2997ff] mb-1">
                    {ch.category}
                  </p>
                  <h3 className="text-sm font-semibold text-white tracking-tight mb-2">
                    {ch.title}
                  </h3>
                </div>

                <p className="text-xs text-[#86868b] leading-relaxed line-clamp-2 mt-2">
                  {ch.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3D Spec Badges Row */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-around gap-6 text-center max-w-4xl mx-auto">
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white tracking-tight">4K HDR</p>
            <p className="text-xs text-[#86868b]">Master ProRes Color Profile</p>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white tracking-tight">60 FPS</p>
            <p className="text-xs text-[#86868b]">Fluid Ultra-Motion Capture</p>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white tracking-tight">Dolby Atmos</p>
            <p className="text-xs text-[#86868b]">High-Fidelity Sound Engineering</p>
          </div>
          <div className="w-[1px] h-8 bg-white/10 hidden sm:block" />
          <div className="space-y-1">
            <p className="text-2xl font-bold text-white tracking-tight">Zero Drop</p>
            <p className="text-xs text-[#86868b]">Global Edge Delivery Network</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinemaDisplay;
