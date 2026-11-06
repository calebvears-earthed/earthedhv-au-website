import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { site } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Safety and compliance",
  description:
    "In-house safe operating procedures, HV switching permits and an ePermit. SA electrical contractor licence PGE 363823. ABN 99 679 180 879.",
  path: "/safety",
});

const controls = [
  {
    title: "In-house safety system",
    detail:
      "We hold a real focus on maintaining a healthy working environment, using our craft to implement strict safe operating procedures inside our in-house safety system.",
  },
  {
    title: "Switching authority",
    detail: "HV operating authority, switching sheets, permits and an in-house ePermit.",
  },
  {
    title: "Permit control",
    detail: "Energisation and handover run on switching programs and permit control. Isolation is held for the service window, then the asset is restored.",
  },
  {
    title: "Testing before it goes back",
    detail:
      "Switchgear commissioning uses primary and secondary injection. Relay and protection testing covers settings, verification and reporting. Joints are IR and VLF tested before return to service.",
  },
  {
    title: "When it faults",
    detail: "24-hour HV fault response: fault location, re-terminations and return-to-service testing.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety and compliance"
        title="The permit is part of the job."
        lede="Clients get the confidence of knowing Earthed was there."
      />
      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Licence</p>
            <h2>
              {site.legalName}
            </h2>
            <div className="prose" style={{ marginTop: "1rem" }}>
              <p>SA electrical contractor licence {site.licence}.</p>
              <p>ABN {site.abn}. ACN {site.acn}.</p>
              <p>
                Where an asset owner requires its own authorisation, switching is done inside that permit. The sheets, the permits and the ePermit stay with the job.
              </p>
            </div>
          </div>
          <Photo
            src="/images/switching.jpg"
            alt="Technicians at an outdoor containerised high voltage switchboard"
            sizes="(min-width: 760px) 46vw, 100vw"
            ratio="4 / 5"
            position="center 40%"
            priority
          />
        </div>
        <div className="wrap">
          <ol className="scope-list">
            {controls.map((item, index) => (
              <li key={item.title}>
                <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
