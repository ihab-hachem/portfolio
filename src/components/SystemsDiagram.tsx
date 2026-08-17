import { useState } from "react";
import { systemsDiagram } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const VIEW_W = 900;
const VIEW_H = 380;

type Node = (typeof systemsDiagram.nodes)[number];

export function SystemsDiagram() {
  const [activeId, setActiveId] = useState<string>(systemsDiagram.nodes[0].id);
  const headRef = useReveal<HTMLDivElement>();
  const panelRef = useReveal<HTMLDivElement>();

  const byId = (id: string): Node => systemsDiagram.nodes.find((n) => n.id === id)!;
  const active = byId(activeId);

  return (
    <section id="systems" className="section systems">
      <div className="container">
        <div ref={headRef} className="section-head reveal">
          <p className="eyebrow eyebrow--light">{systemsDiagram.eyebrow}</p>
          <h2 className="section-title section-title--light">{systemsDiagram.title}</h2>
          <p className="section-lede section-lede--light">{systemsDiagram.description}</p>
        </div>

        <div ref={panelRef} className="diagram-panel reveal">
          <svg
            className="diagram-panel__svg"
            viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
            role="img"
            aria-label="Layered system architecture diagram: client, API layer, backend services, database and cache, AI and RAG layer, observability"
          >
            <g className="diagram-edges">
              {systemsDiagram.edges.map(([fromId, toId]) => {
                const from = byId(fromId);
                const to = byId(toId);
                const isActive = activeId === fromId || activeId === toId;
                return (
                  <line
                    key={`${fromId}-${toId}`}
                    x1={from.x + 60}
                    y1={from.y + 24}
                    x2={to.x + 60}
                    y2={to.y + 24}
                    className={`diagram-edge${isActive ? " is-active" : ""}`}
                  />
                );
              })}
            </g>
          </svg>

          <div className="diagram-panel__nodes">
            {systemsDiagram.nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                className={`diagram-node${activeId === node.id ? " is-active" : ""}`}
                style={{ left: `${(node.x / VIEW_W) * 100}%`, top: `${(node.y / VIEW_H) * 100}%` }}
                onMouseEnter={() => setActiveId(node.id)}
                onFocus={() => setActiveId(node.id)}
                onClick={() => setActiveId(node.id)}
                aria-pressed={activeId === node.id}
              >
                {node.label}
              </button>
            ))}
          </div>

          <div className="diagram-panel__detail" aria-live="polite">
            <p className="diagram-panel__detail-label">{active.label}</p>
            <p className="diagram-panel__detail-text">{active.detail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
