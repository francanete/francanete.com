import Post from "../types/post";
import MoreStories from "../components/MoreStories";
import { getAllPosts } from "../lib/api";
import BlogPageHeader from "../components/BlogPageHeader";
import { MainLayout } from "../components/MainLayout";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <MainLayout>
      <div className="container mx-auto px-5">
        <BlogPageHeader projects={allPosts} />
        <MoreStories posts={allPosts} />
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { allPosts } };
}
