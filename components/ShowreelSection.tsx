"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const lines = [
  "STRATEGY SETS THE SIGNAL.",
  "CREATIVE EARNS THE ATTENTION.",
  "MATTER TURNS IT INTO GROWTH."
];

export default function ShowreelSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const lineElements = gsap.utils.toArray<HTMLElement>(".showreel-line");

      lineElements.forEach((line) => {
        gsap.fromTo(
          line,
          { color: "rgba(255,255,255,0.15)" },
          {
            color: "rgba(255,255,255,1)",
            ease: "none",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "top 40%",
              scrub: true
            }
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="showreel" className="section-shell py-24 md:py-40">
      {/* Big text block */}
      <div className="max-w-6xl">
        {lines.map((line, i) => (
          <p
            key={i}
            className="showreel-line heading-condensed text-hero-sm md:text-statement lg:text-[clamp(3rem,5.5vw,5.5rem)]"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Video / image block */}
      <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/10">
        <div className="aspect-video w-full">
          <img
            src="/editorial-glass.png"
            alt="Matter campaign reel preview"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Tech overlay corners */}
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
          <p>00:00:24</p>
          <p>REC●</p>
        </div>
        <div className="absolute right-4 top-4 text-right font-mono text-[10px] uppercase tracking-widest text-white/50">
          <p>4K 60FPS</p>
          <p>3840×2160</p>
        </div>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
          <p>MATTER CAMPAIGN REEL 2026</p>
        </div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-white/50">
          <p>▶ PLAY</p>
        </div>
      </div>
    </section>
  );
}
