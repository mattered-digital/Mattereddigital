"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    if (id.startsWith("/")) {
      if (pathname === id) {
        gsap.to(window, { duration: 1.15, ease: "power3.inOut", scrollTo: 0 });
      } else {
        router.push(id);
      }
      return;
    }

    if (id === "home") {
      if (pathname === "/") {
        gsap.to(window, { duration: 1.15, ease: "power3.inOut", scrollTo: 0 });
      } else {
        router.push("/");
      }
      return;
    }

    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const target = document.getElementById(id);
    if (target === null) return;

    gsap.to(window, {
      duration: 1.15,
      ease: "power3.inOut",
      scrollTo: { y: target, offsetY: 88 }
    });
  };

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
            25+ custom solutions delivered for startups and global teams.
          </h3>
        </div>

        {/* Right Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10  md:w-7/12 lg:w-1/2 md:gap-4">
          {/* Contact Column */}
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <h4 className="mb-4 font-semibold text-white">Contact</h4>
              <div className="flex flex-col gap-1 text-white/70">
                <p>Matter agency</p>
                <p>Patna, Bihar</p>
                <hr className="my-1 border-white/20 w-8" />
                <p>Mathura, Uttar Pradesh</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 text-white/70">
              <a href="mailto:hi@mattered.digital" className="transition-colors hover:text-white">
                hi@mattered.digital
              </a>
              <a href="tel:+919430558276" className="transition-colors hover:text-white">
                +91 94305 58276
              </a>
            </div>
          </div>

          {/* Pages Column */}
          <div className="flex flex-col text-sm">
            <h4 className="mb-4 font-semibold text-white">Pages</h4>
            <div className="flex flex-col gap-2.5 text-white/70">
              <Link href="/" className="text-left transition-colors hover:text-white">Home</Link>
              <Link href="/projects" className="text-left transition-colors hover:text-white">Projects</Link>
              <Link href="/services" className="text-left transition-colors hover:text-white">Services</Link>
              <Link href="/about" className="text-left transition-colors hover:text-white">About us</Link>
              <Link href="/contact" className="text-left transition-colors hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col text-sm">
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <div className="flex flex-col gap-2.5 text-white/70">
              <Link href="/services/custom-web-solutions" className="transition-colors hover:text-white">Web Development</Link>
              <Link href="/services/digital-marketing" className="transition-colors hover:text-white">Digital Marketing & SEO</Link>
              <Link href="/services/ui-ux-design" className="transition-colors hover:text-white">UI/UX Design</Link>
              <Link href="/services/ai-automation" className="transition-colors hover:text-white">AI & Automation</Link>
              <Link href="/services/mobile-app-development" className="transition-colors hover:text-white">Mobile Apps</Link>
              <Link href="/services/custom-crm" className="transition-colors hover:text-white">Custom CRM</Link>
            </div>
          </div>

       
        </div>
      </div>

      {/* Huge Logo Text Section */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Title container with overflow-hidden for the reveal upward */}
        <div className="footer-logo-container w-full overflow-hidden text-center px-4 pb-2 sm:px-8">
          <span className="footer-logo-text font-sans inline-block text-[22vw] w-full font-bold leading-[0.75] tracking-tighter text-white" aria-hidden="true">
            Matter
          </span>
        </div>

        {/* Copyright strip */}
        <div className="w-full text-center text-xs text-white/80 pb-6 pt-4 z-20 mix-blend-difference relative">
          All rights reserved &copy; 2026 Matter agency
        </div>
      </div>
    </footer>
  );
}
