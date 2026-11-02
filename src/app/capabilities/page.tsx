import type { Metadata } from "next";
import Link from "next/link";
import { CapabilityMap } from "@/components/CapabilityMap";
import { PageHero } from "@/components/PageHero";
import { capabilities } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Capabilities",
  description:
    "Battery and BESS, wind, solar, HV cable jointing and termination, switching, and commissioning for renewable projects in South Australia.",
  path: "/capabilities",
});

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Battery, wind, solar, and the cable between them."
        lede="Use the diagram, or open a capability. The scope under each heading is the work Earthed is asked to do."
      />
      <section className="section">
        <div className="wrap-wide">
          <CapabilityMap capabilities={capabilities} />
          <ul className="index-list" style={{ marginTop: "2.5rem" }}>
            {capabilities.map((item) => (
              <li key={item.slug}>
                <Link href={`/capabilities/${item.slug}`}>
                  <span className="idx">{item.index}</span>
                  <h3>{item.title}</h3>
                  <span>{item.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
