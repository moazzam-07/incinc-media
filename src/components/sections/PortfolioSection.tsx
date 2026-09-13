'use client';

import { BlurFade } from '@/components/magicui/BlurFade';
import { Card3DTilt } from '@/components/magicui/Card3DTilt';
import { portfolio } from '@/data/portfolio';
import { ArrowUpRight } from 'lucide-react';

export function PortfolioSection() {
  return (
    <section id="work" className="bg-canvas-soft border-t border-hairline-soft/60">
      <div className="max-w-content mx-auto px-6 md:px-8 py-section-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <BlurFade>
              <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
                Selected Work
              </span>
            </BlurFade>

            <BlurFade delay={0.1}>
              <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1] tracking-[-0.03em] text-ink mt-2">
                Proof of craft.
              </h2>
            </BlurFade>
          </div>

          <BlurFade delay={0.2}>
            <p className="text-[16px] text-ink-muted max-w-[440px] leading-relaxed font-light">
              High-concurrency platforms, heritage brand transformations, and intuitive mobile systems built for lasting market dominance.
            </p>
          </BlurFade>
        </div>

        {/* 2-Column Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((project, i) => (
            <BlurFade key={project.id} delay={0.1 + i * 0.08}>
              <Card3DTilt>
                <div className="group rounded-card overflow-hidden bg-white border border-hairline/70 hover:border-ink/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] flex flex-col">
                  {/* Image container with 3D hover scale */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-[16/10] overflow-hidden block bg-canvas-soft"
                  >
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Glossy corner link pill */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 text-ink" />
                    </div>
                  </a>

                  {/* Understated bottom caption */}
                  <div className="p-6 flex items-center justify-between border-t border-hairline/40">
                    <div>
                      <h3 className="text-[19px] font-bold text-ink tracking-tight group-hover:text-ink-soft transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-ink-muted mt-1 leading-snug">
                        {project.description}
                      </p>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1 text-[13px] font-semibold text-ink-muted group-hover:text-ink transition-colors pl-4 shrink-0"
                    >
                      Visit
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </Card3DTilt>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
