# carsonkirshner.github.io

Personal portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Adding a project

Add an object to the array in [`content/projects.ts`](content/projects.ts):

```ts
{
  title: "Project Name",
  description: "One line description.",
  tags: ["TypeScript", "Next.js"],
  repoUrl: "https://github.com/...",   // optional
  demoUrl: "https://...",              // optional
}
```

No other files need to change — the projects grid renders directly from this array.

## Structure

- `app/` — routes, layout, metadata, generated icon/OG image
- `components/` — page sections (Nav, Hero, About, Projects, Footer)
- `content/` — site copy and project data
- `public/` — static assets (resume, portrait)

## Deploy

Deployed via Vercel, connected to this repo's `main` branch.
