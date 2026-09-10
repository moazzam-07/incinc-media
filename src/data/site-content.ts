export interface PortfolioItem {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  image?: string;
  category: string;
  url: {
    web?: string;
    apk?: string;
    ios?: string;
  };
}

export interface ClientItem {
  name: string;
  logo: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  photo: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export const SITE_METRICS = {
  projectsDone: 150,
  ongoingProjects: 27,
  satisfiedCustomers: 135,
  globalClients: 300,
  foundedYear: 2020,
  location: "Mumbai, India",
};

export const CONTACT_INFO = {
  address: "E-211, Kailas Industrial Complex, Veer Savarkar Marg, Park Site, Link Rd, Hiranandani Gardens, Vikhroli West, Mumbai, Maharashtra 400079",
  phones: ["+91 74988 47799", "+91 81081 14819"],
  emails: ["mail@incincmedia.com", "rustabh@incincmedia.com"],
  socials: {
    instagram: "https://www.instagram.com/incincmedia",
    linkedin: "https://www.linkedin.com/company/68856605/",
    facebook: "https://www.facebook.com/incincmediaa",
    twitter: "https://twitter.com/incincmedia",
    youtube: "https://www.youtube.com/watch?v=zAs18hlGOz4",
    blog: "https://blog.incincmedia.com",
    brochure: "/assets/documents/Incinc Media.pdf",
  },
};

export const OPERATIONAL_PILLARS = [
  {
    title: "Planning",
    quote: "An Hour of planning can save you hours of doing.",
    description: "Before we actually start the trip, we carefully analyze all variables. Whether it's crafting a flagship website, launching a mobile app, or initiating a digital transformation strategy, meticulous architectural scoping guarantees a smooth journey to commercial success.",
  },
  {
    title: "Design",
    quote: "Good design is Good Business.",
    description: "Design ensures functionality, attention, elegance, and ethical application. We aim for functional beauty that maximizes user clarity, elevates conversion rates, and builds enduring brand affinity.",
  },
  {
    title: "Develop",
    quote: "It's only when we develop others that we permanently succeed.",
    description: "Our highly disciplined engineering teams architect scalable, high-throughput software ecosystems (web, mobile, cloud) built to deliver uninterrupted performance for years to come.",
  },
  {
    title: "Deploy",
    quote: "You don't deploy without continuous real-time telemetry.",
    description: "We continuously monitor, stress-test, and optimize the applications and cloud services we build, ensuring seamless scalability and flawless operational availability 24/7.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Discover",
    tagline: "Strategic Alignment",
    description: "We deeply immerse ourselves in your business goals, target user personas, competitive landscape, and commercial vision to lay a rock-solid foundation.",
    image: "/assets/images/discover.jpg",
  },
  {
    step: 2,
    title: "Define",
    tagline: "Scope & Architecture",
    description: "Translating insights into clear product requirements, technical roadmaps, information architectures, and measurable success milestones.",
    image: "/assets/images/define.jpg",
  },
  {
    step: 3,
    title: "Design",
    tagline: "High-Fidelity Prototyping",
    description: "Crafting modern, intuitive, conversion-engineered design systems and micro-interactions that captivate users and tell your brand story.",
    image: "/assets/images/design.jpg",
  },
  {
    step: 4,
    title: "Develop",
    tagline: "Precision Engineering",
    description: "Writing clean, modular, production-grade code with modern tech stacks, automated testing suites, and blazing performance benchmarks.",
    image: "/assets/images/develop.jpeg",
  },
  {
    step: 5,
    title: "Deploy",
    tagline: "Seamless Launch",
    description: "Flawless staging, security hardening, cloud configuration, and zero-downtime production rollouts with continuous uptime monitoring.",
    image: "/assets/images/deploy.jpeg",
  },
  {
    step: 6,
    title: "Deliver",
    tagline: "Long-Term Growth",
    description: "Post-launch analytics, performance telemetry, continuous iteration, and ongoing partnership that scales your digital footprint.",
    image: "/assets/images/deliver.jpeg",
  },
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "app-dev",
    name: "Application Development",
    tag: "Mobile & Web",
    shortDesc: "Custom iOS, Android, and web applications built for high performance and effortless scale.",
    fullDesc: "Transform your operations and customer interactions with custom mobile and web applications. We design, develop, and deploy intuitive, scalable apps tailored to your industry—whether it's e-commerce, logistics, enterprise automation, or consumer platforms.",
    deliverables: ["Cross-Platform iOS & Android", "Progressive Web Apps (PWA)", "API Architecture & Microservices", "Real-Time Cloud Backends"],
  },
  {
    id: "software-solutions",
    name: "Custom Software Solutions",
    tag: "Enterprise",
    shortDesc: "Bespoke internal tools, CRM, ERP, and operations automation platforms.",
    fullDesc: "Need a specialized tool? We develop bespoke software systems that solve unique organizational bottlenecks. From custom CRM and LMS platforms to clinic management and billing systems, we automate complex workflows and boost operational efficiency.",
    deliverables: ["Custom CRM & ERP", "Learning Management Systems (LMS)", "Billing & Invoicing Suites", "Custom Workflow Automation"],
  },
  {
    id: "branding-strategy",
    name: "Branding & Market Strategy",
    tag: "Identity",
    shortDesc: "End-to-end brand positioning, identity guidelines, and authentic corporate narratives.",
    fullDesc: "Define your market identity and stand out in crowded industries. We craft comprehensive brand strategies going far beyond logos to establish your true voice—including naming, messaging frameworks, visual guidelines, and brand stories that drive customer loyalty.",
    deliverables: ["Brand Identity & Guidelines", "Naming & Verbal Identity", "Corporate Positioning", "Design Systems"],
  },
  {
    id: "graphic-design",
    name: "Graphic Design & Collateral",
    tag: "Visual Design",
    shortDesc: "Premium marketing collateral, social assets, pitch decks, and brand merchandise.",
    fullDesc: "Bring your brand to life with professional visual assets that captivate. We create high-impact graphics across all mediums—from digital campaign assets and investor pitch decks to brochures, packaging, and corporate print collateral.",
    deliverables: ["Marketing & Advertising Creatives", "Investor Pitch Decks", "Brochures & Print Collateral", "Digital & Social Assets"],
  },
  {
    id: "video-production",
    name: "Video Editing & Production",
    tag: "Media",
    shortDesc: "Cinematic corporate reels, product launches, viral short-form, and podcast video.",
    fullDesc: "Capture and engage your audience with cinematic versatility. We provide end-to-end video editing and production services for every medium—from corporate brand documentaries and launch campaigns to engaging social media Reels, Shorts, and podcasts.",
    deliverables: ["Cinematic Brand Films", "Social Reels & Shorts", "Product Walkthroughs", "Podcast Video Production"],
  },
  {
    id: "shoots-production",
    name: "Ad Shoots & Photoshoots",
    tag: "Studio",
    shortDesc: "Full-service commercial photography and video shoots for products, lifestyle, and brands.",
    fullDesc: "Elevate your visual standards with commercial-grade studio and on-location shoots. We manage full production logistics, casting, art direction, and lighting for e-commerce, lifestyle campaigns, and high-fashion product showcases.",
    deliverables: ["Product & E-Commerce Shoots", "Corporate Profiles & Leadership", "Lifestyle & Campaign Photography", "Studio & On-Location Filming"],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Strategy",
    tag: "Performance",
    shortDesc: "High-ROI performance marketing across Google Ads, Meta, and conversion funnels.",
    fullDesc: "Achieve measurable customer acquisition with data-driven paid advertising. We design, optimize, and scale campaigns across Google Ads, Meta (Instagram/Facebook), and programmatic networks to maximize return on ad spend (ROAS).",
    deliverables: ["PPC & Google Ads Management", "Meta Ads (IG/FB) Scaling", "Conversion Rate Optimization (CRO)", "Multi-Touch Attribution Tracking"],
  },
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    tag: "Organic Growth",
    shortDesc: "Dominating high-intent search rankings through technical audits and authoritative content.",
    fullDesc: "Move to the top of Google and generate compounding organic revenue. We implement exhaustive technical SEO audits, high-intent semantic content optimization, and authoritative backlink strategies that secure long-term rankings.",
    deliverables: ["Technical SEO & Core Web Vitals", "Semantic Content Strategy", "High-Authority Link Building", "Local & Global Search Optimization"],
  },
  {
    id: "smm",
    name: "Social Media Marketing (SMM)",
    tag: "Social",
    shortDesc: "Full-service social media management, community nurturing, and brand virality.",
    fullDesc: "Build a loyal community and turn followers into advocates. Our full-service management covers calendar planning, high-velocity content production, interactive daily engagement, and strategic community building across all platforms.",
    deliverables: ["End-to-End Account Handling", "Content Production & Scheduling", "Active Community Engagement", "Analytics & Growth Telemetry"],
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing",
    tag: "Creators",
    shortDesc: "High-impact creator campaigns connecting brands with verified engaged audiences.",
    fullDesc: "Reach your ideal customers through authentic creator partnerships. We manage creator matchmaking, outreach, contracts, creative briefs, and campaign analytics to ensure maximum authentic resonance and tangible ROI.",
    deliverables: ["Creator Matchmaking & Vetting", "Campaign Briefing & Logistics", "Contract & Usage Rights Management", "Performance & Reach Auditing"],
  },
  {
    id: "talent-partnerships",
    name: "Talent Management",
    tag: "Representation",
    shortDesc: "Strategic talent representation and long-term brand ambassador partnerships.",
    fullDesc: "We facilitate exclusive brand ambassador representation and strategic creator partnerships, aligning prominent digital voices with forward-thinking enterprises for multi-year brand equity.",
    deliverables: ["Exclusive Talent Representation", "Long-Term Brand Ambassadorships", "Sponsorship Negotiation", "Creator Commercial Strategy"],
  },
];

export const FEBBLE_SPOT_PRODUCT = {
  name: "Febble Spot",
  tagline: "Connect faster. Impress smarter.",
  description: "The next-generation smart NFC-enabled digital business card engineered by Incinc Media. Share your professional portfolio, contact card, social channels, and payment links with a single tap on any modern smartphone.",
  url: "https://febblespot.com",
  badge: "Hardware Innovation",
  logo: "/assets/images/febble-logo.webp",
  banner: "/assets/images/partnership-handshake.jpg",
  features: [
    "Instant 1-Tap NFC Contact Exchange",
    "Dynamic Cloud Profile with Real-Time Updates",
    "Custom Metallic, Matte & Bamboo Finishes",
    "Integrated Analytics on Card Taps & Leads",
  ],
};
