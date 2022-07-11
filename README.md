# React Starter Template

Opinionated React TS starter template with Vite (fast bundling, instant server start, less bloat files).

## Includes

- React 18 (latest)
- TypeScript
- Vite
- Querying data and state management through react-query library
- wouter (smaller footprint than react-router) - Includes private routes
- Authorization is done through react-query-auth library
- Lazy import with Suspense - lazy imported pages
- Prettier, ESLint
- husky with lint-staged (pre-commit hook)

- If husky and eslint don't work:

1. Delete .husky and eslintrc.json
2. `npx eslint --init` (with standard ruleset)
3. `npx mrm@2 lint-staged`

## How to start

- Clone this repo and then:
- `npm i`
- `npm run dev`
