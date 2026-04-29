# Norse & Viking — Self-Guided Learning Path

A single-page reference app for self-directed study of Norse mythology and Viking history. Built with React + Vite.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Deploy to GitHub Pages

1. Update `base` in `vite.config.js` to match your repo name:
   ```js
   base: '/your-repo-name/'
   ```
2. Run:
   ```bash
   npm run deploy
   ```
3. In your GitHub repo → **Settings → Pages**, set source to the `gh-pages` branch.

Your site will be live at `https://your-username.github.io/your-repo-name/`

## Adding Content

All entries are in `src/data.js`. Each item takes:

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Display name |
| `author` | string | Author, translator, or director |
| `year` | string | Publication or release year |
| `type` | string | Book, Film, TV Series, etc. |
| `accuracy` | 1–5 | 5 = Scholarly, 1 = Dramatized |
| `focus` | string | `mythology`, `history`, or `both` |
| `tag` | string | Short label (Essential, Fiction, etc.) |
| `note` | string | Paragraph shown when expanded |
