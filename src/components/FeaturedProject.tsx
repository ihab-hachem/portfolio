import { featuredProject, mcpArchitecture } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { IconExternal, IconGithub } from "./icons";

export function FeaturedProject() {
  const projectRef = useReveal<HTMLDivElement>();
  const archRef = useReveal<HTMLDivElement>();

  return (
    <section className="section section--tight featured">
    <div className="container featured-wrap">
      <div ref={projectRef} className="featured-project reveal">
        <div className="featured-project__main">
          <p className="eyebrow">{featuredProject.eyebrow}</p>
          <h3 className="featured-project__title">{featuredProject.title}</h3>
          <p className="featured-project__desc">{featuredProject.description}</p>

          <ul className="featured-project__capabilities">
            {featuredProject.capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <ul className="featured-project__tech">
            {featuredProject.tech.map((t) => (
              <li key={t} className="tag tag--accent">
                {t}
              </li>
            ))}
          </ul>

          <p className="featured-project__note">{featuredProject.note}</p>

          <a
            href={featuredProject.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary featured-project__cta"
          >
            <IconGithub /> View on GitHub <IconExternal />
          </a>
        </div>
      </div>

      <div ref={archRef} className="mcp-arch reveal">
        <p className="eyebrow">{mcpArchitecture.eyebrow}</p>
        <h3 className="mcp-arch__title">{mcpArchitecture.title}</h3>
        <p className="mcp-arch__desc">{mcpArchitecture.description}</p>

        <div className="mcp-arch__flow" role="list" aria-label="Architecture flow">
          {mcpArchitecture.flow.map((step, i) => (
            <div className="mcp-arch__flow-item" key={step} role="listitem">
              <span className="mcp-arch__flow-index">{String(i + 1).padStart(2, "0")}</span>
              <span>{step}</span>
              {i < mcpArchitecture.flow.length - 1 && (
                <span className="mcp-arch__flow-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mcp-arch__note">{mcpArchitecture.note}</p>
      </div>
    </div>
    </section>
  );
}
