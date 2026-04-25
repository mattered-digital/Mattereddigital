"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const container = footerRef.current?.querySelector(".footer-logo-container");
      const logoText = footerRef.current?.querySelector(".footer-logo-text");
      
      if (logoText && container) {
        gsap.fromTo(
          logoText,
          { y: "150%" },
          {
            y: "0%",
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 75%", // Triggers reliably when the footer itself enters the viewport
              toggleActions: "play none none reverse",
            }
          }
        );
      }
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative flex flex-col justify-between overflow-hidden bg-black pt-24 sm:pt-32"
    >
      {/* Red gradient behind the text at the bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[70%] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#ff1a1a]/30 via-[#ff1a1a]/5 to-transparent opacity-90 lg:h-[80%]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#B71811] to-transparent" />

      {/* Top content grid */}
      <div className="relative z-10 section-shell mb-24 flex flex-col gap-16 md:flex-row md:justify-between lg:mb-32">
        {/* Left Column */}
        <div className="max-w-md md:w-5/12 lg:w-5/12">
          <h3 className="text-3xl font-medium tracking-tight text-white md:text-4xl lg:text-[40px] lg:leading-[1.1]">
            30+ projects shipped for startups and global teams.
          </h3>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:w-7/12 lg:w-1/2 md:gap-4">
          {/* Contact Column */}
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <div className="flex flex-col gap-1 text-white/70">
                <p>Matter agency</p>
                <p>New York, USA</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-white/70">
              <a href="mailto:hello@matter.agency" className="transition-colors hover:text-white">
                hello@matter.agency
              </a>
              <a href="tel:+442012345678" className="transition-colors hover:text-white">
                +44 20 1234 5678
              </a>
            </div>
          </div>

          {/* Pages Column */}
          <div className="flex flex-col text-sm">
            <h4 className="mb-4 font-semibold text-white">Pages</h4>
            <div className="flex flex-col gap-2.5 text-white/70">
              <a href="#" className="transition-colors hover:text-white">Home</a>
              <a href="#" className="transition-colors hover:text-white">Projects</a>
              <a href="#" className="transition-colors hover:text-white">Services</a>
              <a href="#" className="transition-colors hover:text-white">About us</a>
              <a href="#" className="transition-colors hover:text-white">Blog</a>
              <a href="#" className="transition-colors hover:text-white">Contact</a>
              <div className="mt-4 flex flex-col gap-2.5">
                <a href="#" className="transition-colors hover:text-white">Terms</a>
                <a href="#" className="transition-colors hover:text-white">Privacy policy</a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col text-sm">
            <h4 className="mb-4 font-semibold text-white">Links</h4>
            <div className="flex flex-col gap-2.5 text-white/70">
              <a href="#" className="transition-colors hover:text-white">LinkedIn</a>
              <a href="#" className="transition-colors hover:text-white">X</a>
              <a href="#" className="transition-colors hover:text-white">Instagram</a>
              <a href="#" className="transition-colors hover:text-white">Dribbble</a>
              <a href="#" className="transition-colors hover:text-white">Behance</a>
            </div>
          </div>
        </div>
      </div>

      {/* Huge Logo Text Section */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title container with overflow-hidden for the reveal upward */}
        <div className="footer-logo-container w-full overflow-hidden text-center px-4 pb-2 sm:px-8">
          <h1 className="footer-logo-text font-sans inline-block text-[22vw] w-full font-bold leading-[0.75] tracking-tighter text-white">
            Matter
          </h1>
        </div>

        {/* Copyright strip */}
        <div className="w-full text-center text-xs text-white/80 pb-6 pt-4 z-20 mix-blend-difference relative">
          All rights reserved &copy; 2026 Matter agency
        </div>
      </div>
    </footer>
  );
}
