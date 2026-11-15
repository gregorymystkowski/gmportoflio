# Gregory Mystkowski — Product Design Portfolio

Dependency-free, responsive portfolio. Requires Python 3 to serve locally; no build step, external fonts, API keys or backend.

```sh
cd /workspace/gmportoflio
python3 -m http.server 3000 --bind 127.0.0.1
```

Open the server on port 3000. Case studies: `/work/memomed/`, `/work/motonide/`, `/work/veyra/`.

The four pages, styling, seven authentic project screenshots and original CV come from the approved `portfolio-completo.html` supplied by Gregory. Embedded assets were extracted without changing their bytes. Screenshot sources, the capture date recorded in the approved preview, dimensions and SHA-256 checksums are in `public/screenshots/sources.json`.

MemoMed screenshots show its public commercial website. Motonide screenshots show discovery, comparison and availability requests to professional rental operators; they do not demonstrate payments or confirmed bookings. The historical venture figures are 800 users and 150 motorcycles. The original CV retains its earlier figures, as disclosed on the site. Veyra is an independent concept with fictional demo data and names. No customer quotes, conversion results or research findings have been invented.

Theme follows system preference until explicitly selected, then persists locally. Mobile navigation supports Escape. Reduced-motion preferences are respected. External links open separately with noopener.

Hosting is configured for Vercel through `vercel.json`: static files served from the repository root, with no build step. The standalone preview is not part of the deployed source.
