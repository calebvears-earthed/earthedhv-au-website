# Earthed High Voltage

Single page for Earthed High Voltage Pty Ltd. Next.js on Vercel. Production domain: [www.earthedhv.au](https://www.earthedhv.au).

Earthed Energy (`earthedenergy.au`) is a separate company and a separate site.

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
```

`npm run build` runs the copy check first. The check fails when banned wording is present. Patterns live in `scripts/check-copy.mjs`, which is excluded from the scan.

The footer uses the words "SAPN approved contractor".

## Page

One scrolling page: hero, about, capabilities, three projects, contact, and privacy. Older paths such as `/services` and `/projects` redirect to the matching anchor on this page.

Company details: ABN 99 679 180 879, ACN 679 180 879, SA electrical contractor licence PGE 363823.

The enquiry form posts to Formspree `mvkzjdwe`.
