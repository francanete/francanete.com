import Post from "../types/post";
import { getAllPosts } from "../lib/api";
import BlogPageHeader from "../components/BlogPageHeader";
import { MainLayout } from "../components/MainLayout";
import { FeaturedPosts } from "../components/FeaturedPosts";

interface IBlog {
  allPosts: Post[];
}

export default function Blog({ allPosts }: IBlog) {
  return (
    <MainLayout>
      <div className="container mx-auto px-5">
        <BlogPageHeader projects={allPosts} />
        <FeaturedPosts posts={allPosts} />
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
