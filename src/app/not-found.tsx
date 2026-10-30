import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1>That page is not on this site.</h1>
        <p className="lede">The address may have changed with the rebuild.</p>
        <p style={{ marginTop: "1.5rem" }}>
          <a className="btn btn-light" href="/">
            Back to the homepage
          </a>
        </p>
      </div>
    </header>
  );
}
