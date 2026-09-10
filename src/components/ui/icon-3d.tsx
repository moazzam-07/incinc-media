"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export type Icon3DVariant =
  | "sapphire"   // Apple Blue / Cobalt
  | "cyan"       // Electric Cyan / Ice
  | "purple"     // Deep Purple / Amethyst
  | "emerald"    // Mint / Neon Emerald
  | "amber"      // Sunburst / Gold
  | "rose"       // Rose / Crimson
  | "titanium"   // Dark Metallic / Silver
  | "obsidian";  // Deep Onyx / Near Black

interface Icon3DProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  variant?: Icon3DVariant;
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
}

const VARIANT_STYLES: Record<
  Icon3DVariant,
  {
    bg: string;
    border: string;
    innerShadow: string;
    glowShadow: string;
    iconColor: string;
    rimLight: string;
  }
> = {
  sapphire: {
    bg: "linear-gradient(135deg, #0071e3 0%, #004fb0 50%, #002e70 100%)",
    border: "rgba(100, 180, 255, 0.4)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(0, 20, 80, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(0, 113, 227, 0.45)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.35)",
  },
  cyan: {
    bg: "linear-gradient(135deg, #00d2ff 0%, #0099cc 50%, #005a8c 100%)",
    border: "rgba(120, 230, 255, 0.45)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(0, 40, 70, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(0, 210, 255, 0.4)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.4)",
  },
  purple: {
    bg: "linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #4c1d95 100%)",
    border: "rgba(216, 180, 254, 0.4)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(35, 10, 75, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(168, 85, 247, 0.45)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.35)",
  },
  emerald: {
    bg: "linear-gradient(135deg, #10b981 0%, #059669 50%, #064e3b 100%)",
    border: "rgba(110, 231, 183, 0.4)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(4, 45, 30, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(16, 185, 129, 0.4)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.35)",
  },
  amber: {
    bg: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
    border: "rgba(253, 230, 138, 0.45)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 3px rgba(70, 30, 5, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(245, 158, 11, 0.4)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.4)",
  },
  rose: {
    bg: "linear-gradient(135deg, #f43f5e 0%, #e11d48 50%, #881337 100%)",
    border: "rgba(254, 205, 211, 0.4)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(60, 10, 25, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(244, 63, 94, 0.4)",
    iconColor: "#ffffff",
    rimLight: "rgba(255, 255, 255, 0.35)",
  },
  titanium: {
    bg: "linear-gradient(135deg, #4b5563 0%, #2b323c 50%, #171a20 100%)",
    border: "rgba(209, 213, 219, 0.35)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.4), inset 0 -2px 3px rgba(0, 0, 0, 0.6)",
    glowShadow: "0 10px 25px -4px rgba(0, 0, 0, 0.5)",
    iconColor: "#f3f4f6",
    rimLight: "rgba(255, 255, 255, 0.25)",
  },
  obsidian: {
    bg: "linear-gradient(135deg, #22252a 0%, #111317 50%, #050608 100%)",
    border: "rgba(255, 255, 255, 0.15)",
    innerShadow:
      "inset 0 1.5px 2px rgba(255, 255, 255, 0.25), inset 0 -2px 3px rgba(0, 0, 0, 0.8)",
    glowShadow: "0 10px 25px -4px rgba(0, 0, 0, 0.7)",
    iconColor: "#e5e7eb",
    rimLight: "rgba(255, 255, 255, 0.15)",
  },
};

const SIZE_STYLES = {
  sm: {
    container: "w-9 h-9 rounded-xl",
    icon: "w-4 h-4",
    specular: "h-3.5",
  },
  md: {
    container: "w-12 h-12 rounded-2xl",
    icon: "w-6 h-6",
    specular: "h-5",
  },
  lg: {
    container: "w-16 h-16 rounded-[22px]",
    icon: "w-8 h-8",
    specular: "h-7",
  },
  xl: {
    container: "w-20 h-20 rounded-[28px]",
    icon: "w-10 h-10",
    specular: "h-9",
  },
};

export function Icon3D({
  icon: Icon,
  variant = "sapphire",
  size = "md",
  glow = true,
  className,
  ...props
}: Icon3DProps) {
  const v = VARIANT_STYLES[variant];
  const s = SIZE_STYLES[size];

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 select-none",
        s.container,
        className
      )}
      style={{
        background: v.bg,
        border: `1px solid ${v.border}`,
        boxShadow: `${v.innerShadow}${glow ? `, ${v.glowShadow}` : ""}`,
      }}
      {...props}
    >
      {/* 3D Specular Glass Curved Highlight (Top half) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute top-0 inset-x-0 rounded-t-[inherit] overflow-hidden opacity-80",
          s.specular
        )}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 75%, transparent 100%)",
        }}
      />

      {/* 3D Bottom Reflected Rim Light */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-2 h-[1px] opacity-60 rounded-full"
        style={{
          background: v.rimLight,
        }}
      />

      {/* Icon Glyph with drop shadow for 3D depth */}
      <Icon
        className={cn(s.icon, "relative z-10 drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]")}
        style={{ color: v.iconColor }}
        strokeWidth={2.2}
      />
    </div>
  );
}

export default Icon3D;
