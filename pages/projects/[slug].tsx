import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import PostBody from "../../components/PostBody";
import { PostTitle } from "../../components/PostTitle";
import { ProjectHeader } from "../../components/ProjectHeader";
import { Loading } from "../../components/Loading";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostFromSlug, getSlugs, ProjectMeta } from "../../lib/apiProjects";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";
import { MainLayout } from "../../components/MainLayout";

export interface MDXProject {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
}

const Post = ({ post }: { post: MDXProject }) => {
  const router = useRouter();

  return (
    <>
      <MainLayout>
        <div className="container mx-auto px-5">
          {router.isFallback ? (
            <PostTitle level="span">
              <Loading title="Loading ..." />
            </PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{post.meta.title}</title>
                </Head>
                <ProjectHeader
                  title={post.meta.title}
                  excerpt={post.meta.excerpt}
                  tags={post.meta.tags}
                />
                <PostBody content={post} />
              </article>
            </>
          )}
        </div>
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
