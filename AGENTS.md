# AI Coding Assistant Rules

> Read ARCHITECTURE.md first for the project map. This file covers conventions
> you MUST follow when generating or editing code in this project.

## Critical Rules

1. **No build tools.** Never add npm, webpack, vite, or any bundler.
2. **No import/export.** All JS uses `<script>` tags and the `window.App` namespace.
3. **No external JS dependencies** unless the user explicitly asks for one.
   If they do, load it via CDN `<script>` tag — never npm install.
4. **Read ARCHITECTURE.md** before every task to understand file responsibilities.

## How to Edit

### HTML changes

- Find the `<!-- SECTION: name -->` comment block in `index.html`
- Keep edits within that section
- Add `data-action="verb-noun"` to any clickable/interactive element
- Use semantic elements: `<button>`, `<input>`, `<dialog>`, etc.

### CSS changes

- Design tokens (colors, spacing, fonts) go in `css/variables.css`
- Keep token names generic and system-level; prefer names like `--surface-1` or `--space-3`
- Delete unused tokens when you remove starter UI instead of keeping dead variables
- Component styles go in `css/components.css` under a `/* -- name -- */` marker
- Layout changes go in `css/layout.css`
- Never use `!important`

### JS changes

- **Pure logic** (formatting, math, validation) → `js/utils.js`
- **State shape or state helpers** → `js/state.js`
- **DOM creation or updates** → `js/dom.js`
- **Event wiring and init** → `js/app.js`
- Always use `App.state.set(key, value)` to change state
- Never read/write DOM outside of `dom.js`

### Adding a new feature

Follow the checklist in ARCHITECTURE.md → "Adding a New Feature"

### Adapting This Starter

- Replace placeholder copy (`My App`, subtitle, footer text) before adding new features
- If the counter is not needed, delete its HTML section from `index.html`
- Delete the matching counter styles from `css/components.css`
- Delete the counter actions from `js/app.js`, `count` from `js/state.js`, and `renderCounter()` from `js/dom.js`
- Delete unused helpers in `js/utils.js` if they are not part of the real app
- Preserve the architecture rules even when deleting starter code: `app.js` owns events, `dom.js` owns DOM, `state.js` owns state

## Style Guide

- 2-space indentation
- Single quotes in JS
- `const` by default, `let` when mutation is needed, never `var`
- Functions: prefer named function declarations for top-level, arrows for callbacks
- CSS class names: `kebab-case`, e.g. `.todo-item`
- HTML IDs: `kebab-case`, e.g. `id="todo-list"`
- JS names: `camelCase` for variables/functions, `PascalCase` only for constructors

## Testing

There is no test runner. To verify changes:

1. Open `index.html` in a browser
2. Open the browser console (F12) — there should be zero errors
3. Test the feature interactively
