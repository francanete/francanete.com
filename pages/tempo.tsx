import React from "react";

import MoreStories from "../components/MoreStories";
import Head from "next/head";
import Post from "../types/post";
import { MainHeader } from "../components/MainHeader";
import { getAllProjects } from "../lib/apiProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";
import { AudioPlayer } from "../components/AudioPlayer";

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
        <div className="container mx-auto px-5">
          <MainHeader />
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
