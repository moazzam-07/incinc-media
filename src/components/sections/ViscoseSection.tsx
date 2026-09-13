'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const ViscoseCarousel = dynamic(
  () => import('@/components/viscose/Carousel'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fafafa] z-0">
        <div className="w-10 h-10 rounded-full border-2 border-neutral-200 border-t-neutral-800 animate-spin" />
        <span className="mt-4 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          Initializing 3D Showcase...
        </span>
      </div>
    ),
  }
);

export function ViscoseSection() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = track.offsetHeight - viewportHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={trackRef}
      id="showcase-ring"
      className="relative w-full h-[550vh] bg-[#fafafa] snap-start"
    >
      {/* Sticky Viewport: Pins full-screen for the duration of the 550vh track */}
      <section
        aria-label="Interactive 3D Portfolio Ring"
        className="sticky top-0 w-full h-[100dvh] overflow-hidden bg-[#fafafa] border-b border-hairline-soft/80 select-none"
      >
        {/* Subtle Top Metadata Header */}
        <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20 flex items-center gap-3 pointer-events-none select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
            <span>Showcase &bull; Scroll to Spin</span>
            <span className="text-neutral-300">/</span>
            <span className="font-semibold text-neutral-800">
              Project {String(activeIndex + 1).padStart(2, '0')} / 18
            </span>
          </div>
        </div>

        {/* Minimalist Top Scroll Progress Bar */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-neutral-200/50 z-30 pointer-events-none">
          <div
            className="h-full bg-neutral-900 transition-all duration-75 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* Dynamic Client WebGL Carousel with scroll-driven control */}
        <ViscoseCarousel
          scrollProgress={scrollProgress}
          onActiveIndexChange={setActiveIndex}
          trackRef={trackRef}
        />
      </section>
    </div>
  );
}
