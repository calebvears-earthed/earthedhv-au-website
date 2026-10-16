# Earthed High Voltage — website

Static site. `index.html` is fully self-contained (fonts, images, scripts inlined).

## Deploy (GitHub → Vercel)
1. Create a new GitHub repo, upload the contents of this folder (index.html, vercel.json, README.md).
2. In Vercel: Add New Project → import the repo → Framework preset: **Other** → Deploy. No build step.
3. Custom domain: Vercel → Project → Settings → Domains → add `earthedhv.au` and `www.earthedhv.au`.
   At your DNS host add:
   - A record  @   → 76.76.21.21
   - CNAME     www → cname.vercel-dns.com
   Vercel issues SSL automatically once DNS propagates (usually under an hour).

## Contact form
The enquiry form is front-end only. To make it send, point the form at Formspree / Web3Forms or a Vercel serverless function.
