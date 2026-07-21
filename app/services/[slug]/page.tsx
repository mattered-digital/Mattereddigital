import { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  keywords: string[];
  features: { title: string; desc: string }[];
  technologies: string[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceDetail> = {
  "custom-web-solutions": {
    slug: "custom-web-solutions",
    title: "Custom Web Solutions",
    subtitle: "High-performance web apps engineered for scale and speed.",
    description: "Scale your operations and dominate your market with premium full-stack Next.js and React web applications built to convert.",
    longDescription: "We engineer customized, high-performance web systems from scratch. We don't believe in generic templates. Our engineering focus centers on clean TypeScript, blazing-fast Next.js Server Components, headless content architectures, and robust API endpoints that connect seamlessly with your legacy tools.",
    keywords: ["Custom Web Development", "Next.js Developer", "React Full-Stack", "Headless CMS Build"],
    features: [
      { title: "React & Next.js Architecture", desc: "Server-side rendering, static site generation, and optimized image processing for lightning-fast speeds." },
      { title: "API & System Integration", desc: "Secure integration with third-party software, internal databases, CRM pipelines, and payment systems." },
      { title: "Scalable Cloud Hosting", desc: "Edge deployment on Vercel or AWS, ensuring 99.99% uptime and auto-scaling to handle traffic spikes." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "GraphQL", "TailwindCSS"],
    faqs: [
      { q: "What frameworks do you use?", a: "We primarily build custom web solutions using Next.js, React, and TypeScript paired with TailwindCSS and secure backend APIs." },
      { q: "How long does a custom web project take?", a: "Typically, a custom web solution takes 4 to 8 weeks depending on the complexity of the integrations and design." }
    ]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Data-driven organic search domination and growth marketing.",
    description: "Drive high-intent traffic, build technical SEO authority, and optimize conversion funnels to boost your bottom line.",
    longDescription: "Our approach to digital marketing combines technical precision with brand story. We perform exhaustive competitor research, indexation audits, and implement schema markups to rank you on Page 1 of Google. Coupled with high-performance paid ads, we focus on lowering your CAC while elevating your LTV.",
    keywords: ["Search Engine Optimization", "Technical SEO", "Growth Marketing Agency", "Conversion Rate Optimization"],
    features: [
      { title: "Technical SEO & Schema", desc: "Deep crawl audits, indexing fixes, meta tag optimization, and structured JSON-LD data integration." },
      { title: "Paid Search & Performance Ads", desc: "Highly targeted Google, Meta, and LinkedIn ad campaigns built to generate verified leads." },
      { title: "CRO & Funnel Analysis", desc: "User behavior tracking, heatmaps, and A/B testing to optimize landing pages for maximum conversions." }
    ],
    technologies: ["Google Search Console", "Screaming Frog", "Ahrefs", "Google Analytics 4", "Hotjar", "VibeSEO"],
    faqs: [
      { q: "How long does SEO take to show results?", a: "While paid ads produce instant results, technical SEO and content updates typically take 3 to 6 months to rank high on search engines." },
      { q: "Do you manage ad spend directly?", a: "Yes, we set up, monitor, and continuously optimize paid ad campaigns to ensure you get the highest possible ROI." }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI / UX Design Systems",
    subtitle: "User-centric design systems that combine aesthetics with intuition.",
    description: "Premium user interfaces and structured design systems that bridge visual excellence with high conversions.",
    longDescription: "We construct custom design systems that scale. Every layout, typography selection, and interaction is engineered with purpose. We focus on user behavior, layout hierarchy, accessibility compliance, and interactive micro-animations that make your digital product feel premium and alive.",
    keywords: ["UI UX Design Systems", "Figma Prototyping", "Interaction Design Agency", "Brand Identity"],
    features: [
      { title: "Figma Component Systems", desc: "Reusable, standardized component libraries built with auto-layout and variant properties for easy handoff." },
      { title: "User Journey & Wireframes", desc: "Interactive wireframes mapping out every click, transition, and flow before writing a single line of code." },
      { title: "Interactive Prototypes", desc: "High-fidelity micro-interactions and motion prototypes that show exactly how the final application behaves." }
    ],
    technologies: ["Figma", "Adobe CC", "Spline (3D)", "Framer", "CSS Grid/Flexbox"],
    faqs: [
      { q: "What is your design process?", a: "We begin with user research, map out user journeys, build interactive wireframes, and design the final component library in Figma." },
      { q: "Do you build the designs too?", a: "Absolutely. Our UI/UX team collaborates closely with our Next.js engineering team to ensure pixel-perfect deployment." }
    ]
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Agents & Automation",
    subtitle: "Intelligent workflows and custom AI integration.",
    description: "Integrate custom LLMs and autonomous agents to automate complex workflows and boost operational efficiency.",
    longDescription: "Bring the power of artificial intelligence straight to your operations. We build secure, custom LLM pipelines, autonomous agent systems that automate data collection, automated customer service routers, and intelligent search hubs that turn internal documentation into instant answers.",
    keywords: ["AI Agent Development", "Workflow Automation", "LLM Integration", "ChatGPT API Apps"],
    features: [
      { title: "Autonomous AI Agents", desc: "Intelligent agents capable of making decisions, executing tools, and carrying out multi-step business logic." },
      { title: "Workflow Automation", desc: "Connect Slack, Gmail, databases, and CRMs using custom scripts or tool pipelines to save hours of manual labor." },
      { title: "Custom LLM Solutions", desc: "Fine-tune and deploy open-source LLMs (like Llama) or OpenAI APIs securely containing your proprietary data." }
    ],
    technologies: ["OpenAI API", "LangChain", "Vector Databases", "Python", "Node.js", "Supabase"],
    faqs: [
      { q: "Will our data be secure when using AI?", a: "Yes. We configure AI integrations using secure enterprise APIs and private cloud models so your data is never used to train public LLMs." },
      { q: "What kinds of workflows can be automated?", a: "Almost any repetitive task, including invoice processing, customer support triage, report generation, and database syncs." }
    ]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile applications optimized for performance.",
    description: "Develop stunning React Native and iOS/Android applications that deliver premium native experiences.",
    longDescription: "We engineer high-performance mobile apps with focus on smooth, 60fps animations, intuitive swipe gestures, offline storage capabilities, and real-time syncing. Whether you need a cross-platform React Native app or a native utility, we build for durability, performance, and instant store approval.",
    keywords: ["Mobile App Development", "React Native Developer", "iOS Android Developer", "App Store Agency"],
    features: [
      { title: "React Native Cross-Platform", desc: "One clean codebase that renders pixel-perfect native apps for both iOS and Android platforms." },
      { title: "Offline-First Syncing", desc: "Advanced local databases (like SQLite/WatermelonDB) so your app works seamlessly in low-connectivity areas." },
      { title: "Push Notification Pipelines", desc: "Highly segmented push notification integrations to engage users and maximize retention rates." }
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "Supabase / PostgreSQL", "Firebase"],
    faqs: [
      { q: "Do you publish the apps to the App Store and Google Play?", a: "Yes, we handle the entire deployment process, including app signing, screenshots, store listing compliance, and final reviews." },
      { q: "Can the mobile app share a database with my website?", a: "Yes. We design unified API backends so your website, web dashboard, and mobile app stay synced in real-time." }
    ]
  },
  "custom-crm": {
    slug: "custom-crm",
    title: "Custom CRM Development",
    subtitle: "Bespoke Customer Relationship Management systems.",
    description: "Build custom CRM solutions to organize leads, track sales pipelines, and automate customer engagement.",
    longDescription: "Generic CRMs are expensive and cluttered with features you never use. We design custom CRM systems that adapt to your exact workflow. From drag-and-drop sales pipelines and automated lead routing to detailed performance analytics, we build tools your team will actually love to use.",
    keywords: ["Custom CRM Developer", "Sales Pipeline CRM", "Lead Management System", "Bespoke SaaS Build"],
    features: [
      { title: "Interactive Pipelines", desc: "Beautiful drag-and-drop boards to track deals, contacts, and tasks visually through custom stages." },
      { title: "Automated Email & SMS", desc: "Trigger automated touchpoints when a lead changes stages, ensuring no prospect falls through the cracks." },
      { title: "Advanced Sales Reports", desc: "Live dashboards detailing conversion rates, pipeline values, and team performance metrics." }
    ],
    technologies: ["Next.js", "Supabase", "PostgreSQL", "TailwindCSS", "Recharts (Data viz)", "Twilio / SendGrid"],
    faqs: [
      { q: "Can we migrate data from our existing CRM?", a: "Yes. We write custom scripts to cleanly migrate all your contact history, notes, and deals from HubSpot, Salesforce, or Excel sheets." },
      { q: "Is a custom CRM better than Salesforce?", a: "For teams with highly specialized workflows or high user-seat fees, a custom CRM is significantly cheaper and much easier to navigate." }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  return {
    metadataBase: new URL("https://mattered.digital"),
    title: `${service.title} | Matter Digital Agency`,
    description: service.description,
    keywords: service.keywords,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | Matter Digital Agency`,
      description: service.description,
      url: `/services/${slug}`,
      siteName: "Matter Digital",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Matter Digital Agency`,
      description: service.description,
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "ProfessionalService",
      "name": "Matter Digital",
      "url": "https://mattered.digital"
    },
    "description": service.description,
    "areaServed": "Worldwide"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mattered.digital/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://mattered.digital/services" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://mattered.digital/services/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-[50vh] w-[50vw] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff1a1a]/15 via-[#ff1a1a]/5 to-transparent opacity-60" />

        {/* Hero Section */}
        <section className="section-shell relative z-10 mb-20 md:mb-32">
          <div className="flex flex-col gap-6 max-w-5xl">
            <span className="font-mono text-xs tracking-[0.2em] text-[#ff1a1a] uppercase font-bold">
              ✦ Services / {service.title}
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-white">
              {service.title}
            </h1>
            <p className="max-w-3xl text-xl md:text-2xl text-white/90 mt-6 font-sans leading-relaxed">
              {service.subtitle}
            </p>
          </div>
        </section>

        {/* Long Description and Tech Stack */}
        <section className="section-shell relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16 mb-24">
          <div className="lg:col-span-8 flex flex-col gap-6 font-sans text-lg text-white/70 leading-relaxed">
            <h2 className="text-white font-heading text-2xl uppercase tracking-wider">The Approach</h2>
            <p>{service.longDescription}</p>
          </div>
          <div className="lg:col-span-4 border border-white/5 bg-white/[0.02] p-8 rounded-lg flex flex-col gap-6">
            <h3 className="text-white font-mono text-xs uppercase tracking-widest font-bold text-[#ff1a1a]">Technologies We Deploy</h3>
            <div className="flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-label text-white/80 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Core Capabilities/Features */}
        <section className="section-shell relative z-10 mb-24">
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-tighter leading-none mb-4">Core Capabilities</h2>
            <p className="text-white/60 max-w-xl">Every project we engineer adheres to rigorous standards of excellence and architecture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div
                key={feature.title}
                className="border border-white/5 bg-white/[0.01] p-8 flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="font-mono text-xs text-white/30 font-bold">0{i + 1}.</div>
                <h3 className="font-heading text-xl uppercase tracking-tight text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff1a1a] transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="section-shell relative z-10 mb-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-3xl uppercase tracking-tighter leading-none mb-4">Common Questions</h2>
              <p className="text-white/60">Everything you need to know about working with us on {service.title}.</p>
            </div>
            <div className="lg:col-span-8 space-y-8">
              {service.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-white/5 pb-6">
                  <h3 className="font-sans font-semibold text-lg text-white mb-2">{faq.q}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-shell relative z-10 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            <div className="md:col-span-5 flex flex-col gap-6">
              <span className="font-mono text-xs text-[#ff1a1a] uppercase tracking-widest font-bold">✦ Start Your Project</span>
              <h2 className="font-heading text-4xl lg:text-5xl uppercase tracking-tighter leading-none text-white">
                Let's construct your custom {service.title.toLowerCase()} system.
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Tell us about your objectives, timeline, and tech requirements. We'll coordinate a scope call within 24 hours.
              </p>
            </div>
            <div className="md:col-span-7">
              <ContactForm defaultService={service.title} isInline={true} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
