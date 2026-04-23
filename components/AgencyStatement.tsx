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
          { opacity: 0, y: 60 },
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
        { opacity: 0, y: 60 },
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
    <section ref={sectionRef} className="section-shell py-24 md:py-40 relative z-20">
      {/* Top large statement */}
      <div className="mx-auto w-full lg:max-w-[92%] lg:mx-0">
        <h2 className="agency-heading font-sans text-[32px] md:text-[50px] lg:text-[56px] font-medium leading-[1.05] tracking-tight md:tracking-[-0.03em] text-white">
          We are an eCommerce agency. Not just execution, not isolated services. We provide brand direction, advanced tech, performance marketing and system integration as one connected approach. An end-to-end ecosystem designed to scale, perform and integrate seamlessly with existing platforms.
        </h2>
      </div>

      {/* Grid below */}
      <div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-[3vw] gap-y-16 lg:pr-8">
        
        {/* The 4 grey boxes */}
        {serviceBlocks.map((block, i) => (
          <div key={block.title} className="service-block-wrap relative w-full">
            {i === 0 && (
              <p className="absolute -top-10 left-0 text-[11px] uppercase tracking-wider text-white font-medium">
                Our Services
              </p>
            )}
            <div className="bg-[#141414] h-[320px] md:h-[450px] w-full p-6 flex flex-col justify-between">
              <h3 className="font-sans text-white text-[15px] leading-[1.2] font-medium whitespace-pre-line tracking-tight">
                {block.title}
              </h3>
            </div>
          </div>
        ))}

        {/* Right side paragraphs taking 2 columns */}
        <div className="lg:col-span-2 paragraphs-container pl-0 lg:pl-[2vw] pt-2">
          <p className="text-[11px] mb-8 uppercase tracking-wider text-white font-medium">
            Est 2008®
          </p>
          <div className="space-y-8">
            <p className="agency-paragraph font-sans text-gray-400 text-[15px] leading-[1.5] tracking-[-0.01em]">
              Every eCommerce is already in motion. Processes, people, numbers,
              decisions. Our job isn&apos;t to sit on top of it. It&apos;s to step inside.
            </p>
            <p className="agency-paragraph font-sans text-gray-400 text-[15px] leading-[1.5] tracking-[-0.01em]">
              We work alongside teams, read the business, identify where energy is being
              lost and where it needs to be amplified. We don&apos;t operate in silos: design,
              technology and marketing move together, because that&apos;s how growth
              becomes sustainable.
            </p>
            <p className="agency-paragraph font-sans text-white text-[15px] leading-[1.5] tracking-[-0.01em]">
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
