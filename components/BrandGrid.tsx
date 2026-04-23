import { brands } from "@/data/projects";

export default function BrandGrid() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-heading mb-3">Brand grid</p>
          <h2 className="font-serif text-4xl italic md:text-5xl">
            Trusted by brands with taste and patience.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-gray-light">
          Replace these placeholders with real logos, marquees, or stills once
          the final story is locked.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex min-h-32 flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-5"
          >
            <p className="text-2xl font-medium">{brand.name}</p>
            <p className="text-sm uppercase tracking-label text-gray">
              {brand.sector}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
