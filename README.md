# elacosse.github.io

Personal site of Eric Lacosse — [elacosse.github.io](https://elacosse.github.io)

React + TypeScript + Vite, styled with Tailwind v4. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Develop

```sh
npm install
npm run dev      # http://localhost:3000
npm run lint     # tsc --noEmit
npm run build    # -> dist/
```

## Editing content

Content is separated from presentation. In most cases you only need to touch
`src/content/` — no components involved.

| File | Contains |
| --- | --- |
| `src/content/projects.ts` | Every project entry, grouped by category |
| `src/content/about.ts` | Motivations copy and the "Now" experience list |
| `src/content/site.ts` | Name, tagline, nav links, contact links |

### Adding a project

Append an entry to `PROJECTS` in `src/content/projects.ts`:

```ts
{
  title: "Project Name",
  year: "2025",              // or "ongoing"
  category: "Technology",    // Technology | Academic | Other
  image: "/img/slug/thumb.png",
  blurb: "One paragraph.",
  link: { href: "https://…", label: "Read More ▸" },
}
```

Put the image in `public/img/<slug>/`. Thumbnails render in a 200×125 slot
(16:10) via `object-cover`, so a 16:10 source crops cleanly. Clicking a
thumbnail opens it in the lightbox, so it is worth supplying something legible
at full size.

Categories render in the order set by `CATEGORY_ORDER`; empty ones are skipped.
To add a category, extend the `ProjectCategory` union and `CATEGORY_ORDER` —
no markup changes needed.

## Design tokens

Colors and type sizes are defined once in the `@theme` block of
`src/index.css` (`text-ink`, `text-muted`, `border-rule`, `text-body`, …).
Prefer these over raw values like `text-[#b0b0b0]` so the palette stays
changeable from one place.

## Layout

```
src/
  content/      data only, no JSX
  components/   Layout, ProjectCard, Lightbox, SectionHeading, SymbiosisCanvas
  pages/        About, Projects
```

`dist/` is generated and git-ignored; CI builds it from source.
