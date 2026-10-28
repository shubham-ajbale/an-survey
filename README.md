# AN Survey Consultant

Vite + React website configured for GitHub Pages deployment.

## Run locally

```bash
npm ci
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push this project to the `main` branch of `shubham-ajbale/an-survey`.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to complete successfully.
4. The site will be available at https://shubham-ajbale.github.io/an-survey/.

Vite uses `base: '/an-survey/'` for this GitHub Pages project site, so built JavaScript, CSS, the favicon, and images under `public/assets/` resolve under the repository path. Keep image files in `public/assets/` and reference them using `${import.meta.env.BASE_URL}assets/<filename>` (URL-encode spaces in filenames). The workflow rebuilds and deploys the site on each push to `main` and can also be run manually from Actions.
