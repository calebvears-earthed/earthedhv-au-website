declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Lead for The 100. Call this only after the form endpoint returns 2xx.
 * Sends content_name and nothing else: no name, phone, email or address,
 * and no advanced matching.
 */
export function trackThe100Lead() {
  const send = () => {
    if (typeof window.fbq !== "function") return false;
    window.fbq("track", "Lead", { content_name: "the100" });
    return true;
  };

  if (send()) return;
  window.setTimeout(send, 600);
}
