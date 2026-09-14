import { useEffect, useRef, useState } from "react";
import { siteData } from "./data/siteData";
const sectionLinks = ["Projects", "Experience", "Highlights", "Contact"];
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
function Chips({ items }) {
  return (
    <div className="chip-row">
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
function ProjectVisual({ project }) {
  return (
    <div
      className={`project-visual visual-${project.visual}`}
      aria-hidden="true"
    >
      {project.visual === "model" && (
        <div className="model-diagram">
          <span>
            32-bit
            <br />
            <small>challenge</small>
          </span>
          <i>→</i>
          <span>
            528-D
            <br />
            <small>features</small>
          </span>
          <i>→</i>
          <span>
            C-SVM
            <br />
            <small>classifier</small>
          </span>
        </div>
      )}
      {project.visual === "platform" && (
        <div className="platform-diagram">
          <div className="mock-toolbar">
            <i />
            <i />
            <i />
            <span>Property discovery</span>
          </div>
          <div className="mock-listings">
            {[1, 2, 3].map((n) => (
              <div key={n}>
                <span className="building" />
                <i />
                <i />
              </div>
            ))}
          </div>
        </div>
      )}
      {project.visual === "data" && (
        <div className="data-diagram">
          <span>encode</span>
          <i>→</i>
          <span>train</span>
          <i>→</i>
          <span>evaluate</span>
          <div className="data-bars">
            {[35, 62, 44, 85, 57, 73, 95, 68, 82, 52, 72, 90].map((h, i) => (
              <b key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      )}
      {project.visual === "code" && (
        <div className="code-diagram">
          <span>// object-oriented thinking</span>
          <p>
            <b>class</b> DataStructure {"{"}
          </p>
          <p>
            &nbsp; <b>public:</b>
          </p>
          <p>&nbsp;&nbsp; virtual void insert() = 0;</p>
          <p>{"};"}</p>
        </div>
      )}
    </div>
  );
}
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [menuOpen]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Praveen Raj, home">
          <img src={siteData.photoUrl} width="42" height="42" alt="" />
          <span>
            Praveen Raj<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          ref={menuButton}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close ×" : "Menu +"}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        >
          {sectionLinks.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={siteData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="status-pill">
              <span /> AI Application Developer at Oracle
            </p>
            <p className="eyebrow hero-intro">Hi, I’m Praveen Raj</p>
            <h1>
              Engineering AI.
              <br />
              <span>
                Solving real
                <br className="desktop-break" /> problems.
              </span>
            </h1>
            <p className="hero-blurb">
              I build AI agents, data workflows, and software that make complex
              work simpler. IIT Kanpur graduate with experience across
              enterprise AI, banking, and engineering.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work <Arrow />
              </a>
              <a
                className="button button-secondary"
                href={siteData.resumeUrl}
                download
              >
                Download resume <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="social-row">
              {siteData.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <Arrow />
                </a>
              ))}
              <span className="social-divider" />
              <span>Hyderabad, India</span>
            </div>
          </div>
          <div className="hero-profile">
            <div className="portrait-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                className="portrait"
                src={siteData.photoUrl}
                alt="Praveen Raj in a suit and red tie"
                width="1254"
                height="1254"
                fetchPriority="high"
              />
            </div>
            <span className="portrait-tag tag-top">
              <span aria-hidden="true">✦</span> AI + software engineering
            </span>
            <div className="portrait-caption">
              <span className="caption-icon" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>Curiosity. Code. Craft.</strong>
                <span>IIT Kanpur · B.Tech, 2025</span>
              </div>
            </div>
            <span className="portrait-coordinate" aria-hidden="true">
              BUILD / LEARN / ITERATE
            </span>
          </div>
        </section>
        <div className="credentials section">
          <p>Experience & education</p>
          <div>
            <span>ORACLE</span>
            <span>Axis Bank</span>
            <span>Reliance</span>
            <span>IIT Kanpur</span>
          </div>
        </div>
        <section className="section" id="projects">
          <SectionHeading
            number="01"
            label="Selected projects"
            title="Ideas, put into practice."
            description="A closer look at the systems I’ve built, the methods I’ve used, and the results I can point to."
          />
          <div className="projects-grid">
            {siteData.projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} />
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>
                      {String(index + 1).padStart(2, "0")} / {project.year}
                    </span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-context">{project.context}</p>
                  <p className="project-summary">{project.summary}</p>
                  <div className="project-result">
                    <span className="result-label">
                      {project.visual === "code" ? "Practice" : "Result"}
                    </span>
                    <p>{project.outcome}</p>
                  </div>
                  <Chips items={project.stack} />
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="section">
            <SectionHeading
              number="02"
              label="Experience"
              title="From data to delivery."
              description="Building across enterprise AI, financial services, and industrial operations."
            />
            <div className="timeline">
              {siteData.experience.map((item) => (
                <article className="experience-row" key={item.company}>
                  <div className="experience-company">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.company}</h3>
                    <p>
                      {item.location}{" "}
                      {item.current && (
                        <span className="current-badge">Current</span>
                      )}
                    </p>
                  </div>
                  <div className="experience-details">
                    <h4>{item.role}</h4>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <Chips items={item.tags} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" id="highlights">
          <SectionHeading
            number="03"
            label="Recognition & education"
            title="A foundation that holds up."
          />
          <div className="achievement-grid">
            {siteData.achievements.map((item) => (
              <article className="achievement-card" key={item.title}>
                <p className="achievement-value">{item.value}</p>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="education-card">
            <div>
              <p className="eyebrow">Education</p>
              <h3>Indian Institute of Technology Kanpur</h3>
              <p>
                B.Tech in Mechanical Engineering · 2021–2025 · CGPA 7.6 / 10
              </p>
            </div>
            <div className="education-courses">
              <span>Selected coursework</span>
              <p>
                Machine Learning (A) · Data Structures & Algorithms · Software
                Development & Operations · Computer Networks
              </p>
            </div>
          </div>
          <p className="academic-note">
            Earlier academics: CBSE XII — 98.4% · CBSE X — 99.2% ·
            Merit-Cum-Means Scholarship recipient
          </p>
        </section>
        <section className="section stack-section" id="stack">
          <SectionHeading
            number="04"
            label="Toolkit"
            title="The tools behind the work."
          />
          <div className="stack-grid">
            {siteData.techGroups.map((group) => (
              <article className="stack-card" key={group.title}>
                <h3>{group.title}</h3>
                <Chips items={group.items} />
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Let’s connect</p>
              <h2>
                Have a meaningful
                <br />
                problem to solve<span>?</span>
              </h2>
              <p>
                I’m interested in conversations about AI applications, data
                science, and software engineering. Let’s talk about what we
                could build.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button" href={`mailto:${siteData.email}`}>
                Get in touch <Arrow />
              </a>
              <a className="contact-email" href={`mailto:${siteData.email}`}>
                {siteData.email}
              </a>
              <a className="contact-phone" href="tel:+919798020110">
                {siteData.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer section">
        <a className="brand" href="#home">
          Praveen Raj<span className="brand-dot">.</span>
        </a>
        <p>Built with intent. Always learning.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}
