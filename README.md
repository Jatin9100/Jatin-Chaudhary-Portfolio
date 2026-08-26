# Portfolio — File Structure

This portfolio has been refactored from a single HTML file into 4 files:

| File | Contents |
|---|---|
| `index.html` | Page structure/markup only (head, meta tags, body markup) |
| `style.css` | All CSS (design tokens, layout, animations, responsive rules) |
| `script.js` | All JavaScript (theme toggle, scroll effects, contact form, 3D interactions, chart rendering) |
| `README.md` | This file |

## How to run it

Just open `index.html` in a browser — double-click it or drag it into a browser tab.

Everything is linked with plain relative paths (`style.css`, `script.js`), so **no local server or build step is required** — it works straight out of the zip, offline-friendly except for the two external CDN resources below (needed for fonts/icons):

- Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- Lucide icon library (via unpkg CDN)

Keep all 4 files in the same folder — the paths are relative.
