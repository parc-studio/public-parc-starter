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
