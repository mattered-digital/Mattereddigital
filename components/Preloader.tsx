"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const words = ["Evolve", "Expand", "Endure"];

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const context = gsap.context(() => {
      const wordNodes = gsap.utils.toArray<HTMLElement>(".preloader-word");
      gsap.set(wordNodes, { yPercent: 120, opacity: 0 });

      const timeline = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          ScrollTrigger.refresh();
          setIsVisible(false);
        }
      });

      wordNodes.forEach((word) => {
        timeline
          .to(word, { yPercent: 0, opacity: 1, duration: 0.45 })
          .to(word, { yPercent: -120, opacity: 0, duration: 0.45 }, "+=0.15");
      });

      timeline.to(container, { autoAlpha: 0, duration: 0.5 }, "-=0.15");
    }, container);

    return () => {
      document.body.style.overflow = previousOverflow;
      context.revert();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[130] flex items-center justify-center bg-black"
    >
      <div className="space-y-2 text-center">
        <p className="section-heading">Launching the new velocity</p>
        <div className="h-14 overflow-hidden md:h-20">
          {words.map((word) => (
            <div
              key={word}
              className="preloader-word font-serif text-4xl italic md:text-6xl"
            >
              {word}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
