import { ArticleExcerpt } from "./ArticleExcerpt";
import { TagsList } from "./TagsList";
import { Heading } from "./Heading";
import { ArticleMeta } from "@/lib/types";

import styles from "./PostHeader.module.scss";

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
      <ArticleExcerpt excerpt={postMeta.excerpt} />
    </div>
  );
};
