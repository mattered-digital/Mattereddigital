import type { CaseStudy, Project, Service, Brand } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "dockers",
    partner: "DOCKERS",
    platform: "SHOPIFY",
    index: "(a.)",
    services: ["Integration", "Marketing", "SEO", "CRO", "MOR"],
    image: "/editorial-fashion.png"
  },
  {
    id: "champion",
    partner: "CHAMPION",
    platform: "SHOPIFY PLUS",
    index: "(b.)",
    services: ["UX/UI", "Dev", "Integration", "SEO", "Marketing"],
    image: "/editorial-tshirt.png"
  },
  {
    id: "benetton",
    partner: "BENETTON",
    platform: "SHOPIFY PLUS",
    index: "(c.)",
    services: ["UX/UI", "Dev", "Integration", "SEO"],
    image: "/editorial-redbook.png"
  },
  {
    id: "sotf",
    partner: "SOTF",
    platform: "CUSTOM",
    index: "(d.)",
    services: ["UX/UI", "Brand Direction"],
    image: "/editorial-glass.png"
  },
  {
    id: "masons",
    partner: "MASON'S",
    platform: "SHOPIFY PLUS",
    index: "(e.)",
    services: ["UX/UI", "Dev", "Integration", "SEO"],
    image: "/editorial-redbook.png"
  },
  {
    id: "roberto-collina",
    partner: "ROBERTO COLLINA",
    platform: "SHOPIFY PLUS",
    index: "(f.)",
    services: ["UX/UI", "Dev B2C", "Marketing", "Integration", "SEO"],
    image: "/editorial-glass.png"
  },
  {
    id: "pollini",
    partner: "POLLINI",
    platform: "LARAVEL",
    index: "(g.)",
    services: ["UX/UI", "Dev", "Integration", "SEO", "Marketing"],
    image: "/editorial-fashion.png"
  },
  {
    id: "engine",
    partner: "ENGINE",
    platform: "SHOPIFY HEADLESS",
    index: "(h.)",
    services: ["Dev", "Marketing", "Integration"],
    image: "/editorial-tshirt.png"
  },
  {
    id: "rombo-group",
    partner: "ROMBO GROUP",
    platform: "SHOPIFY",
    index: "(i.)",
    services: ["UX/UI", "Dev (B2C/B2B)", "Marketing", "Integration", "SEO"],
    image: "/editorial-glass.png"
  },
  {
    id: "pier",
    partner: "PIER",
    platform: "SHOPIFY",
    index: "(j.)",
    services: ["UX/UI", "Dev", "Integration", "Marketing", "SEO"],
    image: "/editorial-tshirt.png"
  },
  {
    id: "aura",
    partner: "AURA",
    platform: "SHOPIFY APP",
    index: "(m.)",
    services: ["UX/UI", "Brand Direction", "App Development"],
    image: "/editorial-fashion.png"
  },
  {
    id: "kunzi",
    partner: "KUNZI",
    platform: "SHOPIFY PLUS",
    index: "(n.)",
    services: ["UX/UI", "Dev (B2C/B2B)", "Integration", "Marketing", "SEO"],
    image: "/editorial-redbook.png"
  },
  {
    id: "8pm",
    partner: "8PM",
    platform: "SHOPIFY PLUS",
    index: "(o.)",
    services: ["UX/UI", "Dev", "Marketing", "Integration", "SEO"],
    image: "/editorial-glass.png"
  }
];

export const latestProjects: Project[] = [
  {
    id: "atelier-rift",
    title: "Atelier Rift",
    category: "Identity / Ecommerce",
    year: "2026",
    summary:
      "A measured digital flagship for an independent fashion label moving from capsule drops to always-on commerce.",
    location: "Milan",
    primaryMetric: "+42% conversion lift",
    metrics: ["Launch system", "Editorial PDP", "Retention flows"],
    gradient: "from-zinc-200 via-stone-500 to-black"
  },
  {
    id: "northline",
    title: "Northline Goods",
    category: "Shopify Plus",
    year: "2025",
    summary:
      "A cleaner catalog architecture and campaign system for a lifestyle brand with seasonal product depth.",
    location: "Copenhagen",
    primaryMetric: "-31% path friction",
    metrics: ["UX audit", "Theme build", "Performance"],
    gradient: "from-slate-100 via-emerald-500 to-neutral-950"
  },
  {
    id: "mono-lab",
    title: "Mono Lab",
    category: "Brand Direction",
    year: "2025",
    summary:
      "A modular identity and acquisition surface for a design-led technology studio entering new markets.",
    location: "Berlin",
    primaryMetric: "3 market rollout",
    metrics: ["Messaging", "Web system", "Content design"],
    gradient: "from-white via-red-500 to-zinc-950"
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
    items: [
      "Creative development",
      "Motion choreography",
      "Performance optimization"
    ]
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
