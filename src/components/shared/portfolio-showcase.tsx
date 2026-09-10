"use client";

import * as React from "react";
import portfolioData from "@/data/portfolio.json";
import {
  ArrowUpRight,
  ExternalLink,
  Smartphone,
  Globe,
  Sparkles,
  X,
  Layers,
} from "lucide-react";
import { CardTilt3D } from "@/components/ui/card-tilt-3d";

interface PortfolioItem {
  name: string;
  thumbnail: string;
  category?: string;
  description: string;
  image?: string;
  fullImage?: string;
  showLive?: boolean;
  url: {
    web?: string;
    apk?: string;
    ios?: string;
  };
}

export function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = React.useState<PortfolioItem | null>(null);
  const [filter, setFilter] = React.useState<"all" | "apps" | "web">("all");

  const filteredProjects = (portfolioData as unknown as PortfolioItem[]).filter((p) => {
    if (filter === "apps") {
      return Boolean(p.url.apk || p.url.ios);
    }
    if (filter === "web") {
      return Boolean(p.url.web && !p.url.apk && !p.url.ios);
    }
    return true;
  });

  return (
    <section id="works" className="py-28 bg-[#000000] text-white relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.1),transparent_70%)] blur-[90px]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header & Segmented Pill Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full apple-glass-dark border border-white/12 text-xs font-semibold text-[#2997ff] uppercase tracking-[0.2em] shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.08]">
              Engineered For Impact.
            </h2>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed">
              Explore 16 flagship production case studies spanning enterprise ERPs, consumer mobile apps, and luxury web platforms.
            </p>
          </div>

          {/* Segmented Control Pill (Apple Dark Glass) */}
          <div className="flex items-center gap-1.5 p-1.5 apple-glass-dark rounded-full border border-white/12 w-fit select-none">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              All Builds ({portfolioData.length})
            </button>
            <button
              onClick={() => setFilter("apps")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "apps"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Mobile & SaaS
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "web"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Web Platforms
            </button>
          </div>
        </div>

        {/* Portfolio 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => {
            const hasApp = Boolean(proj.url.apk || proj.url.ios);

            return (
              <CardTilt3D key={idx} maxTilt={6} intensity="subtle" className="h-full">
                <div
                  onClick={() => setSelectedProject(proj)}
                  className="group apple-card-dark overflow-hidden flex flex-col justify-between hover:border-[#2997ff]/40 transition-all duration-300 cursor-pointer h-full bg-[#0d0e12]"
                >
                  {/* Image Canvas with specular rim */}
                  <div className="relative aspect-16/10 bg-[#14161d] overflow-hidden border-b border-white/8">
                    <img
                      src={`/assets/portfolio/thumbnails/${proj.thumbnail}`}
                      alt={proj.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient shade overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Tag badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full apple-glass-dark text-[11px] font-medium text-white border border-white/15">
                        {hasApp ? (
                          <>
                            <Smartphone className="w-3 h-3 text-[#2997ff]" />
                            <span>Mobile / SaaS</span>
                          </>
                        ) : (
                          <>
                            <Globe className="w-3 h-3 text-[#2997ff]" />
                            <span>{proj.category || "Web Platform"}</span>
                          </>
                        )}
                      </span>
                    </div>

                    {/* Hover Arrow Disc */}
                    <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 tracking-tight group-hover:text-[#2997ff] transition-colors">
                        {proj.name}
                      </h3>
                      <p className="text-xs text-[#86868b] leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    <div className="border-t border-white/8 pt-4 mt-5 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-white/40 uppercase">
                        Case Study
                      </span>
                      <span className="text-xs font-semibold text-[#2997ff] flex items-center gap-1">
                        <span>View Project</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardTilt3D>
            );
          })}
        </div>
      </div>

      {/* Case Study High-Res Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl apple-glass-dark bg-[#0c0d12]/95 rounded-[32px] border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto p-6 sm:p-10">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2997ff]/15 text-[#2997ff] border border-[#2997ff]/30">
                  {selectedProject.category || "Case Study"}
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight mt-2">
                  {selectedProject.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {/* High-Resolution Project Showcase Image */}
            <div className="rounded-[20px] overflow-hidden border border-white/10 bg-[#161820] mb-8">
              <img
                src={
                  selectedProject.fullImage
                    ? `/assets/portfolio/${selectedProject.fullImage}`
                    : `/assets/portfolio/thumbnails/${selectedProject.thumbnail}`
                }
                alt={selectedProject.name}
                className="w-full h-auto max-h-[500px] object-cover object-top"
              />
            </div>

            {/* Live Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-[#86868b]">
                <Layers className="w-4 h-4 text-[#2997ff]" />
                <span>Production Architecture & Design by Incinc Media</span>
              </div>

              <div className="flex items-center gap-3">
                {selectedProject.url.web && (
                  <a
                    href={selectedProject.url.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-md transition-all"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {selectedProject.url.apk && (
                  <a
                    href={selectedProject.url.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold apple-glass-dark border border-white/15 text-white hover:bg-white/10 transition-all"
                  >
                    <span>Android APK</span>
                    <Smartphone className="w-3.5 h-3.5 text-[#10b981]" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioShowcase;
