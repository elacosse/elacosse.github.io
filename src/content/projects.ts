export type ProjectCategory = "Technology" | "Academic" | "Other";

/** Categories render in this order; a category with no projects is skipped. */
export const CATEGORY_ORDER: ProjectCategory[] = ["Technology", "Academic", "Other"];

export interface Project {
  title: string;
  /** Rendered after the title, e.g. "2024" or "ongoing". */
  year: string;
  category: ProjectCategory;
  blurb: string;
  /** Path under /public, e.g. "/img/palimpsest/1.png". */
  image: string;
  /** Defaults to the title when omitted. */
  imageAlt?: string;
  link?: { href: string; label: string };
}

export const PROJECTS: Project[] = [
  {
    title: "Cognitive Communication Interface",
    year: "ongoing",
    category: "Technology",
    image: "/img/CCI/aac.png",
    blurb:
      "This project develops tools to adapt pretrained language models as communication aids for patients with conditions like ALS, aphasia, or dysarthria. Using eye-tracking and egocentric video, systems infer users' intentions to support effective interaction. Central to this work is \"cognitive steering\" - guiding AI personas equipped with personalized context to communicate on behalf of the user. We focus on representation engineering to shape and interpret AI behaviors, aligning neural activations with human thought processes to bridge human cognition and machine intelligence.",
    link: {
      href: "https://bialign-workshop.github.io/2026chi-pdfs/21.pdf",
      label: "Lacosse, et al., Multi-System Cognitive Steering for Generative Communication.",
    },
  },
  {
    title: "Palimpsest",
    year: "2024",
    category: "Technology",
    image: "/img/palimpsest/1.png",
    blurb:
      "This installation presents a dialogue between participants and a synthetic intelligence. The interaction is mediated through image exchange, aiming to investigate the AI's capacity for understanding and responding to user needs, desires, and well-being, as well as its potential to augment human creativity. The system utilizes recent advancements in generative models for image synthesis and language understanding.",
    link: { href: "https://youtu.be/aGPPA5kwjrI", label: "View Example Video ▸" },
  },
  {
    title: "ConsonâncIA",
    year: "2024",
    category: "Technology",
    image: "/img/consonancia/consonancia.png",
    blurb:
      "An immersive audiovisual work exploring the future of digital therapeutics and showcases how AI can facilitate healing experiences by mediating human-to-human and human-to-self connections, extending traditional AI alignment concepts. The project also delves into using conversational AI and generative models to understand and map individual human experiences, aiming to foster empathy and promote self-reflection for improved well-being.",
    link: { href: "https://elacosse.substack.com/p/consonancia", label: "Read Project Overview ▸" },
  },
  {
    title: "Latent Space I",
    year: "2023",
    category: "Technology",
    image: "/img/ls1/1.jpg",
    blurb:
      "An art installation, Latent Space 1, used an AI simulating Alan Watts to understand visitors' dreams and aspirations. This data was then transformed into a personalized virtual reality experience with dream-like visuals, poetic narration, and unique music. (w/ Mainen Lab and Mots)",
    link: { href: "https://youtu.be/Fa3UvuxguCY", label: "View Example Video ▸" },
  },
  {
    title: "Cognitive Mechanistic Interpretability",
    year: "ongoing",
    category: "Academic",
    image: "/img/cmi/traj_latent_space.png",
    blurb:
      "Using mechanistic interpretability techniques, we explore how distinct cognitive behavior are identifiable and separable within the models' internals. This suggests that LLMs can be used as scientific models to better understand human cognition and, excitingly, opens the door to novel \"cognitive alignment,\" where models could be intentionally steered to either \"think\" more like humans for better collaboration or be productively disaligned to foster novel creativity.",
    link: {
      href: "https://arxiv.org/pdf/2603.01822",
      label:
        "Lacosse, et al., Emerging Human-like Strategies for Semantic Memory Foraging in Large Language Models, NeurIPS 2025 workshop for Mechanistic Interpretability.",
    },
  },
  {
    title: "Cognitive Synergies",
    year: "ongoing",
    category: "Academic",
    image: "/img/cogsyn/figure1.png",
    blurb:
      "AI should be engineered not to replace core human cognitive functions, but to enhance them by serving as cognitively-aware \"thought partners\" that can align with human mental processes, amplifying their abilities for creative exploration. Here, we explore how AI during a collaborative active memory search task can track and enhance human performance. (w/ Mariana Duarte, Peter Todd, and Daniel McNamee).",
  },
  {
    title: "Addressing Data Challenges for next-gen Digital Therapeutics",
    year: "2024",
    category: "Other",
    image: "/img/cf-data-workshop/schedule.png",
    imageAlt: "Addressing Data Challenges for next-gen Digital Therapeutics Development workshop schedule",
    blurb:
      "A two-day workshop I co-organized at the Champalimaud Foundation to shape a data collection and processing paradigm for new digital therapeutic (DTx) approaches. Sessions covered the dynamic data economy, data ethics, synthetic data, privacy-enhancing technologies, and the limits of current formats and protocols for storing and transferring medical data (Biobank, DICOM). Discussion was anchored by four use cases: Large Health Models, personalized generative AI interfaces for the patient-caregiver encounter, digital twins for surgical interventions, and the Portuguese Elder Health Cohort Initiative. (w/ Alexander Loktyushin and João Santinha)",
    link: {
      href: "https://sites.google.com/research.fchampalimaud.org/cf-data-workshop-schedule/home",
      label: "View Workshop Site ▸",
    },
  },
];
