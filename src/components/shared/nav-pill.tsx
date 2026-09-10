"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function NavPill() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 rounded-full transition-all duration-300 max-w-4xl w-full ${
          scrolled
            ? "apple-glass-dark bg-[#0a0a0d]/85 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.16)]"
            : "apple-glass-dark bg-[#0e0f13]/70"
        }`}
      >
        {/* Logo Lockup with subtle Apple specular glow */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="relative flex items-center justify-center">
            <img
              src="/assets/images/logo.png"
              alt="Incinc Media"
              className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>
          <span className="font-semibold text-sm sm:text-base text-white tracking-tight">
            Incinc Media
          </span>
        </Link>

        {/* Desktop Links (Apple minimal spacing & hover) */}
        <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-white/70">
          <Link
            href="#services"
            className="hover:text-white transition-colors"
          >
            Services
          </Link>
          <Link
            href="#cinema"
            className="hover:text-white transition-colors flex items-center gap-1"
          >
            <span>Showreel</span>
          </Link>
          <Link
            href="#works"
            className="hover:text-white transition-colors"
          >
            Works
          </Link>
          <Link
            href="#hardware"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Febble Spot</span>
            <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-semibold bg-[#2997ff]/15 text-[#2997ff] border border-[#2997ff]/30">
              NFC
            </span>
          </Link>
          <Link
            href="#process"
            className="hover:text-white transition-colors"
          >
            Process
          </Link>
          <Link
            href="#clients"
            className="hover:text-white transition-colors"
          >
            Clients
          </Link>
          <Link
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </Link>
        </div>

        {/* Right Stadium Pill CTA (Apple Blue) */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-[0_2px_12px_rgba(0,113,227,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Start a Project</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer (Apple Frosted Glass) */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-[#0c0d10]/95 backdrop-blur-2xl border border-white/12 rounded-[24px] p-6 shadow-2xl flex flex-col gap-4 text-white">
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            Services & Capabilities
          </Link>
          <Link
            href="#cinema"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            Cinematic Showreel
          </Link>
          <Link
            href="#works"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            Selected Works
          </Link>
          <Link
            href="#hardware"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#2997ff] py-1 flex items-center justify-between border-b border-white/10"
          >
            <span>Febble Spot Hardware</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="#process"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            6D Process
          </Link>
          <Link
            href="#clients"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            Global Clients
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-white/90 py-1 border-b border-white/10"
          >
            About Incinc
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-flex items-center justify-center py-2.5 rounded-full text-sm font-semibold bg-[#0071e3] text-white shadow-lg"
          >
            <span>Start a Project</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default NavPill;
