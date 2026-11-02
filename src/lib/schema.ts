import { capabilities, services, site } from "@/lib/content";

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Electrician", "LocalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/og.jpg`,
    logo: `${site.url}/logo.png`,
    telephone: site.phoneTel,
    email: site.email,
    founder: { "@type": "Person", name: site.founder },
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: "AU",
    },
    areaServed: { "@type": "AdministrativeArea", name: site.regionName },
    identifier: [
      { "@type": "PropertyValue", name: "SA electrical contractor licence", value: site.licence },
      { "@type": "PropertyValue", name: "ABN", value: site.abn },
      { "@type": "PropertyValue", name: "ACN", value: site.acn },
    ],
    knowsAbout: [...services.map((item) => item.title), ...capabilities.map((item) => item.title)],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.regionName,
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
