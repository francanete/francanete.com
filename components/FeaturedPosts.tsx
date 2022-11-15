import Post from "../types/post";
import { ArticlePreview } from "./ArticlePreview";

interface IFeaturedPosts {
  posts: Post[];
}

export const FeaturedPosts = ({ posts }: IFeaturedPosts) => {
  return (
    <section>
      <div className=" flex flex-col lg:mx-40 md:gap-x-16 lg:gap-x-32  mb-32">
        {posts.map((post) => (
          <ArticlePreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            tags={post.tags}
            project={post.project}
            className=" mb-32 "
          />
        ))}
      </div>
    </section>
  );
};
