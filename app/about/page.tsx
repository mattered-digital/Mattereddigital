import { Metadata } from "next";
import Footer from "@/components/Footer";
import AgencyStatement from "@/components/AgencyStatement";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mattered is a collective of designers, engineers, and strategists building high-performance digital ecosystems for ambitious brands.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Mattered",
    description:
      "Meet the team behind Mattered Digital — designers, engineers, and strategists obsessed with the bleeding edge of the web.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24">
        {/* Subtle center gradient */}
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vh] w-[80vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff1a1a]/10 via-transparent to-transparent opacity-80" />

        <section className="section-shell relative z-10 mb-20 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#ff1a1a] uppercase">Who we are</span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
              The Matter<br />Agency
            </h1>
            <p className="max-w-3xl text-lg text-white/70 mt-6 font-sans">
              We are a collective of designers, engineers, and strategists obsessed with the bleeding edge of the web. We don't just build sites; we craft digital ecosystems that elevate brands and dominate markets.
            </p>
          </div>
        </section>

        {/* Use the Agency Statement component */}
        <div className="relative z-10 -mt-20">
            <AgencyStatement />
        </div>

        {/* Our Approach Section */}
        <section className="section-shell relative z-10 mt-32 border-t border-white/10 pt-24">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                 <h2 className="font-heading text-5xl md:text-6xl uppercase tracking-tighter mb-8">Our Approach</h2>
                 <p className="text-xl text-white/80 font-sans mb-6">
                   Every project we take on is an opportunity to redefine what's possible on the web.
                 </p>
                 <p className="text-base text-white/60 font-sans mb-6">
                   We believe in ruthless simplicity, uncompromising performance, and aesthetics that demand attention. By combining deep technical expertise with world-class design, we deliver solutions that don't just look good, but perform exceptionally well under pressure.
                 </p>
                 <div className="flex gap-4 mt-12">
                   <div className="flex flex-col gap-2 border-l-2 border-[#ff1a1a] pl-4">
                     <span className="font-heading text-4xl">25+</span>
                     <span className="font-mono text-xs uppercase text-white/50 tracking-wider">Projects Shipped</span>
                   </div>
                   <div className="flex flex-col gap-2 border-l-2 border-[#ff1a1a] pl-4 ml-8">
                     <span className="font-heading text-4xl">100%</span>
                     <span className="font-mono text-xs uppercase text-white/50 tracking-wider">Independent</span>
                   </div>
                 </div>
              </div>

              {/* Approach Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-64 md:h-[400px] w-full rounded-sm overflow-hidden bg-white/5">
                      <Image src="/humans-1.jpg" alt="Team collaborating" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="relative h-64 md:h-[400px] w-full rounded-sm overflow-hidden bg-white/5 mt-12">
                      <Image src="/humans-2.jpg" alt="Design process" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
