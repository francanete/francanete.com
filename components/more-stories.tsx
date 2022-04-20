import PostPreview from "./post-preview";
import Post from "../types/post";
import ProjectPreview from "./ProjectPreview";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {/* <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"> */}
      <div className=" flex flex-col lg:mx-40 md:gap-x-16 lg:gap-x-32  mb-32">
        {posts.map((post) => (
          // <PostPreview
          //   key={post.slug}
          //   title={post.title}
          //   coverImage={post.coverImage}
          //   date={post.date}
          //   author={post.author}
          //   slug={post.slug}
          //   excerpt={post.excerpt}
          // />
          <ProjectPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            technologies={post.technologies}
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
