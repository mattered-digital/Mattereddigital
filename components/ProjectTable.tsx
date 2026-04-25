"use client";

import Image from "next/image";
import { useRef } from "react";
import { caseStudies } from "@/data/projects";
import { gsap, useGSAP } from "@/lib/gsap";

export default function ProjectTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const activeIdRef = useRef<string | null>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".cs-row");
      const previewImages = gsap.utils.toArray<HTMLElement>(".cs-preview-image");

      gsap.set(previewRef.current, { autoAlpha: 0, scale: 0.96 });
      gsap.set(previewImages, { autoAlpha: 0, scale: 0.96, y: 18 });

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

  const showProjectImage = (projectId: string) => {
    const preview = previewRef.current;
    const activeImage = imageRefs.current[projectId];

    if (!preview || !activeImage) return;

    const isSameProject = activeIdRef.current === projectId;
    activeIdRef.current = projectId;

    gsap.killTweensOf(preview);
    gsap.to(preview, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.22,
      ease: "power2.out"
    });

    Object.entries(imageRefs.current).forEach(([id, image]) => {
      if (!image || id === projectId) return;

      gsap.killTweensOf(image);
      gsap.to(image, {
        autoAlpha: 0,
        scale: 0.96,
        y: -14,
        duration: 0.22,
        ease: "power2.out"
      });
    });

    if (isSameProject) return;

    gsap.killTweensOf(activeImage);
    gsap.fromTo(
      activeImage,
      {
        autoAlpha: 0,
        clipPath: "inset(18% 0% 18% 0%)",
        scale: 0.86,
        y: 28
      },
      {
        autoAlpha: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      }
    );
  };

  const hideProjectImage = () => {
    activeIdRef.current = null;

    gsap.to(previewRef.current, {
      autoAlpha: 0,
      scale: 0.96,
      duration: 0.28,
      ease: "power2.inOut"
    });
  };

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen py-0">
      {/* Header row */}
      <div className="section-shell relative z-20 py-4 md:py-8">
        <div className="mono-row hidden md:grid grid-cols-[1.2fr_1fr_1fr_1.5fr] gap-4 text-gray">
          <span>Client</span>
          <span>Focus</span>
          <span className="text-center">
            ( MATTER WORK )
          </span>
          <span className="text-right">Scope</span>
        </div>
      </div>

      {/* Body rows */}
      <div
        className="section-shell relative min-h-[720px] overflow-visible pb-20 pt-24 md:pt-28"
        onPointerLeave={hideProjectImage}
      >
        <div
          ref={previewRef}
          className="pointer-events-none fixed left-1/2 top-1/2 z-0 hidden aspect-[7/8] w-[min(31vw,464px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden md:block"
          aria-hidden="true"
        >
          {caseStudies.map((cs, index) => (
            <div
              key={cs.id}
              ref={(node) => {
                imageRefs.current[cs.id] = node;
              }}
              className="cs-preview-image absolute inset-0 overflow-hidden"
            >
              <Image
                src={cs.image}
                alt=""
                fill
                priority={index < 4}
                sizes="(min-width: 768px) 38vw, 0px"
                className="object-cover"
              />
              <span className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        <div className="relative z-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              tabIndex={0}
              onFocus={() => showProjectImage(cs.id)}
              onBlur={hideProjectImage}
              onPointerEnter={() => showProjectImage(cs.id)}
              className="cs-row group relative overflow-visible outline-none w-full border-b border-white/20 last:border-b-0 md:border-b-0"
            >
              {/* Mobile Layout */}
              <div className="grid grid-cols-2 gap-x-4 py-8 md:hidden relative w-full">
                <div className="flex flex-col pr-2">
                  <h3
                    className="mb-4 text-[26px] font-medium tracking-tight text-white lowercase"
                    style={{ textTransform: "capitalize" }}
                  >
                    {cs.partner.toLowerCase()}
                  </h3>
                  <div className="font-mono text-[10px] uppercase leading-[16px] text-white opacity-80">
                    <p>{cs.platform}</p>
                    <br />
                    <p>{cs.services.join(", ")}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                    <Image
                      src={cs.image}
                      alt={cs.partner}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 0px"
                    />
                  </div>
                  <div className="w-full bg-white px-2 py-[6px] text-center font-mono text-[11px] text-black">
                    Explore {cs.partner.charAt(0) + cs.partner.slice(1).toLowerCase()}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="mono-row relative hidden w-full items-center gap-4 py-0 md:grid md:min-h-[56px] md:grid-cols-[1.2fr_1fr_1fr_1.5fr]">
                <span className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-5 -translate-y-1/2 scale-x-0 bg-white opacity-0 transition-[opacity,transform] duration-200 ease-out group-hover:scale-x-100 group-hover:opacity-100 group-focus:scale-x-100 group-focus:opacity-100" />

                <span className="relative z-10 whitespace-nowrap text-[13px] font-medium leading-none text-white transition-colors duration-200 group-hover:text-black group-focus:text-black">
                  {cs.partner}
                </span>
                <span className="relative z-10 whitespace-nowrap text-[13px] leading-none text-gray-light transition-colors duration-200 group-hover:text-black group-focus:text-black">
                  {cs.platform}
                </span>
                <span className="relative z-10 hidden whitespace-nowrap text-center text-[13px] leading-none text-gray transition-colors duration-200 group-hover:text-black group-focus:text-black md:block">
                  {cs.index}
                </span>
                <span className="relative z-10 truncate whitespace-nowrap text-right text-[13px] leading-none text-gray-light transition-colors duration-200 group-hover:text-black group-focus:text-black">
                  {cs.services.join(", ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
