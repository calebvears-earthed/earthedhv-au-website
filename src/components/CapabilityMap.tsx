"use client";

import Link from "next/link";
import { useState } from "react";
import type { Capability } from "@/lib/content";

const lines = [
  ["wind", "hv-cable-jointing"],
  ["solar", "hv-cable-jointing"],
  ["battery-bess", "hv-cable-jointing"],
  ["hv-cable-jointing", "switching"],
  ["hv-cable-jointing", "commissioning"],
  ["switching", "commissioning"],
];

const readingOrder = ["wind", "solar", "battery-bess", "hv-cable-jointing", "switching", "commissioning"];

export function CapabilityMap({ capabilities }: { capabilities: Capability[] }) {
  const nodes = readingOrder
    .map((slug) => capabilities.find((item) => item.slug === slug))
    .filter((item): item is Capability => Boolean(item));
  const [active, setActive] = useState("hv-cable-jointing");
  const current = nodes.find((item) => item.slug === active) ?? nodes[0];
  if (!current) return null;
  const bySlug = Object.fromEntries(nodes.map((item) => [item.slug, item]));

  function move(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? (index + 1) % nodes.length
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? (index - 1 + nodes.length) % nodes.length
          : null;
    if (next === null) return;
    event.preventDefault();
    setActive(nodes[next].slug);
    const buttons = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>("button");
    buttons?.[next]?.focus();
  }

  return (
    <div className="sld" data-active={active}>
      <div className="sld-stage">
        <svg className="sld-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {lines.map(([from, to]) => {
            const a = bySlug[from];
            const b = bySlug[to];
            if (!a || !b) return null;
            const live = from === active || to === active;
            return (
              <line
                key={`${from}-${to}`}
                x1={Number.parseFloat(a.map.x)}
                y1={Number.parseFloat(a.map.y)}
                x2={Number.parseFloat(b.map.x)}
                y2={Number.parseFloat(b.map.y)}
                className={live ? "is-live" : undefined}
              />
            );
          })}
        </svg>
        <div className="sld-nodes" role="group" aria-label="Capability map">
          {nodes.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              className="sld-node"
              style={{ left: item.map.x, top: item.map.y }}
              aria-pressed={item.slug === active}
              aria-controls="sld-detail"
              onClick={() => setActive(item.slug)}
              onKeyDown={(event) => move(event, index)}
            >
              <span className="sld-dot" aria-hidden="true" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div id="sld-detail" className="sld-detail" aria-live="polite">
        <p className="eyebrow">Capability {current.index}</p>
        <h2>{current.title}</h2>
        <p>{current.summary}</p>
        <Link className="text-link" href={`/capabilities/${current.slug}`}>
          Open {current.title}
        </Link>
      </div>
    </div>
  );
}
