"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardTilt3DProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // max tilt angle in degrees (default 7)
  glare?: boolean;  // whether to show cursor-following specular spotlight
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function CardTilt3D({
  children,
  maxTilt = 7,
  glare = true,
  className,
  intensity = "subtle",
  ...props
}: CardTilt3DProps) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [coords, setCoords] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    setCoords({ x, y });
    cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateZ(6px)`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const glareOpacity = {
    subtle: "0.12",
    medium: "0.20",
    strong: "0.32",
  }[intensity];

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative transition-transform duration-200 ease-out will-change-transform",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
      {...props}
    >
      {/* Specular Spotlight Hover (Glides under cursor) */}
      {glare && isHovered && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            background: `radial-gradient(420px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, ${glareOpacity}), transparent 75%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}

export default CardTilt3D;
