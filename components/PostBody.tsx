import { MDXRemote } from "next-mdx-remote";
import { MDXPost } from "../pages/posts/[slug]";

import styles from "./PostBody.module.scss";

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
