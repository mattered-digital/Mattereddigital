const stats = [
  { label: "Average launch window", value: "5 weeks" },
  { label: "Retained partnerships", value: "83%" },
  { label: "Senior team per project", value: "100%" }
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-panel rounded-[2rem] p-7 md:p-8">
          <p className="section-heading mb-4">About evolve</p>
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Strategy that feels intimate. Execution that feels inevitable.
          </h2>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 md:p-8">
            <p className="max-w-2xl text-base leading-7 text-gray-light">
              This scaffold is designed to feel premium from the start: layered
              surfaces, disciplined typography, and enough modular structure to
              build out a full editorial agency site without rethinking the
              foundation.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-3xl font-medium">{stat.value}</p>
                <p className="mt-3 text-sm leading-6 text-gray-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
