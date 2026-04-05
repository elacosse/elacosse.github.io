export default function About() {
  return (
    <>
      <section>
        <h2 className="uppercase text-[18px] tracking-wider text-[#888] font-normal mb-5">Motivations</h2>
        <div className="space-y-4 text-[#b0b0b0] text-[15px] leading-[1.7]">
          <p>
            My main professional interests lie at the intersection of AI and human cognition. I'm
            interested in engineering how humans can better interact with, control, and respond to
            AI systems, as well as understanding the future consequences that evolve through their
            current and hypothetical (mass) adoption. Today's computing interaction is no longer
            primarily about manipulating and interacting with isolated digital artifacts, like in
            conventional human-computer-interaction, but about communicating/interacting with
            (collective) intelligent entities that possess some significant (and advancing) level of
            synthetic (non-conscious) cognition.
          </p>
          <p>
            For these new kinds of AIs, what will be the primary and necessary affordances that
            allow them to best interface with our human cognition? How should we better build and
            train the models and system architectures that underlie those AIs to take advantage of
            those affordances and ensure they increase human flourishing?
          </p>
        </div>
      </section>

      <section>
        <h2 className="uppercase text-[18px] tracking-wider text-[#888] font-normal mb-5">Now</h2>
        <div className="pb-10 border-b border-[#282828]">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
            <div className="space-y-2">
              <h3 className="text-[18px] font-medium">Staff Research Scientist</h3>
              <p>
                <a
                  href="https://fchampalimaud.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0a0] underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
                >
                  Champalimaud Foundation, Centre for the Unknown ▸
                </a>
              </p>
              <p className="text-[#a0a0a0] text-[15px]">Lisbon, Portugal</p>
              <p className="text-[#a0a0a0] text-[15px]">September 2022 - Present</p>
            </div>
            <div className="job-details">
              <ul className="list-none p-0 m-0">
                <li className="relative pl-[25px] text-[#b0b0b0] text-[15px] before:content-['•'] before:absolute before:left-0 before:top-[3px] before:text-[#e0e0e0] before:text-[12px]">
                  Supporting the development of special projects within the new Centre for
                  Restorative Neurotechnology.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="uppercase text-[18px] tracking-wider text-[#888] font-normal mb-5">Before</h2>
        <div className="space-y-4 text-[#b0b0b0] text-[15px] leading-[1.7]">
          <p>
            I worked on{' '}
            <a href="https://www.kernel.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#555] hover:text-white hover:decoration-white transition-all">BMIs</a>, as
            an ML engineer, and as a{' '}
            <a
              href="https://www.researchgate.net/scientific-contributions/Eric-Lacosse-2142846982"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
            >
              PhD student
            </a>{' '}
            at the Max Planck Institute for{' '}
            <a href="https://is.mpg.de/person/elacosse" target="_blank" rel="noopener noreferrer" className="underline decoration-[#555] hover:text-white hover:decoration-white transition-all">
              Intelligent Systems
            </a>{' '}
            and{' '}
            <a
              href="https://www.kyb.tuebingen.mpg.de/person/114771/602940"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[#555] hover:text-white hover:decoration-white transition-all"
            >
              Biological Cybernetics
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
