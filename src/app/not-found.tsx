import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Earthed High Voltage site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="hero">
      <div>
        <p className="fine">404</p>
        <h1>That page is not on this site.</h1>
        <p className="deck">
          <Link href="/">Back to Earthed High Voltage</Link>
        </p>
      </div>
    </section>
  );
}
