import React from "react";
import { FeaturedPosts } from "../components/FeaturedPosts";
import Head from "next/head";
import Post from "../types/post";
import { MainHeader } from "../components/MainHeader";
import { getAllArticles } from "../lib/apiProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import { MainLayout } from "../components/MainLayout";
import { Container } from "../components/Container";
import { getRepositories } from "../utils/getRepositories";

type Props = {
  allPosts: Post[];
  allProjects: Post[];
  pinnedItems: [];
};

const Index = ({ allPosts, allProjects, pinnedItems }: Props) => {
  return (
    <MainLayout>
      <Head>
        <title>Fran Canete's blog</title>
      </Head>
      <Container>
        <MainHeader />
        <FeaturedProjects projects={allProjects} titleEllipsis />
        <FeaturedPosts posts={allPosts} />
      </Container>
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = getAllArticles("post")
    .slice(0, 9)
    .map((post) => post.meta);

  const allProjects = getAllArticles("project").map((project) => project.meta);

  // const pinnedItems = await getRepositories();

  return { props: { allPosts, allProjects } };
}
