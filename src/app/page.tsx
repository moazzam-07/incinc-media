import * as React from "react";
import { HeroCorridor } from "@/components/shared/hero-corridor";
import { ClientMarquee } from "@/components/shared/client-marquee";
import { ImpactMetrics } from "@/components/shared/impact-metrics";
import { OperationalPillars } from "@/components/shared/operational-pillars";
import { ServicesGrid } from "@/components/shared/services-grid";
import { FebbleSpotlight } from "@/components/shared/febble-spotlight";
import { ProcessTimeline } from "@/components/shared/process-timeline";
import { PortfolioShowcase } from "@/components/shared/portfolio-showcase";
import { AboutSection } from "@/components/shared/about-section";
import { VideoCallout } from "@/components/shared/video-callout";
import { ContactSection } from "@/components/shared/contact-section";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. 3D Perspective Image Stream Corridor Hero */}
      <HeroCorridor />

      {/* 2. Global Client Brand Marquee (89 Clients Dual Rails) */}
      <ClientMarquee />

      {/* 3. Verified Impact Metrics & Counters */}
      <ImpactMetrics />

      {/* 4. Four Operational Pillars */}
      <OperationalPillars />

      {/* 5. Core Services Bento Grid (11 Services) */}
      <ServicesGrid />

      {/* 6. Febble Spot Hardware / NFC Product Showcase */}
      <FebbleSpotlight />

      {/* 7. The 6D Methodology Interactive Engine */}
      <ProcessTimeline />

      {/* 8. Selected Works & Case Studies (16 Builds) */}
      <PortfolioShowcase />

      {/* 9. About Story & Core Leadership Team */}
      <AboutSection />

      {/* 10. Cinematic Showreel & Ambient Callout */}
      <VideoCallout />

      {/* 11. Contact & Lead Ingestion */}
      <ContactSection />
    </div>
  );
}
