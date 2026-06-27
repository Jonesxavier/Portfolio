# Portfolio Guide — read me first (and hand me back to Claude)

This is the operating manual for Jones Xavier's map portfolio.

**How to use it:** when you want a change, paste this file (or just point to it) into
Claude / Claude Code along with what you want — e.g. *"add a hobby blog: title X, body Y"*.
This doc tells the assistant the exact file, object, and line-anchor to edit, so changes
are fast and nothing else gets touched. Then push, and the live site updates.

Everything you would ever edit lives in **one file: `app.js`** (in the big `RESUME = { … }`
object near the top). You do **not** need Node, npm, or a build step for normal edits.

---

## 1. The files

| File | What it is | Touch it? |
|---|---|---|
| `index.html` | Page shell, loads everything | Rarely |
| `app.js` | **All content + the 3D map logic.** `RESUME = {…}` holds your data | **Yes — this is the one** |
| `styles.css` | Pre-compiled Tailwind (committed) | Only if you add brand-new Tailwind classes (§7) |
| `lib/three.min.js`, `lib/vue.global.prod.js` | Vendored libraries (offline) | Never |
| `Jones_Xavier_Resume.pdf` | The downloadable résumé | Replace the file to update the download |
| `GUIDE.md` | This doc | — |
| `README.md` | Short deploy notes | — |

---

## 2. Run it on your laptop

**Simplest:** double-click `index.html` — it opens in your browser and works fully offline.

**Cleaner (recommended while editing)** — a tiny local server avoids any caching weirdness:

```bash
cd sre-portfolio-html
python -m http.server 8080      # then open http://localhost:8080
# or:  npx serve .
```

Edit `app.js` in any editor, then **hard-refresh** the browser (`Ctrl+Shift+R`) to see changes.
(Hard-refresh matters — browsers cache `app.js` aggressively.)

---

## 3. Put it on a new / personal laptop

Once it's on GitHub (see §4), on any machine:

```bash
git clone https://github.com/<you>/<repo>.git
cd <repo>
```

That's it — open `index.html` or run the local server above. No install needed.

---

## 4. First-time deploy — GitHub + Vercel (~10 min)

**A. Create the GitHub repo**
1. github.com → top-right **+** → **New repository**.
2. Name it (e.g. `sre-portfolio`), Public or Private, **don't** add a README (you have one).
3. Create.

**B. Push the folder** (run inside `sre-portfolio-html`):
```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

**C. Connect Vercel** (auto-deploys on every push)
1. vercel.com → sign in with GitHub → **Add New… → Project**.
2. **Import** your repo.
3. Framework Preset: **Other**. Build Command: **leave empty**. Output Directory: **`./`**.
4. **Deploy.** You get a live URL like `https://sre-portfolio.vercel.app`.

Done. From now on, **every push to `main` redeploys automatically**, and **every Pull
Request gets its own preview URL** so you can check a change before it goes live.

---

## 5. Updating the live site later

```bash
git add -A
git commit -m "describe the change"
git push                 # main → live in ~30s
```

Prefer a safe preview first? Use a branch + PR:
```bash
git checkout -b add-blog
git commit -am "new post"
git push -u origin add-blog      # open the PR on GitHub → Vercel posts a preview link
```
Merge the PR when happy → it deploys to the live URL.

---

## 6. Using Claude Code to do the whole loop (yes, this works)

You have Claude Code — it can make the edits **and** push for you:

1. `cd sre-portfolio-html` then run `claude`.
2. Tell it the change and point it at this guide, e.g.
   *"Using GUIDE.md, add a technical post titled '…' dated 'Jul 2026' with this body: …, then commit and push."*
3. It edits `app.js`, runs `git commit` + `git push`.
4. Because Vercel is linked to the repo, **the push makes the website live** — no extra step.

(If you ever want manual control, `npm i -g vercel` then `vercel --prod` deploys on demand.)

So the full chain — *edit → push → live* — is fully doable from Claude Code, and this doc is
what makes its edits land in the right place every time.

---

## 7. CODE MAP — where everything lives (in `app.js`)

All under `RESUME = { … }` near the top, unless noted. Search for the **anchor** in quotes.

### Résumé page (`/#resume`)
- **Name / title / contact** → anchor `contact:`
- **Summary paragraph** → anchor `summary:`
- **Experience (3 roles + bullets)** → anchor `experiences: [` — read-only on the page; edit here.
- **Skills** → `skillGroups:` · **Certifications** → `certifications:` · **Education** → `education:`

### Map — regions & numbered experience coins
- **Region labels + positions** → `regions:` — items `{ id, name, lx, lz, clear }`
  (`lx/lz` = where the label/cluster sits; `clear` = fog-clear radius). Currently
  `HCL TECH` at `lx:-165, lz:235` and `APTEAN` at `lx:25, lz:-10`.
- **The numbered coins** → `mapPins:` — items `{ id, region, order, role, org, orgShort, period, start, bullets:[…] }`.
  `region` must be `'hcl'` or `'aptean'`. Coins auto-arrange (HCL scattered like villages, Aptean ringed).
- **Coin rim colors** → anchor `const ACCENT = { hcl: '#2f7d99', aptean: '#bb3b2c' }`

### Blogs (Technical / Slice of Life / Hobby)
- **Committed/public posts** → `blogDefaults:` with arrays `technical`, `slice`, `hobby`.
  Each post is `{ title: '…', date: 'Mon YYYY', body: '…' }`.
- Add new posts right below the matching marker comment:
  - `// add more technical posts below this line`
  - `// add more slice-of-life posts below this line`
  - `// add more gaming / Ghost of Tsushima posts below this line`
- The on-site **+ Add** saves only to the current browser (a private draft pad);
  **Publish…** exports those drafts as JSON to paste into `blogDefaults`.
- **Map gem positions:** Technical = blue diamonds at `const TECH_SLOTS = [`; Slice = teal around the lake; Hobby = purple on Respawn Isle.

### Map lands & islands (shapes)
- **Slice-of-life lake** → `lake: { x: 270, z: 20, radius: 56 }`
- **Respawn Isle (gaming)** → built by `buildGameIsland(450, 300, 76)`; label `makeTextSprite('RESPAWN ISLE'`
- **Itania (frontier land)** → `const NL = { x: -30, z: -560, hw: 430, hd: 150 }`, plus `buildLongLand(…)`, `buildLandBridge(…)`, label `makeTextSprite('ITANIA'`
- **Decorative ponds** → `const PONDS = [`

### Look & feel
- **Loading-screen lines** → `loadingLines:`
- **Title subtitle** → search `20% explored so far`
- **Initial map framing (where the camera looks on load)** → `const center = new THREE.Vector3(120, 0, 130)`
  and the `distance: 640` next to it. Raising/lowering `distance` zooms out/in;
  changing the vector re-centers the view. **This is camera only — it never moves your pins.**
- **Sea backdrop (the big blue plane)** → `buildSea()`: its size is `PlaneGeometry(WORLD * 3.4, …)` and it's
  centered with `group.position.set(120, 0, 130)` — keep that point matching `center` so the blue stays centered behind the view.
- **Parchment colors / fonts** → `tailwind.config.js` (used via classes); 3D colors are hex literals inside the build functions.

---

## 8. Cookbook — say any of these to Claude

- *"Add a hobby blog — title: …, date: …, body: …"* → I append to `blogDefaults.hobby` below its marker.
- *"Add a technical post …"* / *"Add a slice-of-life post …"* → the matching `blogDefaults` array.
- *"Update my Aptean bullets to …"* → the Aptean item in `experiences:`.
- *"Add a new experience coin for company X"* → a new item in `mapPins:`.
- *"Move the HCL cluster"* / *"move the lake"* → `regions:` `lx/lz` / `lake:` `x/z`.
- *"Rename Itania / Respawn Isle"* → the relevant `makeTextSprite('…')`.
- *"Zoom the map in/out a bit on load"* → the `distance:` value next to `center`.
- *"Swap the résumé PDF"* → replace `Jones_Xavier_Resume.pdf`.

---

## 9. Rebuild styles (ONLY if you add new Tailwind classes)

Normal content edits don't need this. If a change introduces a Tailwind class not already
used anywhere, regenerate the stylesheet:

```bash
npx tailwindcss@3.4.0 -i input.css -o styles.css --minify
git add styles.css && git commit -m "rebuild styles" && git push
```

---

## 10. If a change "doesn't show up"

It's almost always browser cache. **Hard-refresh: `Ctrl+Shift+R`** (or open in a private window).
The files on disk / in GitHub are the source of truth.
