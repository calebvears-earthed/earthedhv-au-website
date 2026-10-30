import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { sectors, services, site } from "@/lib/content";
import { serviceJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cable terminations, high voltage switching, earthing, distribution connections, maintenance and 24-hour fault response for renewable projects in South Australia.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services · Earthed High Voltage",
    description:
      "Cable terminations, high voltage switching, earthing, distribution connections, maintenance and 24-hour fault response for renewable projects in South Australia.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Services
          </p>
          <p className="eyebrow">Capabilities</p>
          <h1>High voltage services.</h1>
          <p className="lede">
            Cable terminations up to 66 kV, high voltage switching, earthing, distribution connections,
            and operation and maintenance for wind, solar and battery projects in South Australia.
          </p>
        </div>
      </header>

      <div className="wrap">
        {services.map((service, index) => (
          <article className={`feature${index % 2 ? " reverse" : ""}`} id={service.id} key={service.id}>
            <div className="shot">
              <Photo
                src={service.image}
                alt={service.alt}
                sizes="(min-width: 800px) 50vw, 100vw"
                objectPosition={service.objectPosition}
              />
            </div>
            <div>
              <p className="idx">{service.index}</p>
              <h2>{service.title}</h2>
              <p className="lede" style={{ marginTop: "0.9rem" }}>
                {service.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="section" aria-labelledby="sector-scope">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Sectors</p>
            <h2 id="sector-scope">Where the scope sits.</h2>
          </div>
          {sectors.map((sector) => (
            <article key={sector.id} id={sector.id} className="project-block">
              <div className="project-copy">
                <p className="idx">
                  {sector.index} · {sector.title}
                </p>
                <h2>{sector.title}</h2>
                <p className="lede">{sector.summary}</p>
                <ol className="scope">
                  {sector.scope.map((item, itemIndex) => (
                    <li key={item.title}>
                      <span className="idx">{String(itemIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{item.title}</strong>
                        <span>{item.detail}</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="shot" style={{ aspectRatio: "4 / 5" }}>
                <Photo
                  src={sector.image}
                  alt={sector.alt}
                  sizes="(min-width: 800px) 40vw, 100vw"
                  objectPosition={sector.objectPosition}
                />
              </div>
            </article>
          ))}

          <div className="sister-band" style={{ marginTop: "2rem" }}>
            <p className="eyebrow">Residential and small-scale</p>
            <h2>Solar and battery with Earthed Energy.</h2>
            <p className="lede">
              Part of the Earthed Energy group. Solar and battery enquiries go to {site.sister.name}.
            </p>
            <p>
              <a className="btn btn-primary" href={site.sister.href}>
                Visit earthedenergy.au
              </a>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd()) }}
      />
    </>
  );
}
