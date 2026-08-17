import { otherProjects, projects, type Project } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { IconExternal, IconGithub } from "./icons";

export function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const otherRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Selected Projects</p>
          <h2 className="section-title">What I've built</h2>
          <p className="section-lede">
            A short list of the strongest work, not a full history. Reach out or check GitHub for more.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div ref={otherRef} className="earlier-projects reveal">
          <p className="earlier-projects__label">Other Projects</p>
          <div className="earlier-projects__list">
            {otherProjects.map((p) => (
              <div key={p.title} className="earlier-projects__item">
                <h4>{p.title}</h4>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className="project-card project-card--rich reveal">
      <div className="project-card__head">
        <div>
          <p className="project-card__tag">{project.tag}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-card__period">{project.period}</span>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__row">
        <p className="project-card__label">Role</p>
        <p>{project.role}</p>
      </div>

      <div className="project-card__row">
        <p className="project-card__label">Impact</p>
        <ul>
          {project.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>

      {project.flow && (
        <div className="project-card__flow" role="list" aria-label={`${project.title} architecture flow`}>
          {project.flow.map((step, i, arr) => (
            <span className="project-card__flow-item" key={step} role="listitem">
              {step}
              {i < arr.length - 1 && (
                <span className="project-card__flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      )}

      <ul className="project-card__tech">
        {project.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>

      <div className="project-card__footer">
        {project.proprietary ? (
          <span className="project-card__proprietary">Proprietary — professional project</span>
        ) : project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
            <IconGithub /> GitHub <IconExternal />
          </a>
        ) : null}
      </div>
    </article>
  );
}
