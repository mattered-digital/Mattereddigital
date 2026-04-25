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
      {/* Mobile Layout: Evolve Style */}
      <div className="md:hidden w-full pt-6 pb-24 flex flex-col relative px-[4%]">
         
         {/* Row 1: Left Image and Contact Text */}
         <div className="flex w-full justify-between items-end relative z-10">
            {/* Left Image */}
            <div className="w-[48%]">
               <div className="about-img relative overflow-hidden w-full aspect-[4/5]">
                  <Image src={photos[0].src} alt={photos[0].alt} fill sizes="50vw" className="object-cover grayscale" />
               </div>
            </div>
            {/* Contact Text */}
            <div className="w-[45%] pb-4">
               <p className="text-[10px] leading-[1.4] text-white/90 font-sans tracking-tight">
                 hello@matter.com<br/>
                 New York, EST 2024
               </p>
            </div>
         </div>

         {/* Row 2: Right Image */}
         <div className="flex w-full justify-end mt-4 relative z-20">
            <div className="w-[50%]">
               <div className="about-img relative overflow-hidden w-full aspect-[3/4]">
                  <Image src={photos[1].src} alt={photos[1].alt} fill sizes="50vw" className="object-cover" />
               </div>
            </div>
         </div>

         {/* Row 3: Middle Text block */}
         <div className="w-full mt-12 relative z-30">
            <div className="about-text w-[85%]">
               <p className="text-[14px] leading-[1.5] font-sans font-medium text-white tracking-tight">
                  Matter is a multi-disciplinary cultural hub that focuses on partnering creatives with brands to produce innovative stories.
               </p>
            </div>
         </div>

         {/* Row 4: Left Image 2 */}
         <div className="flex w-full mt-12 relative z-10">
            <div className="w-[48%]">
               <div className="about-img relative overflow-hidden w-full aspect-[4/5]">
                  <Image src={photos[2].src} alt={photos[2].alt} fill sizes="50vw" className="object-cover" />
               </div>
            </div>
         </div>

         {/* Row 5: Right Image 2 */}
         <div className="flex w-full justify-end mt-[-10%] relative z-20">
            <div className="w-[48%]">
               <div className="about-img relative overflow-hidden w-full aspect-[1/1]">
                  <Image src={photos[3].src} alt={photos[3].alt} fill sizes="50vw" className="object-cover grayscale" />
               </div>
            </div>
         </div>
      </div>

      {/* Desktop Layout: 2-Column Asymmetrical Grid like Evolve */}
      <div className="hidden md:flex w-full justify-between items-stretch md:pb-16 lg:pb-24">
        {/* Left side: Images Columns */}
        <div className="w-[58%] lg:w-[62%] flex gap-4 lg:gap-8">
          
          {/* Left Image Column */}
          <div className="w-1/2 flex flex-col gap-4 lg:gap-8 md:mt-24 lg:mt-32 relative z-10">
            <div className="about-img relative overflow-hidden w-full aspect-[4/5]">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover grayscale"
              />
            </div>
            <div className="about-img relative overflow-hidden w-full aspect-[1/1] xl:aspect-[4/3]">
              <Image
                src={photos[2].src}
                alt={photos[2].alt}
                fill
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-1/2 flex flex-col gap-4 lg:gap-8 relative z-20">
            <div className="about-img relative overflow-hidden w-full aspect-[3/4]">
              <Image
                src={photos[1].src}
                alt={photos[1].alt}
                fill
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="about-img relative overflow-hidden w-full aspect-[5/4] xl:aspect-[4/3]">
              <Image
                src={photos[3].src}
                alt={photos[3].alt}
                fill
                sizes="(max-width: 1024px) 30vw, 25vw"
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>

        {/* Right side: Text Block aligned to bottom right */}
        <div className="w-[38%] lg:w-[32%] flex flex-col justify-end mb-16 lg:mb-32 pl-6 lg:pl-16 relative z-30">
          <div className="about-text flex flex-col gap-6">
            <p className="text-[13px] lg:text-[14px] leading-[1.6] text-white/90 font-sans tracking-tight">
              Matter is a multi-disciplinary cultural hub that focuses on partnering creatives with brands to produce innovative stories. The real challenge is no longer visibility, but meaning.
            </p>
            <p className="text-[13px] lg:text-[14px] leading-[1.6] text-white/90 font-sans tracking-tight">
              We connect strategy, content, paid media, and conversion design so every touchpoint feels like part of the same system, not a pile of disconnected tactics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
