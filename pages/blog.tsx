import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";
import BlogPageHeader from "../components/BlogPageHeader";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <div className="container mx-auto px-5">
        <BlogPageHeader projects={allPosts} />
        <MoreStories posts={allPosts} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "type",
  ]);

  return {
    props: { allPosts },
  };
};
