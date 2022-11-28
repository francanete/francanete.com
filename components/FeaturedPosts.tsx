import Post from "../types/post";
import { ArticlePreview } from "./ArticlePreview";

import styles from "./FeaturedPosts.module.scss";

interface IFeaturedPosts {
  posts: Post[];
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
            // className=" mb-32 "
          />
        ))}
      </div>
    </section>
  );
};
