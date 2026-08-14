import { useState } from "react";
import Lightbox from "../components/Lightbox";
import ProjectCard from "../components/ProjectCard";
import { CategoryHeading, SectionLabel } from "../components/SectionHeading";
import { CATEGORY_ORDER, PROJECTS } from "../content/projects";

export default function Projects() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const groups = CATEGORY_ORDER.map((category) => ({
    category,
    projects: PROJECTS.filter((project) => project.category === category),
  })).filter((group) => group.projects.length > 0);

  return (
    <>
      {groups.map(({ category, projects }, index) => (
        <section key={category}>
          {/* Lives inside the first section so Layout's space-y-20 doesn't apply to it. */}
          {index === 0 && <SectionLabel className="hidden md:block">Selected Work</SectionLabel>}
          <CategoryHeading>{category}</CategoryHeading>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onPreviewImage={setPreviewImage} />
          ))}
        </section>
      ))}

      <Lightbox src={previewImage} onClose={() => setPreviewImage(null)} />
    </>
  );
}
