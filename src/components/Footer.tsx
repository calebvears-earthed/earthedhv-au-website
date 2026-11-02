import Link from "next/link";
import { footerNav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap-wide footer-grid">
        <div className="footer-brand">
          <Link className="logo" href="/" aria-label="Earthed High Voltage, home">
            <img src="/logo.png" alt="" width={150} height={40} />
          </Link>
          <p>{site.positioning.join(" ")}</p>
        </div>
        <div>
          <p className="footer-title">Navigate</p>
          <ul>
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-title">Contact</p>
          <ul>
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              {site.locality}, {site.regionName}
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">The group</p>
          <ul>
            <li>Part of the Earthed Energy group</li>
            <li>
              <a href={site.sister.href}>{site.sister.name}</a>
            </li>
            <li>{site.sister.note}</li>
          </ul>
        </div>
      </div>
      <div className="wrap-wide footer-base">
        <p>
          SA electrical contractor licence {site.licence}
          <span aria-hidden="true"> · </span>
          <span className="vh">. </span>
          ABN {site.abn}
          <span aria-hidden="true"> · </span>
          <span className="vh">. </span>
          ACN {site.acn}
        </p>
        <p>
          © {year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
