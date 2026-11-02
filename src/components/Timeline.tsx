import { timeline } from "@/lib/content";

export function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((item) => (
        <li key={item.title} className="reveal">
          <span className="idx">{item.label}</span>
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </li>
      ))}
    </ol>
  );
}
