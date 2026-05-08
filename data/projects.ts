import type { CaseStudy, Project, Service, Brand } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "archtierela",
    partner: "ARCHTIERELA",
    platform: "CUSTOM E-COMMERCE SITE",
    index: "(a.)",
    services: ["SEO", "Email Marketing", "CRO"],
    image: "/projects/ecommerce_site.png"
  },
  {
    id: "shopify-store",
    partner: "SHOPIFY STORE",
    platform: "SHOPIFY E-COMMERCE SITE",
    index: "(b.)",
    services: ["Shopify Setup", "Theme Customization", "Product Pages", "CRO"],
    image: "/projects/shopify_store.png"
  },
  {
    id: "estate-devlop",
    partner: "ESTATE DEVLOP",
    platform: "REAL ESTATE WEBSITE",
    index: "(c.)",
    services: ["Property Listing Build", "Lead Forms", "Local SEO", "CRM Setup"],
    image: "/projects/real_estate.png"
  },
  {
    id: "city-hospital",
    partner: "CITY HOSPITAL",
    platform: "HOSPITAL WEBSITE",
    index: "(d.)",
    services: ["Appointment System", "Service Pages", "SEO", "Performance Fixes"],
    image: "/projects/hospital_landing_page.png"
  },
  {
    id: "oak-interiors",
    partner: "OAK INTERIORS",
    platform: "INTERIOR DESIGN WEBSITE",
    index: "(e.)",
    services: ["Portfolio Website", "UI Design", "Gallery Setup", "Digital Marketing"],
    image: "/projects/architect_site.png"
  },
  {
    id: "ecommerce-site",
    partner: "Ecommerce Site",
    platform: "ECOMMERCE WEBSITE",
    index: "(f.)",
    services: ["Admissions Pages", "CMS Setup", "SEO", "Maintenance Support"],
    image: "/projects/ecommerce_site.png"
  }
];

export const latestProjects: Project[] = [
  {
    id: "northline-custom-app",
    title: "Northline Custom App",
    category: "Full-stack Engineering / UI UX",
    year: "2026",
    summary:
      "A high-performance custom e-commerce solution that optimized the checkout flow and integrated a bespoke inventory management system.",
    location: "London",
    primaryMetric: "+35% checkout conversion",
    metrics: ["React Architecture", "Inventory API", "UX Optimization"],
    gradient: "from-zinc-200 via-stone-500 to-black"
  },
  {
    id: "helio-marketing-scale",
    title: "Helio Marketing Scale",
    category: "Digital Marketing / Growth",
    year: "2025",
    summary:
      "A multi-channel marketing campaign that combined technical SEO with precision-targeted search ads to drive B2B lead generation.",
    location: "New York",
    primaryMetric: "3.1x lead quality lift",
    metrics: ["Technical SEO", "Paid Search", "Automation"],
    gradient: "from-slate-100 via-emerald-500 to-neutral-950"
  },
  {
    id: "vale-platform-migration",
    title: "Vale Platform Migration",
    category: "Web Engineering / SEO",
    year: "2025",
    summary:
      "A complex architectural migration for a wellness brand, ensuring zero downtime and maintaining search engine rankings during the transition.",
    location: "Los Angeles",
    primaryMetric: "0% traffic loss during migration",
    metrics: ["Next.js Migration", "SEO Preservation", "Performance"],
    gradient: "from-white via-red-500 to-zinc-950"
  }
];

export const services: Service[] = [
  {
    title: "Custom web solutions",
    intro:
      "Full-stack engineering and custom application development designed for scalability, speed, and business impact.",
    items: ["React & Next.js Development", "API Integration", "Architecture Design"]
  },
  {
    title: "Digital marketing",
    intro:
      "Data-driven strategies that combine technical SEO with performance-based advertising to drive high-quality growth.",
    items: ["Search Engine Optimization", "Paid Search & Social", "Conversion Optimization"]
  },
  {
    title: "UI/UX design",
    intro:
      "User-centric design systems that bridge the gap between aesthetic excellence and intuitive digital experiences.",
    items: ["Interaction Design", "Prototyping", "Design Systems"]
  },
  {
    title: "AI & Automation",
    intro:
      "Intelligent AI agents and custom automation tools designed to streamline workflows and enhance user interactions.",
    items: ["AI Agent Development", "Workflow Automation", "Custom LLM Solutions"]
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
