import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/api";
import Head from "next/head";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import router from "next/router";
import PostBody from "../../components/PostBody";
import { MainLayout } from "../../components/MainLayout";
import { PostHeader } from "../../components/PostHeader";
import { Loading } from "../../components/Loading";
import "highlight.js/styles/atom-one-dark.css";

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <MainLayout>
        <div className="container mx-auto px-5">
          {router.isFallback ? (
            <Loading title="Loading ..." />
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{post.meta.title}</title>
                </Head>
                <PostHeader
                  title={post.meta.title}
                  tags={post.meta.tags}
                  excerpt={post.meta.excerpt}
                />
                <PostBody content={post} />
              </article>
            </>
          )}
        </div>
      </MainLayout>
    </>
  );
}

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
