# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 + Vite + TypeScript mobile H5 scaffold for a merchant inquiry pool management application. Uses Varlet UI (Material Design 3) components and targets mobile browsers only.

**Requirements:** Node >=20.10.0, PNPM >=9.12.0

## Commands

```bash
# Development
pnpm dev          # Start dev server with mock API and Eruda mobile debugger
pnpm build        # Production build (drops console/debugger, enables compression)
pnpm preview      # Preview production build

# Linting & Formatting
pnpm lint:eslint      # Lint and fix src/ and mock/ TypeScript/Vue files
pnpm lint:prettier    # Format all source files
pnpm lint:stylelint   # Lint and fix CSS/SCSS/Vue styles

# Commits (use instead of git commit)
pnpm commit       # Interactive conventional commit with cz-git
```

No test runner is configured yet (tsconfig.vitest.json exists but no test scripts).

## Architecture

### Module Aliases

- `@` → `src/`
- `#` → `types/`

### Auto-Import System

Vue 3 Composition API, Pinia, Vue Router, VueUse composables, and Varlet UI components are all **auto-imported** — do not manually import these in `.vue` files. Types are generated to `types/auto-imports.d.ts` and `types/components.d.ts`.

### Routing & Layout

Routes are defined manually in [src/router/routes.ts](src/router/routes.ts) (file-based routing plugin is installed but not used). All routes wrap inside [src/layout/index.vue](src/layout/index.vue), which conditionally renders:

- **Main pages** (`route.meta.mainPage: true`): AppBar + bottom navigation tabs
- **Sub-pages** (`route.meta.mainPage: false`): AppBar with back button, no bottom nav

The 4 main tabs (`biz-pool`, `industry-trends`, `merchant-recruitment`, `work-orders`) are identified by the `BOTTOM_BAR` enum in [src/constant/index.ts](src/constant/index.ts).

### HTTP Client & API

`http` object in [src/utils/request/index.ts](src/utils/request/index.ts) wraps Axios with:

- Base URL from `VITE_API_BASE_URL` env var
- Response interceptor: checks `res.code === 200`, shows Varlet `Snackbar.error()` on failure
- Response type: `ApiResponse<T> = { data: T; code: number; msg: string }`

All API functions are in [src/api/index.ts](src/api/index.ts) with corresponding TypeScript interfaces in [src/api/types.ts](src/api/types.ts).

Use [src/utils/tools/index.ts](src/utils/tools/index.ts) `useRequest(loading, cb)` to wrap API calls — it manages a loading `Ref<boolean>` with a minimum display duration to prevent UI flash.

### State Management

Pinia store with `pinia-plugin-persistedstate`. Current module: [src/store/modules/user.ts](src/store/modules/user.ts) — persists only `token` to localStorage. Add new store modules in `src/store/modules/` and export from [src/store/index.ts](src/store/index.ts).

### Theme

[src/App.vue](src/App.vue) auto-detects system dark/light preference and applies Varlet `Themes.md3Dark` or `Themes.md3Light`. Theme changes dynamically on system preference change.

### Mock API

Mock files live in `mock/`. Enabled in dev via `VITE_USE_MOCK=true`. Production build also has mock enabled (`VITE_USE_MOCK=true` in `.env.production` — change for real API deployment). The mock plugin serves files matching `mockPath: 'mock'` and ignores files prefixed with `_`.

### Build Features (env-controlled)

| Variable            | Effect                              |
| ------------------- | ----------------------------------- |
| `VITE_USE_MOCK`     | Enable vite-plugin-mock server      |
| `VITE_USE_ERUDA`    | Inject Eruda mobile debugger        |
| `VITE_USE_COMPRESS` | Gzip/Brotli + imagemin (build only) |
| `VITE_USE_REPORT`   | Bundle visualizer output            |
| `VITE_USE_PWA`      | Generate PWA manifest               |
| `VITE_USE_HTTPS`    | Dev server SSL                      |

## Code Conventions

### TypeScript

- `@typescript-eslint/no-explicit-any` is **off** — `any` is acceptable
- Use `import type` for type-only imports (`consistent-type-imports` rule enforced)

### Vue/Component Style

- `vue/multi-word-component-names` is **off**
- Each view has a companion composable file (`useXxx.ts`) for logic separation
- Mock data for views lives in a sibling `mock.ts` file

### CSS/SCSS

- No px-to-vw conversion (PostCSS viewport plugin is commented out) — use `px` directly
- Global SCSS variables go in [src/styles/variable.scss](src/styles/variable.scss)
- Stylelint enforces recess property order and BEM-style class naming
- Prettier formatting enforced via stylelint-prettier

### Prettier

Single quotes, no semicolons, 100 char print width, 2-space indent, no trailing commas.

### Commits

Conventional commits enforced by commitlint. Use `pnpm commit` for interactive prompt. Valid types: `feat`, `fix`, `perf`, `style`, `docs`, `test`, `refactor`, `build`, `ci`, `chore`, `revert`, `wip`, `workflow`, `types`, `release`.
