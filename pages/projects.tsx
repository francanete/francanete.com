import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import Container from "../components/container";
import { getAllProjects } from "../lib/apiProjects";

type Props = {
  allProjects: Post[];
};

export default function Blog({ allProjects }: Props) {
  return (
    <Layout>
      <Container>
        <MoreStories posts={allProjects} />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "type",
  ]);

  return {
    props: { allProjects },
  };
};
