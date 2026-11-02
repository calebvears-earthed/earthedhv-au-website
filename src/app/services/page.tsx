import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { services } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Distribution power systems, cable terminations to 66 kV, earthing, operation and maintenance, high voltage switching and 24-hour fault response.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six lines of high voltage work."
        lede="Select a service. Each one is a page, with the projects where it was used."
      />
      <section className="section">
        <div className="wrap-wide">
          <ServiceExplorer services={services} />
        </div>
      </section>
    </>
  );
}
