import Link from "next/link";
import React from "react";
import Project from "../types/post";
import { useRouter } from "next/router";
import { TailwindGap } from "../types/TailwindTypes";
import { Tags } from "./Tags";
import { ArticlePreview } from "./ArticlePreview";

interface IFeaturedProjects {
  projects: Project[];
  columns?: string;
  titleEllipsis?: boolean;
  gap?: TailwindGap;
  className?: string;
}

export default function FeaturedProjects({
  projects,
  gap = "gap-8",
  className,
}: IFeaturedProjects) {
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
        <ArticlePreview
          key={project.slug}
          title={project.title}
          slug={project.slug}
          excerpt={project.excerpt}
          tags={project.tags}
          project={project.project}
          className="bg-slate-100 hover:ring-gray-300 dark:hover:ring-gray-500 hover:ring-4 block p-6 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800"
        />
      ))}
    </div>
  );
}
