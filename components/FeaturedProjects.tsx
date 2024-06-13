import React from "react";
import { TArticle } from "@/types/article";
import { useRouter } from "next/router";
import { TailwindGap } from "@/types/TailwindTypes";
import classNames from "classnames";
import { ArticlePreview } from "./Article/ArticlePreview";
import styles from "./FeaturedProjects.module.scss";

interface IFeaturedProjects {
  projects: TArticle[];
  columns?: string;
  gap?: TailwindGap;
  className?: string;
}

export default function FeaturedProjects({
  projects,
  className,
}: IFeaturedProjects) {
  const route = useRouter();
  let takeProjects;

  const featuredProjects = projects.filter(
    (project) => project.featured === true
  );

  if (route.route === "/") {
    takeProjects = featuredProjects;
  } else if (route.route === "/projects") {
    takeProjects = projects;
  }

  return (
    <div className={classNames(styles["FeaturedProjects"], className)}>
      {takeProjects?.map((project) => (
        <ArticlePreview
          key={project.slug}
          title={project.title}
          slug={project.slug}
          excerpt={project.excerpt}
          category={project.category}
          project={project.project}
          className={styles["FeaturedProjects__preview"]}
          isClickableTags={true}
        />
      ))}
    </div>
  );
}
