import { earlierProjects, featuredEarlierProjects } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Projects() {
  const headRef = useReveal<HTMLDivElement>();
  const earlierRef = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Selected Projects</p>
          <h2 className="section-title">Freelance &amp; independent work</h2>
          <p className="section-lede">
            Built before and alongside current employment, mostly PHP/Laravel backends paired with React or
            React Native clients.
          </p>
        </div>

        <div className="projects__grid">
          {featuredEarlierProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div ref={earlierRef} className="earlier-projects reveal">
          <p className="earlier-projects__label">Earlier Projects</p>
          <div className="earlier-projects__list">
            {earlierProjects.map((p) => (
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

function ProjectCard({ project }: { project: (typeof featuredEarlierProjects)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article ref={ref} className="project-card reveal">
      <div className="project-card__head">
        <h3>{project.title}</h3>
        <span className="project-card__period">{project.period}</span>
      </div>

      <div className="project-card__row">
        <p className="project-card__label">Problem</p>
        <p>{project.problem}</p>
      </div>
      <div className="project-card__row">
        <p className="project-card__label">Solution</p>
        <p>{project.solution}</p>
      </div>
      <div className="project-card__row">
        <p className="project-card__label">Contribution</p>
        <ul>
          {project.contribution.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <ul className="project-card__tech">
        {project.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
