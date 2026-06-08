import { useEffect, useState } from "react";
import { siteData } from "./data/siteData";

const sectionLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Highlights", href: "#highlights" },
  { label: "Contact", href: "#contact" }
];

function StatusPill({ text }) {
  return (
    <div className="status-pill">
      <span className="status-dot" />
      <span>{text}</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    const revealNodes = document.querySelectorAll("[data-reveal]");
    revealNodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home section">
          <span className="brand-mark">{siteData.initials}</span>
          <span className="brand-text">{siteData.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button-small"
            href={siteData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy" data-reveal>
            <StatusPill text={siteData.availability} />
            <p className="eyebrow">{siteData.heroEyebrow}</p>
            <h1>{siteData.title}</h1>
            <p className="hero-blurb">{siteData.heroBlurb}</p>

            <div className="hero-actions">
              <a className="button" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href={siteData.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="social-row">
              {siteData.socialLinks.map((link) => {
                const linkProps = link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {};

                return (
                  <a key={link.label} href={link.url} {...linkProps}>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hero-panel" data-reveal>
            <div className="panel-card panel-card-featured">
              <p className="panel-label">Now</p>
              <p className="panel-value">{siteData.now}</p>
            </div>

            <div className="stats-grid">
              {siteData.stats.map((stat) => (
                <div className="panel-card" key={stat.label}>
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="panel-card profile-card">
              <div className="profile-badge">{siteData.initials}</div>
              <div>
                <p className="panel-label">{siteData.profileCard.label}</p>
                <p className="panel-value compact">{siteData.profileCard.value}</p>
                <p className="microcopy">{siteData.profileCard.note}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="about">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">About</p>
            <h2>Engineering fundamentals translated into AI and software execution</h2>
          </div>

          <div className="about-grid">
            <article className="about-card" data-reveal>
              <p>{siteData.about}</p>
            </article>

            <div className="strengths-grid">
              {siteData.strengths.map((item) => (
                <article className="strength-card" key={item.title} data-reveal>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Projects</p>
            <h2>Course and product projects backed by real technical work</h2>
          </div>

          <div className="projects-grid">
            {siteData.projects.map((project, index) => (
              <article className="project-card" key={project.title} data-reveal>
                <div className="project-meta">
                  <span>{`0${index + 1}`}</span>
                  <span>{project.year}</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                {project.context ? <p className="project-context">{project.context}</p> : null}
                <p className="project-summary">{project.summary}</p>
                <p className="project-outcome">{project.outcome}</p>

                <div className="chip-row">
                  {project.stack.map((tool) => (
                    <span className="chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-alt" id="experience">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2>Experience across Oracle, Axis Bank, and Reliance</h2>
          </div>

          <div className="timeline">
            {siteData.experience.map((item) => (
              <article className="timeline-card" key={`${item.period}-${item.role}`} data-reveal>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="highlights">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Highlights</p>
            <h2>Education and achievements built on measurable performance</h2>
          </div>

          <div className="detail-grid">
            <article className="detail-card" data-reveal>
              <p className="panel-label">Education</p>
              <h3>{siteData.education.title}</h3>
              <p className="detail-intro">{siteData.education.summary}</p>

              <div className="education-records">
                {siteData.education.records.map((record) => (
                  <div className="education-record" key={record.label}>
                    <span className="education-label">{record.label}</span>
                    <span className="education-value">{record.value}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="detail-card" data-reveal>
              <p className="panel-label">Achievements</p>
              <h3>Academic and competitive highlights</h3>
              <ul className="detail-list">
                {siteData.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Stack</p>
            <h2>Technical tools used across AI, analytics, and software delivery</h2>
          </div>

          <div className="stack-grid">
            {siteData.techGroups.map((group) => (
              <article className="stack-card" key={group.title} data-reveal>
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip chip-light" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card" data-reveal>
            <p className="eyebrow">Contact</p>
            <h2>Connect for AI, data, and software opportunities</h2>
            <p>{siteData.contactBlurb}</p>

            <div className="contact-actions">
              <a className="button" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
              <a className="button button-secondary" href={`tel:${siteData.phone.replace(/\s+/g, "")}`}>
                {siteData.phone}
              </a>
              <a
                className="button button-secondary"
                href={siteData.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>

            <p className="contact-note">{siteData.contactNote}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
