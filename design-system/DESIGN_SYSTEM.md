# Cura Design System

**Warm & human, built on Material Design 3.**
Version 1.0.0 · Direction: *Coral Care* (Coral primary · Warm Plum secondary · Soft Amber tertiary)

This is the single source of truth for how Cura looks and feels. The website consumes it now; the pitch deck (and anything else) is built from the same tokens so everything stays consistent. Whenever we design something new for Cura, start here.

---

## 1. The idea in one line

We keep **Material 3's structure** — its exact token roles, type scale, shape scale and elevation — and **re-seed it warm and human**: a coral primary instead of the default clinical blue/purple, warm cream surfaces instead of cold grey, and a humanist type pairing. It reads like a caring place, not a clinical tool — while staying rigorous and accessible.

## 2. How it maps back to your Figma Material 3 kit

Every color role below uses the **same name** as the kit (`M3/sys/light/primary`, `Schemes/On Surface`, `Corner/Extra-large`, etc.). To warm your Figma kit, override the *values* of those variables with the ones here — no renaming, no restructuring. Files:

- `design-tokens.json` — machine-readable tokens (import into build tools / Figma Tokens plugin).
- `../assets/css/tokens.css` — CSS variables the website loads directly.
- This doc — the human guide.

---

## 3. Color

### Seeds
| Role | Seed | Meaning |
|---|---|---|
| Primary | `#E0674C` coral | warmth, energy, action |
| Secondary | `#7A5A6E` warm plum | a re-warmed nod to Material's heritage; calm, supportive |
| Tertiary | `#E3A15A` soft amber | highlights, gentle emphasis |
| Neutral | `#8E8078` warm taupe | surfaces & text (warm, never cold grey) |

### Key light-scheme roles
| Token | Value | Use |
|---|---|---|
| `primary` | `#B04A2E` | primary buttons, active states, key accents (passes AA on white) |
| `on-primary` | `#FFFFFF` | text/icons on primary |
| `primary-container` | `#FFDBD1` | tonal chips, soft highlights |
| `on-primary-container` | `#3B0A00` | text on primary-container |
| `secondary` | `#77526A` | secondary actions, supportive accents |
| `secondary-container` | `#FFD8EC` | soft plum surfaces |
| `tertiary` | `#895A16` | tertiary accents (deep amber for text-safe use) |
| `tertiary-container` | `#FFDCBB` | warm amber surfaces |
| `surface` / `background` | `#FCF4F0` | the warm cream page canvas |
| `on-surface` | `#2B2320` | primary text (warm near-black) |
| `surface-variant` | `#F1E4DD` | cards, section bands |
| `on-surface-variant` | `#57453F` | secondary text |
| `outline` | `#877069` | borders, dividers |
| `outline-variant` | `#D8C2B8` | subtle borders |
| Surface containers (5 steps) | `#FFF` → `#EBDFD8` | elevation without shadow |

A full dark scheme is included in the tokens (`[data-theme="dark"]`).

### The bright coral rule
`--cura-coral-bright: #E0674C` is the punchy coral you picked. Use it for **large display fills, hero shapes and illustration accents only**. Do **not** use it for small text on cream — it fails contrast. For text/buttons, use `primary` (`#B04A2E`).

### Contrast
All `on-*` pairings target **WCAG AA (4.5:1)** for body text. Warm cream + warm ink keeps the page soft on the eyes while staying legible.

---

## 4. Typography

A warm humanist pairing — personality in the headlines, calm legibility in the body.

- **Brand / display & headlines — `Fraunces`** (soft optical serif). Human, characterful, editorial.
- **Plain / body & UI — `Plus Jakarta Sans`** (friendly geometric-humanist sans). Highly legible, modern.

Both are free Google Fonts (loaded in `tokens.css`), so they work on GitHub Pages with no licensing issues. The full **Material 3 type scale** (display → label, 15 roles) is provided as utility classes (`.md-display-large` … `.md-label-small`).

Rule of thumb: headlines and big numbers = Fraunces; everything you read in a sentence or click = Plus Jakarta Sans.

---

## 5. Shape

Material 3 corner scale — Cura leans **soft**: `medium (12px)` for cards, `large (16px)` for feature panels, `extra-large (28px)` for hero/marketing surfaces, `full (999px)` for buttons and chips. Rounded corners are core to the "human, approachable" feel.

## 6. Spacing

4px base grid: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Be generous — whitespace is part of the warmth. Default section padding on the site is `96px` top/bottom on desktop.

## 7. Elevation

Five Material levels, but with **warm-tinted shadows** (`rgba(60,30,20,…)`) instead of cold black, so cards feel like they sit on warm paper. Prefer **surface-container tones over shadows** for most separation; reserve real shadows (level 2–3) for interactive/floating elements.

## 8. Components (marketing site)

- **Buttons** — filled (`primary` bg / `on-primary` text) for the main CTA; tonal (`secondary-container`) or outlined for secondary. Pill shape (`corner-full`). State layers: hover 8%, pressed 10%.
- **Cards** — `surface-container-low` or `surface-variant` bg, `corner-large`, generous padding, warm level-1 shadow on hover.
- **Chips / tags** — `primary-container` or `tertiary-container`, `corner-full`, `label-large`.
- **Pillars** — the six capabilities (KNOW, PLAN, DELIVER, UNDERSTAND, PROVE, GROW) each get a consistent icon + tonal accent.

## 9. Voice & tone (from the playbook)

Plain English, warm, concrete, honest. We talk about **people and hours**, not "AI-powered synergy." Short sentences. Real examples (Siti, Mdm Lim). Confident but never hype-y. When in doubt: *"Would a busy care worker feel respected reading this?"*

## 10. Reusing this for the pitch deck

Build every slide from these tokens: cream `surface` background, `Fraunces` headlines, `Plus Jakarta Sans` body, coral `primary` for emphasis, the six-pillar accents. Result: the deck and the website look like one brand.

---

*Material Design 3 is used under its open-source license. Cura's palette, type pairing and voice are original to this project.*
