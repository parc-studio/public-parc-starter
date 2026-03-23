# Architecture

> This file is the map of the project. Read it first before making any changes.

## Overview

A zero-build, pure HTML/CSS/JS web app. No bundler, no framework, no npm.
Open `index.html` in a browser and everything works.

## File Tree

```text
.
├── index.html            # Single page shell — all HTML lives here
├── css/
│   ├── reset.css         # Minimal CSS reset (box-sizing, margins)
│   ├── variables.css     # Design tokens as CSS custom properties
│   ├── layout.css        # Page layout and structural utilities
│   └── components.css    # Styles scoped to UI components
├── js/
│   ├── app.js            # Entry point — initializes the app, wires events
│   ├── state.js          # App state object and state-change helpers
│   ├── dom.js            # DOM query/create/update helpers
│   └── utils.js          # Pure functions with no DOM or state dependency
├── ARCHITECTURE.md       # This file — project map for humans and LLMs
└── AGENTS.md             # Rules and conventions for AI coding assistants
```

## Key Conventions

### HTML (`index.html`)

- Sections are wrapped in comments: `<!-- SECTION: name -->` ... `<!-- /SECTION: name -->`
- Every interactive element has a `data-action="name"` attribute
- IDs use `kebab-case` and are unique per page

### CSS

- **Variables** in `css/variables.css` — change the look here first
- Keep token names generic and reusable (`--surface-1`, `--space-3`, `--font-size-2`)
- Do not add feature-specific tokens like `--counter-blue` or `--homepage-hero-gap`
- **Components** use the pattern `.component-name` (BEM-like, flat)
- No nesting deeper than 2 levels: `.card .card-title { }`
- Responsive: mobile-first, breakpoints only in `layout.css`

### JavaScript

- **No modules, no import/export** — files are loaded via `<script>` tags
- Global namespace: `window.App` holds all shared references
- Load order: `utils.js` → `state.js` → `dom.js` → `app.js`
- `app.js` is the only file that calls `addEventListener` on the document
- State changes go through `App.state.set()` which triggers re-renders
- DOM reads/writes are in `dom.js` — other files never touch the DOM directly
- `utils.js` is pure — no side effects, no DOM, no state access

### Adding a New Feature

1. Add HTML in `index.html` inside a `<!-- SECTION: feature-name -->` block
2. Add styles in `css/components.css` under a `/* -- feature-name -- */` comment
3. Add logic in the appropriate JS file (state in `state.js`, DOM in `dom.js`)
4. Wire it up in `app.js` inside the `init()` function

### Replacing the Starter Example

1. Replace the placeholder app title, subtitle, and footer copy in `index.html` first.
2. If the counter is not part of the real product, delete the entire `counter` section from `index.html`.
3. Delete the matching counter styles from `css/components.css`.
4. Delete `count` state from `js/state.js`.
5. Delete `renderCounter()` from `js/dom.js`.
6. Delete the counter actions and counter-specific state handling from `js/app.js`.
7. Delete any unused tokens or utilities after cleanup instead of leaving starter leftovers behind.
8. Keep the file responsibilities, script load order, and `window.App` namespace intact.

### Data Flow

```text
User event → app.js handler → App.state.set() → dom.js render function → DOM update
```
