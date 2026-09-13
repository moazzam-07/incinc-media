'use client';

import { BlurFade } from '@/components/magicui/BlurFade';
import { process } from '@/data/process';

export function ProcessSection() {
  return (
    <section id="process" className="py-section-lg">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <BlurFade>
          <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
            Our Process
          </span>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1] tracking-[-0.02em] text-ink mt-4 mb-4 max-w-[600px]">
            The 6D framework.
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-[17px] text-ink-muted max-w-[500px] leading-relaxed mb-16">
            Every project follows our proven six-step methodology, ensuring
            quality delivery from concept to completion.
          </p>
        </BlurFade>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {process.map((step, i) => (
            <BlurFade key={step.title} delay={0.1 + i * 0.08}>
              <div className="group">
                {/* Step image */}
                <div className="rounded-card-sm overflow-hidden aspect-[16/10] bg-canvas-soft mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Number + Title */}
                <div className="flex items-baseline gap-4">
                  <span className="text-[48px] font-bold text-hairline tracking-tighter font-mono leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[20px] font-bold text-ink tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-ink-muted leading-relaxed mt-2 max-w-[300px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
