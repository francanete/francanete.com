import React from "react";
import { TArticle } from "@/types/article";
import { ArticlePreview } from "./ArticlePreview";

import styles from "./FeaturedPosts.module.scss";

interface IFeaturedPosts {
  posts: TArticle[];
}

export const FeaturedPosts = ({ posts }: IFeaturedPosts) => {
  return (
    <section>
      <div className={styles["FeaturedPosts"]}>
        {posts.map((post) => (
          <ArticlePreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
            project={post.project}
            isClickableTags={false}
          />
        ))}
      </div>
    </section>
  );
};
