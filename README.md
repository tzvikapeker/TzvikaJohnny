# Generative AI Workshop Landing Page

This repository is a self-contained, single-page site for the bilingual Generative AI workshop. It includes only static files—no build step required.

## Run locally
1. Clone the repository.
2. From the project root, start a static server (pick either):
   - Python 3: `python -m http.server 8000`
   - Node.js (if installed): `npx serve -l 8000`
3. Open `http://localhost:8000` in your browser.

## Deploy / share
- For GitHub Pages: push this repo, then enable Pages for the `main` branch (root). The site will be served from `https://<username>.github.io/<repo-name>/`.
- For any static host (Netlify, Vercel, etc.): deploy the repository root; no configuration is required.

## Files
- `index.html` – page markup and bilingual content.
- `styles.css` – layout, typography, animations, RTL handling.
- `script.js` – language toggle behavior and scroll helpers.
- `assets/` – local logo and portrait placeholders; replace with your own assets if desired.
