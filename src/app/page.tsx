import { ContactForm } from "@/components/ContactForm";
import { about, capabilities, heroLines, projects, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <header className="top">
        <nav aria-label="On this page">
          <a href="#capabilities">Capabilities</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="lockup">
          <img src="/logo.png" alt="Earthed High Voltage" width={420} height={109} />
          <h1 id="hero-title">
            {heroLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
        </div>
      </section>

      <section className="block" id="about" aria-labelledby="about-title">
        <h2 id="about-title">{about.headline}</h2>
        <p>{about.body}</p>
        <p id="safety">{about.safety}</p>
      </section>

      <section className="block" id="capabilities" aria-labelledby="capabilities-title">
        <h2 id="capabilities-title">Capabilities</h2>
        <ul className="cap-list">
          {capabilities.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="block" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">Selected work</h2>
        <div className="proofs">
          {projects.map((project) => (
            <article key={project.title}>
              <img src={project.src} alt={project.alt} width={project.width} height={project.height} />
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {"outcome" in project && project.outcome ? <p>{project.outcome}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="block" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">Contact</h2>
        <p>{about.contactLine}</p>
        <p>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <span aria-hidden="true"> · </span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <ContactForm />
      </section>

      <section className="block" id="privacy" aria-labelledby="privacy-title">
        <h2 id="privacy-title">Privacy</h2>
        <p>This notice is for earthedhv.au only. Earthed Energy is a separate site.</p>
        <p>
          The enquiry form collects your name, email, phone and the message you write. We use them to reply and, if you ask, to prepare a quote. We do not sell personal information.
        </p>
        <p>
          The form is delivered by Formspree to {site.email}. This site does not set advertising cookies.
        </p>
        <p>Email {site.email} if you want a copy of an enquiry or want it deleted.</p>
      </section>

      <footer className="colophon">
        <p>
          {site.legalName}
          <span aria-hidden="true"> · </span>
          SA electrical contractor licence {site.licence}
          <span aria-hidden="true"> · </span>
          ABN {site.abn}
          <span aria-hidden="true"> · </span>
          ACN {site.acn}
          <span aria-hidden="true"> · </span>
          {site.approval}
        </p>
        <p>
          <a href={site.sister.href}>{site.sister.name}</a>
          <span aria-hidden="true"> · </span>
          {site.sister.note}
        </p>
        <p>
          <a href="#privacy">Privacy</a>
        </p>
      </footer>
    </>
  );
}
