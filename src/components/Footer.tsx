import { personal } from "../data/content";
import { IconGithub, IconLinkedin, IconMail } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">{personal.name}</p>
          <p className="footer__role">Senior Backend & Software Engineer</p>
        </div>

        <div className="footer__links">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedin />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <IconMail />
          </a>
        </div>

        <p className="footer__copy">© {year} {personal.name}</p>
      </div>
    </footer>
  );
}
