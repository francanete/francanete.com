import React from "react";
import { TagsList } from "./TagsList";
import { Heading } from "./Heading";
import { ArticleMeta } from "@/lib/types";

import styles from "./PostHeader.module.scss";
import { BsGithub } from "react-icons/bs";
import { LinkButton } from "./Button/LinkButton";
import { ArticleExcerpt } from "./Article/ArticleExcerpt";

interface IPostHeader {
  postMeta: ArticleMeta;
}

export const PostHeader = ({ postMeta }: IPostHeader) => {
  return (
    <div className={styles["PostHeader"]}>
      <Heading level={1} bold size="large">
        {postMeta.title}
      </Heading>
      <TagsList tags={postMeta.tags} />
      <ArticleExcerpt excerpt={postMeta.excerpt} weight="thin" />
      {postMeta.url && (
        <div className={styles["PostHeader__body"]}>
          <LinkButton
            href={postMeta.url}
            title="Source Code"
            iconComponent={<BsGithub size={15} />}
          />
        </div>
      )}
    </div>
  );
};
