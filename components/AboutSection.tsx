"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const photos = [
  { src: "/editorial-fashion.jpg", alt: "Campaign creative direction" },
  { src: "/humans-2.jpg", alt: "Brand planning workshop" },
  { src: "/editorial-redbook.jpg", alt: "Editorial content system" },
  { src: "/editorial-tshirt.jpg", alt: "Product marketing concept" }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Parallax on images
      const images = gsap.utils.toArray<HTMLElement>(".about-img");
      images.forEach((img, i) => {
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
              scrub: true
            }
          }
        );
      });

      // Text reveal
      const texts = gsap.utils.toArray<HTMLElement>(".about-text");
      texts.forEach((text) => {
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
              toggleActions: "play none none none"
            }
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="section-shell py-24 md:py-32">
      {/* Mobile Layout: Scattered Overlapping Photos */}
      <div className="flex flex-col md:hidden pb-12 w-full pt-10">
        <div className="about-img w-[65%] self-start relative z-10 overflow-hidden border border-white/10">
          <Image src={photos[0].src} alt={photos[0].alt} width={600} height={800} className="w-full h-auto object-cover grayscale" />
        </div>
        
        <div className="about-img w-[55%] self-end relative z-20 overflow-hidden border border-white/10 -mt-24 mr-2">
          <Image src={photos[1].src} alt={photos[1].alt} width={600} height={800} className="w-full h-auto object-cover" />
        </div>

        <div className="about-img w-[60%] self-start relative z-10 overflow-hidden border border-white/10 -mt-16 ml-4">
          <Image src={photos[2].src} alt={photos[2].alt} width={600} height={800} className="w-full h-auto object-cover" />
        </div>

        <div className="about-img w-[50%] self-end relative z-20 overflow-hidden border border-white/10 -mt-32 mr-6">
          <Image src={photos[3].src} alt={photos[3].alt} width={600} height={800} className="w-full h-auto object-cover grayscale" />
        </div>

        <div className="about-text w-full mt-24">
            <h3 className="text-[17px] sm:text-[19px] font-sans font-medium tracking-tight text-white leading-snug">
              Matter is a multi-disciplinary cultural hub that focuses on partnering creatives with brands to produce innovative stories.
            </h3>
            <p className="mt-8 text-[13px] font-sans tracking-wide text-white/50">
              Let's make an impact together.<br/>
              <span className="text-white">hello@matter.com</span>
            </p>
        </div>
      </div>

      {/* Desktop Layout: 2-Column Grid */}
      <div className="hidden md:grid gap-12 md:grid-cols-2">
        {/* Left column: 2 stacked photos */}
        <div className="space-y-12">
          <div className="about-img overflow-hidden border border-white/10">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={800}
              height={600}
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="about-img overflow-hidden border border-white/10">
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width={800}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right column: 2 photos + text */}
        <div className="space-y-12 md:pt-32">
          <div className="about-img overflow-hidden border border-white/10">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="about-img overflow-hidden border border-white/10">
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              width={800}
              height={800}
              className="h-full w-full object-cover grayscale"
            />
          </div>
          <div className="about-text pt-4">
            <h3 className="text-2xl font-sans font-medium tracking-tight text-white leading-snug">
              Matter is a multi-disciplinary cultural hub that focuses on partnering creatives with brands to produce innovative stories.
            </h3>
            <p className="mt-8 text-sm leading-7 text-gray-light">
              We connect strategy, content, paid media, and conversion design so every touchpoint feels like part of the same system, not a pile of disconnected tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
