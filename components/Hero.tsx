"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";

const heroImages = [
  "/editorial-fashion.png",
  "/editorial-glass.png",
  "/editorial-redbook.png",
  "/editorial-tshirt.png",
  "/footer-bg.png", // Added more images from public folder
];

const heroHeadingLines = [
  "ECOMMERCE",
  "PERFORMANCE",
  "AGENCY",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateImageTransition = useCallback((nextIndex: number) => {
    if (!imageContainerRef.current) return;

    const slides = imageContainerRef.current.querySelectorAll(".hero-slide");
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[nextIndex];

    if (!currentSlide || !nextSlide) return;

    const tl = gsap.timeline();

    // Set next slide initial state: off-screen LEFT via clip-path (inset from right)
    gsap.set(nextSlide, {
      xPercent: 0,
      clipPath: "inset(0 0% 0 100%)", // wiped out from the right (meaning it will enter from the left)
      opacity: 1,
      zIndex: 2,
    });
    
    // Ensure current slide is underneath and static
    gsap.set(currentSlide, { 
      xPercent: 0, 
      zIndex: 1,
      clipPath: "inset(0 0% 0 0%)"
    });

    // Use .hero-image to precisely match the initial load animation
    const nextImg = nextSlide.querySelector(".hero-image");
    const currentImg = currentSlide.querySelector(".hero-image");
    
    // Animate next slide wiping in from LEFT to RIGHT using clip-path
    tl.to(nextSlide, {
      clipPath: "inset(0 0% 0 0%)",
      duration: 3.2, // Increased duration
      ease: "power3.inOut",
    });

    // Delay the inner image effect strictly behind the wipe
    if (nextImg) {
      tl.to(
        nextImg,
        {
          duration: 3.8, // Increased duration for smoother settling
          ease: "power2.out",
        },
        "<0.2" 
      );
    }

    // After transition, hide and reset the previous slide
    tl.call(() => {
      gsap.set(currentSlide, { opacity: 0, zIndex: 0, clipPath: "none" }); 
      setCurrentIndex(nextIndex);
    });

    return tl;
  }, [currentIndex]);

  useGSAP(
    () => {
      if (!headingRef.current || !imageContainerRef.current) return;

      const words = headingRef.current.querySelectorAll(".hero-word");
      const cats = sectionRef.current?.querySelectorAll(".hero-cat");

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

      // Main Hero Image Initial State (no entry wipe)
      const firstSlide = imageContainerRef.current.querySelector(".hero-slide");
      const firstImg = firstSlide?.querySelector(".hero-image");

      if (firstSlide) {
        gsap.set(firstSlide, { opacity: 1, xPercent: 0, zIndex: 2, clipPath: "none" });
        if (firstImg) {
          gsap.set(firstImg, { scale: 1, x: 0 }); // Image is completely static on load
        }
      }

      // Parallax on the hero image containers
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

      // To do the first transition after exactly 2 seconds of the text finishing 
      // (or shortly after load), we handle it explicitly:
      const startCarousel = () => {
        // Fire the first transition
        setCurrentIndex((prev) => {
          const next = (prev + 1) % heroImages.length;
          animateImageTransition(next);
          return prev;
        });

        // Set the continuous interval sequence
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => {
            const next = (prev + 1) % heroImages.length;
            animateImageTransition(next);
            return prev;
          });
        }, 5000); 
      };

      // Trigger the slide precisely 2 seconds after the texts animate in
      masterTl.call(() => {
        setTimeout(startCarousel, 2000);
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

      {/* Top category labels */}
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
