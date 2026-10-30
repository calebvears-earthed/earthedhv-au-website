# Earthed High Voltage

Website for Earthed High Voltage Pty Ltd. Next.js app on Vercel. Production domain: [www.earthedhv.au](https://www.earthedhv.au).

The visual system shared with [earthedenergy.au](https://earthedenergy.au) is documented in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). Tokens live in `design-system/`.

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Enquiry form

`POST /api/quote` accepts JSON or a normal form post. Fields: `name`, `email`, `phone`, `message`.

Delivery, in order:

1. **Resend**, if `RESEND_API_KEY`, `RESEND_FROM_EMAIL` and `CONTACT_TO_EMAIL` are set.
2. **Formspree**. `FORMSPREE_ID` overrides the form. Set `FORMSPREE_ID=off` to disable it. If unset, the route uses `mvkzjdwe`, the form id already on the previous site.
3. If neither provider is active, the enquiry is written to the server log and the request still succeeds.

Every accepted enquiry is also written to the server log.

## Content

Copy, project names and figures come from the previous earthedhv.au page. Company registration details (ABN 99 679 180 879, ACN 679 180 879) are the public ABR record for Earthed High Voltage Pty Ltd. Anything still needing Caleb is listed on the pull request.
