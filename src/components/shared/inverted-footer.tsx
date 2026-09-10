"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/data/site-content";

export function InvertedFooter() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = React.useState<string>("");

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#000000] text-white border-t border-white/10 pt-24 pb-14 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Lockup */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/images/logo.png"
                alt="Incinc Media"
                className="h-9 w-auto object-contain brightness-200"
              />
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Incinc Media
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#86868b] max-w-lg leading-relaxed">
              Your dream. Our expertise. A future built together. Engineering enterprise digital platforms and high-impact brand narratives from Mumbai, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {time && (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full apple-glass-dark border border-white/10 text-xs font-mono text-[#2997ff]">
                <Clock className="w-3.5 h-3.5" />
                <span>Mumbai Studio: {time} IST</span>
              </div>
            )}

            <a
              href="mailto:mail@incincmedia.com"
              className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-all shadow-md"
            >
              mail@incincmedia.com
            </a>
            <a
              href="tel:+917498847799"
              className="px-5 py-2.5 rounded-full apple-glass-dark border border-white/15 text-white text-xs font-semibold hover:bg-white/10 transition-all"
            >
              +91 74988 47799
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs">
          {/* Col 1 */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#2997ff]">
              Capabilities
            </p>
            <ul className="space-y-2.5 text-[#86868b]">
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Mobile & Web Applications
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Custom Software Solutions
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Brand Identity Systems
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Video & Ad Production
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  Performance & SEO Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#2997ff]">
              Architecture
            </p>
            <ul className="space-y-2.5 text-[#86868b]">
              <li>
                <Link href="#cinema" className="hover:text-white transition-colors">
                  2026 4K Showreel
                </Link>
              </li>
              <li>
                <Link href="#works" className="hover:text-white transition-colors">
                  Selected Builds (16)
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-white transition-colors">
                  6D Development Engine
                </Link>
              </li>
              <li>
                <Link href="#clients" className="hover:text-white transition-colors">
                  Client Roster (300+)
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  Core Leadership Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#2997ff]">
              Innovation & Labs
            </p>
            <ul className="space-y-2.5 text-[#86868b]">
              <li>
                <a
                  href="https://febblespot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#2997ff]"
                >
                  <span>Febble Spot Smart NFC</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://blog.incincmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Engineering Insights Blog</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Official Brochure PDF</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <p className="font-mono uppercase tracking-widest text-[#2997ff]">
              Presence
            </p>
            <ul className="space-y-2.5 text-[#86868b]">
              <li>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>Facebook</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>YouTube</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Apple Minimalist Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#86868b]">
          <p>© {currentYear} Incinc Media. All rights reserved. Mumbai, India.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
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
