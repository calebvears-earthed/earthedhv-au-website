"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${solid ? " is-solid" : ""}`}>
        <div className="header-inner">
          <a className="logo" href="/" aria-label="Earthed High Voltage, home">
            <img src="/logo.png" alt="" width={160} height={42} />
          </a>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a className="nav-sister" href={site.sister.href}>
            {site.sister.name}
          </a>
          <a className="btn btn-light header-cta" href="/contact">
            Request a quote
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
      {open ? (
        <div className="nav-panel" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="nav-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
            <span aria-hidden="true">×</span>
          </button>
          <nav aria-label="Mobile">
            {nav.map((item) => (
              <a key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </a>
            ))}
            <a className="panel-sister" href={site.sister.href}>
              {site.sister.name} · {site.sister.label}
            </a>
          </nav>
          <div className="panel-actions">
            <a className="btn btn-light" href={`tel:${site.phoneTel}`}>
              Call {site.phoneDisplay}
            </a>
            <a className="btn btn-ghost" href="/contact">
              Request a quote
            </a>
          </div>
        </div>
      ) : null}
      <div className="mobile-bar">
        <a href={`tel:${site.phoneTel}`}>Call</a>
        <a href="/contact">Request a quote</a>
      </div>
    </>
  );
}
