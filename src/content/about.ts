export const MOTIVATIONS: string[] = [
  "My main professional interests lie at the intersection of AI and human cognition. I'm interested in engineering how humans can better interact with, control, and respond to AI systems, as well as understanding the future consequences that evolve through their current and hypothetical (mass) adoption. Today's computing interaction is no longer primarily about manipulating and interacting with isolated digital artifacts, like in conventional human-computer-interaction, but about communicating/interacting with (collective) intelligent entities that possess some significant (and advancing) level of synthetic (non-conscious) cognition.",
  "For these new kinds of AIs, what will be the primary and necessary affordances that allow them to best interface with our human cognition? How should we better build and train the models and system architectures that underlie those AIs to take advantage of those affordances and ensure they increase human flourishing?",
];

export interface Position {
  role: string;
  org: { name: string; href: string };
  location: string;
  period: string;
  highlights: string[];
}

export const EXPERIENCE: Position[] = [
  {
    role: "Staff Research Scientist",
    org: { name: "Champalimaud Foundation, Centre for the Unknown", href: "https://fchampalimaud.org" },
    location: "Lisbon, Portugal",
    period: "September 2022 - Present",
    highlights: [
      "Supporting the development of special projects within the new Centre for Restorative Neurotechnology.",
    ],
  },
];
