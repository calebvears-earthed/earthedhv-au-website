import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { aboutCopy, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Earthed High Voltage was founded in the Adelaide Hills in 2024 by Caleb Vears. National HV Switching Accreditation. SA contractor licence PGE 336477.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Earthed High Voltage",
    description:
      "Earthed High Voltage was founded in the Adelaide Hills in 2024 by Caleb Vears. National HV Switching Accreditation. SA contractor licence PGE 336477.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / About
          </p>
          <p className="eyebrow">The company</p>
          <h1>{aboutCopy.headline}</h1>
        </div>
      </header>

      <section className="section">
        <div className="wrap split">
          <div className="prose">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              The business is based in the Adelaide Hills and Strathalbyn, South Australia. {site.founder} holds{" "}
              {site.accreditation}.
            </p>
          </div>
          <div>
            <div className="shot" style={{ aspectRatio: "4 / 5" }}>
              <Photo
                src="/images/branded-vehicle.jpg"
                alt="Earthed High Voltage vehicle on a battery energy storage site"
                sizes="(min-width: 800px) 45vw, 100vw"
                objectPosition="center 70%"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <p className="eyebrow">Safety and switching</p>
            <h2>Permits, sheets and an in-house system.</h2>
            <div className="prose" style={{ marginTop: "1rem" }}>
              <p>
                High voltage switching at Earthed covers operating authority, switching sheets, permits and an
                in-house ePermit. Emergency call out is a 24-hour HV fault response: fault location,
                re-terminations and return-to-service testing.
              </p>
              <p>
                Operation and maintenance is scheduled programs, inspections and asset reporting.
              </p>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Legal name</dt>
              <dd>{site.legalName}</dd>
            </div>
            <div>
              <dt>Founded</dt>
              <dd>
                {site.founded} by {site.founder}
              </dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Adelaide Hills and Strathalbyn, {site.regionName}</dd>
            </div>
            <div>
              <dt>SA contractor licence</dt>
              <dd>{site.licence}</dd>
            </div>
            <div>
              <dt>ABN</dt>
              <dd>{site.abn}</dd>
            </div>
            <div>
              <dt>ACN</dt>
              <dd>{site.acn}</dd>
            </div>
            <div>
              <dt>Accreditation</dt>
              <dd>{site.accreditation}</dd>
            </div>
          </dl>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
