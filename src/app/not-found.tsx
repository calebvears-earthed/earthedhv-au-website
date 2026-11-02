import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page is not on the Earthed High Voltage site.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="wrap not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not on this site.</h1>
      <p className="lede">Try one of these.</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/capabilities">Capabilities</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
