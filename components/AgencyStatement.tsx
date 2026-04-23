"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const serviceBlocks = [
  { title: "Brand\nDirection" },
  { title: "Advanced\nTech" },
  { title: "Performance\nMarketing" },
  { title: "Merchant of\nRecords" },
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
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
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
      const blocks = gsap.utils.toArray<HTMLElement>(".service-block-wrap");
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blocks[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Paragraphs stagger
      const paragraphs = gsap.utils.toArray<HTMLElement>(".agency-paragraph");
      gsap.fromTo(
        paragraphs,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".paragraphs-container",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-shell py-24 md:py-36 relative z-20">
      {/* Top large statement */}
      <div className="mx-auto w-full lg:max-w-[95%] lg:mx-0">
        <h2 className="agency-heading font-sans text-[28px] md:text-[38px] lg:text-[44px] font-medium leading-[1.1] tracking-tight md:tracking-[-0.02em] text-white">
          We are an eCommerce agency. Not just execution, not isolated services. We provide brand direction, advanced tech, performance marketing and system integration as one connected approach. An end-to-end ecosystem designed to scale, perform and integrate seamlessly with existing platforms.
        </h2>
      </div>

      {/* Grid below */}
      <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-[2vw] gap-y-12">
        
        {/* The 4 grey boxes */}
        {serviceBlocks.map((block, i) => (
          <div key={block.title} className="service-block-wrap w-full flex flex-col">
            <div className="h-8 mb-2 flex items-center">
              {i === 0 && (
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white font-medium">
                  Our Services
                </p>
              )}
            </div>
            <div className="bg-[#141414] h-[280px] md:h-[360px] w-full p-5 flex flex-col justify-between">
              <h3 className="font-sans text-white text-[14px] leading-[1.2] font-medium whitespace-pre-line tracking-tight">
                {block.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Right side paragraphs taking 2 columns */}
        <div className="lg:col-span-2 paragraphs-container pl-0 lg:pl-[2vw] flex flex-col">
          <div className="h-8 mb-2 flex items-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white font-medium">
              Est 2008®
            </p>
          </div>
          <div className="space-y-6 lg:space-y-8 pt-1">
            <p className="agency-paragraph font-sans text-gray-400 text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
              Every eCommerce is already in motion. Processes, people, numbers,
              decisions. Our job isn&apos;t to sit on top of it. It&apos;s to step inside.
            </p>
            <p className="agency-paragraph font-sans text-gray-400 text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
              We work alongside teams, read the business, identify where energy is being
              lost and where it needs to be amplified. We don&apos;t operate in silos: design,
              technology and marketing move together, because that&apos;s how growth
              becomes sustainable.
            </p>
            <p className="agency-paragraph font-sans text-white text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
              With in-house teams collaborating in real time, we reduce friction, align
              decisions and turn complexity into structure. We don&apos;t add noise. We bring
              direction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
