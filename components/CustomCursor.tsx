"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
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
    if (!isEnabled || !cursorRef.current) {
      return;
    }

    const cursor = cursorRef.current;
    const moveX = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out"
    });
    const moveY = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out"
    });
    const scale = gsap.quickTo(cursor, "scale", {
      duration: 0.2,
      ease: "power3.out"
    });

    const handleMove = (event: MouseEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
      gsap.to(cursor, { autoAlpha: 1, duration: 0.2, overwrite: true });
    };

    const handleDown = () => scale(0.7);
    const handleUp = () => scale(1);
    const handleLeave = () =>
      gsap.to(cursor, { autoAlpha: 0, duration: 0.2, overwrite: true });

    gsap.set(cursor, {
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
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-8 w-8 items-center justify-center mix-blend-difference md:flex"
    >
      <span className="absolute inset-0 rounded-full border border-white/50 bg-white/10" />
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
    </div>
  );
}
