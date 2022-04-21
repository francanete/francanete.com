import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "../../lib/api";
import { getAllProjects } from "../../lib/apiProjects";
import MoreStories from "../../components/MoreStories";
import Post from "../../types/post";
import Layout from "../../components/Layout";

export default function TagPage({
  slug,
  content,
  tags,
}: {
  slug: string;
  content: Post[];
  tags: Post[];
}) {
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
