import { about } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__label">
          <p className="eyebrow">{about.eyebrow}</p>
        </div>

        <div ref={ref} className="about__body reveal">
          <h2 className="section-title">{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="about__paragraph">
              {p}
            </p>
          ))}
          <ul className="about__tags">
            {about.tags.map((t) => (
              <li key={t} className="tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
