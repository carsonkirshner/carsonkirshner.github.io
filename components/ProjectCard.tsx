import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.repoUrl ?? project.demoUrl;

  return (
    <article className="group rounded-lg border border-border p-6 transition-colors hover:border-accent/60">
      <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-muted">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-2.5 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>
      {hasLink && (
        <div className="mt-5 flex gap-5 font-mono text-sm">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Repo
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
