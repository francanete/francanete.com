import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ArticleBody } from "../../components/PostBody";
import { ProjectHeader } from "../../components/ProjectHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { EArticleType, getSlugs } from "../../lib/apiProjects";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MainLayout } from "../../components/MainLayout";
import { Container } from "../../components/Container";
import { ClipLoader } from "react-spinners";
import { getArticles } from "../../utils/getArticles";
import { ProjectMeta } from "../../lib/types";

import "highlight.js/styles/atom-one-dark.css";

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
  const { meta, mdxSource } = await getArticles(params!);
  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs(EArticleType.PROJECTS).map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
