"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function ContactHeroHeading() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.querySelectorAll("span"),
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <h1 ref={titleRef} className="heading-condensed text-[12vw] md:text-[8vw] flex flex-col leading-[0.85]">
      <span className="inline-block overflow-hidden">Let&apos;s build</span>
      <span className="inline-block overflow-hidden text-gray-light/30">Something</span>
      <span className="inline-block overflow-hidden">Great.</span>
    </h1>
  );
}
