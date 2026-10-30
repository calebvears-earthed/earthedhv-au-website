import { NextResponse } from "next/server";

/**
 * Quote intake.
 * Delivery order:
 * 1. Resend, when RESEND_API_KEY, RESEND_FROM_EMAIL and CONTACT_TO_EMAIL are set.
 * 2. Formspree. FORMSPREE_ID overrides the id. "off" disables it.
 *    Default id mvkzjdwe is the form already embedded on the previous site.
 * 3. If neither provider is configured, the enquiry is logged and accepted.
 */

type Fields = {
  name: string;
  email: string;
  phone: string;
  message: string;
  company_website: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^[0-9+() .\-]{8,30}$/;

function clean(value: unknown, max: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max);
}

function readFields(raw: Record<string, unknown>): { fields?: Fields; error?: string } {
  const fields: Fields = {
    name: clean(raw.name, 100),
    email: clean(raw.email, 200),
    phone: clean(raw.phone, 30),
    message: clean(raw.message, 5000),
    company_website: clean(raw.company_website, 200),
  };

  if (!fields.name) return { error: "Enter your name." };
  if (!EMAIL.test(fields.email)) return { error: "Enter a valid email." };
  if (!PHONE.test(fields.phone)) return { error: "Enter a phone number." };
  if (fields.message.length < 8) return { error: "Add a short brief of the work." };
  return { fields };
}

function formspreeId() {
  if (process.env.FORMSPREE_ID === "off") return "";
  if (process.env.FORMSPREE_ID) return process.env.FORMSPREE_ID;
  return "mvkzjdwe";
}

async function deliver(fields: Fields) {
  const subject = `Earthed HV quote enquiry from ${fields.name}`;
  const text = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    "",
    fields.message,
  ].join("\n");

  console.info(
    JSON.stringify({
      type: "quote-enquiry",
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      message: fields.message,
    }),
  );

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (resendKey && from && to) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject,
        text,
      }),
    });
    if (!response.ok) {
      console.error("Resend failed", response.status);
      return false;
    }
    return true;
  }

  const id = formspreeId();
  if (id) {
    const response = await fetch(`https://formspree.io/f/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: fields.name,
        email: fields.email,
        phone: fields.phone,
        message: fields.message,
        _replyto: fields.email,
        _subject: subject,
      }),
    });
    if (!response.ok) {
      console.error("Formspree failed", response.status);
      return false;
    }
    return true;
  }

  return true;
}

async function payload(request: Request) {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const json = (await request.json()) as Record<string, unknown>;
    return { raw: json, asForm: false };
  }
  const form = await request.formData();
  const raw: Record<string, unknown> = {};
  form.forEach((value, key) => {
    raw[key] = typeof value === "string" ? value : "";
  });
  return { raw, asForm: true };
}

export async function POST(request: Request) {
  let parsed: { raw: Record<string, unknown>; asForm: boolean };
  try {
    parsed = await payload(request);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { fields, error } = readFields(parsed.raw);
  if (!fields) {
    if (parsed.asForm) {
      return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
    }
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  if (fields.company_website) {
    if (parsed.asForm) return NextResponse.redirect(new URL("/thank-you", request.url), 303);
    return NextResponse.json({ ok: true });
  }

  let sent = false;
  try {
    sent = await deliver(fields);
  } catch (err) {
    console.error("Quote delivery threw", err);
    sent = false;
  }

  if (!sent) {
    if (parsed.asForm) {
      return NextResponse.redirect(new URL("/contact?error=1", request.url), 303);
    }
    return NextResponse.json(
      { ok: false, error: "We couldn't send that just now." },
      { status: 502 },
    );
  }

  if (parsed.asForm) {
    return NextResponse.redirect(new URL("/thank-you", request.url), 303);
  }
  return NextResponse.json({ ok: true });
}
