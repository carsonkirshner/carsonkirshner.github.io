import Image from "next/image";
import { site } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl border-t border-border px-6 py-20"
    >
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted">
        About
      </h2>
      <div className="mt-6 flex flex-col gap-8 sm:flex-row sm:items-start">
        <Image
          src={site.portraitUrl}
          alt={`Portrait of ${site.name}`}
          width={112}
          height={112}
          className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-border"
        />
        <div className="flex flex-col gap-4">
          {site.about.map((paragraph) => (
            <p key={paragraph} className="max-w-xl leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
