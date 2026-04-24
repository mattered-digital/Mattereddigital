"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const links = [
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Approach", id: "showreel" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" }
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return;

    const items = linksRef.current.querySelectorAll("button");

    if (menuOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      });
      gsap.fromTo(
        items,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.35, ease: "power3.out", delay: 0.15 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in"
      });
    }
  }, [menuOpen]);

  const handleScroll = (id: string) => {
    setMenuOpen(false);
    const target = id === "home" ? 0 : document.getElementById(id);
    if (target === null) return;

    gsap.to(window, {
      duration: 1.15,
      ease: "power3.inOut",
      scrollTo:
        typeof target === "number"
          ? target
          : { y: target, offsetY: 88 }
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[110] px-6 py-4 md:px-10 lg:px-16 bg-black/50 backdrop-blur-lg border-b border-white/5">
      <nav className="relative">
        {/* Main bar */}
        <div className="flex items-start justify-between text-sm">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleScroll("home")}
            className="font-heading text-xl font-bold uppercase tracking-tight"
          >
            <span className="mr-1 text-xs">✦</span>Matter
          </button>

          {/* Center tagline */}
          <div className="hidden max-w-xs text-center text-[11px] leading-relaxed text-gray-light lg:block">
            <p>Marketing strategy and creative systems.</p>
            <p>Built for brands that need attention</p>
            <p>to turn into momentum.</p>
          </div>

          {/* Right zone */}
          <div className="flex items-start gap-4 md:gap-6">
            <div className="hidden text-right text-[11px] leading-relaxed text-gray-light xl:block">
              <p>hello@matter.agency</p>
              <p>Remote, worldwide</p>
            </div>

            <div className="hidden text-right text-[11px] leading-relaxed text-gray-light lg:block">
              <p>We align strategy, creative, and media</p>
              <p className="font-medium text-white underline">into one growth system.</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden text-[11px] uppercase tracking-label text-gray-light md:inline">
                EN
              </span>
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-none border border-white/20 px-4 py-1.5 text-[11px] uppercase tracking-label text-white transition-colors hover:bg-white hover:text-black"
              >
                Menu
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown menu */}
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-2 overflow-hidden opacity-0"
          style={{ height: 0 }}
        >
          <div
            ref={linksRef}
            className="border border-white/10 bg-black/95 backdrop-blur-md"
          >
            {links.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleScroll(link.id)}
                className="block w-full border-b border-white/5 px-6 py-3 text-left text-sm tracking-wide text-gray-light transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
