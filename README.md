# Personal Homepage

A concise academic-style personal website built with vanilla HTML, CSS, and JavaScript.

## Design

The site uses a content-first layout, restrained colors, clear sections, and compact project entries. Its typography uses Crimson Pro for primary text and Ubuntu Mono for metadata.

## Local Preview

Open `index.html` directly in a browser, or run the following command in the project directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before Publishing

Replace the following placeholder content in `index.html`:

- `Your Name`
- Your personal introduction and skills
- The names, descriptions, and technology stacks of the project entries
- `hello@example.com`
- `https://github.com/` and `github.com/your-name`
- The `Photo` placeholder, which can be replaced with an `<img>` element

Do not add empty project links. When real links are available, use clear labels such as `Code` and `Demo`.

## Files

- `index.html`: Page content and semantic structure
- `styles.css`: Typography, visual styles, and responsive layout
- `script.js`: Mobile navigation and active-section state
- `README.md`: Maintenance and deployment notes

## Deployment

The project has no build step and can be deployed directly to GitHub Pages, Cloudflare Pages, Netlify, or Vercel.
