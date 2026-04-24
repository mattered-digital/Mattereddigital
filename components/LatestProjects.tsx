import { latestProjects } from "@/data/projects";

export default function LatestProjects() {
  return (
    <section id="projects" className="section-shell py-16 md:py-24">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-heading mb-3">Recent work</p>
          <h2 className="max-w-2xl font-serif text-4xl italic md:text-5xl">
            Recent campaigns, launches, and growth systems.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-gray-light">
          Each engagement connects positioning, creative production, paid
          media, and conversion thinking into one sharper customer journey.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {latestProjects.map((project) => (
          <article
            key={project.id}
            className="soft-panel rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
          >
            <div
              className={`h-56 rounded-[1.5rem] bg-gradient-to-br ${project.gradient}`}
            />
            <div className="mt-5 flex items-center justify-between text-sm text-gray-light">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3 className="mt-3 text-2xl font-medium">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-gray-light">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-label text-white/90"
                >
                  {metric}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
