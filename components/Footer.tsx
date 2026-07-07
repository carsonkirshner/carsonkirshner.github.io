import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
          Contact
        </h2>
        <p className="mt-3 max-w-md text-lg text-ink">
          Open to conversations about software, AI tooling, or bluegrass.
          Reach out any time.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm">
          <a
            href={`mailto:${site.email}`}
            className="text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {site.email}
          </a>
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
        <p className="mt-12 font-mono text-xs text-muted">
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
