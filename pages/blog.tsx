import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/apiT";
import BlogPageHeader from "../components/BlogPageHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostFromSlug, getSlugs } from "../lib/apiT";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
// import { getAllProjects } from "../lib/apiProjects";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <div className="container mx-auto px-5">
        <BlogPageHeader projects={allPosts} />
        <MoreStories posts={allPosts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  // const allProjects = getAllProjects().map((project) => project.meta);

  return { props: { allPosts } };
}

// export const getStaticProps = async () => {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//     "type",
//   ]);

//   return {
//     props: { allPosts },
//   };
// };
