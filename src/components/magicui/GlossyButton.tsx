'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlossyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function GlossyButton({
  href,
  variant = 'primary',
  className,
  children,
  icon,
  ...props
}: GlossyButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[14px] font-semibold rounded-full overflow-hidden transition-all duration-300 cursor-pointer select-none group';

  const variants = {
    primary:
      'bg-ink text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_8px_20px_-6px_rgba(20,20,20,0.25)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_12px_24px_-6px_rgba(20,20,20,0.35)] active:scale-[0.98]',
    secondary:
      'bg-canvas-soft text-ink border border-hairline shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-canvas hover:border-ink-muted/30 active:scale-[0.98]',
    outline:
      'bg-transparent text-ink border border-hairline hover:border-ink/60 hover:bg-canvas-soft/60 active:scale-[0.98]',
    glass:
      'bg-white/70 backdrop-blur-xl text-ink border border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_4px_16px_rgba(0,0,0,0.06)] hover:bg-white/90 hover:border-white active:scale-[0.98]',
  };

  const content = (
    <>
      {/* Glossy specular top sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-full"
      />

      {/* Shimmer sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-full top-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[350%] transition-all duration-700 ease-in-out"
      />

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
