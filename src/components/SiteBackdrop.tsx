"use client";

import { usePathname } from "next/navigation";

const heroSrcSet = [640, 960, 1280, 1920, 2560]
  .map((width) => `/images/hero/hero-${width}.webp ${width}w`)
  .join(", ");

/**
 * The wind-farm photograph is the High Voltage homepage.
 * /the100 is a separate letter and does not load it.
 */
export function SiteBackdrop() {
  const pathname = usePathname();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  if (path === "/the100") return null;

  return (
    <div className="photo-field">
      <picture>
        <source type="image/webp" srcSet={heroSrcSet} sizes="100vw" />
        <img
          src="/images/hero/hero-1920.jpg"
          srcSet="/images/hero/hero-640.jpg 640w, /images/hero/hero-960.jpg 960w, /images/hero/hero-1280.jpg 1280w, /images/hero/hero-1920.jpg 1920w, /images/hero/hero-2560.jpg 2560w"
          sizes="100vw"
          width={3840}
          height={2160}
          alt="Wind farm construction on a ridge at sunset"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
