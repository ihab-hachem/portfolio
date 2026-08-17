import { personal } from "../data/content";
import { useReveal } from "../hooks/useReveal";
import { IconArrowRight, IconDownload, IconGithub, IconLinkedin, IconMail, IconPhone } from "./icons";

export function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className="contact__intro reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Talk backend systems</h2>
          <p className="section-lede">Open to senior backend and systems engineering roles.</p>
        </div>

        <div className="contact__grid">
          <a className="contact__card" href={`mailto:${personal.email}`}>
            <IconMail />
            <div>
              <p className="contact__card-label">Email</p>
              <p className="contact__card-value">{personal.email}</p>
            </div>
            <IconArrowRight className="contact__card-arrow" />
          </a>

          <a className="contact__card" href={`tel:${personal.phone.replace(/\s+/g, "")}`}>
            <IconPhone />
            <div>
              <p className="contact__card-label">Phone</p>
              <p className="contact__card-value">{personal.phone}</p>
            </div>
            <IconArrowRight className="contact__card-arrow" />
          </a>

          <a className="contact__card" href={personal.linkedin} target="_blank" rel="noreferrer">
            <IconLinkedin />
            <div>
              <p className="contact__card-label">LinkedIn</p>
              <p className="contact__card-value">/in/ihab-hachem</p>
            </div>
            <IconArrowRight className="contact__card-arrow" />
          </a>

          <a className="contact__card" href={personal.github} target="_blank" rel="noreferrer">
            <IconGithub />
            <div>
              <p className="contact__card-label">GitHub</p>
              <p className="contact__card-value">/ihab-hachem</p>
            </div>
            <IconArrowRight className="contact__card-arrow" />
          </a>
        </div>

        <a href={personal.resumePath} download className="btn btn-outline contact__resume">
          <IconDownload /> Download résumé (PDF)
        </a>
      </div>
    </section>
  );
}
