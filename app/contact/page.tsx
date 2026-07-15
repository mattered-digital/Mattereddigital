"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import Footer from "@/components/Footer";

import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
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
    <>
      <main className="relative min-h-screen bg-black pt-32 pb-20 overflow-hidden">
        {/* Subtle background element */}
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
        
        <div className="section-shell relative z-10">
          <div className="max-w-4xl mx-auto">
            <header className="mb-16">
              <span className="section-heading mb-4 block">Get in touch</span>
              <h1 ref={titleRef} className="heading-condensed text-[12vw] md:text-[8vw] flex flex-col leading-[0.85]">
                <span className="inline-block overflow-hidden">Let's build</span>
                <span className="inline-block overflow-hidden text-gray-light/30">Something</span>
                <span className="inline-block overflow-hidden">Great.</span>
              </h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
              <ContactForm defaultService="Web Development" />

              <div className="space-y-12">
                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">Contact Info</h3>
                  <div className="space-y-4">
                    <p className="text-xl">hi@mattered.digital</p>
                    <p className="text-xl">+91 94305 58276</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">Offices</h3>
                  <div className="space-y-4">
                    <p className="text-xl">Patna, BR<br/>India</p>
                    <p className="text-xl">Remote Worldwide</p>
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-widest text-gray-light/60 font-mono mb-6">Socials</h3>
                  <div className="flex flex-col gap-2">
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">Instagram</a>
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">LinkedIn</a>
                    <a href="#" className="text-xl hover:text-gray-light transition-colors">X / Twitter</a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
