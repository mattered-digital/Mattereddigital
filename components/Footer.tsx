"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const heading = footerRef.current?.querySelector(".footer-heading");
      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} id="contact" className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/footer-bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 section-shell py-24 md:py-32">
        {/* CTA section */}
        <div className="text-center">
          <p className="section-heading mb-6">Get in touch</p>
          <h2 className="footer-heading heading-condensed mx-auto max-w-5xl text-hero-sm md:text-hero">
            LET&apos;S MAKE AN IMPACT TOGETHER.
          </h2>
          <a
            href="mailto:hello@madeinevolve.com"
            className="mt-8 inline-block border-b border-white/30 pb-1 font-mono text-sm uppercase tracking-label text-gray-light transition-colors hover:border-white hover:text-white"
          >
            hello@madeinevolve.com
          </a>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="relative z-10 section-shell border-t border-white/10 py-6">
        <div className="flex flex-col gap-3 text-xs uppercase tracking-label text-gray md:flex-row md:items-center md:justify-between">
          <p className="font-mono">✦ Evolve — Modena, EST 2008</p>
          <div className="flex gap-4 font-mono">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Behance
            </a>
          </div>
          <p className="font-mono">Next.js, Tailwind, GSAP, Lenis</p>
        </div>
      </div>
    </footer>
  );
}
