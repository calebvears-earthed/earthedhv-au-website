export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}
