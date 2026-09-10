"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CONTACT_INFO } from "@/data/site-content";

export function InvertedFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#141414] text-white rounded-t-[24px] pt-20 pb-12 overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              Incinc Media.
            </h2>
            <p className="text-base sm:text-lg text-[#adadad] font-light max-w-lg">
              Your dream. Our expertise. A future built together. Engineering world-class digital platforms and creative experiences from Mumbai, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:mail@incincmedia.com"
              className="px-6 py-3 rounded-full bg-white text-[#141414] text-sm font-semibold hover:bg-[#f3f3f3] transition-colors"
            >
              mail@incincmedia.com
            </a>
            <a
              href="tel:+917498847799"
              className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              +91 74988 47799
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-sm">
          {/* Col 1 */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Core Capabilities
            </p>
            <ul className="space-y-2 text-[#adadad]">
              <li><Link href="#services" className="hover:text-white transition-colors">Mobile & Web Apps</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Custom Software Solutions</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Company Branding</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Video & Ad Production</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">SEO & Growth Marketing</Link></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Navigation
            </p>
            <ul className="space-y-2 text-[#adadad]">
              <li><Link href="#works" className="hover:text-white transition-colors">Featured Works</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">6D Methodology</Link></li>
              <li><Link href="#clients" className="hover:text-white transition-colors">Client Network</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Headquarters</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Products & Labs
            </p>
            <ul className="space-y-2 text-[#adadad]">
              <li>
                <a
                  href="https://febblespot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#0066ff]"
                >
                  <span>Febble Spot NFC</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://blog.incincmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Incinc Media Blog</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Download Brochure</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest font-semibold text-white/50">
              Social Network
            </p>
            <ul className="space-y-2 text-[#adadad]">
              <li><a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href={CONTACT_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter / X</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Legal Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#adadad]">
          <p>
            © {currentYear} Incinc Media. All Rights Reserved. Mumbai, Maharashtra, India.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default InvertedFooter;
