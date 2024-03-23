import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { ArticleBody } from "@/components/ArticleBody";
import { getSlugs } from "@/lib/apiArticles";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MainLayout } from "@/components/MainLayout";
import { Container } from "@/components/Container";
import { ClipLoader } from "react-spinners";
import { getArticles } from "@/utils/getArticles";
import { ArticleMeta } from "@/lib/types";
import { ArticleHeader } from "@/components/ArticleHeader";
import { IRepository } from "@/types/github";
import "highlight.js/styles/atom-one-dark.css";

export interface MDXProject {
  source: MDXRemoteSerializeResult;
  meta: ArticleMeta;
  repository: IRepository;
}

const Articles = ({
  post,
  repository,
}: {
  post: MDXProject;
  repository: IRepository;
}) => {
  const router = useRouter();

  return (
    <MainLayout>
      <Container>
        {router.isFallback ? (
          <ClipLoader />
        ) : (
          <article>
            <Head>
              <title>{post.meta.title}</title>
            </Head>
            <ArticleHeader articleMeta={post.meta} repository={repository} />
            <ArticleBody content={post} />
          </article>
        )}
      </Container>
    </MainLayout>
  );
};

export default Articles;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { meta, mdxSource } = await getArticles(params!);

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs("articles").map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
