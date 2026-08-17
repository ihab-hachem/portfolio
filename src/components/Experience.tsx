import { experience, teaching } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Experience() {
  const headRef = useReveal<HTMLDivElement>();
  const teachRef = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where the work happened</h2>
        </div>

        <div className="timeline">
          {experience.map((job) => (
            <ExperienceItem key={job.company} job={job} />
          ))}
        </div>

        <div ref={teachRef} className="teaching reveal">
          <p className="teaching__label">{teaching.label}</p>
          <div className="teaching__list">
            {teaching.items.map((t) => (
              <div key={t.org} className="teaching__item">
                <span className="teaching__org">{t.org}</span>
                <span className="teaching__role">{t.role}</span>
                <span className="teaching__period">{t.period}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ job }: { job: (typeof experience)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`timeline-item${job.featured ? " timeline-item--featured" : ""} reveal`}>
      <div className="timeline-item__rail" aria-hidden="true">
        <span className="timeline-item__dot" />
      </div>
      <div className="timeline-item__card">
        <div className="timeline-item__head">
          <div>
            <h3 className="timeline-item__role">{job.role}</h3>
            <p className="timeline-item__company">
              {job.company}
              <span className="timeline-item__location">, {job.location}</span>
            </p>
          </div>
          <p className="timeline-item__period">{job.period}</p>
        </div>

        <p className="timeline-item__summary">{job.summary}</p>

        <ul className="timeline-item__points">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <ul className="timeline-item__tech">
          {job.tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
