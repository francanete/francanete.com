import React from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllArticles } from '@/lib/apiArticles';
import { FeaturedPosts } from '@/components/FeaturedPosts';
import { TArticle } from '@/types/article';
import { MainLayout } from '@/components/MainLayout';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';

export default function TagPage({
  slug,
  content,
}: {
  slug: string;
  content: TArticle[];
  category: TArticle[];
}) {
  return (
    <MainLayout>
      <Container>
        <Head>
          <title>Tag: {slug}</title>
        </Head>
        <PageHeader
          title={`My articles about ${slug}`}
          description="These are my articles about this topic."
        />
        <FeaturedPosts posts={content} />
      </Container>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllArticles('post').filter((post) =>
    post.meta.category.includes(slug)
  );
  const projects = getAllArticles('project').filter((project) =>
    project.meta.category.includes(slug)
  );
  const allContent = [...posts, ...projects];

  const postTags = getAllArticles('post');
  const projectsTags = getAllArticles('project');
  const allTags = [...postTags, ...projectsTags];

  return {
    props: {
      slug,
      content: allContent.map((content) => content.meta),
      category: allTags.map((tag) => tag.meta.category),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllArticles('post');
  const projects = getAllArticles('project');
  const content = [...posts, ...projects];
  const category = new Set(content.map((post) => post.meta.category).flat());
  const paths = Array.from(category).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
