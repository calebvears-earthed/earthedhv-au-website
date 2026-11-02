"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Photo } from "@/components/Photo";
import type { Project } from "@/lib/content";

const filters = ["All", "Battery", "Wind", "Solar"] as const;

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [sector, setSector] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (sector === "All" ? projects : projects.filter((project) => project.sector === sector)),
    [projects, sector],
  );

  return (
    <div>
      <div className="filter-bar" role="group" aria-label="Filter projects by sector">
        {filters.map((filter) => {
          const count =
            filter === "All" ? projects.length : projects.filter((project) => project.sector === filter).length;
          const selected = sector === filter;
          return (
            <button key={filter} type="button" aria-pressed={selected} onClick={() => setSector(filter)}>
              {filter}
              <span className="filter-count">{count}</span>
            </button>
          );
        })}
      </div>
      <p className="filter-live" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {sector === "All" ? "" : ` in ${sector}`}.
      </p>
      <div className="card-grid">
        {visible.map((project) => (
          <article key={project.slug}>
            <Link className="media-card" href={`/projects/${project.slug}`}>
              <Photo
                src={project.image.src}
                alt=""
                position={project.image.position}
                sizes="(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw"
                ratio="4 / 5"
              />
              <span className="scrim" />
              <span className="media-card-body">
                <span className="idx">
                  {project.index} · {project.sector}
                </span>
                <h2>{project.title}</h2>
                {project.outcome ? <p>{project.outcome}</p> : <p>{project.summary}</p>}
              </span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
