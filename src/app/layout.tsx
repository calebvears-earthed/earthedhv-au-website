import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { businessJsonLd } from "@/lib/schema";
import { site } from "@/lib/content";
import "./globals.css";
import "../../design-system/components.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--loaded-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--loaded-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--loaded-mono",
  display: "swap",
});

const description =
  "High voltage electrical services in South Australia: cable terminations to 66 kV, switching, earthing, and wind, solar and battery infrastructure. PGE 336477.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Earthed High Voltage",
    template: "%s · Earthed High Voltage",
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
        height: 630,
        alt: "Earthed High Voltage — renewable energy, high voltage, South Australia",
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
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#160E1E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
      </body>
    </html>
  );
}
