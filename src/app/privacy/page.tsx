import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy",
  description:
    "How Earthed High Voltage Pty Ltd handles personal information sent through the enquiry form on earthedhv.au.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="What we do with an enquiry."
        lede={`This notice covers ${site.url.replace("https://", "")} only. ${site.sister.name} is a separate site.`}
      />
      <section className="section">
        <div className="wrap prose">
          <h2>Who we are</h2>
          <p>
            {site.legalName} (ABN {site.abn}) handles enquiries for high voltage electrical work. Contact {site.email} or {site.phoneDisplay}.
          </p>
          <h2>What you send</h2>
          <p>
            The enquiry form asks for your name, email, phone and a short brief. You choose what to write in the brief. Please do not include information you do not need us to see.
          </p>
          <h2>Why we collect it</h2>
          <p>We use those details to reply, to understand the job, and to prepare a quote if you have asked for one. We do not sell personal information.</p>
          <h2>Who else sees it</h2>
          <p>
            The form is delivered by Formspree to {site.email}. Formspree processes the submission so it can reach us. Their own notice is at formspree.io. We do not pass the enquiry to {site.sister.name}.
          </p>
          <h2>Cookies and logs</h2>
          <p>
            This site does not set advertising cookies and it does not run a marketing tracker. The host may keep ordinary connection logs, such as an IP address, to run and protect the site.
          </p>
          <h2>Access and deletion</h2>
          <p>
            Email {site.email} if you want a copy of the enquiry we hold, or if you want it deleted. We will action that unless we need the record for a quote you have asked us to keep, or for a legal obligation.
          </p>
          <h2>This page</h2>
          <p>Updated 2 November 2026.</p>
        </div>
      </section>
    </>
  );
}
