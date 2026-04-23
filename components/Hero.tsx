"use client";

import { useRef, useState, useCallback } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";

const heroImages = [
  "/editorial-fashion.png",
  "/editorial-glass.png",
  "/editorial-redbook.png",
  "/editorial-tshirt.png",
];

const heroLinePositions = Array.from(
  { length: 40 },
  (_, index) => `${((index / 40) * 100).toFixed(3)}%`
);

const heroHeadingLines = [
  "ECOMMERCE",
  "INNOVATION",
  "PERFORMANCE",
  "AGENCY",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateImageTransition = useCallback((nextIndex: number) => {
    if (!imageContainerRef.current) return;

    const slides = imageContainerRef.current.querySelectorAll(".hero-slide");
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    if (!currentSlide || !nextSlide) return;

    const tl = gsap.timeline();

    // Set next slide initial state: off-screen to the right
    gsap.set(nextSlide, {
      xPercent: 100,
      opacity: 1,
      zIndex: 2,
    });
    gsap.set(currentSlide, { zIndex: 1 });

    // Scale-up the inner image for a Ken Burns feel
    const nextImg = nextSlide.querySelector(".hero-slide-inner");
    const currentImg = currentSlide.querySelector(".hero-slide-inner");
    if (nextImg) gsap.set(nextImg, { scale: 1.15, x: 40 });

    // Animate next slide in from right to left
    tl.to(nextSlide, {
      xPercent: 0,
      duration: 1.4,
      ease: "power3.inOut",
    });

    // Simultaneously push current slide slightly left
    tl.to(
      currentSlide,
      {
        xPercent: -30,
        duration: 1.4,
        ease: "power3.inOut",
      },
      "<"
    );

    // Animate the inner image of next slide (subtle pan)
    if (nextImg) {
      tl.to(
        nextImg,
        {
          scale: 1,
          x: 0,
          duration: 1.8,
          ease: "power2.out",
        },
        "<"
      );
    }

    // Subtle fade on current image
    if (currentImg) {
      tl.to(
        currentImg,
        {
          scale: 1.05,
          duration: 1.4,
          ease: "power2.inOut",
        },
        "<"
      );
    }

    // After transition, reset the old slide
    tl.call(() => {
      gsap.set(currentSlide, { xPercent: 100, opacity: 0, zIndex: 0 });
      gsap.set(currentSlide.querySelector(".hero-slide-inner"), {
        scale: 1,
        x: 0,
      });
      setCurrentIndex(nextIndex);
    });

    return tl;
  }, [currentIndex]);

  useGSAP(
    () => {
      if (!headingRef.current || !imageContainerRef.current) return;

      const words = headingRef.current.querySelectorAll(".hero-word");
      const lines = sectionRef.current?.querySelectorAll(".hero-line");
      const cats = sectionRef.current?.querySelectorAll(".hero-cat");

      // Initial states
      gsap.set(words, { yPercent: 120, opacity: 0 });

      // --- Entry animations ---
      const masterTl = gsap.timeline({ delay: 2.2 });

      // Animate hero words
      masterTl.to(words, {
        yPercent: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
      });

      // Animate decorative lines
      if (lines) {
        masterTl.fromTo(
          lines,
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            stagger: 0.06,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }

      // Category labels
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

      // Hero image entry: reveal from right to left with clip-path
      const firstSlide = imageContainerRef.current.querySelector(".hero-slide");
      const firstImg = firstSlide?.querySelector(".hero-slide-inner");

      if (firstSlide) {
        gsap.set(firstSlide, { opacity: 1, xPercent: 0, zIndex: 2 });
        if (firstImg) {
          gsap.set(firstImg, { scale: 1.2, x: 60 });
        }

        masterTl.fromTo(
          firstSlide,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.6,
            ease: "power3.inOut",
          },
          "-=1.2"
        );

        if (firstImg) {
          masterTl.to(
            firstImg,
            {
              scale: 1,
              x: 0,
              duration: 2,
              ease: "power2.out",
            },
            "-=1.4"
          );
        }
      }

      // Parallax on the hero image container
      gsap.to(imageContainerRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Start auto-cycling images after entry
      masterTl.call(() => {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => {
            const next = (prev + 1) % heroImages.length;
            animateImageTransition(next);
            return prev; // actual state update happens in the callback
          });
        }, 4500);
      });

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
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
      {/* Decorative vertical lines */}
      <div className="hero-lines" aria-hidden="true">
        {heroLinePositions.map((left) => (
          <span key={left} className="hero-line" style={{ left }} />
        ))}
      </div>

      {/* Hero image — full-bleed */}
      <div ref={imageContainerRef} className="hero-image-container">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-slide"
            style={{ opacity: i === 0 ? 1 : 0 }}
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

      {/* Top category labels — positioned across the hero like the reference */}
      <div className="hero-categories">
        <span className="hero-cat opacity-0">Brand Direction</span>
        <span className="hero-cat opacity-0">Performance Marketing</span>
        <span className="hero-cat opacity-0">Advanced Tech</span>
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
      </div>
    </section>
  );
}
