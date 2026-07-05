# Cura — one-pager website

A static, single-page site for Cura (an AI platform for social-care organisations).
Built on the Cura design system (`design-system/`) — Material 3 re-seeded warm & human.

## Structure
```
cura-website/
  index.html                 # the main one-pager  →  https://onsenix12.github.io/cura/
  founder.html               # "Getting to know Avi" Q&A  →  https://onsenix12.github.io/cura/founder.html
  assets/css/tokens.css      # design tokens (single source of truth)
  assets/css/styles.css      # page styles
  assets/js/main.js          # reveals, nav, theme toggle
  assets/images/             # optimised imagery
  design-system/             # DESIGN_SYSTEM.md + design-tokens.json
```

`founder.html` is self-contained (fonts from Google, no other dependencies) — paste
`https://onsenix12.github.io/cura/founder.html` into the BIG form's "Getting to Know You" answer boxes.

## Deploy to GitHub Pages (repo: onsenix12/cura)
Pick ONE:

**A. Serve from repo root**
1. Copy the *contents* of `cura-website/` into the repo root.
2. Push to `main`.
3. GitHub → Settings → Pages → Source: `Deploy from a branch` → `main` / `/ (root)`.
4. Live at `https://onsenix12.github.io/cura/`.

**B. Serve from /docs**
1. Rename `cura-website/` to `docs/` in the repo root and push.
2. GitHub → Settings → Pages → Source: `main` / `/docs`.

The `.nojekyll` file is included so GitHub Pages serves all folders as-is.

## Notes
- All paths are relative, so it works at `/cura/` or any sub-path.
- Imagery is AI-generated (illustrative), not real clients.
- Fonts (Fraunces + Plus Jakarta Sans) load from Google Fonts.
