"use client";

import { useRef } from "react";
import { caseStudies } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProjectTable() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".cs-row");
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="projects" className="py-0">
      {/* Header row */}
      <div className="section-shell border-b border-white/10 py-4">
        <div className="mono-row grid grid-cols-[1fr] gap-4 text-gray md:grid-cols-[1.2fr_1fr_1fr_1.5fr]">
          <span>Partner</span>
          <span className="hidden md:block">Platform</span>
          <span className="hidden text-center md:block">
            ( EVOLVE CASE STUDIES )
          </span>
          <span className="hidden text-right md:block">Service</span>
        </div>
      </div>

      {/* Body rows */}
      <div className="section-shell">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.id}
            className={`cs-row mono-row grid grid-cols-1 gap-2 py-4 transition-colors duration-200 hover:text-white md:grid-cols-[1.2fr_1fr_1fr_1.5fr] md:items-center ${
              i !== caseStudies.length - 1
                ? "border-b border-white/[0.06]"
                : ""
            }`}
          >
            <span className="text-sm font-medium text-white md:text-base">
              {cs.partner}
            </span>
            <span className="text-sm text-gray-light">{cs.platform}</span>
            <span className="hidden text-center text-sm text-gray md:block">
              {cs.index}
            </span>
            <span className="text-right text-sm text-gray-light">
              {cs.services.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
