# Jones Xavier — SRE Portfolio

An interactive "treasure-map" portfolio — a 3D island built with **Three.js + Vue**,
styled with **Tailwind**. It's a **no-build static site**: just HTML, JS and a
precompiled stylesheet, so any static host serves it as-is.

## What's in the repo
| Path | Purpose |
| --- | --- |
| `index.html` | entry page |
| `app.js` | all logic + your content (edit the `RESUME` object at the top) |
| `styles.css` | precompiled Tailwind (committed — no build needed) |
| `lib/three.min.js`, `lib/vue.global.prod.js` | vendored runtime libraries |
| `Jones_Xavier_Resume.pdf` | the file the "Download PDF" button serves |
| `tailwind.config.js`, `input.css` | only needed if you change styling (see below) |

## Deploy on Vercel (free)
1. Push this folder to a GitHub repo (commands below).
2. vercel.com → **Add New… → Project** → import your repo.
3. Framework Preset: **Other** · Build Command: **(leave empty)** · Output Directory: **./**
4. **Deploy.** You'll get a URL like `your-portfolio.vercel.app`.

Once connected, Vercel auto-deploys: every push to `main` updates production, and
**every Pull Request gets its own preview URL** posted on the PR.

## First push to GitHub
```bash
cd sre-portfolio-html
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

## Update workflow (push + PR)
```bash
git checkout -b update-resume
# edit app.js / index.html / swap the PDF ...
git commit -am "Update résumé content"
git push -u origin update-resume
```
Open a PR on GitHub → Vercel comments a **preview link** → review → **merge to `main`** → production redeploys. You can also edit files directly in the GitHub web editor and open a PR from there.

## Editing content (no build needed)
- Résumé text, map pins, blog defaults → the `RESUME` object at the top of `app.js`.
- Map look (colours, positions) → the functions further down in `app.js`.
Plain JS — push and Vercel serves it.

## Changing styling (Tailwind)
`styles.css` is precompiled and committed, so most edits need nothing. If you add
**new** Tailwind utility classes, regenerate it before committing:
```bash
npx tailwindcss@3.4.0 -i input.css -o styles.css --minify
```
(Optional: in Vercel, set Build Command to that and it'll auto-rebuild on every deploy.)

## Publishing blog posts (make them public)
The **+ Add** editor saves posts to *your browser only* (localStorage) — great for drafts,
but other visitors won't see them and they aren't in the repo. To publish:
1. On a Blogs page, click **Publish…** → copy the JSON it shows.
2. Paste it into the matching array in `RESUME.blogDefaults` (`technical` / `slice` / `hobby`) in `app.js`.
3. Commit & push (Vercel redeploys) — now everyone sees them as cards and as diamonds on the map.
4. Back on the page, click **Clear local drafts** so they aren't duplicated.
