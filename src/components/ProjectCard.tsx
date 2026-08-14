import type { Project } from "../content/projects";

interface ProjectCardProps {
  project: Project;
  onPreviewImage: (src: string) => void;
}

export default function ProjectCard({ project, onPreviewImage }: ProjectCardProps) {
  const { title, year, blurb, image, imageAlt, link } = project;

  return (
    <article className="flex flex-col md:flex-row gap-7.5 mb-12.5 pb-12.5 border-b border-rule last:border-none last:mb-0 last:pb-0">
      <div className="shrink-0">
        <img
          src={image}
          alt={imageAlt ?? title}
          className="w-full md:w-50 h-auto md:h-31.25 object-cover rounded bg-surface transition-transform duration-300 cursor-pointer"
          onClick={() => onPreviewImage(image)}
        />
      </div>
      <div>
        <h3 className="m-0 mb-2.5 text-title font-medium text-ink">
          {title} ({year})
        </h3>
        <p className="text-muted m-0 mb-3.75 text-body">{blurb}</p>
        {link && (
          <a
            href={link.href}
            className="text-dim underline decoration-rule-subtle hover:text-white hover:decoration-white transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        )}
      </div>
    </article>
  );
}
