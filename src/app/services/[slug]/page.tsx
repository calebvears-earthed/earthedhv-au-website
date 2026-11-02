import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getCapability, getProject, getService, services } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];
  const projects = service.relatedProjects.flatMap((item) => {
    const project = getProject(item);
    return project ? [{ href: `/projects/${project.slug}`, label: project.title, note: project.sector }] : [];
  });
  const caps = service.relatedCapabilities.flatMap((item) => {
    const capability = getCapability(item);
    return capability ? [{ href: `/capabilities/${capability.slug}`, label: capability.title }] : [];
  });

  return (
    <>
      <div className="wrap" style={{ paddingTop: "1.5rem" }}>
        <Breadcrumbs items={crumbs} />
      </div>
      <PageHero eyebrow={`Service ${service.index}`} title={service.title} lede={service.summary} />
      <section className="section">
        <div className="wrap figure-grid">
          <Photo
            src={service.image.src}
            alt={service.image.alt}
            position={service.image.position}
            sizes="(min-width: 760px) 70vw, 100vw"
            ratio="16 / 10"
            priority
          />
        </div>
      </section>
      <RelatedLinks title="Seen on these projects" links={projects} />
      <RelatedLinks title="Related capabilities" links={caps} />
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={serviceJsonLd(service.title, service.description, `/services/${service.slug}`)} />
    </>
  );
}
