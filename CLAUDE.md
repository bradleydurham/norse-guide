# Norse & Viking Learning Guide

A single-page React app deployed to GitHub Pages. No backend. No auth.

## Stack
- React 18 + Vite
- Plain inline styles (no CSS framework)
- Deployed via `gh-pages` npm package

## Commands
```
npm install       # install deps
npm run dev       # local dev server at localhost:5173
npm run build     # production build → dist/
npm run deploy    # build + push to gh-pages branch
```

## Project Structure
```
src/
  data.js     # all learning guide content (books, films, TV, etc.)
  App.jsx     # main component — tabs, accordion, layout
  main.jsx    # React entry point
```

## Key Conventions
- All content lives in `src/data.js` — add/edit entries there, not in App.jsx
- Each item has: title, author, year, type, accuracy (1–5), focus (mythology|history|both), tag, note
- Styles are inline objects — no external CSS files
- `focusConfig` and `accuracyColor`/`accuracyLabel` helpers live at the top of App.jsx

## Deployment
Deploys to GitHub Pages via the `gh-pages` branch.
Set `base` in `vite.config.js` to match your repo name: `base: '/your-repo-name/'`
Then run `npm run deploy`.
