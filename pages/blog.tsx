import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { getAllPosts } from "../lib/api";
import { Container } from "../components/Container";
import { join } from "path";

type Props = {
  allPosts: Post[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <Layout>
      <Container>
        <MoreStories posts={allPosts} />
      </Container>
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
