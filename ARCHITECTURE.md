# Architecture

> This file is the map of the project. Read it first before making any changes.

## Overview

A zero-build, pure HTML/CSS/JS web app. No bundler, no framework, no npm.
Open `index.html` in a browser and everything works.

## File Tree

```
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

### Data Flow
```
User event → app.js handler → App.state.set() → dom.js render function → DOM update
```
