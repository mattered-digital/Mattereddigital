"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const serviceBlocks = [
  { title: "Custom\nEngineering", image: "/humans-1.jpg" },
  { title: "Digital\nMarketing", image: "/humans-2.jpg" },
  { title: "UI/UX\nDesign", image: "/humans-3.jpg" },
  { title: "AI &\nAutomation", image: "/humans-4.jpg" }
];

export default function AgencyStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const bgImagesRef = useRef<HTMLDivElement>(null);

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

  // Background image animation logic
  useGSAP(() => {
    if (!bgImagesRef.current) return;
    
    const imageLayers = bgImagesRef.current.querySelectorAll(".bg-image-layer");
    
    gsap.to(imageLayers, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut"
    });

    if (hoveredIndex !== null && imageLayers[hoveredIndex]) {
      gsap.to(imageLayers[hoveredIndex], {
        opacity: 0.8, // Increased opacity for the background image
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
      });
    }
  }, [hoveredIndex]);

  return (
    <section ref={sectionRef} id="about" className="section-shell py-24 md:py-36 relative overflow-hidden">
      {/* Background Hover Images */}
      <div 
        ref={bgImagesRef}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        {serviceBlocks.map((block, i) => (
          <div 
            key={`${block.title}-bg`}
            className="bg-image-layer absolute inset-0 opacity-0 scale-110 will-change-transform"
          >
            <Image
              src={block.image}
              alt=""
              fill
              className="object-cover grayscale brightness-[0.7]"
              priority
            />
          </div>
        ))}
        {/* Dark overlay to ensure text contrast, stays static */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20">
        
        <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-[6vw] relative">
          
          {/* LEFT SIDE: Text and Paragraphs (Sticky on PC) */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-40 h-fit">
            <h2 className="agency-heading font-sans text-[28px] md:text-[38px] lg:text-[44px] font-medium leading-[1.1] tracking-tight md:tracking-[-0.02em] text-white mb-12 lg:mb-20">
              Matter builds high-performance digital ecosystems for brands that demand custom engineering, data-driven marketing, and scalable growth.
            </h2>

            <div className="paragraphs-container flex flex-col">
              <div className="h-8 mb-4 flex items-center">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white font-medium">
                  Matter Agency
                </p>
              </div>
              <div className="space-y-6 lg:space-y-8">
                <p className="agency-paragraph font-sans text-gray-400 text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
                  As a full-service web agency and digital marketing powerhouse, we combine deep technical expertise with strategic marketing to turn your digital presence into a conversion-focused growth engine.
                </p>
                <p className="agency-paragraph font-sans text-gray-400 text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
                  From bespoke web applications to multi-channel marketing campaigns, we help teams scale faster with solutions that actually perform.
                </p>
                <p className="agency-paragraph font-sans text-white text-[13.5px] md:text-[14px] leading-[1.5] tracking-[-0.01em]">
                  Precision engineering meets creative marketing. That is the standard we set for every build and every campaign.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Cards Grid on PC */}
          <div className="w-full lg:w-7/12">
            <div className="services-grid-area pr-0 lg:pr-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* The grey boxes */}
                {serviceBlocks.map((block, i) => {
                  const isHovered = hoveredIndex === i;
                  return (
                    <div 
                      key={block.title} 
                      className="service-block-wrap w-full flex flex-col group cursor-pointer"
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      onClick={() => setHoveredIndex(isHovered ? null : i)}
                    >
                      <div className="h-8 mb-2 flex items-center">
                        {i === 0 && (
                          <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white font-medium">
                            Our Services
                          </p>
                        )}
                      </div>
                      <div className={`transition-colors duration-500 h-[180px] md:h-[320px] w-full p-5 flex flex-col justify-between border border-white/10 relative overflow-hidden backdrop-blur-md ${isHovered ? 'bg-[#1a1a1a]/40' : 'bg-[#141414]/10'}`}>
                        <h3 className="font-sans text-white text-[14px] leading-[1.2] font-medium whitespace-pre-line tracking-tight relative z-10 drop-shadow-md">
                          {block.title}
                        </h3>
                        <div className={`transition-opacity duration-500 flex justify-end relative z-10 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 group-hover:opacity-100'}`}>
                          <span className="text-[10px] uppercase tracking-widest text-white/90 font-semibold drop-shadow-md">(Explore)</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
