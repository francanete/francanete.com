// import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "../components/articles";
import { getAllPosts, PostMeta } from "../lib/apiT";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      <h1>Articles</h1>
      <Articles posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
