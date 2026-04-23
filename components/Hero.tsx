"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current) return;

      const words = headingRef.current.querySelectorAll(".hero-word");

      gsap.set(words, { yPercent: 120, opacity: 0 });

      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        delay: 2.2
      });

      // Parallax on the hero image
      const heroImg = sectionRef.current?.querySelector(".hero-bg");
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Category labels stagger in
      const cats = sectionRef.current?.querySelectorAll(".hero-cat");
      if (cats) {
        gsap.fromTo(
          cats,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
            delay: 2.8
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden pb-10 pt-32 section-shell"
    >
      {/* Background image with overlay */}
      <div className="hero-bg absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/editorial-fashion.png')",
            filter: "brightness(0.25) saturate(0.6)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
      </div>

      {/* Top category labels */}
      <div className="relative z-10 mb-auto flex flex-wrap gap-6 pt-8 text-[11px] uppercase tracking-label text-gray-light">
        <span className="hero-cat opacity-0">Brand Direction</span>
        <span className="hero-cat opacity-0">Performance Marketing</span>
        <span className="hero-cat opacity-0">Advanced Tech</span>
      </div>

      {/* Massive headline */}
      <div ref={headingRef} className="relative z-10 mt-auto">
        <h1 className="heading-condensed text-hero leading-[0.85]">
          <div className="overflow-hidden">
            <span className="hero-word inline-block">ECOMMERCE</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word inline-block">INNOVATION</span>
          </div>
          <div className="overflow-hidden">
            <span className="hero-word inline-block">AGENCY</span>
          </div>
        </h1>
      </div>
    </section>
  );
}
