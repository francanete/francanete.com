import Link from "next/link";
import ButtonToContent from "./ButtonToContent";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";

import styles from "./ArticlePreview.module.scss";
import classNames from "classnames";

interface IArticlePreview {
  title: string;
  excerpt: string;
  slug: string;
  className?: string;
  tags: string[];
  project: boolean;
}

export const ArticlePreview = ({
  title,
  excerpt,
  slug,
  className,
  tags,
  project,
}: IArticlePreview) => {
  const path = project ? "projects" : "posts";
  return (
    <div className={classNames([styles["ArticlePreview"], className])}>
      <Link as={`/${path}/${slug}`} href={`/${path}/[slug]`} passHref>
        <Heading
          level={3}
          size="medium"
          bold
          className={styles["ArticlePreview__heading"]}
        >
          {title}
        </Heading>
      </Link>
      <Tags tags={tags} />
      <ProjectExcerpt excerpt={excerpt} weight="light" />
      <ButtonToContent slug={slug} title="Read More" contentPath={project} />
    </div>
  );
};
