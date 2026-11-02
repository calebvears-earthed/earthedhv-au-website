"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import type { Service } from "@/lib/content";

export function ServiceExplorer({ services }: { services: Service[] }) {
  const [active, setActive] = useState(services[0]?.slug ?? "");
  const tabsRef = useRef<HTMLDivElement>(null);
  const current = services.find((service) => service.slug === active) ?? services[0];

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % services.length
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index - 1 + services.length) % services.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? services.length - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    const slug = services[next].slug;
    setActive(slug);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  if (!current) return null;

  return (
    <div className="explorer">
      <div ref={tabsRef} className="explorer-tabs" role="tablist" aria-label="Services" aria-orientation="vertical">
        {services.map((service, index) => {
          const selected = service.slug === current.slug;
          return (
            <button
              key={service.slug}
              type="button"
              role="tab"
              id={`tab-${service.slug}`}
              aria-selected={selected}
              aria-controls="service-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(service.slug)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="idx">{service.index}</span>
              <span>{service.title}</span>
            </button>
          );
        })}
      </div>
      <div
        className="explorer-panel"
        role="tabpanel"
        id="service-panel"
        aria-labelledby={`tab-${current.slug}`}
        tabIndex={0}
      >
        <Photo
          src={current.image.src}
          alt={current.image.alt}
          position={current.image.position}
          sizes="(min-width: 900px) 46vw, 100vw"
          ratio="4 / 3"
        />
        <div className="explorer-copy">
          <p className="eyebrow">Service {current.index}</p>
          <h2>{current.title}</h2>
          <p>{current.summary}</p>
          <Link className="text-link" href={`/services/${current.slug}`}>
            Open {current.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
