import { sectors, services, site } from "@/lib/content";

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
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "State",
      name: site.regionName,
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "SA electrical contractor licence",
        value: site.licence,
      },
      {
        "@type": "PropertyValue",
        name: "ABN",
        value: "99679180879",
      },
      {
        "@type": "PropertyValue",
        name: "ACN",
        value: "679180879",
      },
    ],
    knowsAbout: [...services.map((item) => item.title), ...sectors.map((item) => item.title)],
    sameAs: [site.linkedin],
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [...services, ...sectors].map((item) => ({
      "@type": "Service",
      name: item.title,
      description: item.summary,
      url: `${site.url}/services#${item.id}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: site.regionName,
    })),
  };
}
