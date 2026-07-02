import Footer from "@/components/Footer";
import ProjectTable from "@/components/ProjectTable";

export default function ProjectsPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24">
        {/* Red gradient glow */}
        <div className="pointer-events-none absolute top-0 left-0 h-[50vh] w-[50vw] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#ff1a1a]/20 via-[#ff1a1a]/5 to-transparent opacity-60" />

        <section className="section-shell relative z-10 mb-20">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#ff1a1a] uppercase">Our Work</span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
              Featured<br />Projects
            </h1>
            <p className="max-w-2xl text-lg text-white/70 mt-6 font-sans">
              A curated selection of our most impactful work. We partner with ambitious brands to create digital experiences that perform flawlessly and leave a lasting impression.
            </p>
          </div>
        </section>

        {/* Re-use the ProjectTable component for the work list */}
        <div className="relative z-10">
          <ProjectTable />
        </div>

        {/* Call to action */}
        <section className="section-shell relative z-10 mt-32 border-t border-white/10 pt-24 text-center">
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-8">Ready to build<br/>something great?</h2>
            <a href="/contact" className="inline-block bg-white text-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-[#ff1a1a] hover:text-white transition-colors duration-300">
              Start a Project
            </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
