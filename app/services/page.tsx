import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-black text-white pt-40 pb-24">
        {/* Red gradient glow */}
        <div className="pointer-events-none absolute top-0 right-0 h-[50vh] w-[50vw] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff1a1a]/20 via-[#ff1a1a]/5 to-transparent opacity-60" />

        <section className="section-shell relative z-10 mb-32">
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-[0.2em] text-[#ff1a1a] uppercase">Our Capabilities</span>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85]">
              Digital<br />Services
            </h1>
            <p className="max-w-2xl text-lg text-white/70 mt-6 font-sans">
              We engineer scalable, high-performance digital ecosystems. From bespoke web applications to advanced AI integrations, our services are designed to push boundaries and drive measurable growth.
            </p>
          </div>
        </section>

        <section className="section-shell relative z-10 space-y-24">
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row gap-12 border-t border-white/10 pt-12">
            <div className="lg:w-1/3">
               <h2 className="font-heading text-4xl lg:text-5xl uppercase tracking-tighter leading-none">01. Web App<br/>Development</h2>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6 font-sans text-white/70">
               <p className="text-xl md:text-2xl text-white font-medium">Custom web applications built with modern frameworks and robust backend architectures.</p>
               <p>We don't just build websites; we build scalable software solutions that solve real business problems. Our engineering team focuses on lightning-fast performance, seamless accessibility, and clean, maintainable code.</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-mono text-xs md:text-sm uppercase tracking-wider text-white">
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Next.js / React</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Full-Stack Architecture</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> API Integration</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> CMS Development</li>
               </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row gap-12 border-t border-white/10 pt-12">
            <div className="lg:w-1/3">
               <h2 className="font-heading text-4xl lg:text-5xl uppercase tracking-tighter leading-none">02. AI Agents &<br/>Automation</h2>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6 font-sans text-white/70">
               <p className="text-xl md:text-2xl text-white font-medium">Intelligent systems designed to automate workflows and enhance user experiences.</p>
               <p>Leverage the power of Large Language Models and custom AI agents. We build AI-driven tools that integrate seamlessly into your business operations, reducing manual overhead and creating highly personalized interactions at scale.</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-mono text-xs md:text-sm uppercase tracking-wider text-white">
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Custom LLMs</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Workflow Automation</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Data Processing</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Intelligent Chatbots</li>
               </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col lg:flex-row gap-12 border-t border-white/10 pt-12">
            <div className="lg:w-1/3">
               <h2 className="font-heading text-4xl lg:text-5xl uppercase tracking-tighter leading-none">03. Growth<br/>Marketing</h2>
            </div>
            <div className="lg:w-2/3 flex flex-col gap-6 font-sans text-white/70">
               <p className="text-xl md:text-2xl text-white font-medium">Data-driven strategies to scale your brand and maximize ROI.</p>
               <p>Our marketing isn't guesswork. We use deep analytics, rigorous A/B testing, and advanced SEO strategies to drive highly targeted traffic to your platforms, converting casual visitors into loyal, long-term customers.</p>
               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 font-mono text-xs md:text-sm uppercase tracking-wider text-white">
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Technical SEO</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Conversion Optimization</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Performance Campaigns</li>
                 <li className="flex items-center gap-2"><span className="text-[#ff1a1a]">✦</span> Analytics & Data</li>
               </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
