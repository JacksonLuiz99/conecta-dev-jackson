# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Conecta Dev" is Jackson Luiz's personal link-in-bio page (a static single-page site, in the style of Linktree/Rocketseat's Ignite DevLinks project). It is plain HTML/CSS/JS with no build step, no package manager, and no dependencies to install.

## Running the site

There is no build/dev/test tooling. To preview changes, just open `index.html` directly in a browser, or serve the folder with any static server (e.g. the VS Code "Live Server" extension, which is listed in `extensions.json`). There are no lint or test commands in this repo.

## Architecture

- `index.html` — the entire page (profile card, dark/light switch, social links nav, footer). All layout and visual styling is done with Tailwind utility classes written directly in the HTML.
- Tailwind is loaded via the CDN Play script (`<script src="https://cdn.tailwindcss.com">`), not a local build/PostCSS pipeline. `tailwind.config.js` is loaded as a plain `<script>` right after it and sets `window.tailwind.config` — it defines the `inter` font family and the `slide-in`/`slide-back` keyframes/animations used by the theme switch knob.
- `style.css` holds only the small pieces Tailwind's arbitrary classes can't express: global transition timing for theme changes, plus a faster transition override for hover states on cards/icons.
- `script.js` contains a single function, `toggleMode()`, wired via inline `onclick` on the `#switch` element in `index.html`. It toggles a `.light` class on `<html>` (Tailwind's `darkMode` is configured as `['class', '.light']`, so `.light` — not the default `.dark` — drives the light theme) and swaps the avatar image between `assets/avatar.png` and `assets/avatar-light.png`.
- `assets/` holds all images: avatar (dark/light variants), desktop/mobile background images (dark/light variants, selected via Tailwind responsive + dark: modifiers on `<body>`), and the sun/moon icons used as the switch knob background.
- `favicon_io/` holds generated favicon assets and the web manifest, referenced from `<head>`.
- Icons in the social links nav use the `ion-icon` web component, loaded from the `ionicons` CDN bundle at the bottom of `index.html` (ESM + nomodule fallback).

## Editing conventions already in place

- Styling changes should be made as Tailwind utility classes inline in `index.html` first; only fall back to `style.css` for things Tailwind can't do (global transition orchestration, etc.).
- Both a dark (default) and light (`dark:` variant, driven by the `.light` class) styling need to be considered for any visual change — every existing element in `index.html` has paired `dark:` classes.
- Social link cards follow a consistent pattern: a `group relative flex items-center` anchor with glassmorphism classes (`bg-white/10`, `backdrop-blur-md`, border), a brand-colored hover background/shadow/border, an absolutely positioned `ion-icon`, and a centered `span` label. Match this pattern when adding a new social link.
- Prettier is configured (via `settings.json`) with `singleQuote: false`, `tabWidth: 2`, `semi: false` — no semicolons, double quotes, 2-space indents.
