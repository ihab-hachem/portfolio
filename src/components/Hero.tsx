import { hero, personal } from "../data/content";
import { IconArrowRight, IconDownload, IconGithub, IconLinkedin, IconMail } from "./icons";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__main">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="hero__name">{hero.heading}</h1>
          <p className="hero__role">{hero.role}</p>
          <p className="hero__sub">{hero.sub}</p>
          <p className="hero__description">{hero.description}</p>

          <div className="hero__ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects <IconArrowRight />
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <IconGithub /> View GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              <IconLinkedin /> Connect on LinkedIn
            </a>
            <a href="#contact" className="btn btn-outline">
              <IconMail /> Contact Me
            </a>
          </div>

          <a href={personal.resumePath} download className="hero__resume-link">
            <IconDownload /> Download résumé as PDF
          </a>
        </div>

        <aside className="hero__panel" aria-label="Quick facts">
          <p className="hero__panel-label">Now</p>
          <ul className="hero__panel-list">
            {hero.facts.map((f) => (
              <li key={f.label}>
                <span className="hero__panel-key">{f.label}</span>
                <span className="hero__panel-val">{f.value}</span>
              </li>
            ))}
          </ul>
          <div className="hero__panel-status">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to backend & systems engineering roles
          </div>
        </aside>
      </div>
    </section>
  );
}
