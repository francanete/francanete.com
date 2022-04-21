import Post from "../types/post";
import ProjectPreview from "./ProjectPreview";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className=" flex flex-col lg:mx-40 md:gap-x-16 lg:gap-x-32  mb-32">
        {posts.map((post) => (
          <ProjectPreview
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

export default MoreStories;
