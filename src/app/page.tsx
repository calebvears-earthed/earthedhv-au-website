import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityMap } from "@/components/CapabilityMap";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { Stats } from "@/components/Stats";
import { Timeline } from "@/components/Timeline";
import { aboutCopy, capabilities, projects, services, site } from "@/lib/content";

export const metadata: Metadata = {
  title: { absolute: "Earthed High Voltage | HV cable jointing, South Australia" },
  description:
    "We terminate and joint high voltage cables. We work on substations and switchgear. Wind, solar and battery projects in South Australia. Licence PGE 336477.",
  alternates: { canonical: "/" },
};

const featured = ["goyder-south", "barossa-bess", "port-wakefield"];

export default function HomePage() {
  const selected = projects.filter((project) => featured.includes(project.slug));

  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <Photo
            src="/images/wind-construction.jpg"
            alt="Wind farm construction at sunrise"
            sizes="100vw"
            priority
            position="center 40%"
            ratio="16 / 9"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-copy">
          <p className="eyebrow">Renewable energy · High voltage · South Australia</p>
          <h1>{site.positioning[0]}</h1>
          <p className="lede">
            {site.positioning[1]} {site.positioning[2]}
          </p>
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

      <dl className="cred-bar">
        <div>
          <dt>Licence</dt>
          <dd>{site.licence}</dd>
        </div>
        <div>
          <dt>ABN</dt>
          <dd>{site.abn}</dd>
        </div>
        <div>
          <dt>Based</dt>
          <dd>{site.locality}</dd>
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
          <div>
            <p className="eyebrow">01 · About</p>
            <h2 id="about-title">{aboutCopy.headline}</h2>
          </div>
          <div className="prose">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <Link className="text-link" href="/about">
                About Earthed
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section tight" aria-labelledby="stats-title">
        <div className="wrap section-head">
          <p className="eyebrow">Record</p>
          <h2 id="stats-title">Work already in the ground.</h2>
        </div>
        <Stats />
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">02 · Services</p>
            <h2 id="services-title">The work we are asked to do.</h2>
          </div>
          <ul className="index-list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <span className="idx">{service.index}</span>
                  <h3>{service.title}</h3>
                  <span>{service.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section tight" aria-labelledby="map-title">
        <div className="wrap-wide">
          <div className="section-head">
            <p className="eyebrow">03 · Capabilities</p>
            <h2 id="map-title">Where the cable meets the plant.</h2>
            <p className="lede">
              Select a point on the diagram. Wind, solar and battery collect through the joints, then the switchgear, then commissioning.
            </p>
          </div>
          <CapabilityMap capabilities={capabilities} />
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="wrap-wide">
          <div className="section-head">
            <p className="eyebrow">04 · Projects</p>
            <h2 id="projects-title">Selected work.</h2>
          </div>
          <div className="card-grid thirds">
            {selected.map((project) => (
              <Link className="media-card" key={project.slug} href={`/projects/${project.slug}`}>
                <Photo
                  src={project.image.src}
                  alt=""
                  position={project.image.position}
                  sizes="(min-width: 1080px) 33vw, 100vw"
                  ratio="4 / 5"
                />
                <span className="scrim" />
                <span className="media-card-body">
                  <span className="idx">
                    {project.index} · {project.sector}
                  </span>
                  <h3>{project.title}</h3>
                  {project.outcome ? <p>{project.outcome}</p> : null}
                </span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link className="text-link" href="/projects">
              Full project record
            </Link>
          </p>
        </div>
      </section>

      <section className="section tight" aria-labelledby="timeline-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">05 · Sequence</p>
            <h2 id="timeline-title">How the practice was built.</h2>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <aside className="sister-note">
            <p className="eyebrow">Earthed Energy</p>
            <h2>Part of the Earthed Energy group.</h2>
            <p>{site.sister.note}</p>
            <p>
              <a href={site.sister.href}>earthedenergy.au</a>
            </p>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
