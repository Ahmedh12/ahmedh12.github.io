# Ahmed Hussien — Personal Portfolio

Next.js 15 (static export) portfolio summarizing Ahmed's career, projects (Jisr, Oil & Gas ERP), services, skills and contact info.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs static site to ./out
npm run typecheck
```

## Deploy (free)

The build produces a fully static site in `out/`. Deploy to any static host:

- **Netlify**: drag-and-drop the `out/` folder, or connect the repo.
- **Vercel**: import the repo (framework: Next.js) — static export is auto-detected.
- **GitHub Pages**: push `out/` contents to a `gh-pages` branch.

## Assets

- `public/ahmed-hussien.jpg` — profile photo
- `public/resume.pdf` — downloadable resume

## Contact form

The contact form opens the visitor's email client (mailto:) addressed to ahmedhussien783@gmail.com. No backend required.