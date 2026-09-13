'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimationType = 'blur-in' | 'slide-up' | 'fade-in';

interface TextAnimateProps {
  text: string;
  className?: string;
  type?: AnimationType;
  delay?: number;
  staggerDelay?: number;
  by?: 'word' | 'character';
}

const cubicEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 4 },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    y: 0,
    transition: { duration: 0.5, ease: cubicEase },
  },
};

const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: cubicEase },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: cubicEase },
  },
};

const variantMap: Record<AnimationType, Variants> = {
  'blur-in': blurInVariants,
  'slide-up': slideUpVariants,
  'fade-in': fadeInVariants,
};

export function TextAnimate({
  text,
  className,
  type = 'blur-in',
  delay = 0,
  staggerDelay = 0.04,
  by = 'word',
}: TextAnimateProps) {
  const segments = by === 'word' ? text.split(' ') : text.split('');
  const itemVariants = variantMap[type];

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      className={cn('inline-flex flex-wrap', className)}
    >
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className={by === 'word' ? 'mr-[0.25em]' : ''}
        >
          {segment}
        </motion.span>
      ))}
    </motion.span>
  );
}
