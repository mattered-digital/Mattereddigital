import type { Brand, Project, Service } from "@/types";

export const latestProjects: Project[] = [
  {
    id: "aurora-atelier",
    title: "Aurora Atelier",
    category: "Luxury Retail",
    year: "2026",
    summary:
      "Positioned a heritage jewelry relaunch around intimacy, scarcity, and tactile digital storytelling.",
    location: "London",
    primaryMetric: "+41% launch revenue",
    metrics: ["Launch systems", "Editorial motion"],
    gradient: "from-[#ead8c2] via-[#9c7b57] to-[#241a14]"
  },
  {
    id: "northcoast",
    title: "North Coast Living",
    category: "Hospitality",
    year: "2026",
    summary:
      "Merged booking conversion strategy with a slower, more atmospheric brand language across the funnel.",
    location: "Barcelona",
    primaryMetric: "+29% direct bookings",
    metrics: ["Retention flows", "Site direction"],
    gradient: "from-[#d4ebe5] via-[#4f8d85] to-[#182826]"
  },
  {
    id: "solace",
    title: "Solace Skincare",
    category: "Beauty",
    year: "2025",
    summary:
      "Built a launch identity system that balanced science-led confidence with a softer editorial rhythm.",
    location: "Seoul",
    primaryMetric: "3.1x waitlist growth",
    metrics: ["Brand reset", "Conversion design"],
    gradient: "from-[#f7e7ef] via-[#bc738d] to-[#2b1620]"
  }
];

export const projectTable: Project[] = [
  ...latestProjects,
  {
    id: "parallel-fund",
    title: "Parallel Fund",
    category: "Finance",
    year: "2025",
    summary:
      "A stripped-back investor narrative built around confidence, pace, and precision.",
    location: "New York",
    primaryMetric: "2.4x more qualified leads",
    metrics: ["Messaging", "Investor site"],
    gradient: "from-[#cfcfd5] via-[#77798a] to-[#16171d]"
  },
  {
    id: "terra-house",
    title: "Terra House",
    category: "Lifestyle",
    year: "2025",
    summary:
      "Turned a broad lifestyle concept into a distinctive membership ecosystem.",
    location: "Lisbon",
    primaryMetric: "+38% member applications",
    metrics: ["Positioning", "Lifecycle creative"],
    gradient: "from-[#efe4d4] via-[#a07d55] to-[#2f2419]"
  },
  {
    id: "field-note",
    title: "Field Note Labs",
    category: "Technology",
    year: "2025",
    summary:
      "Reframed product complexity into an elegant, founder-led narrative arc.",
    location: "Berlin",
    primaryMetric: "+52% demo conversion",
    metrics: ["Product marketing", "Motion system"],
    gradient: "from-[#d6e6ff] via-[#5a7bb6] to-[#141e31]"
  }
];

export const services: Service[] = [
  {
    title: "Brand strategy",
    intro:
      "Narrative platforms, positioning moves, and sharper decision-making before visual work begins.",
    items: ["Founder interviews", "Audience reframing", "Message architecture"]
  },
  {
    title: "Identity systems",
    intro:
      "Flexible design directions for teams that need coherence across launch, growth, and campaigns.",
    items: ["Art direction", "Type and color systems", "Guidelines and rollout"]
  },
  {
    title: "Digital experiences",
    intro:
      "Sites and launch surfaces that feel editorial, perform cleanly, and support real conversion goals.",
    items: ["Creative development", "Motion choreography", "Performance optimization"]
  }
];

export const brands: Brand[] = [
  { name: "Aster", sector: "Fashion" },
  { name: "Monograph", sector: "Publishing" },
  { name: "Cinder", sector: "Hospitality" },
  { name: "Vale", sector: "Wellness" },
  { name: "Helio", sector: "Technology" },
  { name: "Noir", sector: "Beauty" },
  { name: "Kite", sector: "Finance" },
  { name: "Atlas", sector: "Travel" }
];
