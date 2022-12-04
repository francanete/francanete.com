import type { GetStaticProps, GetStaticPaths } from "next";
import { getPostFromSlug, getSlugs, PostMeta } from "../../lib/api";
import Head from "next/head";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import router from "next/router";
import { MainLayout } from "../../components/MainLayout";
import { PostHeader } from "../../components/PostHeader";
import { Container } from "../../components/Container";
import { ClipLoader } from "react-spinners";
import { ArticleBody } from "../../components/PostBody";
import { getArticles } from "../../utils/getArticles";

import "highlight.js/styles/atom-one-dark.css";

export interface MDXPost {
  source: MDXRemoteSerializeResult;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
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
                <PostHeader
                  title={post.meta.title}
                  tags={post.meta.tags}
                  excerpt={post.meta.excerpt}
                />
                <ArticleBody content={post} />
              </article>
            </>
          )}
        </Container>
      </MainLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, mdxSource } = await getArticles(params!);
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
