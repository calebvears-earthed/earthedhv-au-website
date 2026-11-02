import Link from "next/link";
import { site } from "@/lib/content";

export function MobileBar() {
  return (
    <div className="mobile-bar">
      <a href={`tel:${site.phoneTel}`}>Call</a>
      <Link href="/contact">Request a quote</Link>
    </div>
  );
}
