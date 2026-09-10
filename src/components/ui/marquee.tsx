import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional, additional class name for styling the marquee container.
   */
  className?: string;
  /**
   * Whether to reverse the animation direction.
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the marquee animation when hovering.
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed and marquee-scrolled.
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally.
   * @default false
   */
  vertical?: boolean;
  /**
   * The number of times to repeat the children for smooth looping.
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
