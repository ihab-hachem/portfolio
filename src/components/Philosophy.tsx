import { philosophy } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Philosophy() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section className="section philosophy">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">{philosophy.eyebrow}</p>
          <h2 className="section-title">{philosophy.title}</h2>
        </div>

        <div className="philosophy__grid">
          {philosophy.principles.map((p) => (
            <PrincipleItem key={p.title} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ title, description }: { title: string; description: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="principle reveal">
      <span className="principle__mark" aria-hidden="true" />
      <div>
        <h3 className="principle__title">{title}</h3>
        <p className="principle__desc">{description}</p>
      </div>
    </div>
  );
}
