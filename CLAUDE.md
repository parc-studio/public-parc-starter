# CLAUDE.md

@ARCHITECTURE.md

## Critical Rules

- No build tools. Never add npm, webpack, vite, or any bundler.
- No import/export. All JS uses `<script>` tags and the `window.App` namespace.
- No external JS dependencies unless the user explicitly asks for one. If they do, load it via CDN `<script>` tag — never npm install.
- Read ARCHITECTURE.md before every task to understand file responsibilities.

## How to Edit

### HTML changes

- Find the `<!-- SECTION: name -->` comment block in `index.html`.
- Keep edits within that section.
- Add `data-action="verb-noun"` to any clickable/interactive element.
- Use semantic elements: `<button>`, `<input>`, `<dialog>`, etc.

### CSS changes

- Put design tokens (colors, spacing, fonts) in `css/variables.css`.
- Keep token names generic and reusable; prefer names like `--surface-1` or `--space-3`.
- Delete unused tokens when starter UI is removed.
- Put component styles in `css/components.css` under a `/* -- name -- */` marker.
- Put layout changes in `css/layout.css`.
- Never use `!important`.

### JS changes

- Put pure logic (formatting, math, validation) in `js/utils.js`.
- Put state shape or state helpers in `js/state.js`.
- Put DOM creation or updates in `js/dom.js`.
- Put event wiring and init in `js/app.js`.
- Always use `App.state.set(key, value)` to change state.
- Never read/write DOM outside of `dom.js`.

### Adding a new feature

1. Add HTML in `index.html` inside a `<!-- SECTION: feature-name -->` block.
2. Add styles in `css/components.css` under a `/* -- feature-name -- */` comment.
3. Add state keys in `js/state.js`, DOM renders in `js/dom.js`, pure helpers in `js/utils.js`.
4. Wire events in `js/app.js` inside the `actions` map and `handleStateChange`.

### Adapting the starter

1. Replace placeholder copy in `index.html` first.
2. If the counter example is not needed, delete the counter section from `index.html`.
3. Delete the corresponding counter styles from `css/components.css`.
4. Delete counter actions in `js/app.js`, `count` in `js/state.js`, and `renderCounter()` in `js/dom.js`.
5. Delete unused utilities and tokens after cleanup.
6. Preserve the architecture rules while simplifying.

## Style Guide

- 2-space indentation.
- Single quotes in JS.
- `const` by default, `let` when mutation is needed, never `var`.
- Prefer named function declarations for top-level, arrows for callbacks.
- CSS class names: `kebab-case` (e.g. `.todo-item`).
- HTML IDs: `kebab-case` (e.g. `id="todo-list"`).
- JS names: `camelCase` for variables/functions, `PascalCase` only for constructors.

## Testing

There is no test runner. To verify changes:

1. Open `index.html` in a browser.
2. Open the browser console (F12) — there should be zero errors.
3. Test the feature interactively.
