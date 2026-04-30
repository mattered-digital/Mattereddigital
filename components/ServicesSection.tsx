"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Custom Web\nSolutions",
    description:
      "High-performance, scalable web applications built with modern frameworks like Next.js to solve complex business challenges.",
  },
  {
    title: "Digital\nMarketing",
    description:
      "Data-driven marketing strategies that amplify your brand reach and drive measurable ROI through targeted acquisition.",
  },
  {
    title: "UI/UX\nDesign",
    description:
      "User-centric interfaces that blend aesthetic excellence with intuitive functionality for seamless digital experiences.",
  },
  {
    title: "AI & Custom\nTools",
    description:
      "Intelligent AI agents and bespoke automation tools designed to solve complex operational challenges and scale your business.",
  },
  {
    title: "Growth\nStrategy",
    description:
      "Data-driven roadmaps that align your technical infrastructure with your long-term business and marketing goals.",
  },
  {
    title: "E-commerce\nEngineering",
    description:
      "Bespoke online shopping experiences built with Shopify Plus or custom headless architectures for global scaling.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Hover scale
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const enter = () => window.innerWidth >= 768 && gsap.to(card, { scale: 1.05, duration: 0.4, ease: "power2.out", transformOrigin: "left center" });
        const leave = () => window.innerWidth >= 768 && gsap.to(card, { scale: 1, duration: 0.4, ease: "power2.out", transformOrigin: "left center" });
        card.addEventListener("mouseenter", enter);
        card.addEventListener("mouseleave", leave);
        return () => {
          card.removeEventListener("mouseenter", enter);
          card.removeEventListener("mouseleave", leave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0b] px-6 py-24 md:flex md:flex-col md:items-center md:justify-center md:py-32"
    >
      {/* RED GLOW OVERLAYS */}
      <div className="pointer-events-none absolute bottom-[10%] left-[-30%] h-[70vh] w-[40vw] rounded-full bg-[#ff3b00] opacity-[0.25] mix-blend-screen blur-[120px] md:bottom-[-10%] md:left-[-25%] md:h-[90vh] md:w-[45vw] md:opacity-[0.35]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-30%] h-[70vh] w-[40vw] rounded-full bg-[#ff3b00] opacity-[0.25] mix-blend-screen blur-[120px] md:bottom-[-10%] md:right-[-25%] md:h-[90vh] md:w-[45vw] md:opacity-[0.35]" />

      {/* TEXTURE OVERLAYS (Masked to glows) */}
      <div 
        className="pointer-events-none absolute bottom-[10%] left-[-30%] z-0 h-[70vh] w-[40vw] scale-150 opacity-[0.15] mix-blend-overlay md:bottom-[-10%] md:left-[-25%] md:h-[90vh] md:w-[45vw]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(closest-side, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(closest-side, black 20%, transparent 80%)'
        }}
      />
      <div 
        className="pointer-events-none absolute bottom-[10%] right-[-30%] z-0 h-[70vh] w-[40vw] scale-150 opacity-[0.15] mix-blend-overlay md:bottom-[-10%] md:right-[-25%] md:h-[90vh] md:w-[45vw]"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(closest-side, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(closest-side, black 20%, transparent 80%)'
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* HEADING */}
        <div className="mx-auto mb-16 w-full max-w-[850px] md:mb-24">
          <h2
            ref={headingRef}
            className="text-left text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-[1.15] tracking-tight text-white opacity-0"
          >
            We provide specialized engineering and digital marketing expertise —
            delivering custom solutions that drive measurable business growth.
          </h2>
        </div>

        {/* CIRCLE SYSTEM / CARDS GRID */}
        <div className="relative mx-auto w-full max-w-[850px]">
          
          {/* Background Graphics (Anchored and shifted upwards to center over the entire content block) */}
          <div className="pointer-events-none absolute left-1/2 top-[50%] z-0 block -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-[500px] w-[500px] items-center justify-center sm:h-[600px] sm:w-[600px] md:h-[800px] md:w-[800px] lg:h-[850px] lg:w-[850px]">
              {/* Outer circle */}
              <div className="absolute inset-0 rounded-full border border-white/10" />

              {/* Inner circle */}
              <div className="absolute h-[55%] w-[55%] rounded-full border border-white/5" />

              {/* Cross lines */}
              <div className="absolute h-px w-[200vw] bg-white/10" />
              <div className="absolute h-[200vh] w-px bg-white/10" />

              {/* Diagonal lines */}
              <div className="absolute h-px w-[200vw] rotate-45 bg-white/5" />
              <div className="absolute h-px w-[200vw] -rotate-45 bg-white/5" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="relative z-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:gap-x-20 md:gap-y-5 lg:gap-x-24 lg:gap-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="flex flex-col justify-center py-6 opacity-0 md:py-10 lg:py-0"
              >
                <div className="flex flex-col text-left">
                  <h3 className="whitespace-pre-line text-[1.75rem] font-medium leading-[1.2] tracking-tight text-white md:text-[2rem]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-white/50 md:mt-4 md:pr-4 lg:pr-12">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}