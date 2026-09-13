'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlossyButton } from '@/components/magicui/GlossyButton';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setIsOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: hidden ? -100 : 0,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'pointer-events-auto w-full max-w-[760px] flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 rounded-full transition-all duration-500 border',
            scrolled
              ? 'bg-white/80 backdrop-blur-2xl border-white/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_12px_30px_-10px_rgba(0,0,0,0.06)]'
              : 'bg-canvas-soft/80 backdrop-blur-xl border-hairline/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
          )}
        >
          {/* Brand Logo with glossy badge */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-ink font-bold text-[15px] tracking-tight group pl-1"
          >
            <span className="w-8 h-8 rounded-full bg-ink flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105">
              <span className="text-white text-[11px] font-bold tracking-tight">IM</span>
            </span>
            <span className="tracking-tight hidden sm:inline">Incinc Media</span>
          </a>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-[13px] font-medium text-ink-muted hover:text-ink transition-colors duration-200 rounded-full hover:bg-black/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-2">
            <GlossyButton
              href="#contact"
              variant="primary"
              className="!px-4 !py-1.5 !text-[12px] hidden sm:inline-flex"
              icon={<ArrowUpRight className="w-3 h-3" />}
            >
              Get in touch
            </GlossyButton>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-canvas-field/60 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-canvas/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center min-h-screen gap-3 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[32px] font-bold text-ink tracking-tight hover:text-ink-muted transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6">
                <GlossyButton
                  href="#contact"
                  variant="primary"
                  className="!px-8 !py-3.5 !text-[15px]"
                  onClick={() => setIsOpen(false)}
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Get in touch
                </GlossyButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
