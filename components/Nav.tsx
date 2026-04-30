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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuRef.current || !linksRef.current) return;

    const items = linksRef.current.querySelectorAll(".menu-link");
    const secondaryItems = menuRef.current.querySelectorAll(".menu-secondary-item");

    if (menuOpen) {
      gsap.fromTo(menuRef.current, 
        { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          opacity: 1,
          pointerEvents: "all",
          duration: 0.8,
          ease: "power4.inOut"
        }
      );

      gsap.fromTo(
        items,
        { y: 120, rotateX: -15, opacity: 0 },
        { 
          y: 0, 
          rotateX: 0, 
          opacity: 1, 
          stagger: 0.08, 
          duration: 1.2, 
          ease: "power4.out", 
          delay: 0.4 
        }
      );

      gsap.fromTo(
          secondaryItems,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.8 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        opacity: 0,
        pointerEvents: "none",
        duration: 0.6,
        ease: "power4.inOut"
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
    <>
      <header className={`fixed inset-x-0 top-0 z-[110] px-6 py-4 md:px-10 lg:px-16 transition-colors duration-500 ${menuOpen ? "bg-transparent border-transparent" : "bg-black/50 backdrop-blur-lg border-b border-white/5"}`}>
        <nav className="relative flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleScroll("home")}
            className="font-heading text-lg font-bold uppercase tracking-tight z-[120]"
          >
            <span className="mr-1 text-[10px]">✦</span>Matter
          </button>

          {/* Center tagline (only visible when menu closed) */}
          {!menuOpen && (
            <div className="hidden max-w-xs text-center text-[10px] leading-relaxed text-gray-light lg:block">
              <p>Full-service web agency & digital marketing.</p>
              <p>Building high-performance digital</p>
              <p>ecosystems that scale.</p>
            </div>
          )}

          {/* Menu Toggle */}
          <div className="flex items-center gap-6 z-[120]">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="group relative flex items-center gap-3 rounded-none border border-white/20 px-4 py-1.5 text-[10px] uppercase tracking-label text-white transition-all hover:bg-white hover:text-black"
              >
                <span>{menuOpen ? "Close" : "Menu"}</span>
                <div className="flex h-3 w-4 flex-col justify-between overflow-hidden">
                    <span className={`h-[1px] w-full bg-current transition-transform duration-300 ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
                    {!menuOpen && <span className="h-[1px] w-full bg-current transition-transform duration-300" />}
                    <span className={`h-[1px] w-full bg-current transition-transform duration-300 ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
                </div>
              </button>
          </div>
        </nav>
      </header>

      {/* Full-screen menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[105] flex flex-col bg-[#0a0a0a] opacity-0 pointer-events-none overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      >
        <div className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:px-32">
          <div ref={linksRef} className="flex flex-col gap-4 md:gap-8">
            {links.map((link, idx) => (
              <div key={link.id} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => handleScroll(link.id)}
                  className="menu-link group flex items-start text-left"
                >
                  <span className="mr-4 mt-2 font-mono text-xs text-gray-light/40 md:mt-4 md:text-sm">
                    0{idx + 1}
                  </span>
                  <span className="heading-condensed text-[11vw] leading-[0.85] transition-colors group-hover:text-gray-light/60 md:text-[9vw]">
                    {link.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info in menu */}
        <div className="menu-secondary-item px-6 py-10 md:px-20 md:py-16 flex flex-col md:flex-row justify-between items-end border-t border-white/5 bg-black/50">
           <div className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.2em] text-gray-light mb-8 md:mb-0">
              <span className="text-white mb-2">Social</span>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">X / Twitter</a>
           </div>
           
           <div className="flex flex-col gap-1 text-right text-[10px] uppercase tracking-[0.2em] text-gray-light">
              <span className="text-white mb-2">Inquiries</span>
              <a href="mailto:hello@matter.agency" className="hover:text-white transition-colors">hello@matter.agency</a>
              <span>Remote Worldwide</span>
           </div>
        </div>
      </div>
    </>
  );
}
