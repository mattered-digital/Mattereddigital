"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updatePointer();
    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      mediaQuery.removeEventListener("change", updatePointer);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled || !dotRef.current || !ringRef.current) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Movement for the central dot (snappy, highly responsive)
    const moveDotX = gsap.quickTo(dot, "x", {
      duration: 0.1,
      ease: "power3.out"
    });
    const moveDotY = gsap.quickTo(dot, "y", {
      duration: 0.1,
      ease: "power3.out"
    });

    // Movement for the trailing ring (smooth, delayed)
    const moveRingX = gsap.quickTo(ring, "x", {
      duration: 0.4,
      ease: "power3.out"
    });
    const moveRingY = gsap.quickTo(ring, "y", {
      duration: 0.4,
      ease: "power3.out"
    });

    const scaleRing = gsap.quickTo(ring, "scale", {
      duration: 0.3,
      ease: "power3.out"
    });
    const scaleDot = gsap.quickTo(dot, "scale", {
      duration: 0.3,
      ease: "power3.out"
    });

    const handleMove = (event: MouseEvent) => {
      moveDotX(event.clientX);
      moveDotY(event.clientY);
      moveRingX(event.clientX);
      moveRingY(event.clientY);

      // Ensure they become visible on first move
      gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
    };

    const handleDown = () => {
      scaleRing(0.6);
      scaleDot(0.8);
    };
    
    const handleUp = () => {
      scaleRing(1);
      scaleDot(1);
    };
    
    const handleLeave = () => {
      gsap.to([dot, ring], { autoAlpha: 0, duration: 0.3, overwrite: "auto" });
    };

    gsap.set(dot, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0
    });
    
    gsap.set(ring, {
      xPercent: -50,
      yPercent: -50,
      autoAlpha: 0
    });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 mix-blend-difference rounded-full border border-white md:block"
        style={{ willChange: 'transform' }}
      >
        <span className="absolute inset-0 rounded-full border border-white/20 bg-white/5" />
      </div>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden h-[6px] w-[6px] mix-blend-difference rounded-full bg-white md:block"
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
