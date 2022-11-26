import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArticleBody } from "../../components/PostBody";
import { ProjectHeader } from "../../components/ProjectHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostFromSlug, getSlugs, ProjectMeta } from "../../lib/apiProjects";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MainLayout } from "../../components/MainLayout";
import "highlight.js/styles/atom-one-dark.css";
import { Container } from "../../components/Container";
import { ClipLoader } from "react-spinners";

export interface MDXProject {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
}

const Post = ({ post }: { post: MDXProject }) => {
  const router = useRouter();

  return (
    <>
      <MainLayout>
        <Container>
          {router.isFallback ? (
            <ClipLoader />
          ) : (
            <>
              <article>
                <Head>
                  <title>{post.meta.title}</title>
                </Head>
                <ProjectHeader
                  title={post.meta.title}
                  excerpt={post.meta.excerpt}
                  tags={post.meta.tags}
                />
                <ArticleBody content={post} />
              </article>
            </>
          )}
        </Container>
      </MainLayout>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
