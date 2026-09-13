export interface Service {
  id: string;
  title: string;
  description: string;
  category: "development" | "creative" | "marketing";
}

export const services: Service[] = [
  {
    id: "app-dev",
    title: "Application Development",
    description: "Custom mobile and web apps for e-commerce, logistics, attendance, and utilities.",
    category: "development",
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "Bespoke enterprise tools — ERP, CRM, LMS, billing software, clinic and gym management.",
    category: "development",
  },
  {
    id: "branding",
    title: "Company Branding & Strategy",
    description: "Corporate identity, naming, positioning guidelines, and authentic brand narratives.",
    category: "creative",
  },
  {
    id: "graphic-design",
    title: "Graphic Designing",
    description: "High-impact marketing collateral, social visuals, brochures, and investor pitch decks.",
    category: "creative",
  },
  {
    id: "video",
    title: "Video Editing & Production",
    description: "Cinematic editing, motion graphics, corporate reels, YouTube shorts, and podcast production.",
    category: "creative",
  },
  {
    id: "photoshoot",
    title: "Ad Shoots & Photoshoots",
    description: "Studio and on-location product launches, e-commerce listings, and lifestyle marketing.",
    category: "creative",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Strategy",
    description: "Full-funnel performance marketing, PPC, Google Ads, Meta Ads, and ROI optimization.",
    category: "marketing",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    description: "Technical audits, keyword dominance, on-page optimization, and high-authority link acquisition.",
    category: "marketing",
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    description: "Complete account management, creative content scheduling, and daily audience engagement.",
    category: "marketing",
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    description: "Targeted creator matchmaking, contract negotiations, and campaign ROI tracking.",
    category: "marketing",
  },
  {
    id: "talent",
    title: "Talent Management",
    description: "Long-term ambassador representation, commercial alignment, and career scaling.",
    category: "marketing",
  },
];

export const serviceCategories = [
  { id: "development", label: "Development" },
  { id: "creative", label: "Creative" },
  { id: "marketing", label: "Marketing" },
] as const;
