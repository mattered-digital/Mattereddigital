import type { CaseStudy, Project, Service, Brand } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "northline",
    partner: "NORTHLINE",
    platform: "DTC RETAIL",
    index: "(a.)",
    services: ["Brand Strategy", "Paid Social", "Email", "CRO"],
    image: "/editorial-fashion.jpg"
  },
  {
    id: "helio",
    partner: "HELIO",
    platform: "B2B SAAS",
    index: "(b.)",
    services: ["Messaging", "Launch Campaign", "Paid Search", "CRM"],
    image: "/editorial-tshirt.jpg"
  },
  {
    id: "cinder",
    partner: "CINDER",
    platform: "HOSPITALITY",
    index: "(c.)",
    services: ["Rebrand Rollout", "Content Production", "Local Ads"],
    image: "/editorial-redbook.jpg"
  },
  {
    id: "monograph",
    partner: "MONOGRAPH",
    platform: "MEDIA",
    index: "(d.)",
    services: ["Growth Strategy", "Subscription Funnel", "Paid Social"],
    image: "/editorial-glass.jpg"
  },
  {
    id: "astral",
    partner: "ASTRAL",
    platform: "BEAUTY",
    index: "(e.)",
    services: ["Creative Testing", "UGC Direction", "Retention"],
    image: "/editorial-redbook.jpg"
  },
  {
    id: "forge",
    partner: "FORGE",
    platform: "B2B SERVICES",
    index: "(f.)",
    services: ["Positioning", "Web Copy", "Demand Gen"],
    image: "/editorial-glass.jpg"
  },
  {
    id: "atlas",
    partner: "ATLAS",
    platform: "TRAVEL",
    index: "(g.)",
    services: ["Campaign Strategy", "Video Ads", "Landing Pages"],
    image: "/editorial-fashion.jpg"
  },
  {
    id: "noir",
    partner: "NOIR",
    platform: "LUXURY GOODS",
    index: "(h.)",
    services: ["Brand Platform", "Influencer Seeding", "CRM"],
    image: "/editorial-tshirt.jpg"
  },
  {
    id: "kite",
    partner: "KITE",
    platform: "FINTECH",
    index: "(i.)",
    services: ["Product Marketing", "Paid Media", "Lifecycle"],
    image: "/editorial-glass.jpg"
  },
  {
    id: "vale",
    partner: "VALE",
    platform: "WELLNESS",
    index: "(j.)",
    services: ["Go-to-Market", "Content System", "SEO"],
    image: "/editorial-tshirt.jpg"
  },
  {
    id: "drift",
    partner: "DRIFT",
    platform: "CONSUMER APP",
    index: "(m.)",
    services: ["Launch Strategy", "Paid Social", "App Store Creative"],
    image: "/editorial-fashion.jpg"
  },
  {
    id: "signal",
    partner: "SIGNAL",
    platform: "SAAS",
    index: "(n.)",
    services: ["ABM Campaigns", "Landing Pages", "Sales Enablement"],
    image: "/editorial-redbook.jpg"
  },
  {
    id: "luma",
    partner: "LUMA",
    platform: "WELLNESS",
    index: "(o.)",
    services: ["Creator Partnerships", "Retention", "Paid Search"],
    image: "/editorial-glass.jpg"
  }
];

export const latestProjects: Project[] = [
  {
    id: "northline-launch",
    title: "Northline Spring Launch",
    category: "Paid Social / Landing Pages",
    year: "2026",
    summary:
      "A seasonal demand push that paired sharper offer framing with a faster landing-page system for a retail brand scaling acquisition.",
    location: "London",
    primaryMetric: "+42% qualified revenue",
    metrics: ["Offer strategy", "Creative refresh", "Email follow-up"],
    gradient: "from-zinc-200 via-stone-500 to-black"
  },
  {
    id: "helio-demand-gen",
    title: "Helio Demand Gen",
    category: "B2B SaaS / Growth Marketing",
    year: "2025",
    summary:
      "A cleaner narrative, media mix, and nurture sequence for a SaaS team moving from founder-led sales into a repeatable pipeline.",
    location: "New York",
    primaryMetric: "2.3x pipeline lift",
    metrics: ["Messaging", "Paid search", "Lifecycle automation"],
    gradient: "from-slate-100 via-emerald-500 to-neutral-950"
  },
  {
    id: "vale-retention",
    title: "Vale Retention System",
    category: "CRM / Content Strategy",
    year: "2025",
    summary:
      "A content and retention framework that gave a wellness brand more reasons to show up consistently across email, product pages, and paid remarketing.",
    location: "Los Angeles",
    primaryMetric: "+28% repeat purchase",
    metrics: ["CRM strategy", "Content calendar", "Retention design"],
    gradient: "from-white via-red-500 to-zinc-950"
  }
];

export const services: Service[] = [
  {
    title: "Brand strategy",
    intro:
      "Positioning, category insight, and message architecture that give every campaign a clear point of view.",
    items: ["Audience research", "Positioning sprints", "Message architecture"]
  },
  {
    title: "Creative campaigns",
    intro:
      "Concepts, visual direction, and campaign assets designed to be remembered and built to travel across channels.",
    items: ["Campaign concepts", "Art direction", "Paid creative production"]
  },
  {
    title: "Performance marketing",
    intro:
      "Paid media and testing systems that connect creative intent with pipeline, revenue, and repeatable learning.",
    items: [
      "Paid social and search",
      "Funnel optimization",
      "Reporting and experimentation"
    ]
  },
  {
    title: "Content systems",
    intro:
      "Editorial planning, lifecycle flows, and landing-page content that keep brands consistent while they scale.",
    items: ["Content calendars", "CRM and retention", "Landing-page copy"]
  }
];

export const brands: Brand[] = [
  { name: "Northline", sector: "Retail" },
  { name: "Helio", sector: "SaaS" },
  { name: "Cinder", sector: "Hospitality" },
  { name: "Vale", sector: "Wellness" },
  { name: "Forge", sector: "B2B Services" },
  { name: "Noir", sector: "Luxury" },
  { name: "Kite", sector: "Fintech" },
  { name: "Atlas", sector: "Travel" }
];
