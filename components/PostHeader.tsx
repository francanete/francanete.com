import { ArticleExcerpt } from "./ArticleExcerpt";
import { Tags } from "./Tags";
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
      <Tags tags={postMeta.tags} />
      <ArticleExcerpt excerpt={postMeta.excerpt} />
    </div>
  );
};
