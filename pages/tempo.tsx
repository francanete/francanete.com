import React from "react";

import MoreStories from "../components/MoreStories";
import Head from "next/head";
import Post from "../types/post";
import Header from "../components/Header";
import { getAllProjects } from "../lib/apiProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";

type Props = {
  allPosts: Post[];
  allProjects: Post[];
};

const Index = ({ allPosts, allProjects }: Props) => {
  const bioText = (
    <>
      <p className="text-lg md:text-2xl ">
        <strong>Frontend Software Engineer</strong> based in Manchester, UK.
      </p>
      <p className="text-lg md:text-2xl">
        I'm passionate about delivering best-in-class client-centric web
        applications that truly solve user problems.
      </p>
      <p className="text-lg md:text-2xl">
        Currently working with React, Gatsby, Next.js, Typescript.
      </p>
    </>
  );

  return (
    <>
      <MainLayout>
        <Head>
          <title>Fran Canete's blog</title>
        </Head>
        <div className="container mx-auto px-5">
          <Header />
          <FeaturedProjects
            projects={allProjects}
            titleEllipsis
            className="lg:grid-cols-3 "
          />
          <MoreStories posts={allPosts} />
        </div>
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
