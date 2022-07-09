import React, { useEffect } from "react";

import MoreStories from "../components/MoreStories";
import Head from "next/head";
import Post from "../types/post";
import { MainHeader } from "../components/MainHeader";
import { getAllProjects } from "../lib/apiProjects";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";
import { AudioPlayer } from "../components/AudioPlayer";
import Script from "next/script";
import { BuzzproutPlayer } from "../components/BuzzproutPlayer";
import axios from "axios";
import _ from "lodash";

type Props = {
  allPosts: Post[];
  allProjects: Post[];
};

const Index = ({ allPosts, allProjects }: Props) => {
  const [podcasts, setPodcasts] = React.useState([]);
  const duration: number[] = [];

  useEffect(() => {
    axios
      .get("https://www.buzzsprout.com/api/240413/episodes.json", {
        headers: {
          Authorization: "Token token=569b13a9bdf07b31762220279d5926c6",
        },
      })
      .then((response) => {
        setPodcasts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log("podcasts", podcasts);

  return (
    <>
      <MainLayout>
        <Head>
          <title>Fran Canete's blog</title>
        </Head>
        <div className="container mx-auto px-5">
          <MainHeader />
          <AudioPlayer guest="Bill Gates" />
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
