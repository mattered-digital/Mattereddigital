import { projectTable } from "@/data/projects";

export default function ProjectTable() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-heading mb-3">Project index</p>
          <h2 className="text-3xl font-medium md:text-4xl">
            A lean overview of current momentum.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-gray-light">
          A simple table keeps the page grounded and gives the motion-heavy
          moments a place to breathe.
        </p>
      </div>
      <div className="rounded-[2rem] border border-white/10">
        {projectTable.map((project, index) => (
          <div
            key={project.id}
            className={`grid gap-3 px-6 py-5 md:grid-cols-[1.1fr_0.7fr_0.6fr_0.8fr] md:items-center ${
              index !== projectTable.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <div>
              <p className="text-lg font-medium">{project.title}</p>
              <p className="mt-1 text-sm text-gray-light">{project.summary}</p>
            </div>
            <p className="text-sm uppercase tracking-label text-gray">
              {project.category}
            </p>
            <p className="text-sm text-gray-light">{project.location}</p>
            <p className="text-sm text-white">{project.primaryMetric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
