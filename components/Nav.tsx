import Link from "next/link";
import { site } from "@/content/site";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border/80 bg-paper/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4"
      >
        <Link href="#top" className="font-mono text-sm tracking-tight text-ink">
          {site.name}
        </Link>
        <ul className="flex items-center gap-6 font-mono text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-sm transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
