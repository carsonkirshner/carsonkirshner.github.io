import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-3xl border-t border-border px-6 py-20"
    >
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
