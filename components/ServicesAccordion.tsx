"use client";

import { useState, useRef } from "react";
import { services } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".accordion-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
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
    <section ref={sectionRef} id="services" className="section-shell py-16 md:py-24">
      <div className="mb-8 max-w-2xl">
        <p className="section-heading mb-3">(b.) Capabilities</p>
        <h2 className="heading-condensed text-3xl md:text-4xl">
          A TIGHT SERVICE STACK WITH ROOM TO EXPAND.
        </h2>
      </div>
      <div className="space-y-3">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={service.title}
              className="accordion-item border border-white/8 bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex w-full flex-col gap-3 px-6 py-5 text-left md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="font-heading text-xl font-semibold uppercase tracking-tight md:text-2xl">
                    {service.title}
                  </p>
                  <p className="mt-2 max-w-2xl text-xs leading-5 text-gray-light">
                    {service.intro}
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-label text-gray">
                  {isActive ? "Open" : "View"}
                </span>
              </button>
              <div
                className={`grid overflow-hidden px-6 transition-[grid-template-rows,padding-bottom] duration-300 ${
                  isActive ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-2 md:grid-cols-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="border border-white/8 bg-white/[0.03] px-4 py-3 font-mono text-xs uppercase tracking-label text-gray-light"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
