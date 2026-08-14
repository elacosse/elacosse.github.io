export const SITE = {
  name: "Eric Lacosse",
  tagline: "Cognitive Human-AI Engineering",
  description:
    "Portfolio of Eric Lacosse, Staff Research Scientist at the Champalimaud Foundation, working at the intersection of AI and human cognition.",
  url: "https://elacosse.github.io",
};

export interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { name: "Posts", href: "https://elacosse.substack.com", external: true },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/" },
];

export interface ContactLink {
  name: string;
  href: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  { name: "Email", href: "mailto:eric.lacosse@research.fchampalimaud.org" },
  { name: "Github", href: "https://github.com/elacosse" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/elacosse/" },
  { name: "Substack", href: "https://elacosse.substack.com" },
  { name: "X", href: "https://x.com/sansplot" },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=zDSW_voAAAAJ&hl=en" },
  { name: "Are.na", href: "https://www.are.na/eric-lacosse/channels" },
];
