export default function Hero() {
  return (
    <section id="home" className="section-shell pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="soft-panel overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="section-heading mb-5">Independent growth agency</p>
            <h1 className="max-w-4xl font-serif text-5xl italic leading-[0.95] text-white md:text-7xl lg:text-[7.5rem]">
              We build sharp brand worlds that move with intent.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-light md:text-lg">
              Evolve is a cinematic starter for agencies that want presence,
              pace, and polish baked into the first commit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="section-heading mb-3">Selected focus</p>
              <p className="text-2xl font-medium">Strategy, identity, motion</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.04] to-transparent p-6">
              <p className="section-heading mb-3">Current rhythm</p>
              <p className="text-2xl font-medium">06 launches in 90 days</p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 text-sm text-gray-light md:grid-cols-3">
          <p>Editorial storytelling for brands in transition.</p>
          <p>Performance systems that keep the aesthetic accountable.</p>
          <p>High-touch creative direction across digital surfaces.</p>
        </div>
      </div>
    </section>
  );
}
