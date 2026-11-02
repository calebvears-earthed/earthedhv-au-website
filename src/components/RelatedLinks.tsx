import Link from "next/link";

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; note?: string }[];
}) {
  if (!links.length) return null;
  return (
    <section className="section tight" aria-labelledby="related-title">
      <div className="wrap">
        <h2 id="related-title">{title}</h2>
        <ul className="link-row">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
                {link.note ? <small>{link.note}</small> : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
