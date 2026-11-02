import { stats } from "@/lib/content";

export function Stats() {
  return (
    <ul className="stats">
      {stats.map((stat) => (
        <li key={stat.label} className="reveal">
          <p className="stat-value">{stat.value}</p>
          <p>{stat.label}</p>
        </li>
      ))}
    </ul>
  );
}
