import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import styles from "./PostBody.module.scss";
import { ArticleMeta } from "../lib/types";

export interface MDXPost {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
}

type TArticleBody = {
  content: MDXPost;
};

export const ArticleBody = ({ content }: TArticleBody) => {
  return (
    <div className={styles["PostBody"]}>
      <MDXRemote {...content.source} />
    </div>
  );
};
