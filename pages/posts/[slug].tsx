import type { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Head from "next/head";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/apiT";
import Layout from "../../components/layout";
import router from "next/router";
import { PostTitle } from "../../components/PostTitle";
import { PostHeader } from "../../components/PostHeader";
import PostBody from "../../components/post-body";

export interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <>
      <Layout>
        <div className="container mx-auto px-5">
          {/* <Header /> */}
          {router.isFallback ? (
            <PostTitle level="span" size="4xl">
              Loading…
            </PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>{post.meta.title}</title>

                  {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <PostHeader
                  title={post.meta.title}
                  // coverImage={post.coverImage}
                  // date={post.meta.date}
                  // author={post.author}
                />

                <PostBody content={post} />
              </article>
            </>
          )}
        </div>
      </Layout>
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
