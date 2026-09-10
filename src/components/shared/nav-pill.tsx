"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function NavPill() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 bg-[#f3f3f3]/90 backdrop-blur-md rounded-full border border-[#e0e0e0]/60 shadow-[0_2px_12px_rgba(0,0,0,0.04)] max-w-4xl w-full transition-all">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/assets/images/logo.png"
            alt="Incinc Media"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-semibold text-base text-[#141414] tracking-tight">
            Incinc Media
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[#141414]">
          <Link
            href="#services"
            className="text-[#707070] hover:text-[#141414] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#works"
            className="text-[#707070] hover:text-[#141414] transition-colors"
          >
            Works
          </Link>
          <Link
            href="#process"
            className="text-[#707070] hover:text-[#141414] transition-colors"
          >
            Process
          </Link>
          <Link
            href="#clients"
            className="text-[#707070] hover:text-[#141414] transition-colors"
          >
            Clients
          </Link>
          <Link
            href="#about"
            className="text-[#707070] hover:text-[#141414] transition-colors"
          >
            About
          </Link>
          <a
            href="https://febblespot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#707070] hover:text-[#141414] transition-colors"
          >
            <span>Febble Spot</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0066ff]" />
          </a>
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="#contact">
            <Button variant="primary" size="sm" className="rounded-full font-medium">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-[#141414] hover:bg-black/5 rounded-full"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="pointer-events-auto md:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl border border-[#e0e0e0] rounded-[24px] p-6 shadow-xl flex flex-col gap-4">
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#141414] py-1 border-b border-[#f0f0f0]"
          >
            Services
          </Link>
          <Link
            href="#works"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#141414] py-1 border-b border-[#f0f0f0]"
          >
            Selected Works
          </Link>
          <Link
            href="#process"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#141414] py-1 border-b border-[#f0f0f0]"
          >
            6D Process
          </Link>
          <Link
            href="#clients"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#141414] py-1 border-b border-[#f0f0f0]"
          >
            Clients
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold text-[#141414] py-1 border-b border-[#f0f0f0]"
          >
            About Us
          </Link>
          <a
            href="https://febblespot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#0066ff] py-1 flex items-center justify-between border-b border-[#f0f0f0]"
          >
            <span>Febble Spot NFC</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-2">
            <Button variant="primary" className="w-full">
              Start a Project
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default NavPill;
