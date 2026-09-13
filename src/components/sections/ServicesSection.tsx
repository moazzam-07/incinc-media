'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlurFade } from '@/components/magicui/BlurFade';
import { services, serviceCategories } from '@/data/services';
import { cn } from '@/lib/utils';
import { Code, Palette, Megaphone, ArrowUpRight } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
  development: Code,
  creative: Palette,
  marketing: Megaphone,
};

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-section-lg bg-canvas">
      <div className="max-w-content mx-auto px-6 md:px-8">
        {/* Header */}
        <BlurFade>
          <span className="text-[12px] font-semibold text-ink-muted tracking-widest uppercase">
            Capabilities
          </span>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h2 className="text-[clamp(34px,5vw,56px)] font-bold leading-[1] tracking-[-0.03em] text-ink mt-3 max-w-[720px]">
            Engineered to scale. Designed to lead.
          </h2>
        </BlurFade>

        {/* Glossy Segmented filter pill bar */}
        <BlurFade delay={0.2}>
          <div className="inline-flex flex-wrap items-center p-1.5 rounded-full bg-canvas-soft border border-hairline/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] mt-10 mb-12 gap-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'relative px-5 py-2 text-[13px] font-semibold rounded-full transition-colors duration-200 z-10',
                activeCategory === 'all' ? 'text-white' : 'text-ink-muted hover:text-ink'
              )}
            >
              {activeCategory === 'all' && (
                <motion.span
                  layoutId="activeServiceTab"
                  className="absolute inset-0 bg-ink rounded-full -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              All Capabilities
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'relative px-5 py-2 text-[13px] font-semibold rounded-full transition-colors duration-200 z-10',
                  activeCategory === cat.id ? 'text-white' : 'text-ink-muted hover:text-ink'
                )}
              >
                {activeCategory === cat.id && (
                  <motion.span
                    layoutId="activeServiceTab"
                    className="absolute inset-0 bg-ink rounded-full -z-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </BlurFade>

        {/* Service list with refined typographic rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="divide-y divide-hairline-soft/80"
          >
            {filtered.map((service, i) => {
              const Icon = categoryIcons[service.category];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-7 px-4 -mx-4 rounded-2xl transition-colors duration-300 hover:bg-canvas-soft/60 cursor-default"
                >
                  <div className="flex items-start sm:items-center gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-canvas-soft border border-hairline/60 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                      {Icon && <Icon className="w-5 h-5 text-ink" strokeWidth={1.5} />}
                    </div>
                    <div>
                      <h3 className="text-[20px] font-bold text-ink tracking-tight group-hover:text-ink-soft transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[14px] text-ink-muted leading-relaxed mt-1 max-w-[580px] font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="text-[11px] font-semibold text-ink-faint tracking-widest uppercase px-3 py-1 rounded-full bg-canvas-soft border border-hairline/40">
                      {service.category}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-hairline/60 flex items-center justify-center text-ink-muted opacity-0 group-hover:opacity-100 group-hover:border-ink transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
