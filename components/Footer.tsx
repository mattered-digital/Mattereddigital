export default function Footer() {
  return (
    <footer id="contact" className="section-shell pb-10 pt-6 md:pb-12">
      <div className="rounded-[2rem] border border-white/10 px-6 py-8 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-heading mb-3">Contact</p>
            <h2 className="font-serif text-4xl italic md:text-5xl">
              Ready to sharpen the next chapter?
            </h2>
          </div>
          <div className="text-sm leading-7 text-gray-light">
            <p>hello@evolve.studio</p>
            <p>New Delhi / Remote</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-label text-gray md:flex-row md:items-center md:justify-between">
          <p>Evolve Clone</p>
          <p>Next.js 14, Tailwind CSS, GSAP, Lenis</p>
        </div>
      </div>
    </footer>
  );
}
