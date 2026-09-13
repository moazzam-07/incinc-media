'use client';

import { BlurFade } from '@/components/magicui/BlurFade';
import { company } from '@/data/company';
import { Compass, PenTool, Code2, Rocket, ArrowUpRight } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    title: 'Planning',
    tagline: 'An hour of planning saves days of execution.',
    description:
      'We de-risk every project upfront. From architecture mapping to market positioning, we plan variances for a frictionless trajectory.',
  },
  {
    icon: PenTool,
    title: 'Design',
    tagline: 'Good design is good business.',
    description:
      'We craft interfaces that unite functionality, aesthetic grace, and ethical UX. Design that commands respect and drives conversion.',
  },
  {
    icon: Code2,
    title: 'Develop',
    tagline: 'Engineered for resilience and scale.',
    description:
      'Our engineering team builds clean, high-concurrency systems, mobile apps, and enterprise tools built to perform without friction.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    tagline: 'Continuous monitoring and perfection.',
    description:
      'Rigorous QA, continuous monitoring, and proactive iteration guarantee your platforms remain dependable under real-world load.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-canvas-soft border-y border-hairline-soft/60">
      <div className="max-w-content mx-auto px-6 md:px-8 py-section-lg">
        {/* Eyebrow */}
        <BlurFade>
          <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
            Who We Are
          </span>
        </BlurFade>

        {/* Editorial Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8 items-start">
          {/* Left: Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.1}>
              <h2 className="text-[clamp(34px,4.5vw,56px)] font-bold leading-[1.02] tracking-[-0.03em] text-ink mb-8">
                We believe greatness is many small things done exceptionally well.
              </h2>
            </BlurFade>

            <BlurFade delay={0.2}>
              <p className="text-[18px] leading-[1.6] text-ink-muted max-w-[620px] font-light">
                {company.about}
              </p>
            </BlurFade>

            {/* Vision & Mission minimal cards */}
            <BlurFade delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                <div className="p-6 rounded-2xl bg-white/70 border border-hairline/60 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <span className="text-[11px] font-bold text-ink uppercase tracking-widest block mb-2">
                    Our Vision
                  </span>
                  <p className="text-[14px] leading-[1.6] text-ink-muted">
                    {company.vision}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/70 border border-hairline/60 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                  <span className="text-[11px] font-bold text-ink uppercase tracking-widest block mb-2">
                    Our Mission
                  </span>
                  <p className="text-[14px] leading-[1.6] text-ink-muted">
                    {company.mission}
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Right: Studio Imagery & Showreel badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <BlurFade delay={0.25}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-canvas border border-hairline/60 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)] group">
                <img
                  src="/assets/images/about-team.jpg"
                  alt="Incinc Media Studio"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Glass surface card overlay */}
                <div className="absolute inset-x-4 bottom-4 p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[14px] font-bold text-ink">Mumbai Creative Headquarters</p>
                      <p className="text-[12px] text-ink-muted mt-0.5">Veer Savarkar Marg, Vikhroli</p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-ink text-white font-medium">
                      EST. 2020
                    </span>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Four Operational Pillars Grid */}
        <div className="mt-24 pt-16 border-t border-hairline-soft">
          <BlurFade delay={0.1}>
            <div className="mb-10">
              <span className="text-[11px] font-semibold text-ink-muted tracking-widest uppercase">
                Methodology
              </span>
              <h3 className="text-[28px] font-bold tracking-tight text-ink mt-1">
                The Four Operational Pillars
              </h3>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <BlurFade key={pillar.title} delay={0.15 + idx * 0.08}>
                  <div className="p-6 rounded-2xl bg-white/70 border border-hairline/70 backdrop-blur-sm hover:border-ink/40 transition-all duration-300 hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] h-full flex flex-col justify-between group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-canvas-soft flex items-center justify-center mb-5 group-hover:bg-ink group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5 text-ink group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-[18px] font-bold text-ink tracking-tight mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-[13px] font-medium text-ink/80 mb-3 leading-snug">
                        {pillar.tagline}
                      </p>
                      <p className="text-[13px] text-ink-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
