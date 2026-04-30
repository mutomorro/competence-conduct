# Competence & Conduct Toolkit — Brand assets

Drop the contents of this folder into your app's `/public` directory.
All paths in the snippets below assume they're served from the site root.

## Files

| File | Purpose |
| --- | --- |
| `logo-mark.svg` | Color symbol, transparent background. Use anywhere. |
| `logo-mark-on-ink.svg` | Color symbol on `#0E0F0E` ink background. |
| `logo-mark-mono.svg` | Monochrome symbol — uses `currentColor`. Set `color:` on the parent. |
| `logo-lockup.svg` | Symbol + wordmark, ink type. Uses Inter Tight (system fallback). |
| `logo-lockup-on-ink.svg` | Symbol + wordmark, paper type — for dark backgrounds. |
| `favicon.svg` | Modern SVG favicon — sharpest on retina. |
| `favicon-16x16.png` / `favicon-32x32.png` / `favicon-48x48.png` | PNG favicons for browsers without SVG favicon support. |
| `apple-touch-icon.png` | 180×180 with paper background — iOS home-screen icon. |
| `icon-192.png` / `icon-512.png` | PWA / Android icons. |
| `og-image-1200x630.png` | Default Open Graph / Twitter preview image. |
| `site.webmanifest` | Web app manifest. |

## Drop-in `<head>` snippet

```html
<!-- Favicons -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#6366F0">

<!-- Open Graph -->
<meta property="og:title" content="Competence & Conduct Toolkit">
<meta property="og:description" content="A practical resource for housing leaders navigating the new Competence & Conduct Standard.">
<meta property="og:image" content="/og-image-1200x630.png">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
```

## Using the logo in markup

```html
<!-- Symbol only -->
<img src="/logo-mark.svg" alt="Competence & Conduct Toolkit" width="32" height="32">

<!-- Lockup (symbol + wordmark) -->
<img src="/logo-lockup.svg" alt="Competence & Conduct Toolkit" height="32">

<!-- Inline mono symbol that picks up text colour -->
<span style="color: #0E0F0E; display: inline-flex; align-items: center; gap: 12px;">
  <img src="/logo-mark-mono.svg" alt="" width="28" height="28" aria-hidden="true">
  <strong>Competence &amp; Conduct Toolkit</strong>
</span>
```

## Brand colours

| Token | Value |
| --- | --- |
| Indigo (competence) | `#6366F0` |
| Violet (conduct) | `#9B51E2` |
| Overlap (lens) | `#5E3FD3` |
| Ink | `#0E0F0E` |
| Paper | `#F6F4EE` |

## Construction & clear space

- Symbol viewBox is `0 0 56 56`. Keep at least 8 units (≈14% of width) of clear space on every side.
- Minimum symbol size: **16px** (favicon). Lockup minimum: **120px** wide.
- Don't recolour, rotate, distort, add effects, or replace the wordmark font with anything other than Inter Tight.

The wordmark is set in **Inter Tight 500** with the ampersand in italic 400 at ~55% opacity. Lockup SVGs reference Inter Tight by name with a system fallback — for pixel fidelity, load the font in your app or convert the SVG text to outlines.
