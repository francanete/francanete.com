import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Heading } from "../Heading";
import { TagsList } from "../TagsList";
import styles from "./ArticlePreview.module.scss";
import ButtonToContent from "../ButtonToContent";

interface IArticlePreview {
  title: string;
  excerpt: string;
  slug: string;
  className?: string;
  category: string[];
  project: boolean;
  isClickableTags?: boolean;
}

const BLOG_PATH = "blog";

export const ArticlePreview = ({
  title,
  excerpt,
  slug,
  className,
  category,
  isClickableTags = true,
}: IArticlePreview) => {
  return (
    <Link as={`/${BLOG_PATH}/${slug}`} href={`/${BLOG_PATH}/[slug]`} passHref>
      <div className={classNames([styles["ArticlePreview"], className])}>
        <Heading
          level={3}
          size="medium"
          bold
          className={styles["ArticlePreview__heading"]}
        >
          {title}
        </Heading>
        <TagsList category={category} isClickable={isClickableTags} />
        <ArticleExcerpt excerpt={excerpt} />
        <ButtonToContent title="Read More" slug={slug} contentPath={false} />
      </div>
    </Link>
  );
};
