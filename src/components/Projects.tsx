import { getprojects, projectmetaData } from "@/lib/projects";
import Link from "next/link";

export async function generateStaticParams() {
  const projects = await getprojects();
  const slugs = projects.map((project) => ({ slug: project.slug }));
  return slugs;
}

export default function Projects({
  projects,
}: {
  projects: projectmetaData[];
}) {
  return (
    <ul className="flex flex-col gap-8">
      {projects.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}`}
            className="flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-1"
          >
            <div className="max-w-lg">
              <p className="text-lg font-semibold">{project.title}</p>
              <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                {project.summary}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
