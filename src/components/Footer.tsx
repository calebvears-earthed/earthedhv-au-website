import { nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap-wide footer-grid">
        <div className="footer-brand">
          <a className="logo" href="/" aria-label="Earthed High Voltage, home">
            <img src="/logo.png" alt="" width={150} height={40} />
          </a>
          <p>
            High voltage electrical services for renewable energy projects in South Australia.
            Based in the Adelaide Hills and Strathalbyn.
          </p>
        </div>
        <div>
          <p className="footer-title">Navigate</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
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
              <a href={site.linkedin} rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-title">The group</p>
          <ul>
            <li>
              <a href={site.sister.href}>
                {site.sister.name}
                <span className="vh"> (solar and battery)</span>
              </a>
            </li>
            <li>Part of the Earthed Energy group</li>
            <li>{site.sister.label}</li>
          </ul>
        </div>
      </div>
      <div className="wrap-wide footer-base">
        <p className="licence">
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
