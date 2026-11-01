import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="hero" id="top">
          <div className="container hero__inner">
            <div className="hero__copy">
              <span className="eyebrow">Software Engineer · Founder · Cairo, Egypt</span>
              <h1>
                Ahmed <span className="accent">Hussien</span>
              </h1>
              <p className="lead">
                Software engineer at Siemens EDA, founder and CTO of Jisr (Egypt equity crowdfunding), and
                product owner / technical consultant for an oil &amp; gas ERP. I design and ship systems end to
                end — from C++ profilers and Qt tools to agentic AI workflows.
              </p>
              <div className="hero__ctas">
                <a className="btn btn--primary btn--lg" href="#contact">
                  Get in touch
                </a>
                <a className="btn btn--outline btn--lg" href="#projects">
                  View projects
                </a>
                <a className="btn btn--gold btn--lg" href="/resume.pdf" target="_blank" rel="noopener">
                  Download resume
                </a>
              </div>
            </div>
            <div className="hero__photo">
              <img src="/ahmed-hussien.jpg" alt="Ahmed Hussien" width={300} height={300} />
              <span className="hero__badge">Open to consulting</span>
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="highlights">
          <div className="container">
            <div className="stat">
              <div className="stat__value">Siemens EDA</div>
              <div className="stat__label">Software Engineer — Visualization &amp; Debug</div>
              <div className="stat__sub">Mar 2023 — Present · Profiler UI lead</div>
            </div>
            <div className="stat">
              <div className="stat__value">6x faster</div>
              <div className="stat__label">localhost performance</div>
              <div className="stat__sub">Lightweight HTTP server for desktop profiler</div>
            </div>
            <div className="stat">
              <div className="stat__value">MediaTek · MS · ARM · Samsung</div>
              <div className="stat__label">Profiler clients</div>
              <div className="stat__sub">Core visualization features in production</div>
            </div>
            <div className="stat">
              <div className="stat__value">3.83 / 4.00</div>
              <div className="stat__label">BSc GPA · Honors, 6th in batch</div>
              <div className="stat__sub">MSc GPA 3.63/4.00 · Cairo University</div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <div className="container container--narrow">
            <div className="section__head">
              <span className="eyebrow">About</span>
              <h2>A builder who ships</h2>
            </div>
            <p className="lead" style={{ marginInline: 'auto', textAlign: 'center' }}>
              I&apos;m a software engineer with 3+ years at Siemens EDA, where I lead UI development for the
              Profiler product and deliver visualization features used by MediaTek, Microsoft, ARM and Samsung.
              Alongside, I co-founded Jisr, an equity-crowdfunding platform for Egypt, as founder and CTO, and
              I lead an ERP for oil &amp; gas service companies as product owner, project manager and technical
              consultant.
            </p>
            <p className="muted" style={{ textAlign: 'center', marginTop: 'var(--sp-lg)' }}>
              I care about modularity, measurable performance, and AI-assisted developer workflows. MSc in
              Computer Engineering at Cairo University (GPA 3.63/4.00); BSc with Honors, sixth in batch.
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section section--alt" id="experience">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Experience</span>
              <h2>Where I&apos;ve worked</h2>
            </div>
            <div className="timeline">
              <article className="tl-item">
                <div className="tl-head">
                  <h3>Software Engineer — Visualization &amp; Debug</h3>
                  <span className="tl-meta">Mar 2023 — Present</span>
                </div>
                <div className="tl-company">Siemens EDA · Cairo, Egypt · Current role</div>
                <div className="clients">
                  <span className="client-pill">MediaTek</span>
                  <span className="client-pill">Microsoft</span>
                  <span className="client-pill">ARM</span>
                  <span className="client-pill">Samsung</span>
                </div>
                <ul>
                  <li>
                    Led UI development for the Profiler product and shipped core visualization features adopted
                    by MediaTek, Microsoft, ARM and Samsung.
                  </li>
                  <li>
                    Engineered a lightweight HTTP server for a desktop profiling tool, enabling integration with
                    verification management solutions and MCP workflows, with over 6x faster localhost
                    performance.
                  </li>
                  <li>
                    Built an agentic issue-resolution workflow: monitors new issues, classifies automatable
                    tasks, spawns a coding agent to implement fixes, requests review, and notifies code owners
                    with rationale.
                  </li>
                  <li>
                    Built a Java/Spring Boot integration between VerificationIQ and a C++ profiling tool for
                    seamless profiling-data consumption.
                  </li>
                  <li>
                    Architected a Dockerized Jenkins CI/CD pipeline for automated code-complexity reporting and
                    Perforce Swarm integration.
                  </li>
                  <li>
                    Refactored legacy C++ components for modularity and extensibility; integrated the Siemens
                    analytics SDK for crashes, usage and navigation insights; mentored interns.
                  </li>
                </ul>
              </article>
              <article className="tl-item">
                <div className="tl-head">
                  <h3>Software Development Engineer Intern</h3>
                  <span className="tl-meta">Jun 2022 — Sep 2022</span>
                </div>
                <div className="tl-company">Valeo · Cairo, Egypt</div>
                <ul>
                  <li>Enhanced OpenGL-based visualization for faster, smoother sensor-data rendering.</li>
                  <li>Developed server-side features for real-time weather-data recording during acquisition.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Projects</span>
              <h2>What I&apos;ve built &amp; led</h2>
            </div>
            <div className="projects">
              <article className="card project">
                <div className="project__head">
                  <h3>Jisr</h3>
                  <span className="project__role">Founder &amp; CTO</span>
                </div>
                <p>
                  Cross-platform equity-crowdfunding platform connecting founders, investors and admins through a
                  transparent, AI-assisted experience. Equity (not debt), escrow at a licensed bank, all-or-nothing
                  rounds, FRA approval pending.
                </p>
                <div className="tags">
                  <span className="tag">React Native / Expo</span>
                  <span className="tag">Node.js / Express</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Redis</span>
                  <span className="tag">MinIO</span>
                  <span className="tag">Next.js</span>
                </div>
                <div className="project__links">
                  <a className="btn btn--primary btn--sm" href="https://jisrapp.onrender.com/" target="_blank" rel="noopener">
                    Visit site
                  </a>
                  <a
                    className="btn btn--outline btn--sm"
                    href="https://www.linkedin.com/in/ahmed-hussien-7109461ab/"
                    target="_blank"
                    rel="noopener"
                  >
                    LinkedIn
                  </a>
                </div>
              </article>
              <article className="card project">
                <div className="project__head">
                  <h3>Oil &amp; Gas Service ERP</h3>
                  <span className="project__role">Product Owner · PM · Tech Consultant</span>
                </div>
                <p>
                  Petroleum-tools rental ERP for PTSC (Advanced-EG): rents and sells downhole tools, hauls them to
                  rigs via third-party transport, inspects and repairs on return, and invoices against
                  customer-verified timesheets. ~50 screens, role-based (Ops / Customer / Vendor).
                </p>
                <div className="tags">
                  <span className="tag">Spring Boot 4 / Java 21</span>
                  <span className="tag">React 19 / TypeScript</span>
                  <span className="tag">Tailwind v4</span>
                  <span className="tag">PostgreSQL 16</span>
                  <span className="tag">Flyway</span>
                  <span className="tag">Planning engine</span>
                </div>
                <div className="project__links">
                  <span className="btn btn--outline btn--sm" style={{ cursor: 'default' }}>
                    Private codebase
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section section--canvas" id="services">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Services</span>
              <h2>How I can help</h2>
              <p className="lead">Available for consulting, freelance projects and mentoring.</p>
            </div>
            <div className="services">
              <article className="card service">
                <div className="value__icon">⚙</div>
                <h3>Software consulting &amp; architecture</h3>
                <p>
                  System design, code reviews, technical strategy, and delivery planning for teams building
                  complex products.
                </p>
              </article>
              <article className="card service">
                <div className="value__icon">🤖</div>
                <h3>AI / ML &amp; agentic workflows</h3>
                <p>
                  LLM applications, RAG pipelines, coding agents, MCP integrations, and PyTorch-based models for
                  real products.
                </p>
              </article>
              <article className="card service">
                <div className="value__icon">🎓</div>
                <h3>Mentoring &amp; coaching</h3>
                <p>
                  1:1 mentoring for engineers and interns across C++, systems, and practical AI tool usage.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section section--alt" id="skills">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Skills</span>
              <h2>Technical toolkit</h2>
            </div>
            <div className="skills-groups">
              <div className="skill-group">
                <h3>Languages</h3>
                <div className="skill-chips">
                  {['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'].map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <h3>Frameworks &amp; Tools</h3>
                <div className="skill-chips">
                  {[
                    'Qt',
                    'OpenGL',
                    'Spring Boot',
                    'PyTorch',
                    'Flutter',
                    'Node.js',
                    'React',
                    'Next.js',
                    'Jenkins',
                    'Docker',
                    'Git',
                    'GitHub',
                    'GitLab',
                    'Perforce',
                    'Jira',
                    'Confluence',
                  ].map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <h3>Platforms</h3>
                <div className="skill-chips">
                  {['Linux', 'Windows'].map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skill-group">
                <h3>Spoken Languages</h3>
                <div className="skill-chips">
                  {['Arabic (Native)', 'English (Fluent)'].map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section className="section" id="education">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Education &amp; Certifications</span>
              <h2>Background</h2>
            </div>
            <div className="edu">
              <div className="edu-item">
                <h3>MSc in Computer Engineering</h3>
                <div className="muted">Cairo University · Sep 2024 — Present · GPA 3.63/4.00</div>
                <span className="edu-highlight">In progress</span>
              </div>
              <div className="edu-item">
                <h3>BSc in Computer &amp; Communication Engineering</h3>
                <div className="muted">
                  Cairo University · Sep 2018 — May 2023 · GPA 3.83/4.00 · Excellent with Honors, Sixth in Batch
                </div>
                <span className="edu-highlight">Honors · 6th in batch</span>
                <p className="muted" style={{ marginTop: 'var(--sp-sm)' }}>
                  Graduation project: Object Detection in Adverse Weather Conditions — sponsored by Valeo (Grade A).
                </p>
              </div>
            </div>
            <div style={{ marginTop: 'var(--sp-2xl)' }}>
              <h3 style={{ color: 'var(--navy)', marginBottom: 'var(--sp-md)' }}>
                IBM Generative AI Engineering Professional Certificate (in progress)
              </h3>
              <ul className="cert-list">
                <li>
                  <strong>Develop Generative AI Applications: Get Started</strong> — Credential ID 4QHPI06JJ5A4
                </li>
                <li>
                  <strong>Build RAG Applications: Get Started</strong> — Credential ID KLM0CTCGRD0J
                </li>
                <li>Vector Databases for RAG; Advanced RAG with Vector Databases and Retrievers</li>
                <li>Build Multimodal Generative AI Applications</li>
                <li>Fundamentals of Building AI Agents; Agentic AI with LangChain, LangGraph, CrewAI, AutoGen, BeeAI</li>
                <li>Build AI Agents using MCP; RAG / Agentic AI Capstone Project</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section--navy" id="contact">
          <div className="container">
            <div className="section__head">
              <span className="eyebrow">Contact</span>
              <h2>Let&apos;s talk</h2>
              <p className="lead">Open to consulting, freelance projects, and new opportunities.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <a className="contact-row" href="mailto:ahmedhussien783@gmail.com">
                  <span className="contact-row__icon">@</span>
                  <span>
                    <span className="contact-row__label">Email</span>
                    <br />
                    <span className="contact-row__value">ahmedhussien783@gmail.com</span>
                  </span>
                </a>
                <a className="contact-row" href="https://wa.me/201099668644" target="_blank" rel="noopener">
                  <span className="contact-row__icon">W</span>
                  <span>
                    <span className="contact-row__label">WhatsApp / Phone</span>
                    <br />
                    <span className="contact-row__value">(+2) 01099668644</span>
                  </span>
                </a>
                <a
                  className="contact-row"
                  href="https://www.linkedin.com/in/ahmed-hussien-7109461ab/"
                  target="_blank"
                  rel="noopener"
                >
                  <span className="contact-row__icon">in</span>
                  <span>
                    <span className="contact-row__label">LinkedIn</span>
                    <br />
                    <span className="contact-row__value">ahmed-hussien-7109461ab</span>
                  </span>
                </a>
                <a className="contact-row" href="https://github.com/Ahmedh12" target="_blank" rel="noopener">
                  <span className="contact-row__icon">GH</span>
                  <span>
                    <span className="contact-row__label">GitHub</span>
                    <br />
                    <span className="contact-row__value">github.com/Ahmedh12</span>
                  </span>
                </a>
                <a className="contact-row" href="/resume.pdf" target="_blank" rel="noopener">
                  <span className="contact-row__icon">CV</span>
                  <span>
                    <span className="contact-row__label">Resume</span>
                    <br />
                    <span className="contact-row__value">Download PDF</span>
                  </span>
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container" style={{ textAlign: 'center' }}>
          <p className="site-footer__legal" style={{ border: 'none', paddingTop: 0, margin: 0 }}>
© 2026 Ahmed Hussien
          </p>
        </div>
      </footer>
    </>
  );
}