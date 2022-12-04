import Post from "../types/post";
import { ProjectPageHeader } from "../components/ProjectsPageHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import { EArticleType, getAllArticles } from "../lib/apiProjects";
import { MainLayout } from "../components/MainLayout";
import { Container } from "../components/Container";

interface IBlog {
  allProjects: Post[];
}

export async function getStaticProps() {
  const allProjects = getAllArticles("project").map((project) => project.meta);

  return {
    props: {
      allProjects,
    },
  };
}

export default function Blog({ allProjects }: IBlog) {
  console.log({ allProjects });
  return (
    <MainLayout>
      <Container>
        <ProjectPageHeader />
        <FeaturedProjects projects={allProjects} />
      </Container>
    </MainLayout>
  );
}
