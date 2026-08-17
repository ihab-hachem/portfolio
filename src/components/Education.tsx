import { education, languages } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="section education">
      <div className="container education__grid">
        <div ref={ref} className="education__card reveal">
          <p className="eyebrow">Education</p>
          <h3 className="education__degree">{education.degree}</h3>
          <p className="education__school">
            {education.school} — {education.location}
          </p>
          <p className="education__period">{education.period}</p>
          <p className="education__note">{education.note}</p>
        </div>

        <div className="education__languages">
          <p className="eyebrow">Languages</p>
          <ul>
            {languages.map((l) => (
              <li key={l.name}>
                <span>{l.name}</span>
                <span className="education__lang-level">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
