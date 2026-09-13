'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { BlurFade } from '@/components/magicui/BlurFade';
import { GlossyButton } from '@/components/magicui/GlossyButton';

const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 14, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
  },
};

export function HeroSection() {
  const headlineWords = 'Bring your vision to life.'.split(' ');

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-canvas flex flex-col justify-between pt-32 pb-8 md:pt-36 md:pb-12 snap-start">
      {/* Subtle ambient blurred background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-canvas-soft rounded-full blur-[140px] pointer-events-none -z-10 opacity-80"
      />

      {/* Subtle architectural grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(20,20,20,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,20,20,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Hero Typography & CTAs (Centered, Apple & Mobbin style) */}
      <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-8 flex flex-col items-center text-center my-auto">
        {/* Eyebrow badge */}
        <BlurFade delay={0.1}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-hairline/80 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_8px_rgba(0,0,0,0.02)] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-35" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ink" />
            </span>
            <span className="text-[12px] font-semibold tracking-wider uppercase text-ink-muted">
              Premier Digital Solutions & Creative Agency
            </span>
          </div>
        </BlurFade>

        {/* Staggered Apple-Tight Headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.15,
              },
            },
          }}
          className="text-[clamp(44px,7.5vw,84px)] font-bold tracking-[-0.035em] text-ink leading-[0.94] max-w-[920px]"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={FADE_IN_VARIANTS}
              className="inline-block mr-[0.24em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <BlurFade delay={0.55}>
          <p className="mt-6 text-[clamp(17px,2.2vw,20px)] leading-[1.5] text-ink-muted max-w-[620px] font-light tracking-tight">
            We craft remarkable digital solutions — from scalable enterprise applications
            and compelling brand narratives to high-velocity performance marketing.
            Engineered in Mumbai for global leaders.
          </p>
        </BlurFade>

        {/* Glossy CTA Action Buttons */}
        <BlurFade delay={0.75}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
            <GlossyButton
              href="#contact"
              variant="primary"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Start a project
            </GlossyButton>

            <GlossyButton
              href="#work"
              variant="glass"
              icon={<Play className="w-3.5 h-3.5" />}
            >
              View selected work
            </GlossyButton>
          </div>
        </BlurFade>

        {/* Subtle scroll indicator pointing down into 3D showcase */}
        <BlurFade delay={0.95}>
          <a
            href="#showcase-ring"
            className="group inline-flex flex-col items-center gap-2 text-ink-muted hover:text-ink transition-colors mt-12 md:mt-16"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-ink-muted/80 group-hover:text-ink transition-colors">
              Scroll or Drag to Explore 3D Showcase
            </span>
            <div className="w-5 h-8 rounded-full border border-hairline flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-ink"
              />
            </div>
          </a>
        </BlurFade>
      </div>
    </section>
  );
}
