# Earthed High Voltage · website

Static site on Vercel (project `earthedhv-au-website`, team `earthed-hub`). No build step.
Pushes to `main` deploy to production at earthedhv.au. Any other branch gets a preview URL.

## Files
- `index.html` · self-contained bundle (fonts, images, scripts inlined)
- `thank-you.html` · enquiry confirmation page, served at `/thank-you`
- `img/` · source images and `logo-white.png` (used by the thank-you page)
- `tools/template.py` · extract / repack the page template inside `index.html`

## Editing the page
At load, the bundler runtime swaps the whole `<html>` for the template stored in
`<script type="__bundler/template">`. Anything added to the outer `<head>` disappears once
the page renders, so markup, CSS and scripts must go in the template:

```
python3 tools/template.py extract   # index.html -> tools/template.html (git-ignored)
# edit tools/template.html
python3 tools/template.py pack      # back into index.html
```

The outer `<head>` still matters for crawlers and social previews that don't run JS,
so SEO and OpenGraph tags live in both places.

The x-dc runtime drops valueless attributes, so write `required="required"` and
`hidden="hidden"`, not bare `required` / `hidden`.

## Responsive layer
`<style id="ehv-responsive">` in the template head. The page is built from inline styles, so
rules use `!important` against `ehv-*` hook classes. Breakpoints: 1100 / 768 / 640 / 560 px,
plus 44px tap targets on coarse pointers.

## Enquiry form
Posts to Formspree `https://formspree.io/f/mvkzjdwe` (endpoint ID `mvkzjdwe`).
- Fields: `name`, `email`, `phone` (optional), `message`, plus `_subject`
- Spam: `_gotcha` honeypot. If filled, the script skips the send and redirects anyway.
- With JS: submits via fetch, shows a loading state, keeps input and shows an error on failure,
  redirects to `/thank-you` on success. Without JS: plain POST to Formspree.

## Domain
`earthedhv.au` redirects to `www.earthedhv.au`. DNS: A `@` → 76.76.21.21, CNAME `www` → cname.vercel-dns.com.
