import Link from "next/link";
import { site } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-inner">
        <p className="eyebrow">Enquiry</p>
        <h2 id="cta-title">Tell us the voltage, the asset and the window.</h2>
        <p>{site.positioning[2]}</p>
        <div className="hero-actions">
          <Link className="btn btn-light" href="/contact">
            Request a quote
          </Link>
          <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
