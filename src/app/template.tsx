"use client";

import { useEffect, useState, type ReactNode } from "react";

let warmed = false;

export default function Template({ children }: { children: ReactNode }) {
  const [play] = useState(warmed);

  useEffect(() => {
    warmed = true;
  }, []);

  return <div className={play ? "page-swap" : undefined}>{children}</div>;
}
