export default function ShowreelSection() {
  return (
    <section id="showreel" className="section-shell py-16 md:py-24">
      <div className="soft-panel overflow-hidden rounded-[2rem] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="section-heading mb-4">Showreel</p>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-lg">
                01
              </span>
              <p className="text-sm leading-6 text-gray-light">
                Placeholder block for video, canvas work, or a motion-led
                feature case study.
              </p>
            </div>
          </div>
          <div>
            <h2 className="max-w-3xl font-serif text-4xl italic leading-tight md:text-6xl">
              Motion should support the thesis of the page, not distract from
              it.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-light">
              The section is ready for a reel embed, a GSAP-driven media reveal,
              or a layered image sequence once your real assets are in place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
