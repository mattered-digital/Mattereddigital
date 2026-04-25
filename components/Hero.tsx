"use client";

import { useRef, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";

const heroImages = [
  "/editorial-fashion.jpg",
  "/editorial-glass.jpg",
  "/editorial-redbook.jpg",
  "/editorial-tshirt.jpg",
  "/footer-bg.png"
];

const heroHeadingLines = [
  "MATTER",
  "MAKES",
  "MOMENTUM"
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const transitionRef = useRef<gsap.core.Timeline | null>(null);

  const animateImageTransition = useCallback((nextIndex: number) => {
    if (!imageContainerRef.current) return;

    const slides = imageContainerRef.current.querySelectorAll(".hero-slide");
    const currentSlide = slides[currentIndexRef.current];
    const nextSlide = slides[nextIndex];

    if (!currentSlide || !nextSlide || currentSlide === nextSlide) return;

    transitionRef.current?.kill();

    slides.forEach((slide, index) => {
      if (index !== currentIndexRef.current && index !== nextIndex) {
        gsap.set(slide, { opacity: 0, zIndex: 0, clipPath: "none" });
      }
    });

    const tl = gsap.timeline();

    gsap.set(nextSlide, {
      xPercent: 0,
      clipPath: "inset(0 0% 0 100%)",
      opacity: 1,
      zIndex: 2
    });

    gsap.set(currentSlide, {
      opacity: 1,
      xPercent: 0,
      zIndex: 1,
      clipPath: "inset(0 0% 0 0%)"
    });

    const nextImg = nextSlide.querySelector(".hero-image");

    tl.to(nextSlide, {
      clipPath: "inset(0 0% 0 0%)",
      duration: 3.2,
      ease: "power3.inOut"
    });

    if (nextImg) {
      tl.to(
        nextImg,
        {
          duration: 3.8,
          ease: "power2.out"
        },
        "<0.2"
      );
    }

    tl.call(() => {
      gsap.set(currentSlide, { opacity: 0, zIndex: 0, clipPath: "none" });
      gsap.set(nextSlide, { opacity: 1, zIndex: 1, clipPath: "none" });
      currentIndexRef.current = nextIndex;
    });

    transitionRef.current = tl;

    return tl;
  }, []);

  useGSAP(
    () => {
      if (!headingRef.current || !imageContainerRef.current) return;

      const words = headingRef.current.querySelectorAll(".hero-word");
      const cats = sectionRef.current?.querySelectorAll(".hero-element");

      // Initial states
      gsap.set(words, { yPercent: 120, opacity: 0 });

      // --- Entry animations ---
      // We reduce delay slightly since we want the image to "just be there" 
      const masterTl = gsap.timeline({ delay: 0.5 });

      // Animate hero words
      masterTl.to(words, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });

      // Category labels / Intro
      if (cats) {
        masterTl.fromTo(
          cats,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }
      
      const caseStudies = sectionRef.current?.querySelector(".hero-case-studies");
      if (caseStudies) {
        masterTl.to(caseStudies, { opacity: 1, duration: 1 }, "-=0.2");
      }

      // Main Hero Image Initial State (no entry wipe)
      const firstSlide = imageContainerRef.current.querySelector(".hero-slide");
      const firstImg = firstSlide?.querySelector(".hero-image");

      if (firstSlide) {
        gsap.set(firstSlide, { opacity: 1, xPercent: 0, zIndex: 2, clipPath: "none" });
        if (firstImg) {
          gsap.set(firstImg, { scale: 1, x: 0 });
        }
      }

      const otherSlides = imageContainerRef.current.querySelectorAll(".hero-slide:not(:first-child)");
      gsap.set(otherSlides, { opacity: 0, zIndex: 0, clipPath: "none" });

      gsap.to(imageContainerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      const startCarousel = () => {
        animateImageTransition((currentIndexRef.current + 1) % heroImages.length);

        intervalRef.current = setInterval(() => {
          animateImageTransition((currentIndexRef.current + 1) % heroImages.length);
        }, 5000);
      };

      masterTl.call(() => {
        setTimeout(startCarousel, 2000);
      });

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        transitionRef.current?.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-section"
    >
      {/* Hero image — full-bleed main background */}
      <div ref={imageContainerRef} className="hero-image-container">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-slide"
            style={{ opacity: i === 0 ? 1 : 0 }} // Only first image is visible initially
          >
            <div className="hero-slide-inner">
              <Image
                src={src}
                alt={`Hero visual ${i + 1}`}
                fill
                priority={i === 0}
                sizes="100vw"
                className="hero-image"
              />
              <div className="hero-image-overlay" />
            </div>
          </div>
        ))}
      </div>

      <div className="hero-screen-overlay" aria-hidden="true" />

      {/* Top element - Desktop: categories, Mobile: intros */}
      <div className="hero-top-elements relative z-20">
        <div className="hero-categories hidden md:flex">
          <span className="hero-element opacity-0">Brand Strategy</span>
          <span className="hero-element opacity-0">Creative Campaigns</span>
          <span className="hero-element opacity-0">Performance Marketing</span>
        </div>
        
        <div className="hero-intro-mobile md:hidden flex flex-col gap-[2px] mt-8 text-[11px] sm:text-[12px] font-mono tracking-wide text-white/80">
          <span className="hero-element opacity-0">hello@matter.com</span>
          <span className="hero-element opacity-0">New York, EST 2024</span>
          <div className="h-4"></div>
          <p className="hero-element opacity-0 leading-relaxed max-w-[260px] text-white">
            Matter® is a digital studio that blends strategy, design, and technology to craft meaningful experiences.
          </p>
        </div>
      </div>

      {/* Massive headline — bottom of hero */}
      <div ref={headingRef} className="hero-heading-wrap">
        <h1 className="heading-condensed hero-heading">
          {heroHeadingLines.map((line) => (
            <div key={line} className="overflow-hidden">
              <span className="hero-word inline-block">{line}</span>
            </div>
          ))}
        </h1>

        {/* Scroll indicator - mobile only, matching second image */}
        <div className="hero-case-studies md:hidden flex justify-between items-center text-[10px] font-mono tracking-widest text-white mt-12 mb-4 opacity-0">
          <span>[</span>
          <span className="uppercase">Matter Case Studies</span>
          <span>]</span>
        </div>
      </div>
    </section>
  );
}
