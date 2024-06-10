import React from "react";
import { TArticle } from "@/types/article";

import styles from "./FeaturedPosts.module.scss";
import { ArticlePreview } from "./Article/ArticlePreview";

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
            category={post.category}
            project={post.project}
            isClickableTags={true}
          />
        ))}
      </div>
    </section>
  );
};
