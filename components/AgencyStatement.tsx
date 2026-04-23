"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const serviceBlocks = [
  {
    title: "Brand Direction",
    description:
      "We shape brand identity from the inside out — defining narrative, visual language, and strategic positioning.",
    items: ["Brand Strategy", "Visual Identity", "Copywriting", "Art Direction"]
  },
  {
    title: "Advanced Tech",
    description:
      "Custom platforms, headless architectures, and performance-driven development for modern commerce.",
    items: [
      "Shopify Plus / Headless",
      "Custom Development",
      "App Development",
      "System Integration"
    ]
  },
  {
    title: "Performance Marketing",
    description:
      "Data-led growth strategies that connect creative vision with measurable results across channels.",
    items: ["SEO / SEM", "CRO", "Email / CRM", "Paid Social"]
  },
  {
    title: "Merchant of Records",
    description:
      "Simplifying global expansion with compliant, seamless cross-border commerce operations.",
    items: [
      "Tax Compliance",
      "Payment Processing",
      "Logistics",
      "International Expansion"
    ]
  }
];

export default function AgencyStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Heading animation
      const heading = sectionRef.current?.querySelector(".agency-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }

      // Service blocks stagger
      const blocks = gsap.utils.toArray<HTMLElement>(".service-block");
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blocks[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-shell py-24 md:py-32">
      {/* Top statement */}
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div>
          <p className="section-heading mb-6">(a.) Services</p>
          <h2 className="agency-heading heading-condensed text-statement">
            WE ARE AN ECOMMERCE AGENCY. NOT JUST EXECUTION, BUT AN ECOSYSTEM WHERE STRATEGY, DESIGN, AND TECHNOLOGY DRIVE MEANINGFUL RESULTS.
          </h2>
        </div>
        <div className="lg:pt-16">
          <p className="text-sm leading-7 text-gray-light">
            We live in an age where everything is everywhere, all the time. The
            real challenge is no longer visibility, but meaning. Evolve exists to
            build authentic connections between brands and people — where every
            experience, physical or digital, becomes part of the same story.
          </p>
          <p className="mt-4 text-sm leading-7 text-gray-light">
            We believe commerce is culture: a coherent ecosystem where
            technology, design, and strategy merge to create living brands,
            worlds with identity, and relationships that endure over time.
          </p>
        </div>
      </div>

      {/* Service grid */}
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {serviceBlocks.map((block) => (
          <div
            key={block.title}
            className="service-block rounded-2xl border border-white/8 bg-white/[0.02] p-6"
          >
            <h3 className="font-heading text-lg font-semibold uppercase tracking-tight">
              {block.title}
            </h3>
            <p className="mt-3 text-xs leading-5 text-gray-light">
              {block.description}
            </p>
            <ul className="mt-4 space-y-1.5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="text-xs uppercase tracking-label text-gray"
                >
                  → {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
