import React, { useEffect, useState } from "react";

import MoreStories from "../../components/more-stories";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
// import Post from "../../types/post";
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
import { GetStaticPaths, GetStaticProps } from "next";
import { getPostFromSlug, getSlugs, ProjectMeta } from "../../lib/apiProjectsT";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { MDXPost } from "../posts/[slug]";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export interface MDXProject {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
}

const Post = ({ post }: { post: MDXProject }) => {
  const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <>
      <Layout>
        <div className="container mx-auto px-5">
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
                    {post.meta.title} | Next.js Blog Example with {CMS_NAME}
                  </title>
                  {/* <meta property="og:image" content={post.ogImage.url} /> */}
                </Head>
                <ProjectHeader
                  title={post.meta.title}
                  excerpt={post.meta.excerpt}
                  technologies={post.meta.technologies}
                  tags={post.meta.tags}
                />
                <PostBody content={post} />
              </article>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Post;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

// type Params = {
//   params: {
//     slug: string;
//   };
// };

// export const getStaticProps = async ({ params }: Params) => {
//   const post = getProjectBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//     "technologies",
//     "excerpt",
//   ]);

//   return {
//     props: {
//       post: {
//         ...post,

//         // content,
//       },
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const projects = getAllProjects(["slug"]);

//   return {
//     paths: projects.map((project) => {
//       return {
//         params: {
//           slug: project.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// };
