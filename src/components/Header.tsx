"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { nav, site } from "@/lib/content";

function isCurrent(href: string, pathname: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) detailsRef.current.open = false;
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && detailsRef.current?.open) {
        detailsRef.current.open = false;
        detailsRef.current.querySelector("summary")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo" href="/" aria-label="Earthed High Voltage, home">
          <img src="/logo.png" alt="" width={168} height={44} />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="nav-sister" href={site.sister.href}>
          {site.sister.name}
          <span className="vh">, separate site</span>
        </a>
        <Link className="btn btn-light header-cta" href="/contact">
          Request a quote
        </Link>
        <details className="nav-disclosure" ref={detailsRef}>
          <summary>Menu</summary>
          <nav className="nav-panel" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href, pathname) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
              Contact
            </Link>
            <a href={site.sister.href}>
              {site.sister.name}
              <span className="vh">, separate site</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
