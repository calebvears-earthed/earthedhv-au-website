# Earthed High Voltage

Website for Earthed High Voltage Pty Ltd. Next.js on Vercel. Production domain: [www.earthedhv.au](https://www.earthedhv.au).

Earthed Energy (`earthedenergy.au`) is a separate company and a separate site. This repo does not share that site's copy.

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
```

`npm run build` runs the copy check first, then a static Next.js build. The check fails the build when banned wording is present. Patterns live in `scripts/check-copy.mjs`, which is excluded from the scan.

## Enquiry form

The contact form posts to Formspree form `mvkzjdwe`. With JavaScript it stays on the page and confirms the send. Without JavaScript it posts to Formspree directly.

Fields: `name`, `email`, `phone`, `message`.

## Pages

Home, About, Services (one page per service), Capabilities (battery and BESS, wind, solar, HV cable jointing and termination, switching, commissioning), Projects (one page per project), Safety and compliance, Contact, Privacy, and a 404.

Copy and photographs come from the previous earthedhv.au page. Company details: ABN 99 679 180 879, ACN 679 180 879, SA electrical contractor licence PGE 336477.
