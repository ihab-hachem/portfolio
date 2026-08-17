# Ihab Hachem — Portfolio

Personal portfolio site for **Ihab Hachem**, Senior Backend & Software Engineer
(Java/Spring Boot, PHP/Laravel, distributed systems, and practical AI
engineering — RAG, AI assistants, MCP).

Frontend-only: React + TypeScript + Vite. No backend, no database, no
environment-specific services — it builds to static files and can be
hosted anywhere.

---

## 1. Add your résumé PDF (required)

The "Download résumé" buttons in the nav bar, hero, and contact section all
link to one fixed path:

```
public/resume/Ihab-Hachem-CV.pdf
```

To enable the download:

1. Export your CV as a PDF named exactly `Ihab-Hachem-CV.pdf`.
2. Drop it into `public/resume/`, replacing/alongside `README.txt`.
3. Rebuild or refresh — no code changes needed.

If you'd rather use a different filename, update `resumePath` in
`src/data/content.ts`.

---

## 2. Local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print the URL, typically
`http://localhost:5173`).

Build for production:

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally:

```bash
npm run preview
```

---

## 3. Deploying to GitHub Pages

A ready-to-use workflow is included at `.github/workflows/deploy.yml`. It
builds the site and deploys `dist/` to GitHub Pages on every push to `main`.

Steps:

1. Push this project to a GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. The site will be published at `https://<your-username>.github.io/<repo-name>/`.

The Vite config uses a relative base path (`base: "./"`), so it works
correctly whether it's served from a GitHub Pages project path, a custom
domain, or the root of any other static host — no path configuration
needed.

### Alternative hosts

The `dist/` folder produced by `npm run build` is a plain static site, so
it also deploys as-is to Vercel, Netlify, Cloudflare Pages, or any static
file host — just point the host at the `dist` directory (build command
`npm run build`, output directory `dist`).

---

## 4. Project structure

```
public/
  favicon.svg          Site favicon (IH monogram)
  resume/
    README.txt         Instructions — replace with Ihab-Hachem-CV.pdf
src/
  components/           One component per section (Hero, About, Experience, …)
  data/content.ts        All site copy in one place — edit this to update content
  hooks/                 useReveal (scroll-in animation), useScrollSpy (nav highlighting)
  styles/
    tokens.css            Design tokens (colors, type, spacing) + design rationale
    base.css               Reset, layout primitives, buttons, tags
    components.css          Section-by-section component styles
  App.tsx                Assembles all sections
  main.tsx                Entry point
```

Nearly everything text-based lives in `src/data/content.ts` — updating a
job description, adding a project, or tweaking the hero copy doesn't
require touching any component code.

---

## 5. Content policy

Every claim on this site is drawn directly from Ihab's CV, GitHub, and
LinkedIn. No metrics, team sizes, clients, or production claims are
invented — where the source material doesn't support a specific number,
the copy describes technical scope instead.

---

## 6. Accessibility & performance notes

- Semantic HTML throughout (`nav`, `main`, `section`, `header`, `footer`).
- Visible focus states on all interactive elements.
- Skip-to-content link for keyboard users.
- Mobile menu is a proper `role="dialog"` with body scroll lock.
- All animation respects `prefers-reduced-motion`.
- No component libraries or icon packs — icons are small hand-rolled SVGs
  (`src/components/icons.tsx`) to keep the dependency footprint minimal.
- Only two runtime dependencies: `react` and `react-dom`.
