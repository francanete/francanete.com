import { MDXRemote } from "next-mdx-remote";
import { MDXPost } from "../pages/posts/[slug]";

type Props = {
  content: MDXPost;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className=" post-body prose-slate lg:prose-xl dark:prose-invert max-w-2xl mx-auto ">
      <MDXRemote {...content.source} />
    </div>
  );
};

export default PostBody;
