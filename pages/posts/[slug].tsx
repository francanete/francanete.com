import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/api";
import Head from "next/head";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { PostHeader } from "../../components/PostHeader";
import { Container } from "../../components/Container";
import { ClipLoader } from "react-spinners";
import { ArticleBody } from "../../components/PostBody";

import "highlight.js/styles/atom-one-dark.css";

export interface MDXPost {
  source: MDXRemoteSerializeResult;
  meta: PostMeta;
}

export default ({post}: { post: MDXPost }) => (
    <>
      <MainLayout>
        <Container>
          {router.isFallback ? (
              <ClipLoader/>
          ) : (
              <>
                <article>
                  <Head>
                    <title>{post.meta.title}</title>
                  </Head>
                  <PostHeader
                      title={post.meta.title}
                      tags={post.meta.tags}
                      excerpt={post.meta.excerpt}
                  />
                  <ArticleBody content={post}/>
                </article>
              </>
          )}
        </Container>
      </MainLayout>
    </>
)

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {slug} = params as { slug: string };
  const {content, meta} = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {behavior: "wrap"}],
        rehypeHighlight,
      ],
    },
  });

  return {props: {post: {source: mdxSource, meta}}};
}, getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({params: {slug}}));

  return {
    paths,
    fallback: false,
  };
};
