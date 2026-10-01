# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing landing page for **AI Shortcut** (aishortcut.info). Plain HTML/CSS/JS — **no build step, no package manager, no tests, no framework**. Three source files plus `assets/`.

## Run / deploy

- **Local preview:** open `index.html` directly, or `python3 -m http.server` then visit `localhost:8000` (needed so `fetch`/relative asset paths behave like production).
- **Deploy:** GitHub Pages, served at the custom domain in `CNAME` (`aishortcut.info`). Pushing to `main` publishes. There is no CI, lint, or test command.

## Architecture

Three files do everything:

- **`index.html`** — markup. All visible copy is **inlined in English** as the SEO / no-JS fallback. Translatable nodes carry `class="translate" data-key="section.path"`; JS overwrites their `textContent` at runtime. Hero text is pre-populated in HTML specifically to avoid CLS (layout shift) on load.
- **`translations.js`** — the entire app. Contains three things: `rawImages` (per-language hero image + the 5 feature video sources), the `translations` object (8 locales: `en, vi, ja, ko, zh, es, de, fr`), and all runtime logic. It is the **source of truth** — the inlined English in `index.html` must be kept in sync with the `en` block here.
- **`styles.css`** — design tokens as CSS variables + all styling.

### Language selection

`initPage()` picks the locale in priority order: **`?lang=` URL param → browser language → `en`** (unsupported codes fall back to `en`). The `?lang=` override exists so ad campaigns can lock a landing to one locale regardless of visitor browser. `changeLanguage()` applies text, swaps media via `rawImages`, and toggles `.vi-only` elements (hidden by default, shown only when `lang === "vi"`).

### Performance (deliberate, don't regress)

The page is tuned to a ~100 Lighthouse mobile score. Preserve these patterns when editing `<head>` or media:

- Fonts load **non-blocking** (`media="print" onload="this.media='all'"` + `<noscript>` fallback).
- Feature **videos are lazy-loaded** via `IntersectionObserver` (`initLazyVideos`): `data-src`/`data-poster` are promoted to real `src`/`poster` only when scrolled near. Keep new videos using `data-src`, not `src`.
- Hero banner image is `preload`ed with `fetchpriority="high"`.
- Media is `.mp4` (not GIF) and `.webp` (not PNG) — large GIFs/PNGs previously tanked LCP.

### Analytics & conversions

- GA4 (`G-FLYEMN5RMB`) + Google Ads (`AW-18444668524`, linked server-side via Google Tag).
- Store download buttons appear twice (hero + footer CTA, the second with `-2` suffix). Click wiring at the bottom of `translations.js` fires `gtag("event", name)` for mac/ios, but the **Windows button is the Google Ads conversion** and must go through `gtagSendEvent()` (`download-win` event). Don't change that path.

## Design system

`AI-Shortcut-Design-Guide.md` is the authoritative spec (warm "organic" theme: cream backgrounds never pure white, terracotta + sage accents, over-rounded pill shapes, left-aligned/asymmetric layout, Baloo 2 for Vietnamese headings since Caprasimo lacks Vietnamese diacritics). Match existing CSS tokens rather than inventing new colors/shadows.

## Editing conventions

- Adding/changing copy: edit the relevant locale in `translations.js`; if it's hero or other inlined text, update the English fallback in `index.html` to match.
- Adding a translatable element: give it `class="translate" data-key="..."` matching a path in the `translations` object.
- Code comments in this repo are written in Vietnamese — follow suit when commenting.
