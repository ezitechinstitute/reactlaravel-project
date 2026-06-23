# AI Marketing Agency — React + Vite

This is the React + Vite conversion of the original HTML/CSS/JS template
(Tailwind v4 + GSAP/Swiper/Lenis animations).

## How it works
- **Single-page app** with React Router. Every original `.html` page is a route
  (see `src/App.jsx`).
- **Shared header & footer** live in `src/components/Layout.jsx` (they were
  byte-identical across all original pages).
- **Page markup** is preserved verbatim as raw HTML strings in `src/content/*.html`
  and injected into the DOM, so all Tailwind classes and `data-*` animation hooks
  keep working exactly as before.
- **Animations**: the original `assets/main.js` was auto-converted to
  `public/assets/main.spa.js`. Its `DOMContentLoaded` hooks were turned into a
  re-runnable `window.__opaiInit()` that fires on every route change, so GSAP /
  ScrollTrigger / Swiper / marquee re-initialize when you navigate. Lenis smooth
  scroll is guarded so it only initializes once.

## Run locally (development)
```bash
npm install
npm run dev
```
Then open the URL Vite prints (usually http://localhost:5173).

## Production build
```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy
- SPA fallback is already configured for **Netlify** (`public/_redirects`) and
  **Vercel** (`vercel.json`). For other hosts, route all unknown paths to
  `index.html`.

## Routes
/ , /about , /services , /service-details , /pricing , /team , /team-details ,
/blog , /blog-details , /case-study , /case-study-details , /contact , /login ,
/signup , and a catch-all 404.

## Notes
- The original template referenced `images/gradient/opai-37.jpg`, which was missing
  from the source assets. It now points to `opai-1.png` on the login/signup pages.
- Google Fonts load from the CDN (needs internet at runtime).

## Ezitech customizations
This project was rebranded from the original template to **Ezitech**:

- **Navbar** (`src/content/header.html`): new items — Home, About (dropdown),
  Company (dropdown), Services (4-column mega dropdown), Portfolio, Internships,
  Blog, LMS. Logo replaced with `public/images/logo/ezitech-logo.png` + the
  **EZITECH** wordmark. CTA button now reads **Request Custom Software**.
- **Light / Dark theme toggle** (new feature): a sun/moon button in the navbar.
  - Logic lives in `src/components/Layout.jsx` (delegated click handler, so it
    works on every page after SPA navigation).
  - Light palette is defined in `public/assets/theme.css` (the base template is
    dark-only; the toggle adds a `.light-theme` class on `<html>` that remaps the
    colour variables).
  - The choice is saved in `localStorage` (`ezitech-theme`) and re-applied before
    paint via a small inline script in `index.html`, so there is no theme flash.
- **Footer** (`src/content/footer.html`): newsletter block removed; new company
  description, contact details, social links, and link columns. The copyright
  year (`data-footer-year`) is set automatically to the current year by the
  vendor script, so it shows 2027 in 2027, etc.
- Brand name **Nexsas → Ezitech** across all page content.
