import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Heading } from "../Heading";
import { TagsList } from "../TagsList";
import styles from "./ArticlePreview.module.scss";

interface IArticlePreview {
  title: string;
  excerpt: string;
  slug: string;
  className?: string;
  tags: string[];
  project: boolean;
  isClickableTags?: boolean;
}

export const ArticlePreview = ({
  title,
  excerpt,
  slug,
  className,
  tags,
  isClickableTags = true,
}: IArticlePreview) => {
  const path = "blog";
  return (
    <Link as={`/${path}/${slug}`} href={`/${path}/[slug]`} passHref>
      <div className={classNames([styles["ArticlePreview"], className])}>
        <Heading
          level={3}
          size="large"
          bold
          className={styles["ArticlePreview__heading"]}
        >
          {title}
        </Heading>
        <TagsList tags={tags} isClickable={isClickableTags} />
        <ArticleExcerpt excerpt={excerpt} />
      </div>
    </Link>
  );
};
