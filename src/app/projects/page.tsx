import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { projects } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Projects",
  description:
    "Goyder South, the 111 MW Barossa BESS, Tailem Bend BESS, Port Wakefield 5 MW, Kerta Road and a 1200 mm² substation feeder.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="A record of the work."
        lede="Filter by battery, wind or solar. Open a project for the job as it was done."
      />
      <section className="section">
        <div className="wrap-wide">
          <ProjectFilter projects={projects} />
        </div>
      </section>
    </>
  );
}
