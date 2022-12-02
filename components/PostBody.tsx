import { MDXRemote } from "next-mdx-remote";
import { MDXPost } from "../pages/posts/[slug]";
import Image from "next/image";

import styles from "./PostBody.module.scss";
import { ProjectHeader } from "./ProjectHeader";

type TArticleBody = {
  content: MDXPost;
};

export const ArticleBody = ({ content }: TArticleBody) => {
  return (
    <div className={styles["PostBody"]}>
      <MDXRemote {...content.source} components={{ Image, ProjectHeader }} />
    </div>
  );
};
