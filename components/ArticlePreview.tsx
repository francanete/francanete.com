import Link from "next/link";
import ButtonToContent from "./ButtonToContent";
import { ProjectExcerpt } from "./ProjectExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";

import styles from "./ArticlePreview.module.scss";

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
    <div className={`${className} dark:text-gray-100`}>
      <Link
        as={`/${path}/${slug}`}
        href={`/${path}/[slug]`}
        passHref
        className="hover:underline"
      >
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
      <ButtonToContent
        marginTop="4"
        slug={slug}
        type="button"
        title="Read More"
        contentPath={project}
      />
    </div>
  );
};
