import Link from "next/link";
import React from "react";
import Project from "../types/post";
import { useRouter } from "next/router";
import { TailwindGap } from "../types/TailwindTypes";
import { Tags } from "./Tags";

type Props = {
  projects: Project[];
  columns?: string;
  titleEllipsis?: boolean;
  gap?: TailwindGap;
  className?: string;
};

export default function FeaturedProjects({
  projects,
  titleEllipsis,
  gap = "gap-8",
  className,
}: Props) {
  const route = useRouter();
  let takeProjects;

  const featuredProjects = projects.filter(
    (project) => project.featured === true
  );

  if (route.route === "/tempo") {
    takeProjects = featuredProjects;
  } else if (route.route === "/projects") {
    takeProjects = projects;
  }

  return (
    <div className={`grid grid-cols-1  ${className} ${gap}  gap-y-20  mb-32`}>
      {takeProjects?.map((project) => (
        <div key={project.title}>
          <Link
            as={`/projects/${project.slug}`}
            href="/projects/[slug]"
            passHref
          >
            <a className="bg-slate-100 hover:ring-gray-300 dark:hover:ring-gray-500 hover:ring-4 block p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800">
              <div className="flex flex-col h-50">
                <h5
                  className={` ${
                    titleEllipsis ? "line-clamp-2" : ""
                  }  mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
                >
                  {project.title}
                </h5>
                <div className="h-10 mt-5 truncate">
                  <Tags titleDisabled tags={project.tags} />
                </div>
                <p className="h-48 line-clamp-6 font-normal text-gray-700 dark:text-gray-400">
                  {project.excerpt}
                </p>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
