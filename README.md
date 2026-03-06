# Snow White: The Dwarfs' Care

A single-page interactive web publication. The landing page shows Snow White in the crystal coffin (poisoned apple) and the background story. The user enters the cottage to see the seven dwarfs gathered at the hearth. Click each dwarf to read his first-person story. Read all seven to unlock the ending.

## Deploy to GitHub Pages

This is a static site with no build step. To host on GitHub Pages:

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Source", choose **Deploy from a branch**.
4. Branch: `main` (or `master`), folder: `/ (root)`.
5. Save. The site will be at `https://<username>.github.io/<repo-name>/`.

All asset paths are relative, so the site works in any subpath. No `<base>` tag is used.

## How to Run Locally

**Option 1: Open directly**
```bash
open index.html
```
Or double-click `index.html` in Finder.

**Option 2: Serve via HTTP (recommended for full behavior)**
```bash
cd /path/to/Digital_Publishing_web
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

## Project Structure

| File        | Purpose                                      |
|-------------|----------------------------------------------|
| `index.html`| Structure: landing, hub, modal, ending       |
| `styles.css`| Layout, typography, “storybook at night” UI  |
| `app.js`     | State, vignettes, event handlers              |
| `assets/`    | Images: coffin.png, dwarfs.png; audio: bgm.mp3 |
| `README.md`  | This file                                    |

## Content

Vignette texts are in `app.js` (the `VIGNETTES` object). They are translated into English in a literary, storybook style from the original Chinese narrative. The two-character interactions (soup incident, hot water/sneeze, flowers) are woven into the relevant dwarfs' accounts.

## Position Editor

To adjust dwarf button positions on the hub image, open `position-editor.html` in a browser. Drag each button onto the corresponding dwarf's head, then click "Export positions". Paste the output into `app.js` to replace the `DWARF_POSITIONS` block.

## Reset Progress

Progress is stored in `localStorage` under the key `snowwhite-dwarfs-care`.

- **In-app:** Use the “Reset” button on the hub screen.
- **Manual:** Open DevTools → Application (or Storage) → Local Storage → remove `snowwhite-dwarfs-care`.

## Features

- Vanilla HTML/CSS/JS (no frameworks or build tools)
- Responsive layout (mobile and desktop)
- Accessible: buttons, `aria` on modal, ESC to close, Tab focus trap in modal
- Progress saved in `localStorage`
- Hub-and-spoke: tap dwarf → vignette modal → mark read & return → repeat until 7/7 → unlock ending

## License

Placeholder — add your attribution.
