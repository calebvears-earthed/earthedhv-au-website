import type { Metadata } from "next";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Enquiry received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="eyebrow">Enquiry received</p>
        <h1>Thanks. Your brief is with our team.</h1>
        <p className="lede">
          We terminate and joint high voltage cables, and commission the plant they connect to. We&apos;ll review
          your enquiry and come back to you directly.
        </p>
        <p className="outcome" style={{ color: "var(--color-paper)", borderColor: "var(--color-lilac)", marginTop: "1.5rem" }}>
          HV fault or outage? Don&apos;t wait on email. Call <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>.
        </p>
        <p style={{ marginTop: "1.75rem" }}>
          <a className="btn btn-ghost" href="/">
            Back to earthedhv.au
          </a>
        </p>
      </div>
    </header>
  );
}
