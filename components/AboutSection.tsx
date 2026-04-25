"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const photos = [
  { src: "/editorial-fashion.jpg", alt: "Campaign creative direction" },
  { src: "/humans-4.jpg", alt: "Brand planning workshop" },
  { src: "/humans-3.jpg", alt: "Editorial content system" },
  { src: "/humans-5.jpg", alt: "Editorial content system" },
  { src: "/editorial-tshirt.jpg", alt: "Product marketing concept" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      const applyAnimations = (imgClass: string, textClass: string) => {
        gsap.utils.toArray<HTMLElement>(imgClass).forEach((img, i) => {
          gsap.fromTo(
            img,
            { yPercent: i % 2 === 0 ? 10 : 20 },
            {
              yPercent: i % 2 === 0 ? -10 : -20,
              ease: "none",
              scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(textClass).forEach((text) => {
          gsap.fromTo(
            text,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: text,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      };

      mm.add("(max-width: 767px)", () =>
        applyAnimations(".mobile-img", ".mobile-text")
      );
      mm.add("(min-width: 768px)", () =>
        applyAnimations(".desktop-img", ".desktop-text")
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="section-shell">

      {/* ─── MOBILE: Evolve-style staggered 2-col ─── */}
      <div className="md:hidden w-full flex justify-between relative px-[3%] pt-6 pb-12">

        {/* Left column */}
        <div className="flex flex-col w-[47%] gap-0 relative z-10">
          <div className="mobile-img relative overflow-hidden w-full">
            <Image src={photos[0].src} alt={photos[0].alt} width={800} height={1000} className="w-full h-auto object-cover grayscale" />
          </div>

          {/* Mid text — bleeds across right col */}
          <div className="mobile-text w-[200%] relative z-30 mt-10 mb-10 pr-2">
            <p className="text-[14px] sm:text-[15px] font-sans font-medium tracking-tight text-white leading-[1.45]">
              Matter is a multi-disciplinary cultural hub that focuses on
              partnering creatives with brands to produce innovative stories.
            </p>
          </div>

          <div className="mobile-img relative overflow-hidden w-[92%]">
            <Image src={photos[2].src} alt={photos[2].alt} width={800} height={1000} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Right column — offset downward */}
        <div className="flex flex-col w-[47%] mt-10 relative z-20 items-end gap-0">
          <div className="mobile-text w-full pb-6 pl-1">
            <p className="text-[10px] leading-[1.6] text-white/80 font-sans tracking-tight">
              hello@matter.com<br />New York, EST 2024
            </p>
          </div>

          <div className="mobile-img relative overflow-hidden w-full">
            <Image src={photos[1].src} alt={photos[1].alt} width={600} height={800} className="w-full h-auto object-cover" />
          </div>

          <div className="mobile-img relative overflow-hidden w-[92%] mt-28">
            <Image src={photos[3].src} alt={photos[3].alt} width={1000} height={800} className="w-full h-auto object-cover grayscale" />
          </div>
        </div>
      </div>

      {/* ─── DESKTOP: Evolve layout ───
          Two fat equal image columns filling ~90% of viewport width.
          Left col offset down. Right col starts at top.
          Narrow text block floats to the far right.
      ─── */}
      <div className="hidden md:flex w-full items-start pb-32 lg:pb-48">

        {/* ── Left image column ── */}
        <div className="w-[45%] flex flex-col gap-12 lg:gap-20 mt-20 lg:mt-32">
          <div className="desktop-img relative overflow-hidden w-full">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={900}
              height={1100}
              className="w-full h-auto object-cover grayscale"
            />
          </div>
          <div className="desktop-img relative overflow-hidden w-[88%]">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width={900}
              height={1100}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ── Right image column ── */}
        <div className="w-[45%] flex flex-col gap-12 lg:gap-20">
          <div className="desktop-text pt-4 pl-3 lg:pl-5">
            <p className="text-[11px] leading-[1.6] text-white font-mono tracking-tight uppercase">
              hello@matter.com<br />New York, EST 2024
            </p>
          </div>

          <div className="desktop-img relative overflow-hidden w-full">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={900}
              height={1100}
              className="w-full h-auto object-cover grayscale"
            />
          </div>

          <div className="desktop-img relative overflow-hidden w-[90%]">
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              width={900}
              height={1100}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ── Text block: far right, aligned to bottom ── */}
        <div className="w-[10%] flex flex-col justify-end self-end mb-16 lg:mb-40 pl-4 lg:pl-6 shrink-0">
          <div className="desktop-text flex flex-col gap-6">
            <p className="text-[11px] lg:text-[12px] leading-[1.7] text-white/85 tracking-tight">
              Matter is a multi-disciplinary cultural hub that focuses on
              partnering creatives with brands to produce innovative stories.
              The real challenge is no longer visibility, but meaning.
            </p>
            <p className="text-[11px] lg:text-[12px] leading-[1.7] text-white/85 tracking-tight">
              We connect strategy, content, paid media, and conversion design
              so every touchpoint feels like part of the same system.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}