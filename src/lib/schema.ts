import { capabilities, site } from "@/lib/content";

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
    description: `${site.name}. ${site.approval}. SA electrical contractor licence ${site.licence}.`,
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
    knowsAbout: capabilities.map((item) => item.title),
  };
}

export function jsonLdScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
