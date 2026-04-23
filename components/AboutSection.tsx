"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const photos = [
  { src: "/editorial-fashion.png", alt: "Fashion editorial" },
  { src: "/editorial-glass.png", alt: "Architecture" },
  { src: "/editorial-redbook.png", alt: "Publication design" },
  { src: "/editorial-tshirt.png", alt: "Product editorial" }
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
      <div className="grid gap-6 md:grid-cols-2">
        {/* Left column: 2 stacked photos */}
        <div className="space-y-6">
          <div className="about-img overflow-hidden rounded-2xl">
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="about-img overflow-hidden rounded-2xl">
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
        <div className="space-y-6 md:pt-20">
          <div className="about-img overflow-hidden rounded-2xl">
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={800}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="about-img overflow-hidden rounded-2xl">
            <Image
              src={photos[3].src}
              alt={photos[3].alt}
              width={800}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="about-text pt-4">
            <p className="text-sm leading-7 text-gray-light">
              In an era of over-visibility, our challenge is meaning. Evolve builds authentic connections where every experience—physical or digital—belongs to the same story.
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-light">
              We believe commerce is culture. A coherent ecosystem where technology, design, and strategy merge to create living brands with enduring identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
