import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Josefin_Sans } from "next/font/google";
import { jsonLdScript, businessJsonLd } from "@/lib/schema";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description = `High voltage cable jointing, substations and switchgear in South Australia. ${site.approval}. Licence ${site.licence}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Earthed High Voltage | South Australia",
    template: "%s | Earthed High Voltage",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: site.url,
    siteName: site.name,
    title: "Earthed High Voltage",
    description,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 675,
        alt: "Wind farm construction on a ridge at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Earthed High Voltage",
    description,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#5C2454",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU" className={sans.className}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <main id="main">{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(businessJsonLd()) }} />
      </body>
    </html>
  );
}
