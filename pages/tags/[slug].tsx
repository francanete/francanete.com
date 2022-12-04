import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllArticles } from "../../lib/apiProjects";
import { FeaturedPosts } from "../../components/FeaturedPosts";
import Post from "../../types/post";
import { MainLayout } from "../../components/MainLayout";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export default function TagPage({
  slug,
  content,
}: {
  slug: string;
  content: Post[];
  tags: Post[];
}) {
  return (
    <MainLayout>
      <Container>
        <Head>
          <title>Tag: {slug}</title>
        </Head>
        <Heading level={1}>Tag: {slug}</Heading>
        <FeaturedPosts posts={content} />
      </Container>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllArticles("post").filter((post) =>
    post.meta.tags.includes(slug)
  );
  const projects = getAllArticles("project").filter((project) =>
    project.meta.tags.includes(slug)
  );
  const allContent = [...posts, ...projects];

  const postTags = getAllArticles("post");
  const projectsTags = getAllArticles("project");
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
  const posts = getAllArticles("post");
  const projects = getAllArticles("project");
  const content = [...posts, ...projects];
  const tags = new Set(content.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
