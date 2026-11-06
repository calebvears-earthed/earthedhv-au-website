import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileBar } from "@/components/MobileBar";
import { businessJsonLd } from "@/lib/schema";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Earthed High Voltage terminates and joints high voltage cables, and works on substations and switchgear, for wind, solar and battery projects in South Australia. Licence PGE 363823.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Earthed High Voltage",
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
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Earthed High Voltage, South Australia" }],
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
  themeColor: "#100C14",
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
        <MobileBar />
        <JsonLd data={businessJsonLd()} />
      </body>
    </html>
  );
}
