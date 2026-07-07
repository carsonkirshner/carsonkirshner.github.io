import { site } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 sm:pt-24"
    >
      <p className="font-mono text-sm text-accent">{site.role}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {site.name}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        {site.tagline}
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          GitHub
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          LinkedIn
        </a>
        <a
          href={site.resumeUrl}
          className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
