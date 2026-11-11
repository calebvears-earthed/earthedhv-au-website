import { ContactForm } from "@/components/ContactForm";
import { about, capabilities, heroLines, projects, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="photo-field">
          <picture>
            <source
              type="image/webp"
              srcSet="/images/hero/hero-640.webp 640w, /images/hero/hero-960.webp 960w, /images/hero/hero-1280.webp 1280w, /images/hero/hero-1920.webp 1920w, /images/hero/hero-2560.webp 2560w"
              sizes="100vw"
            />
            <img
              src="/images/hero/hero-1920.jpg"
              srcSet="/images/hero/hero-640.jpg 640w, /images/hero/hero-960.jpg 960w, /images/hero/hero-1280.jpg 1280w, /images/hero/hero-1920.jpg 1920w, /images/hero/hero-2560.jpg 2560w"
              sizes="100vw"
              width={3840}
              height={2160}
              alt="Wind farm construction on a ridge at sunset"
              fetchPriority="high"
            />
          </picture>
        </div>
        <header className="top">
          <nav aria-label="On this page">
            <a href="#capabilities">Capabilities</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <div className="lockup">
          <img src="/logo.png" alt="Earthed High Voltage" width={420} height={109} />
          <h1 id="hero-title">
            {heroLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
        </div>
      </section>

      <div className="sheet">
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
              {"src" in project && project.src ? (
                <img src={project.src} alt={project.alt} width={project.width} height={project.height} />
              ) : null}
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
      </div>
    </>
  );
}
