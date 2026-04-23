import type { CaseStudy, Service, Brand } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "dockers",
    partner: "DOCKERS",
    platform: "SHOPIFY",
    index: "(a.)",
    services: ["Integration", "Marketing", "SEO", "CRO", "MOR"]
  },
  {
    id: "champion",
    partner: "CHAMPION",
    platform: "SHOPIFY PLUS",
    index: "(b.)",
    services: ["UX/UI", "Dev", "Integration", "SEO", "Marketing"]
  },
  {
    id: "benetton",
    partner: "BENETTON",
    platform: "SHOPIFY PLUS",
    index: "(c.)",
    services: ["UX/UI", "Dev", "Integration", "SEO"]
  },
  {
    id: "sotf",
    partner: "SOTF",
    platform: "CUSTOM",
    index: "(d.)",
    services: ["UX/UI", "Brand Direction"]
  },
  {
    id: "masons",
    partner: "MASON'S",
    platform: "SHOPIFY PLUS",
    index: "(e.)",
    services: ["UX/UI", "Dev", "Integration", "SEO"]
  },
  {
    id: "roberto-collina",
    partner: "ROBERTO COLLINA",
    platform: "SHOPIFY PLUS",
    index: "(f.)",
    services: ["UX/UI", "Dev B2C", "Marketing", "Integration", "SEO"]
  },
  {
    id: "pollini",
    partner: "POLLINI",
    platform: "LARAVEL",
    index: "(g.)",
    services: ["UX/UI", "Dev", "Integration", "SEO", "Marketing"]
  },
  {
    id: "engine",
    partner: "ENGINE",
    platform: "SHOPIFY HEADLESS",
    index: "(h.)",
    services: ["Dev", "Marketing", "Integration"]
  },
  {
    id: "rombo-group",
    partner: "ROMBO GROUP",
    platform: "SHOPIFY",
    index: "(i.)",
    services: ["UX/UI", "Dev (B2C/B2B)", "Marketing", "Integration", "SEO"]
  },
  {
    id: "pier",
    partner: "PIER",
    platform: "SHOPIFY",
    index: "(j.)",
    services: ["UX/UI", "Dev", "Integration", "Marketing", "SEO"]
  },
  {
    id: "aura",
    partner: "AURA",
    platform: "SHOPIFY APP",
    index: "(m.)",
    services: ["UX/UI", "Brand Direction", "App Development"]
  },
  {
    id: "kunzi",
    partner: "KUNZI",
    platform: "SHOPIFY PLUS",
    index: "(n.)",
    services: ["UX/UI", "Dev (B2C/B2B)", "Integration", "Marketing", "SEO"]
  },
  {
    id: "8pm",
    partner: "8PM",
    platform: "SHOPIFY PLUS",
    index: "(o.)",
    services: ["UX/UI", "Dev", "Marketing", "Integration", "SEO"]
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
