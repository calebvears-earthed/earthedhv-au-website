import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ScopeList } from "@/components/ScopeList";
import { capabilities, getCapability, getProject } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map((item) => ({ slug: item.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) return {};
  return pageMeta({
    title: capability.title,
    description: capability.description,
    path: `/capabilities/${capability.slug}`,
  });
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const capability = getCapability(slug);
  if (!capability) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Capabilities", path: "/capabilities" },
    { name: capability.title, path: `/capabilities/${capability.slug}` },
  ];
  const projects = capability.relatedProjects.flatMap((item) => {
    const project = getProject(item);
    return project ? [{ href: `/projects/${project.slug}`, label: project.title, note: project.sector }] : [];
  });

  return (
    <>
      <div className="wrap" style={{ paddingTop: "1.5rem" }}>
        <Breadcrumbs items={crumbs} />
      </div>
      <PageHero eyebrow={`Capability ${capability.index}`} title={capability.title} lede={capability.summary} />
      <section className="section">
        <div className="wrap figure-grid">
          <Photo
            src={capability.image.src}
            alt={capability.image.alt}
            position={capability.image.position}
            sizes="(min-width: 760px) 50vw, 100vw"
            ratio="16 / 10"
            priority
          />
          {capability.secondary ? (
            <Photo
              src={capability.secondary.src}
              alt={capability.secondary.alt}
              position={capability.secondary.position}
              sizes="(min-width: 760px) 50vw, 100vw"
              ratio="16 / 10"
            />
          ) : null}
        </div>
        <div className="wrap">
          <h2 style={{ marginTop: "2rem" }}>Scope</h2>
          <ScopeList items={capability.scope} />
        </div>
      </section>
      <RelatedLinks title="Projects" links={projects} />
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={serviceJsonLd(capability.title, capability.description, `/capabilities/${capability.slug}`)} />
    </>
  );
}
