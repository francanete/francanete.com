import React, { useEffect, useState } from "react";

import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Post from "../../types/post";
import Header from "../../components/header";
import useDarkMode from "../../hooks/useDarkMode";
import Bio from "../../components/Bio";
import PostType from "../../types/post";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { PostHeader } from "../../components/PostHeader";
import PostBody from "../../components/post-body";
import { PostTitle } from "../../components/PostTitle";
import { getAllProjects, getProjectBySlug } from "../../lib/apiProjects";
import { ProjectHeader } from "../../components/ProjectHeader";
import { Loading } from "../../components/Loading";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Layout preview={preview}>
        <Container>
          {/* <Header /> */}
          {router.isFallback ? (
            <PostTitle level="span">
              <Loading title="Loading ..." />
            </PostTitle>
          ) : (
            <>
              <article className="mb-32">
                <Head>
                  <title>
                    {post.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  <meta property="og:image" content={post.ogImage.url} />
                </Head>
                <ProjectHeader
                  title={post.title}
                  excerpt={post.excerpt}
                  technologies={post.technologies}
                />
                <PostBody content={post.content} />
              </article>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getProjectBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "technologies",
    "excerpt",
  ]);

  // const content = await markdownToHtml(post.content || "");
  // const content = post.content || "";

  return {
    props: {
      post: {
        ...post,

        // content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const projects = getAllProjects(["slug"]);

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
};
