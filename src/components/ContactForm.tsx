"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(site.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setStatus("error");
        setError(data?.error || "The enquiry did not send. Call or email and we will pick it up.");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("The enquiry did not send. Call or email and we will pick it up.");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status" tabIndex={-1}>
        <p className="eyebrow">Received</p>
        <h2>Enquiry sent.</h2>
        <p>We will reply from {site.email}. If it is urgent, call {site.phoneDisplay}.</p>
      </div>
    );
  }

  return (
    <form className="enquiry-form" action={site.formspree} method="POST" onSubmit={onSubmit} noValidate={false}>
      <input type="hidden" name="_subject" value="Enquiry from earthedhv.au" />
      <p className="hp" aria-hidden="true">
        <label>
          Leave this blank
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Brief on your enquiry
        <textarea name="message" rows={6} required />
      </label>
      {status === "error" ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
      <button className="btn btn-light" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send enquiry"}
      </button>
      <p className="form-note">
        Sent to {site.email}. See our <a href="/privacy">privacy notice</a> for what we keep.
      </p>
    </form>
  );
}
