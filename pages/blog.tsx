import Layout from "../components/Layout";
import Post from "../types/post";
import MoreStories from "../components/MoreStories";
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

export async function getStaticProps() {
  const allPosts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { allPosts } };
}
