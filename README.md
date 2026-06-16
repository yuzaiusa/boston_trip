# 🦞 Boston Family Trip · 波士顿家庭之旅

A mobile-first, **bilingual (English / 中文)** travel guide for a relaxed 4-day Boston trip
(June 24–27, 2026), built for easy viewing on an iPhone. Hosted on GitHub Pages.

## What it does
- **Itinerary home** → tap a day → tap a site for details.
- Each site has: intro, background story, **"Open in Apple Maps"** button, walking/hours
  facts, and a **must-see photo gallery**.
- **Language toggle** (top-right): switches everything between 中文 and English and remembers
  your choice. Defaults to 中文.
- Large fonts and big buttons for comfortable senior reading.

## Files
```
index.html              app shell
assets/css/styles.css   mobile-first, senior-friendly styles
assets/js/content.js    ALL trip text + map links (edit here)
assets/js/app.js        router + rendering (no build step, no dependencies)
assets/img/             photos (see PHOTOS.md for filenames)
```

## Edit the trip
Open `assets/js/content.js`. Every text field is `{ en: "...", zh: "..." }`. Change wording,
add a site to `sites`, then list its id in a day's `sites` array. Map links use each site's
`coords` and `mapQuery`.

## Add photos
Drop images into `assets/img/` using the filenames in **PHOTOS.md**. Until a photo exists, a
tidy "photo coming soon" placeholder shows automatically — the site works fine without images.

## Preview locally
```bash
cd boston_trip
python3 -m http.server 8000
# open http://localhost:8000 (use your browser's iPhone device emulation)
```

## Publish on GitHub Pages
1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Open the published URL on your iPhone. The Apple Maps buttons open the Maps app directly.
