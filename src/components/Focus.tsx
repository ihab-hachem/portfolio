import { focusAreas } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Focus() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="focus" className="section focus">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Engineering Focus</p>
          <h2 className="section-title">Where I spend my time</h2>
          <p className="section-lede">
            Backend systems and the architecture decisions around them, from the API contract down to the
            database schema.
          </p>
        </div>

        <div className="focus__grid">
          {focusAreas.map((area) => (
            <FocusCard key={area.title} title={area.title} description={area.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FocusCard({ title, description }: { title: string; description: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="focus-card reveal">
      <span className="focus-card__mark" aria-hidden="true" />
      <h3 className="focus-card__title">{title}</h3>
      <p className="focus-card__desc">{description}</p>
    </div>
  );
}
