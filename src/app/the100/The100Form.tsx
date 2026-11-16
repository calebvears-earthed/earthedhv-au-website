"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { CARD_COUNT, parseCardNumber } from "./offer";
import { trackThe100Lead } from "./metaPixel";
import type { UtmField } from "./utm";
import styles from "./the100.module.css";

type Status = "idle" | "sending" | "sent" | "error";

type The100FormProps = {
  action: string;
  phoneDisplay: string;
  phoneTel: string;
  utm: UtmField[];
};

export function The100Form({ action, phoneDisplay, phoneTel, utm }: The100FormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const card = parseCardNumber(String(data.get("card_number") ?? ""));

    if (card === "invalid") {
      setStatus("idle");
      setError(`Card numbers run from 1 to ${CARD_COUNT}.`);
      const field = form.elements.namedItem("card_number");
      if (field instanceof HTMLInputElement) field.focus();
      return;
    }

    if (card) data.set("card_number", card);
    else data.delete("card_number");

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        setStatus("error");
        setError("send");
        return;
      }
      try {
        trackThe100Lead();
      } catch {
        // A blocked pixel does not undo a visit request that was accepted.
      }
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("send");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.success} role="status" tabIndex={-1} ref={successRef}>
        <h3>Request received.</h3>
        <p>
          Caleb will call to arrange the visit. If you need him sooner, call{" "}
          <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} action={action} method="POST" onSubmit={onSubmit} aria-busy={status === "sending"}>
      <input type="hidden" name="_subject" value="The 100 site visit" />
      <input type="hidden" name="campaign" value="the100" />
      {utm.map((field) => (
        <input key={field.name} type="hidden" name={field.name} value={field.value} />
      ))}
      <p className="hp" aria-hidden="true">
        <label>
          Leave this blank
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" required maxLength={40} />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required maxLength={120} />
      </label>
      <label>
        Street address in Strathalbyn
        <input
          name="street_address"
          type="text"
          autoComplete="street-address"
          required
          maxLength={180}
          placeholder="Your street in Strathalbyn"
        />
      </label>
      <label>
        Card number
        <input
          name="card_number"
          type="text"
          inputMode="numeric"
          autoComplete="off"
          maxLength={4}
          aria-describedby="card-hint"
          aria-invalid={error.startsWith("Card numbers") ? true : undefined}
          placeholder="Optional"
        />
        <span id="card-hint" className={styles.hint}>
          Optional. The number written on your card, from 1 to {CARD_COUNT}.
        </span>
      </label>
      <label>
        Best time to visit
        <input name="best_time" type="text" autoComplete="off" required maxLength={120} placeholder="Saturday morning" />
      </label>
      {error ? (
        <p className={styles.error} role="alert">
          {error === "send" ? (
            <>
              That did not send. Call <a href={`tel:${phoneTel}`}>{phoneDisplay}</a> and I will book the visit from here.
            </>
          ) : (
            error
          )}
        </p>
      ) : null}
      <button className={styles.submit} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Book my free site visit"}
      </button>
    </form>
  );
}
