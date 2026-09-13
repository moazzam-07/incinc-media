'use client';

import { BlurFade } from '@/components/magicui/BlurFade';
import { team } from '@/data/team';

export function TeamSection() {
  // Only show team members with images for the visual grid
  const visibleTeam = team.filter((m) => m.image !== null);

  return (
    <section className="py-section-lg">
      <div className="max-w-content mx-auto px-6 md:px-8">
        <BlurFade>
          <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
            The Team
          </span>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="text-[clamp(32px,5vw,56px)] font-bold leading-[1] tracking-[-0.02em] text-ink mt-4 mb-4 max-w-[600px]">
            The people behind the craft.
          </h2>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="text-[17px] text-ink-muted max-w-[480px] leading-relaxed mb-16">
            A focused team of {team.length} specialists dedicated to delivering
            exceptional digital experiences.
          </p>
        </BlurFade>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visibleTeam.map((member, i) => (
            <BlurFade key={member.name} delay={0.1 + i * 0.06}>
              <div className="group relative rounded-card overflow-hidden aspect-[3/4] bg-canvas-soft">
                <img
                  src={member.image!}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                {/* Name badge — Mobbin portrait overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink/60 to-transparent">
                  <p className="text-[14px] font-semibold text-white">{member.name}</p>
                  <p className="text-[12px] text-white/70">{member.role}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
