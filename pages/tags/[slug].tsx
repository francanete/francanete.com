import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Articles from "../../components/articles";
import { getAllPosts, PostMeta } from "../../lib/apiT";
import { getAllProjects } from "../../lib/apiProjectsT";
import MoreStories from "../../components/more-stories";
import Post from "../../types/post";
import Layout from "../../components/layout";

export default function TagPage({
  slug,
  posts,
  content,
  tags,
}: {
  slug: string;
  posts: PostMeta[];
  content: Post[];
  tags: Post[];
}) {
  console.log("allTags", tags);
  return (
    <Layout>
      <div className="container mx-auto px-5">
        <Head>
          <title>Tag: {slug}</title>
        </Head>
        <h1>Tag: {slug}</h1>
        <MoreStories posts={content} />
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));
  const projects = getAllProjects().filter((project) =>
    project.meta.tags.includes(slug)
  );
  const allContent = [...posts, ...projects];

  const postTags = getAllPosts();
  const projectsTags = getAllProjects();
  const allTags = [...postTags, ...projectsTags];

  return {
    props: {
      slug,
      content: allContent.map((content) => content.meta),
      tags: allTags.map((tag) => tag.meta.tags),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const projects = getAllProjects();
  const content = [...posts, ...projects];
  const tags = new Set(content.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
