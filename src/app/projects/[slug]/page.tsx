import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getCapability, getProject, getService, projects } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMeta({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ];
  const serviceLinks = project.relatedServices.flatMap((item) => {
    const service = getService(item);
    return service ? [{ href: `/services/${service.slug}`, label: service.title }] : [];
  });
  const capabilityLinks = project.relatedCapabilities.flatMap((item) => {
    const capability = getCapability(item);
    return capability ? [{ href: `/capabilities/${capability.slug}`, label: capability.title }] : [];
  });

  return (
    <>
      <div className="wrap" style={{ paddingTop: "1.5rem" }}>
        <Breadcrumbs items={crumbs} />
      </div>
      <PageHero eyebrow={`${project.sector} · ${project.index}`} title={project.title} lede={project.summary} />
      <section className="section">
        <div className="wrap figure-grid">
          <figure>
            <Photo
              src={project.image.src}
              alt={project.image.alt}
              position={project.image.position}
              sizes="(min-width: 760px) 50vw, 100vw"
              ratio="4 / 5"
              priority
            />
          </figure>
          {project.secondary ? (
            <figure>
              <Photo
                src={project.secondary.src}
                alt={project.secondary.alt}
                position={project.secondary.position}
                sizes="(min-width: 760px) 50vw, 100vw"
                ratio="4 / 5"
              />
            </figure>
          ) : null}
        </div>
        <div className="wrap prose" style={{ marginTop: "2rem" }}>
          {project.points ? (
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          {project.outcome ? (
            <>
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </>
          ) : null}
        </div>
      </section>
      <RelatedLinks title="Services on this job" links={serviceLinks} />
      <RelatedLinks title="Capabilities" links={capabilityLinks} />
      <CtaBand />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
