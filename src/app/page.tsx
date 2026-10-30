import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { aboutCopy, projects, sectors, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: "High voltage electrical services in South Australia · Earthed High Voltage",
  },
  description:
    "High voltage electrical services in South Australia: cable terminations to 66 kV, switching, earthing, and wind, solar and battery infrastructure. PGE 336477.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.filter((project) =>
    ["goyder-south", "barossa-bess", "port-wakefield"].includes(project.id),
  );

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Photo
            src="/images/wind-blade.jpg"
            alt="Wind turbine blade above a ridgeline wind farm"
            sizes="100vw"
            priority
            objectPosition="72% center"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-frame" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">South Australia</p>
          <h1>
            Renewable energy.
            <br />
            <em>High voltage.</em>
          </h1>
          <p className="hero-deck">{aboutCopy.headline}</p>
          <div className="hero-actions">
            <a className="btn btn-light" href="/contact">
              Request a quote
            </a>
            <a className="btn btn-ghost" href={`tel:${site.phoneTel}`}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <dl className="cred-bar">
        <div>
          <dt>Licence</dt>
          <dd>{site.licence}</dd>
        </div>
        <div>
          <dt>Switching</dt>
          <dd>{site.accreditation}</dd>
        </div>
        <div>
          <dt>Based</dt>
          <dd>Adelaide Hills and Strathalbyn</dd>
        </div>
        <div>
          <dt>Founded</dt>
          <dd>
            {site.founded}, {site.founder}
          </dd>
        </div>
      </dl>

      <section className="section" aria-labelledby="about-title">
        <div className="wrap split">
          <div className="about-lead">
            <p className="eyebrow">01 · About</p>
            <h2 id="about-title">{aboutCopy.headline}</h2>
          </div>
          <div className="prose">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <a href="/about">About Earthed</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
        <div className="wrap-wide">
          <div className="section-head">
            <p className="eyebrow">02 · Capabilities</p>
            <h2 id="services-title">The work we are asked to do.</h2>
          </div>
          <div className="cap-grid">
            {services.map((service) => (
              <a className="media-card" key={service.id} href={`/services#${service.id}`}>
                <Photo
                  src={service.image}
                  alt=""
                  sizes="(min-width: 1100px) 33vw, 100vw"
                  objectPosition={service.objectPosition}
                />
                <span className="scrim" />
                <span className="media-card-body">
                  <span className="idx">{service.index}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="sectors-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">03 · Sectors</p>
            <h2 id="sectors-title">Battery, wind and solar.</h2>
          </div>
          <div className="sector-list">
            {sectors.map((sector) => (
              <article className="sector-row" key={sector.id} id={sector.id}>
                <div className="shot">
                  <Photo
                    src={sector.image}
                    alt={sector.alt}
                    sizes="(min-width: 800px) 50vw, 100vw"
                    objectPosition={sector.objectPosition}
                  />
                </div>
                <div>
                  <p className="idx">{sector.index}</p>
                  <h3 className="serif" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", margin: "0.4rem 0 0.75rem" }}>
                    {sector.title}
                  </h3>
                  <p className="lede">{sector.summary}</p>
                  <p style={{ marginTop: "1rem" }}>
                    <a href={`/services#${sector.id}`}>{sector.title} scope</a>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="projects-title">
        <div className="wrap-wide">
          <div className="section-head">
            <p className="eyebrow">04 · Projects</p>
            <h2 id="projects-title">Selected work.</h2>
          </div>
          <div className="project-grid">
            {featured.map((project) => (
              <a className="media-card" key={project.id} href={`/projects#${project.id}`} style={{ minHeight: 480 }}>
                <Photo src={project.image} alt="" sizes="(min-width: 800px) 33vw, 100vw" objectPosition={project.objectPosition} />
                <span className="scrim" />
                <span className="media-card-body">
                  <span className="idx">
                    {project.index} · {project.sector}
                  </span>
                  <h3>{project.title}</h3>
                  {project.outcome ? <p>{project.outcome}</p> : null}
                </span>
              </a>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <a href="/projects">Full project record</a>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sister-band">
            <p className="eyebrow">Earthed Energy</p>
            <h2>Solar and battery.</h2>
            <p className="lede">
              Part of the Earthed Energy group. For solar and battery, visit {site.sister.name}.
            </p>
            <p>
              <a className="btn btn-primary" href={site.sister.href}>
                earthedenergy.au
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
