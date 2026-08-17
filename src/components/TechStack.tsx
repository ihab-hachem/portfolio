import { techStack } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export function TechStack() {
  const headRef = useReveal<HTMLDivElement>();

  return (
    <section id="stack" className="section stack">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow">Technology</p>
          <h2 className="section-title">Stack, by what it's for</h2>
          <p className="section-lede">
            Grouped by role rather than dumped in one list — backend and architecture are where most of the
            depth is.
          </p>
        </div>

        <div className="stack__grid">
          <div className="stack__dominant">
            {techStack.dominant.map((group) => (
              <StackGroup key={group.category} category={group.category} items={group.items} dominant />
            ))}
          </div>
          <div className="stack__secondary">
            {techStack.secondary.map((group) => (
              <StackGroup key={group.category} category={group.category} items={group.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StackGroup({
  category,
  items,
  dominant = false,
}: {
  category: string;
  items: string[];
  dominant?: boolean;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`stack-group${dominant ? " stack-group--dominant" : ""} reveal`}>
      <p className="stack-group__label">{category}</p>
      <ul className="stack-group__items">
        {items.map((item) => (
          <li key={item} className={dominant ? "tag tag--accent" : "tag"}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
