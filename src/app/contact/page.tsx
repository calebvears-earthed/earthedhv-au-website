import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { Photo } from "@/components/Photo";
import { aboutCopy, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from Earthed High Voltage. Call 0433 839 284 or email calebvears@earthedhv.au. SA electrical contractor licence PGE 336477.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Earthed High Voltage",
    description:
      "Request a quote from Earthed High Voltage. Call 0433 839 284 or email calebvears@earthedhv.au. SA electrical contractor licence PGE 336477.",
    url: "/contact",
  },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const failed = params.error === "1";

  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Contact
          </p>
          <p className="eyebrow">03 · Contact</p>
          <h1>Enquire.</h1>
          <p className="lede">{aboutCopy.contactLine}</p>
        </div>
      </header>

      <section className="section">
        <div className="wrap contact-layout">
          <div>
            <p className="eyebrow">Direct</p>
            <h2>Caleb Vears</h2>
            <ul className="detail-list">
              <li>
                <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>Adelaide Hills and Strathalbyn, {site.regionName}</li>
            </ul>
            <div className="licence-panel">
              <p className="eyebrow">Published as required</p>
              <p>SA electrical contractor licence {site.licence}</p>
              <p>ABN {site.abn}</p>
              <p>ACN {site.acn}</p>
            </div>
            <div className="shot contact-photo">
              <Photo
                src="/images/switching.jpg"
                alt="Technicians at an outdoor high voltage switchboard"
                sizes="(min-width: 800px) 40vw, 100vw"
                objectPosition="center 35%"
              />
            </div>
          </div>
          <div className="form-panel">
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "0.5rem" }}>Request a quote</h2>
            <p className="lede" style={{ marginBottom: "1.25rem" }}>
              Name, email, phone and a short brief. HV fault or outage — call, don&apos;t wait on the form.
            </p>
            {failed ? (
              <p className="form-error" role="alert" style={{ marginBottom: "1rem" }}>
                We couldn&apos;t send that. Call {site.phoneDisplay} or email {site.email}.
              </p>
            ) : null}
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
