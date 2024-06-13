import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { ArticleExcerpt } from "./ArticleExcerpt";
import { Heading } from "../Heading";
import { TagsList } from "../Tag/TagsList";
import styles from "./ArticlePreview.module.scss";
import ButtonToContent from "../Button/ButtonToContent";
import { ButtonLink } from "../Button/ButtonLink";

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
    <div className={classNames([styles["ArticlePreview"], className])}>
      <Link as={`/${BLOG_PATH}/${slug}`} href={`/${BLOG_PATH}/[slug]`} passHref>
        <Heading
          level={3}
          size="medium"
          bold
          className={styles["ArticlePreview__heading"]}
        >
          {title}
        </Heading>
      </Link>
      <TagsList
        category={category}
        isClickable={isClickableTags}
        titleDisabled
      />
      <ArticleExcerpt excerpt={excerpt} weight="thin" />
      <ButtonToContent title="Read More" slug={slug} contentPath={false} />
    </div>
  );
};
