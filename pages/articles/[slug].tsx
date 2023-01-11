import Head from "next/head";
import { useRouter } from "next/router";
import { ArticleBody } from "../../components/ArticleBody";
import { ProjectHeader } from "../../components/ProjectHeader";
import { GetStaticPaths, GetStaticProps } from "next";
import { getSlugs } from "../../lib/apiArticles";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MainLayout } from "../../components/MainLayout";
import { Container } from "../../components/Container";
import { ClipLoader } from "react-spinners";
import { getArticles } from "../../utils/getArticles";
import { ArticleMeta } from "../../lib/types";

import "highlight.js/styles/atom-one-dark.css";
import { getRepositoryByname } from "@/utils/github";
import { ArticleHeader } from "@/components/ArticleHeader";
import { IRepository } from "@/types/github";

import styles from "./Articles.module.scss";

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
          <article className={styles.Articles}>
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
  let repository = null;

  if (meta.type === "project" && meta.repositoryName) {
    repository = await getRepositoryByname(meta.repositoryName);
  }

  return { props: { post: { source: mdxSource, meta }, repository } };
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
