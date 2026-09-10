import * as React from "react";
import { HeroCorridor } from "@/components/shared/hero-corridor";
import { CinemaDisplay } from "@/components/shared/cinema-display";
import { ImpactMetrics } from "@/components/shared/impact-metrics";
import { ClientMarquee } from "@/components/shared/client-marquee";
import { ServicesGrid } from "@/components/shared/services-grid";
import { FebbleSpotlight } from "@/components/shared/febble-spotlight";
import { PortfolioShowcase } from "@/components/shared/portfolio-showcase";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { OperationalPillars } from "@/components/shared/operational-pillars";
import { AboutSection } from "@/components/shared/about-section";
import { ContactSection } from "@/components/shared/contact-section";

export default function HomePage() {
  return (
    <div className="w-full bg-[#000000] text-[#f5f5f7]">
      {/* 1. 3D Perspective Image Stream Corridor Hero */}
      <HeroCorridor />

      {/* 2. Apple 3D Cinema Display & Multi-Channel Keynote Video Theater */}
      <CinemaDisplay />

      {/* 3. Verified Impact Metrics (Apple Light Stage #f5f5f7) */}
      <ImpactMetrics />

      {/* 4. Global Client Brand Marquee (89 Clients Dual Rails) */}
      <ClientMarquee />

      {/* 5. Core Services Bento Grid with 3D Tactile Icons (11 Services) */}
      <ServicesGrid />

      {/* 6. Febble Spot Apple Hardware Stage (Interactive 3D Titanium Card) */}
      <FebbleSpotlight />

      {/* 7. Selected Works & Case Studies with 3D Tilt (16 Builds) */}
      <PortfolioShowcase />

      {/* 8. Proprietary 6D Delivery Engine with 3D Phase Badges */}
      <ProcessTimeline />

      {/* 9. Four Operational Pillars */}
      <OperationalPillars />

      {/* 10. Studio Story & Core Leadership Team */}
      <AboutSection />

      {/* 11. Contact & Lead Brief Intake */}
      <ContactSection />
    </div>
  );
}
