import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { site } from "@/lib/content";
import { The100Form } from "./The100Form";
import {
  CARD_COUNT,
  EV_CHARGERS_LEFT,
  FREE_MODULE,
  OFFER_ENDS,
  chargerCounter,
  chargerDetail,
  chargerHeading,
  chargerTerms,
} from "./offer";
import styles from "./the100.module.css";
import { utmFields } from "./utm";

const hand = Caveat({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
  fallback: ["cursive"],
});

const description = `Hand-picked Strathalbyn solar homes. Earthed High Voltage presents Earthed Energy. Book a free site visit. Ends ${OFFER_ENDS}.`;

export const metadata: Metadata = {
  title: "You're 1 of 100",
  description,
  alternates: { canonical: "/the100" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: `${site.url}/the100`,
    siteName: site.name,
    title: "You're 1 of 100",
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
    title: "You're 1 of 100",
    description,
    images: ["/og.jpg"],
  },
};

export default async function The100Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const utm = utmFields(await searchParams);

  return (
    <article className={styles.page}>
      <div className={styles.ground} aria-hidden="true" />
      <div className={styles.wrap}>
        <header className={styles.hero}>
          <div className={styles.mark}>
            <a href="/">
              <img src="/logo.png" alt="Earthed High Voltage" width={420} height={109} />
            </a>
            <p className={styles.presents}>
              presents <a href={site.sister.href}>Earthed Energy</a>
            </p>
          </div>
          <h1>
            <span className={styles.line}>You&apos;re 1 of {CARD_COUNT}.</span>
            <span className={styles.lineSub}>Your solar&apos;s ready for its battery.</span>
          </h1>
          <p className={styles.lede}>
            Hand-picked Strathalbyn homes with solar already on the roof, until {OFFER_ENDS}.
          </p>
          <p className={styles.actions}>
            <a href="#book">Book a free site visit</a>
            <span className={styles.dot} aria-hidden="true">
              {" · "}
            </span>
            <a href={`tel:${site.phoneTel}`}>Call {site.phoneDisplay}</a>
          </p>
        </header>

        <section className={styles.section} aria-labelledby="note-title">
          <h2 id="note-title">A note from Caleb</h2>
          <blockquote className={styles.note}>
            <p>I am based in Strathalbyn. I wrote this card by hand, and I only left it where the house already has solar.</p>
            <p>
              Earthed High Voltage is my high voltage work. Earthed Energy is the home side of the same local business: batteries for solar homes here.
            </p>
            <p>I am licensed. I will give you a straight answer. No pushy salespeople. If a battery is not the right call, I will say so.</p>
          </blockquote>
          <p className={`${styles.sign} ${hand.className}`}>Caleb</p>
        </section>

        <section className={styles.section} aria-labelledby="offer-title">
          <h2 id="offer-title">For The 100</h2>
          <ul className={styles.offers}>
            <li>
              <h3>A battery sized around your home</h3>
              <p>We size the package to your roof, your switchboard and the way you use power.</p>
            </li>
            <li>
              <h3>A free {FREE_MODULE} battery module</h3>
              <p>Included with battery packages booked before {OFFER_ENDS}. Conditions apply.</p>
            </li>
            <li>
              <h3>{chargerHeading(EV_CHARGERS_LEFT)}</h3>
              <p>{chargerDetail(EV_CHARGERS_LEFT)}</p>
            </li>
          </ul>
          <p className={styles.counter}>{chargerCounter(EV_CHARGERS_LEFT)}</p>
        </section>

        <section className={styles.section} aria-labelledby="visit-title">
          <h2 id="visit-title">The free site visit</h2>
          <ol className={styles.steps}>
            <li>We look at your roof, your switchboard and your bills.</li>
            <li>We tell you what we would do.</li>
            <li>You get a fixed price in writing.</li>
            <li>There is no obligation.</li>
          </ol>
        </section>

        <section className={styles.section} id="book" aria-labelledby="book-title">
          <h2 id="book-title">Book a site visit</h2>
          <p>Leave your details and Caleb will call to arrange a time.</p>
          <The100Form action={site.formspree} phoneDisplay={site.phoneDisplay} phoneTel={site.phoneTel} utm={utm} />
          <p className={styles.call}>
            Or call <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          </p>
        </section>

        <footer className={styles.fine}>
          <p>
            The 100 is for Strathalbyn homes with existing solar only. The offer ends {OFFER_ENDS}. Conditions apply to the free {FREE_MODULE} battery module and the home EV charger. {chargerTerms(EV_CHARGERS_LEFT)} Your final price is confirmed in writing after the site visit. Installation is by SAA-accredited installers Earthed engages. SA Electrical Contractor Licence {site.licence}. {site.legalName} ABN {site.abn} trading as Earthed Energy.
          </p>
          <p>
            Your details are used to arrange the visit. We do not sell personal information. This page uses a Meta pixel to count visits, and records a lead only after the form is accepted. Your name, phone, email and address are not sent to Meta.
          </p>
        </footer>
      </div>
    </article>
  );
}
