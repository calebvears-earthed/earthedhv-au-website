import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { aboutCopy, site } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Request a quote from Earthed High Voltage. Call 0433 839 284 or email calebvears@earthedhv.au. Adelaide Hills, South Australia.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="03 · Contact" title="Send an enquiry." lede={aboutCopy.contactLine} />
      <section className="section">
        <div className="wrap split">
          <ContactForm />
          <aside className="prose">
            <p className="eyebrow">Direct</p>
            <h2>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </h2>
            <p>
              <a className="text-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              {site.legalName}
              <br />
              {site.locality}, {site.regionName}
            </p>
            <p>
              SA electrical contractor licence {site.licence}
              <br />
              ABN {site.abn}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
