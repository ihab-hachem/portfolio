import { expertise } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function Expertise() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Core Expertise</p>
          <h2 className="section-title">Where I build</h2>
        </div>

        <div className="expertise__grid">
          {expertise.map((group) => (
            <ExpertiseGroup key={group.category} category={group.category} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseGroup({ category, items }: { category: string; items: string[] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="stack-group reveal">
      <p className="stack-group__label">{category}</p>
      <ul className="stack-group__items">
        {items.map((item) => (
          <li key={item} className="tag">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
