import { site } from "@/lib/content";

export function CtaBand({
  title = "Tell us about the work.",
  text = "Earthed has worked alongside large international companies, local and non-local investors and local network connection expertise. We welcome any enquiry for collaboration.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-band-inner">
        <div>
          <p className="eyebrow">Enquire</p>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-primary" href="/contact">
            Request a quote
          </a>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
