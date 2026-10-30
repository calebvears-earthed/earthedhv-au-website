import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { gallery, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "High voltage project record: Goyder South Wind Farm, grid-scale battery sites, and solar farms at Port Wakefield and Kerta Road.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · Earthed High Voltage",
    description:
      "High voltage project record: Goyder South Wind Farm, grid-scale battery sites, and solar farms at Port Wakefield and Kerta Road.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero">
        <div className="wrap">
          <p className="crumbs">
            <a href="/">Home</a> / Projects
          </p>
          <p className="eyebrow">Record</p>
          <h1>Projects.</h1>
          <p className="lede">
            Work published by Earthed High Voltage across battery, wind and solar sites in South Australia.
          </p>
        </div>
      </header>

      <div className="wrap">
        {projects.map((project) => (
          <article className="project-block" id={project.id} key={project.id}>
            <div className={`project-photos${project.secondary ? " two" : ""}`}>
              <div className="shot">
                <Photo
                  src={project.image}
                  alt={project.alt}
                  sizes="(min-width: 800px) 40vw, 100vw"
                  objectPosition={project.objectPosition}
                />
              </div>
              {project.secondary ? (
                <div className="shot">
                  <Photo
                    src={project.secondary.src}
                    alt={project.secondary.alt}
                    sizes="(min-width: 800px) 28vw, 100vw"
                    objectPosition={project.secondary.objectPosition}
                  />
                </div>
              ) : null}
            </div>
            <div className="project-copy">
              <p className="idx">
                {project.index} · {project.sector}
              </p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              {project.points ? (
                <ul className="points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
              {project.outcome ? <p className="outcome">{project.outcome}</p> : null}
            </div>
          </article>
        ))}
      </div>

      <section className="section" aria-labelledby="gallery-title">
        <div className="wrap-wide">
          <div className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2 id="gallery-title">From the sites.</h2>
            <p className="lede">
              Photographs already held by the company. Further project sheets can be added as they are written up.
            </p>
          </div>
          <div className="gallery">
            {gallery.map((item) => (
              <figure key={item.src + item.caption}>
                <div className="shot">
                  <Photo src={item.src} alt={item.alt} sizes="(min-width: 1100px) 30vw, (min-width: 700px) 50vw, 100vw" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
