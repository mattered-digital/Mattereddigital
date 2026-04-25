"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Creative\nexcellence",
    description:
      "Experience our team's creative expertise in innovative, compelling design solutions.",
  },
  {
    title: "Customized\nsolutions",
    description:
      "We customize services for your unique business needs with a personal touch.",
  },
  {
    title: "Full-stack\nexpertise",
    description:
      "One team, all your needs. Development, design, and everything in between.",
  },
  {
    title: "Transparent\ncommunication",
    description:
      "Stay informed and involved with clear, open communication during the project.",
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
      <div className="pointer-events-none absolute bottom-[10%] left-[-20%] h-[70vh] w-[50vw] rounded-full bg-[#ff3b00] opacity-[0.25] mix-blend-screen blur-[120px] md:bottom-[-10%] md:h-[80vh] md:w-[60vw] md:opacity-[0.35]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-20%] h-[70vh] w-[50vw] rounded-full bg-[#ff3b00] opacity-[0.25] mix-blend-screen blur-[120px] md:bottom-[-10%] md:h-[80vh] md:w-[60vw] md:opacity-[0.35]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* HEADING */}
        <div className="mx-auto mb-20 w-full max-w-[850px] md:mb-32">
          <h2
            ref={headingRef}
            className="text-left text-[clamp(2.2rem,4vw,3.2rem)] font-medium leading-[1.15] tracking-tight text-white opacity-0"
          >
            We prioritize exceptional customer service, meeting every client's
            needs across development & design — with a great experience
          </h2>
        </div>

        {/* CIRCLE SYSTEM / CARDS GRID */}
        <div className="relative mx-auto w-full max-w-[850px]">
          
          {/* Background Graphics (Anchored to exact center of the cards grid) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="relative flex h-[1200px] w-[1200px] items-center justify-center">
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
          <div className="relative z-10 grid w-full grid-cols-1 gap-16 sm:grid-cols-2 md:gap-x-24 md:gap-y-28 lg:gap-x-32 lg:gap-y-36">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="flex flex-col justify-center py-6 opacity-0 md:py-16 lg:py-20"
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