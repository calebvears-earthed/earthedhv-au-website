import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Timeline } from "@/components/Timeline";
import { aboutCopy, site } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Earthed High Voltage was founded by Caleb Vears in the Adelaide Hills in 2024, after ten years in distribution power systems. Licence PGE 363823.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={aboutCopy.headline} lede={site.positioning.join(" ")} />
      <section className="section">
        <div className="wrap split">
          <div className="prose">
            {aboutCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{aboutCopy.contactLine}</p>
          </div>
          <figure>
            <Photo
              src="/images/branded-vehicle.jpg"
              alt="Earthed High Voltage vehicle beside a row of battery containers"
              sizes="(min-width: 760px) 46vw, 100vw"
              ratio="4 / 5"
              position="center 70%"
              priority
            />
            <figcaption className="figure-grid" style={{ color: "var(--muted)", paddingTop: "0.5rem" }}>
              On a battery site in South Australia.
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section tight" aria-labelledby="practice-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Practice</p>
            <h2 id="practice-title">One founder. The work in front of him.</h2>
            <div className="prose" style={{ marginTop: "1rem" }}>
              <p>
                {site.founder} founded {site.legalName} in {site.founded}. The company holds SA electrical contractor licence{" "}
                {site.licence}. ABN {site.abn}. ACN {site.acn}.
              </p>
              <p>
                The safety system is in-house: safe operating procedures, switching sheets, permits and an ePermit. Clients get the confidence of knowing Earthed was there.
              </p>
            </div>
          </div>
          <Timeline />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
