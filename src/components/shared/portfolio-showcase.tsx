"use client";

import * as React from "react";
import portfolioData from "@/data/portfolio.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Smartphone } from "lucide-react";

export function PortfolioShowcase() {
  const [selectedProject, setSelectedProject] = React.useState<any | null>(null);
  const [filter, setFilter] = React.useState<"all" | "apps" | "web">("all");

  const filteredProjects = portfolioData.filter((p) => {
    if (filter === "apps") {
      return Boolean(p.url.apk || p.url.ios);
    }
    if (filter === "web") {
      return Boolean(p.url.web && !p.url.apk && !p.url.ios);
    }
    return true;
  });

  return (
    <section id="works" className="py-24 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-2">
              Selected Works
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141414] leading-tight">
              Featured Case Studies & Builds.
            </h2>
          </div>

          {/* Filter Segmented Control (Mobbin Style) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#f3f3f3] rounded-full border border-[#e0e0e0]/70 w-fit">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "all" ? "bg-white text-[#141414] shadow-sm" : "text-[#707070]"
              }`}
            >
              All Projects ({portfolioData.length})
            </button>
            <button
              onClick={() => setFilter("apps")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "apps" ? "bg-white text-[#141414] shadow-sm" : "text-[#707070]"
              }`}
            >
              Mobile Apps & SaaS
            </button>
            <button
              onClick={() => setFilter("web")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === "web" ? "bg-white text-[#141414] shadow-sm" : "text-[#707070]"
              }`}
            >
              Web Platforms
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => {
            const hasApp = Boolean(proj.url.apk || proj.url.ios);
            return (
              <div
                key={idx}
                onClick={() => setSelectedProject(proj)}
                className="group card-mobbin overflow-hidden flex flex-col justify-between hover:border-[#141414]/40 transition-all cursor-pointer bg-white"
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-16/10 bg-[#f3f3f3] overflow-hidden border-b border-[#f0f0f0]">
                  <img
                    src={`/assets/portfolio/thumbnails/${proj.thumbnail}`}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {hasApp && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="overlay" className="text-[10px] gap-1 px-2.5 py-0.5">
                        <Smartphone className="w-3 h-3" />
                        <span>App & SaaS</span>
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-white/90 text-[#141414] backdrop-blur-md shadow-sm inline-block">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#141414] group-hover:text-[#0066ff] transition-colors mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-[#707070] line-clamp-3 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#707070]">
                    <span className="font-semibold text-[#141414]">View Case Study</span>
                    <span className="text-[#adadad]">Click to expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-white rounded-[24px] border border-[#e0e0e0] shadow-2xl max-h-[90vh] overflow-y-auto flex flex-col">
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-[#f0f0f0] flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#707070] mb-1">
                  Case Study
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141414]">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-[#707070] hover:text-[#141414] hover:bg-[#f3f3f3] rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Full Image Preview */}
              <div className="rounded-[16px] overflow-hidden border border-[#e0e0e0] bg-[#f3f3f3] max-h-[420px]">
                <img
                  src={`/assets/portfolio/${selectedProject.image || selectedProject.thumbnail}`}
                  alt={selectedProject.name}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#141414] uppercase tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-sm sm:text-base text-[#707070] leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#f0f0f0]">
                {selectedProject.url?.web && (
                  <a
                    href={selectedProject.url.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="sm" className="gap-2">
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                )}
                {selectedProject.url?.apk && (
                  <a
                    href={selectedProject.url.apk}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Google Play App</span>
                    </Button>
                  </a>
                )}
                {selectedProject.url?.ios && (
                  <a
                    href={selectedProject.url.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2">
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Apple App Store</span>
                    </Button>
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
