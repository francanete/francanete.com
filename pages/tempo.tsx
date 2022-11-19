import React from "react";
import { FeaturedPosts } from "../components/FeaturedPosts";
import Head from "next/head";
import Post from "../types/post";
import { MainHeader } from "../components/MainHeader";
import { getAllProjects } from "../lib/apiProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";
import { Container } from "../components/Container";

type Props = {
  allPosts: Post[];
  allProjects: Post[];
};

const Index = ({ allPosts, allProjects }: Props) => {
  return (
    <>
      <MainLayout>
        <Head>
          <title>Fran Canete's blog</title>
        </Head>
        <Container>
          <MainHeader />
          <FeaturedProjects
            projects={allProjects}
            titleEllipsis
            className="lg:grid-cols-3 "
          />
          <FeaturedPosts posts={allPosts} />
        </Container>
      </MainLayout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  const allProjects = getAllProjects().map((project) => project.meta);

  return { props: { allPosts, allProjects } };
}
