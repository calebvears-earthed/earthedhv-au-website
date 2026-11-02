import type { ScopeItem } from "@/lib/content";

export function ScopeList({ items }: { items: readonly ScopeItem[] }) {
  return (
    <ol className="scope-list">
      {items.map((item, index) => (
        <li key={item.title}>
          <span className="idx">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
