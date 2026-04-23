"use client";

import { useState } from "react";
import { services } from "@/data/projects";

export default function ServicesAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="section-shell py-16 md:py-24">
      <div className="mb-8 max-w-2xl">
        <p className="section-heading mb-3">Services</p>
        <h2 className="font-serif text-4xl italic md:text-5xl">
          A tight service stack with room to expand.
        </h2>
      </div>
      <div className="space-y-4">
        {services.map((service, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex w-full flex-col gap-3 px-6 py-6 text-left md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <p className="text-2xl font-medium md:text-3xl">
                    {service.title}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-light">
                    {service.intro}
                  </p>
                </div>
                <span className="text-sm uppercase tracking-label text-gray">
                  {isActive ? "Open" : "View"}
                </span>
              </button>
              <div
                className={`grid overflow-hidden px-6 transition-[grid-template-rows,padding-bottom] duration-300 ${
                  isActive ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-3 md:grid-cols-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-gray-light"
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
