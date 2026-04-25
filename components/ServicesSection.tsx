"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Creative excellence",
    description:
      "Experience our team's creative expertise in innovative, compelling design solutions.",
  },
  {
    title: "Customized solutions",
    description:
      "We customize services for your unique business needs with a personal touch.",
  },
  {
    title: "Full-stack expertise",
    description:
      "One team, all your needs. Development, design, and everything in between.",
  },
  {
    title: "Transparent communication",
    description:
      "Stay informed and involved with clear, open communication during the project.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards staggered reveal
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: "top 80%",
          },
        }
      );

      // Orb subtle float
      gsap.to(orbRef.current, {
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Card hover micro-interactions (via JS for precision)
      cardsRef.current.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.025,
            duration: 0.35,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.35,
            ease: "power2.inOut",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0e0a0a] px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-28"
    >
      {/* Noise grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Radial glow orbs */}
      <div
        ref={orbRef}
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "min(700px, 90vw)",
          height: "min(700px, 90vw)",
          background:
            "radial-gradient(circle, rgba(180,40,20,0.22) 0%, rgba(120,20,10,0.12) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        style={{
          width: "min(400px, 60vw)",
          height: "min(400px, 60vw)",
          background:
            "radial-gradient(circle, rgba(200,60,20,0.15) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* Decorative circle ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
        style={{ width: "min(800px, 95vw)", height: "min(800px, 95vw)" }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
        style={{ width: "min(550px, 80vw)", height: "min(550px, 80vw)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="mb-14 max-w-[820px] font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white opacity-0 sm:mb-16 lg:mb-20"
        >
          We prioritize exceptional customer service, meeting every client's
          needs across development &amp; design&nbsp;—&nbsp;with a great
          experience
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group relative cursor-default overflow-hidden border border-white/[0.07] bg-white/[0.025] p-8 opacity-0 backdrop-blur-sm sm:p-10"
              style={{ willChange: "transform" }}
            >
              {/* Card hover bg glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top accent line */}
              <div className="mb-6 h-px w-10 bg-gradient-to-r from-red-500 to-transparent transition-all duration-500 group-hover:w-20" />

              <h3 className="mb-3 font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-tight tracking-tight text-white">
                {service.title}
              </h3>
              <p className="text-[clamp(0.875rem,1.5vw,1rem)] leading-relaxed text-white/45">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}