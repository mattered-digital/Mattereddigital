"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";

const heroImages = [
  "/editorial-fashion.png",
  "/editorial-glass.png",
];

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
  const smallImageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!headingRef.current || !imageContainerRef.current || !smallImageRef.current) return;

      const words = headingRef.current.querySelectorAll(".hero-word");
      const cats = sectionRef.current?.querySelectorAll(".hero-cat");

      // Initial states
      gsap.set(words, { yPercent: 120, opacity: 0 });
      gsap.set(smallImageRef.current, { xPercent: 120, opacity: 0 }); // start small image offscreen to right

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

      // Main Hero Image Entry
      const mainSlide = imageContainerRef.current.querySelector(".hero-slide");
      const mainImg = mainSlide?.querySelector(".hero-image");

      if (mainSlide) {
        if (mainImg) {
          gsap.set(mainImg, { scale: 1.2, x: 60 });
        }

        masterTl.fromTo(
          mainSlide,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.6,
            ease: "power3.inOut",
          },
          "-=1.2"
        );

        if (mainImg) {
          masterTl.to(
            mainImg,
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

      // Small image entry (smooth transition right to left)
      masterTl.to(
        smallImageRef.current,
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
        },
        "-=1.6" // start simultaneously with the main image
      );

      const smallInnerImg = smallImageRef.current.querySelector("img");
      if (smallInnerImg) {
        masterTl.fromTo(
          smallInnerImg,
          { scale: 1.2, x: 40 },
          { scale: 1, x: 0, duration: 2, ease: "power2.out" },
          "-=1.6"
        );
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

      gsap.to(smallImageRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
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
        <div
          className="hero-slide opacity-100"
        >
          <div className="hero-slide-inner">
            <Image
              src={heroImages[0]}
              alt="Main Hero Visual"
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
            <div className="hero-image-overlay" />
          </div>
        </div>
      </div>

      <div className="hero-screen-overlay" aria-hidden="true" />

      {/* Small floating image on the right */}
      <div
        ref={smallImageRef}
        className="absolute z-[15] hidden md:block overflow-hidden"
        style={{
          right: "8vw",
          top: "40%",
          width: "22vw",
          height: "32vw",
          maxWidth: "300px",
          maxHeight: "420px",
        }}
      >
        <Image
          src={heroImages[1]}
          alt="Secondary Hero Visual"
          fill
          sizes="33vw"
          className="object-cover object-center"
        />
      </div>

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
