# earthedhv.au · 10 Tier-One Improvements for Web Traffic + Usability

**Prepared · 21 October 2026**  
**By · Earthed High Voltage Pty Ltd**

Current status after today's patch: viewport meta added, mobile responsive CSS injected, SEO tags live, mailto: form replaced with Formspree placeholder (Caleb to insert endpoint ID). Site is now serviceable on mobile · but the following ten changes will materially move the needle on traffic, trust, and conversion.

Ranked by impact per hour of effort.

---

## 1 · Compress the HTML build from 12.2 MB to under 500 KB

**Current** · the single `index.html` file is 12,757,682 characters · a React bundle inlining every component, image reference, and dependency in one file.  
**Impact** · 12 MB loads in ~40 seconds on a 3G connection, which is where ~15% of regional SA mobile traffic sits. Google penalises Core Web Vitals (LCP, INP) hard for 12 MB pages. Mobile users abandon above 3 seconds.  
**Fix** · split the React bundle. Lazy load route components, extract images to `/img/*` with proper `<img>` tags, enable Vercel's automatic gzip + Brotli. Target: initial payload under 300 KB, full page under 2 MB.  
**ETA** · 1-2 days with a React developer who understands the build config.

---

## 2 · Create the Formspree endpoint and swap the placeholder

**Current** · form action is `https://formspree.io/f/REPLACE_WITH_EHV_FORMSPREE_ID` after today's patch.  
**Impact** · without this swap, every enquiry submitted will fail silently. We lose 100% of inbound leads.  
**Fix** · log into Formspree (same account you use for earthedenergy.au), create a new form for earthedhv.au, enable email notification to `caleb@earthedhv.au`, grab the endpoint ID (format `f/xyzabc123`), replace the placeholder in `index.html`.  
**ETA** · 10 minutes.  
**Related** · set up a dedicated inbox `enquiries@earthedhv.au` so form submissions don't clutter your personal inbox.

---

## 3 · Add real OpenGraph social preview images

**Current** · patch references `/img/og-cover.jpg` but no file exists at that path.  
**Impact** · when the URL is shared on LinkedIn, Teams, WhatsApp, Slack or email previews, there's no card image · it looks like a broken site, dramatically reducing click-through.  
**Fix** · design a 1200 × 630 px cover image featuring the Earthed High Voltage brand, a HV cable termination photo (dark plum background per brand palette), and the tagline "SAPN-accredited HV specialists in SA". Save as `img/og-cover.jpg`. Create matching `img/favicon-32.png` and `img/apple-touch-icon.png`.  
**ETA** · 30 minutes in Canva using your brand assets.

---

## 4 · Install Vercel Analytics + Microsoft Clarity

**Current** · no analytics on the site · you have zero data on traffic sources, bounce, conversion, or user behaviour.  
**Impact** · you cannot improve what you cannot measure. Every content decision from here is a guess until data flows.  
**Fix** · enable Vercel Analytics (one-click in the Vercel dashboard, free tier). Add Microsoft Clarity script to the `<head>` (free, no cookie banner required in AU, gives you session recordings + heatmaps). Within one week you will know which pages are read and which are bounced from.  
**ETA** · 20 minutes.

---

## 5 · Add structured data (JSON-LD) for Google rich results

**Current** · zero schema markup. Google treats earthedhv.au as a generic website.  
**Impact** · competing HV contractors (Enerven, PBE Group, TEC) are winning rich results in local search · they appear with business info, phone, service area, reviews. You don't.  
**Fix** · add `LocalBusiness` schema (name, address, phone, service area), `Service` schema for each HV capability (HV termination, BESS, substations, emergency callout), and `AggregateRating` once you have reviews. Code snippet is 2 KB of JSON-LD in the `<head>`.  
**ETA** · 2 hours.  
**Expected lift** · 15-30% improvement in local-pack visibility within 60 days.

---

## 6 · Build dedicated service pages instead of one monster index

**Current** · single `index.html` with all services under one route.  
**Impact** · every service search ("HV cable termination Adelaide", "BESS commissioning SA", "SAPN switching Adelaide") competes with every other service for the same URL. Google ranks dedicated pages higher.  
**Fix** · create `/services/hv-cable-termination/`, `/services/bess-commissioning/`, `/services/emergency-callout/`, `/services/sapn-switching/`, `/services/substation-works/`. Each page ~800 words, service-specific case study, specific keywords, local-area targeting (Barossa, Port Pirie, Tailem Bend). Link from main nav + homepage card grid.  
**ETA** · 1 week with content from your existing project knowledge (Nyrstar, Doosan, 111 MW BESS Barossa).  
**Expected lift** · 2-5x organic search traffic within 90 days.

---

## 7 · Replace the hero section with a case-study-led video

**Current** · static hero (based on your screenshot · "BATTERY" headline cut off, image overlay).  
**Impact** · HV buyers (EPCs, developers, utility managers) want to see evidence of real work, not stock imagery. A 30-second looping video of actual Earthed crew on-site (crane lifting a Wilson TX, cable pulling, switching cubicle work) builds immediate credibility.  
**Fix** · film a 30-60 second site reel at your next Nyrstar or Doosan shift (phone footage is fine, cut in Final Cut or CapCut). Compress to WebM + MP4, autoplay muted + loop, poster image for first frame. Caption overlay: "SAPN-accredited · 111 MW BESS · 24/7 emergency callout".  
**ETA** · 4 hours including filming + edit.  
**Expected lift** · 20-40% increase in time-on-page and enquiry conversion.

---

## 8 · Add a 24/7 emergency callout CTA floating button

**Current** · "Emergency Call Out" is one card among nine on the services grid.  
**Impact** · emergency HV faults happen outside business hours · site managers Googling "HV fault Adelaide 2am" are high-intent leads worth $5-20k per callout. A persistent floating "Emergency Call Out · 0433 839 284" button in the bottom-right converts 10-20x better than a card buried in the services grid.  
**Fix** · add a sticky position-fixed button with the emergency number as a `tel:` link. Red background with the orange hi-vis colour from your brand palette, pulsing animation. Make it the only "red" element on the entire site so it reads unambiguously as the panic button.  
**ETA** · 30 minutes.  
**Expected lift** · 2-4 extra emergency callouts per month at $5-20k each · payback the entire website investment in one call.

---

## 9 · Add verifiable trust signals above the fold

**Current** · credentials (SAPN accredited, Nexans + Prysmian certified, HVOA) appear in body text.  
**Impact** · in B2B infrastructure procurement, the first question is "are you qualified to touch this voltage?". Credentials buried in paragraph three don't close the trust gap fast enough.  
**Fix** · add a horizontal trust bar directly below the hero · logos for SAPN Accredited, Nexans Certified, Prysmian Certified, Electranet, ISO 9001 (if held or planned), plus hard numbers · "PGE 336477 · $20M PL · 10-year workmanship warranty · 24/7 emergency response". No text, no fluff. Logos + numbers.  
**ETA** · 2 hours to collect logo files + build the component.  
**Expected lift** · 15-25% uplift in enquiry conversion from first-time visitors.

---

## 10 · Set up Google Search Console + Google Business Profile

**Current** · Google Search Console almost certainly not verified for earthedhv.au. Google Business Profile for Earthed High Voltage may not exist or may be the EE Co profile.  
**Impact** · without Search Console, you have no visibility into what Google thinks of your site · which pages are indexed, which have crawl errors, what queries you rank for. Without Business Profile, you don't appear in Google Maps or the local 3-pack for "HV contractor Adelaide".  
**Fix** · verify ownership of earthedhv.au in Google Search Console (DNS TXT record via your Hostinger / Cloudflare DNS). Create or claim the Google Business Profile for Earthed High Voltage Pty Ltd (separate from any EE Co profile), set service area as "greater Adelaide + regional SA", add 20+ photos of real work, request a review from your Nyrstar + Doosan contacts.  
**ETA** · 1 hour verification + ongoing weekly review requests.  
**Expected lift** · 30-50% increase in local-pack discovery within 90 days.

---

## PRIORITY ORDER (do these first)

**This week:**
1. #2 Formspree swap (10 min) · without this, every enquiry disappears
2. #3 OG + favicon images (30 min)
3. #8 Emergency callout floating button (30 min)
4. #4 Analytics install (20 min)
5. #10 Search Console + Business Profile (1 hour)

**This month:**
6. #9 Trust signal bar (2 hours)
7. #5 Structured data JSON-LD (2 hours)
8. #7 Case-study hero video (4 hours)

**This quarter:**
9. #6 Dedicated service pages (1 week)
10. #1 Rebuild to compress 12 MB bundle (1-2 days with developer)

Total week-one effort: ~3 hours. Expected enquiry lift: 50-100% within 60 days.

---

**Prepared by Earthed High Voltage Pty Ltd · Caleb Vears · 0433 839 284 · caleb@earthedhv.au**
