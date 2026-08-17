import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { nav, personal } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { IconClose, IconDownload, IconMenu } from "./icons";

export function Nav() {
  const ids = nav.map((n) => n.href.replace("#", ""));
  const active = useScrollSpy(ids);
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label={`${personal.name} — home`}>
          <span className="nav__mark">IH</span>
          <span className="nav__name">Ihab Hachem</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav__link${active === item.href.replace("#", "") ? " is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn-outline nav__cta"
            href={personal.resumePath}
            download
          >
            <IconDownload /> Résumé
          </a>
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open &&
        createPortal(
          <div className="nav__mobile" role="dialog" aria-modal="true">
            <nav className="nav__mobile-links" aria-label="Mobile">
              {nav.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              className="btn btn-accent nav__mobile-cta"
              href={personal.resumePath}
              download
              onClick={() => setOpen(false)}
            >
              <IconDownload /> Download résumé (PDF)
            </a>
          </div>,
          document.body
        )}
    </header>
  );
}
