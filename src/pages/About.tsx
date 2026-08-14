import { SectionLabel } from "../components/SectionHeading";
import { EXPERIENCE, MOTIVATIONS } from "../content/about";

const linkClass = "underline decoration-rule-subtle hover:text-white hover:decoration-white transition-all";

export default function About() {
  return (
    <>
      <section>
        <SectionLabel>Motivations</SectionLabel>
        <div className="space-y-4 text-muted text-body leading-[1.7]">
          {MOTIVATIONS.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Now</SectionLabel>
        {EXPERIENCE.map((position) => (
          <div key={position.role} className="pb-10 border-b border-rule">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
              <div className="space-y-2">
                <h3 className="text-label font-medium">{position.role}</h3>
                <p>
                  <a href={position.org.href} target="_blank" rel="noopener noreferrer" className={`text-dim ${linkClass}`}>
                    {position.org.name} ▸
                  </a>
                </p>
                <p className="text-dim text-body">{position.location}</p>
                <p className="text-dim text-body">{position.period}</p>
              </div>
              <div>
                <ul className="list-none p-0 m-0">
                  {position.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-6.25 text-muted text-body before:content-['•'] before:absolute before:left-0 before:top-0.75 before:text-ink before:text-[12px]"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section>
        <SectionLabel>Before</SectionLabel>
        <div className="space-y-4 text-muted text-body leading-[1.7]">
          <p>
            I worked on{' '}
            <a href="https://www.kernel.com/" target="_blank" rel="noopener noreferrer" className={linkClass}>
              BMIs
            </a>
            , as an ML engineer, and as a{' '}
            <a
              href="https://www.researchgate.net/scientific-contributions/Eric-Lacosse-2142846982"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              PhD student
            </a>{' '}
            at the Max Planck Institute for{' '}
            <a href="https://is.mpg.de/person/elacosse" target="_blank" rel="noopener noreferrer" className={linkClass}>
              Intelligent Systems
            </a>{' '}
            and{' '}
            <a
              href="https://www.kyb.tuebingen.mpg.de/person/114771/602940"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Biological Cybernetics
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
