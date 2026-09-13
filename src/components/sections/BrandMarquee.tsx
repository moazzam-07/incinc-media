'use client';

import * as React from 'react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { BlurFade } from '@/components/magicui/BlurFade';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { clientLogos, totalClientsCount, type ClientLogo } from '@/data/clients';

function DynamicLogoItem({ logo }: { logo: ClientLogo }) {
  const itemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let animId: number;

    const updatePosition = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const itemCenter = rect.left + rect.width / 2;
        const screenCenter = viewportWidth / 2;

        // Dynamic center-proximity calculation (from addfunkmedia)
        const maxDistance = Math.min(viewportWidth * 0.42, 380);
        const distance = Math.abs(itemCenter - screenCenter);
        const normalized = Math.max(0, 1 - distance / maxDistance);

        // Curved factor for punchy center focus
        const factor = Math.pow(normalized, 1.5);

        const img = itemRef.current.querySelector('img');
        if (img) {
          const grayscaleVal = (1 - factor) * 100;
          const opacityVal = 0.35 + factor * 0.65;
          const scaleVal = 1 + factor * 0.08;

          img.style.filter = `grayscale(${grayscaleVal.toFixed(1)}%)`;
          img.style.opacity = opacityVal.toFixed(2);
          img.style.transform = `scale(${scaleVal.toFixed(3)})`;
        }
      }
      animId = requestAnimationFrame(updatePosition);
    };

    animId = requestAnimationFrame(updatePosition);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className="flex shrink-0 items-center justify-center h-20 md:h-24 px-6 md:px-8 group cursor-default"
    >
      <img
        src={logo.image}
        alt={logo.name}
        className="h-9 sm:h-10 md:h-12 w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[180px] object-contain will-change-transform transition-all duration-150 ease-out hover:!grayscale-0 hover:!opacity-100 select-none"
        loading="lazy"
      />
    </div>
  );
}

export function BrandMarquee() {
  return (
    <section className="pt-12 pb-20 md:pt-16 md:pb-28 w-full bg-canvas border-y border-hairline-soft/60 overflow-hidden relative">
      {/* Section Header */}
      <div className="w-full flex flex-col items-center justify-center text-center px-6 mb-10 md:mb-14">
        <BlurFade>
          <span className="text-[11px] md:text-xs font-semibold text-ink-muted/80 uppercase tracking-[0.25em]">
            Trusted by {totalClientsCount}+ Leading Brands Nationally &amp; Internationally
          </span>
        </BlurFade>
      </div>

      {/* Auto-scrolling logo track with transparent background-removed logos */}
      <div className="relative">
        <div className="relative mx-auto flex items-center justify-center max-w-[1360px] px-4">
          <Carousel
            opts={{ loop: true, align: 'center' }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.85 })]}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0 items-center justify-around">
              {clientLogos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-auto justify-center pl-0"
                >
                  <DynamicLogoItem logo={logo} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Heavy wide corner gradient blurs for seamless edge fade */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-24 sm:w-36 md:w-56 bg-gradient-to-r from-canvas via-canvas/90 to-transparent pointer-events-none z-10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-24 sm:w-36 md:w-56 bg-gradient-to-l from-canvas via-canvas/90 to-transparent pointer-events-none z-10"
          />
        </div>
      </div>
    </section>
  );
}
