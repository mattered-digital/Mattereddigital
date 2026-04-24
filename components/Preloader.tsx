"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          ScrollTrigger.refresh();
          setIsVisible(false);
        }
      });

      // Counter animation
      const counter = { value: 0 };
      tl.to(counter, {
        value: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(counter.value).toString();
          }
        }
      });

      // Progress bar
      tl.to(
        ".preloader-bar",
        { scaleX: 1, duration: 1.6, ease: "power2.inOut" },
        0
      );

      // Wipe out
      tl.to(
        ".preloader-bar",
        { opacity: 0, duration: 0.3 },
        "+=0.2"
      );
      tl.to(container, { yPercent: -100, duration: 0.6, ease: "power3.inOut" }, "-=0.1");
    }, container);

    return () => {
      document.body.style.overflow = previousOverflow;
      context.revert();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[130] flex flex-col items-center justify-center bg-black"
    >
      <p className="font-heading text-6xl font-bold uppercase tracking-tight md:text-8xl">
        MATTER
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-widest text-gray">
        Loading <span ref={counterRef}>0</span>%
      </p>
      <div className="mt-6 h-[1px] w-48 overflow-hidden bg-white/10">
        <div
          className="preloader-bar h-full w-full origin-left bg-white"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}
