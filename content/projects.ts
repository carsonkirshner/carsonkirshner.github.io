export type Project = {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "This Portfolio",
    description:
      "A minimal, content-driven personal site built to make adding new work trivial — one object in an array, no markup to touch.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/carsonkirshner/carsonkirshner.github.io",
  },
  {
    title: "More projects coming soon",
    description:
      "This spot is reserved for the next build — likely something in agentic tooling or LLM applications.",
    tags: ["Coming soon"],
  },
];
