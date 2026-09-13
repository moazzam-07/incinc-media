'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  duration = '30s',
}: MarqueeProps) {
  return (
    <div
      className={cn(
        'group flex overflow-hidden [--gap:2rem]',
        className
      )}
      style={{ '--duration': duration } as React.CSSProperties}
    >
      <div
        className={cn(
          'flex shrink-0 items-center justify-around gap-[var(--gap)]',
          'animate-marquee',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'flex shrink-0 items-center justify-around gap-[var(--gap)]',
          'animate-marquee',
          reverse && '[animation-direction:reverse]',
          pauseOnHover && 'group-hover:[animation-play-state:paused]'
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
