"use client";

import { gsap } from "@/lib/gsap";

const links = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Showreel", id: "showreel" },
  { label: "Contact", id: "contact" }
];

export default function Nav() {
  const handleScroll = (id: string) => {
    const target = id === "home" ? 0 : document.getElementById(id);

    if (target === null) {
      return;
    }

    gsap.to(window, {
      duration: 1.15,
      ease: "power3.inOut",
      scrollTo:
        typeof target === "number"
          ? target
          : {
              y: target,
              offsetY: 88
            }
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[110] section-shell py-6">
      <nav className="soft-panel flex items-center justify-between rounded-full px-5 py-3 text-sm">
        <button
          type="button"
          onClick={() => handleScroll("home")}
          className="font-serif text-2xl italic"
        >
          evolve
        </button>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleScroll(link.id)}
              className="tracking-label text-gray transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
