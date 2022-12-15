import Link from "next/link";
import ButtonToContent from "./ButtonToContent";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Tags } from "./Tags";
import { Heading } from "./Heading";
import classNames from "classnames";

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
  const path = "articles";
  return (
    <Link as={`/${path}/${slug}`} href={`/${path}/[slug]`} passHref>
      <div className={classNames([styles["ArticlePreview"], className])}>
        <Heading
          level={3}
          size="medium"
          bold
          className={styles["ArticlePreview__heading"]}
        >
          {title}
        </Heading>
        <Tags tags={tags} />
        <ArticleExcerpt excerpt={excerpt} />
        <ButtonToContent slug={slug} title="Read More" contentPath={project} />
      </div>
    </Link>
  );
};
