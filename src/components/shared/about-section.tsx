"use client";

import * as React from "react";
import teamData from "@/data/team.json";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Eye, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3f3f3] text-xs font-semibold text-[#141414]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founded in 2020 • Mumbai, India</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
              We Craft Experiences That Inspire, Engage & Convert.
            </h2>

            <p className="text-base sm:text-lg text-[#707070] leading-relaxed">
              Founded in 2020 in Mumbai, Incinc Media is a premier digital solutions and creative services powerhouse dedicated to helping enterprises build undisputed market supremacy.
            </p>

            <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
              We specialize in engineering remarkable websites and scalable applications, paired with data-driven performance marketing, company branding, and cinematic production. We believe that greatness is the result of many small things done exceptionally well.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/70">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-[#141414]" />
                  <h3 className="text-sm font-bold text-[#141414] uppercase tracking-wider">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs text-[#707070] leading-relaxed">
                  To be recognized as the premier global digital partner, transforming ambitious businesses into market leaders through technical mastery.
                </p>
              </div>

              <div className="p-6 rounded-[20px] bg-[#f3f3f3] border border-[#e0e0e0]/70">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-[#141414]" />
                  <h3 className="text-sm font-bold text-[#141414] uppercase tracking-wider">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xs text-[#707070] leading-relaxed">
                  To deliver exceptional digital products and high-impact brand narratives with zero compromises, elevating client standards and driving compounding growth.
                </p>
              </div>
            </div>
          </div>

          {/* Office Image Visual */}
          <div className="lg:col-span-6">
            <div className="rounded-[24px] overflow-hidden border border-[#e0e0e0] bg-[#f3f3f3] aspect-4/3 relative shadow-sm">
              <img
                src="/assets/images/our-office.jpg"
                alt="Incinc Media Headquarters Mumbai"
                className="w-full h-full object-cover grayscale contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <Badge variant="overlay" className="mb-2">
                    Headquarters
                  </Badge>
                  <p className="text-xl font-bold">
                    Incinc Media Studios & Engineering Labs
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Vikhroli West, Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Grid */}
        <div className="border-t border-[#f0f0f0] pt-20">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
              Leadership & Craft
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141414]">
              Meet The Core Team.
            </h2>
            <p className="mt-2 text-sm text-[#707070]">
              The technologists, designers, strategists, and storytellers powering every client breakthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamData
              .filter((m) => m.photo)
              .map((member, idx) => (
                <div
                  key={idx}
                  className="group card-mobbin overflow-hidden bg-white hover:border-[#141414]/40 transition-all flex flex-col"
                >
                  <div className="aspect-square bg-[#f3f3f3] overflow-hidden relative">
                    <img
                      src={`/assets/team/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#141414]">
                        {member.name}
                      </h4>
                      <p className="text-xs text-[#707070] mt-0.5">
                        {member.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
