'use client';

import { TextReveal } from '@/components/magicui/TextReveal';

export function TextRevealSection() {
  return (
    <section className="py-section-lg">
      <div className="max-w-narrow mx-auto px-6 md:px-8">
        <TextReveal
          text="We believe that greatness is the result of many small things done exceptionally well. Every pixel, every interaction, every strategy — crafted to perfection."
        />
      </div>
    </section>
  );
}
