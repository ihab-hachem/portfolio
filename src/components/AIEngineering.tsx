import { aiEngineering } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function AIEngineering() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="ai" className="section ai">
      <div className="container">
        <div ref={ref} className="ai__intro reveal">
          <p className="eyebrow">{aiEngineering.eyebrow}</p>
          <h2 className="section-title">{aiEngineering.title}</h2>
          <p className="section-lede ai__desc">{aiEngineering.description}</p>
        </div>

        <ul className="ai__capabilities">
          {aiEngineering.capabilities.map((c, i) => (
            <li key={c} className="ai__capability" style={{ transitionDelay: `${i * 40}ms` }}>
              <span className="ai__capability-dot" aria-hidden="true" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
