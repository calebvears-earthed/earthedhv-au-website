"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "sending" | "error";

export function QuoteForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          company_website: data.get("company_website"),
        }),
      });
      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(body?.error || "We couldn't send that just now.");
      }
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We couldn't send that just now.");
    }
  }

  return (
    <form className="form-grid" action="/api/quote" method="post" onSubmit={onSubmit}>
      <div className="hp" aria-hidden="true">
        <label>
          Company website
          <input tabIndex={-1} autoComplete="off" type="text" name="company_website" />
        </label>
      </div>
      <label className="field">
        <span className="field-label">Name</span>
        <input name="name" type="text" autoComplete="name" required maxLength={100} />
      </label>
      <label className="field">
        <span className="field-label">Email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={200} />
      </label>
      <label className="field">
        <span className="field-label">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" required maxLength={30} />
      </label>
      <label className="field">
        <span className="field-label">Message</span>
        <textarea name="message" required maxLength={5000} rows={5} />
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error} Call 0433 839 284 or email calebvears@earthedhv.au.
        </p>
      ) : null}
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
