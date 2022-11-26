import Post from "../types/post";
import { ProjectPageHeader } from "../components/ProjectsPageHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllProjects } from "../lib/apiProjects";
import { MainLayout } from "../components/MainLayout";
import { Container } from "../components/Container";

interface IBlog {
  allProjects: Post[];
}

export async function getStaticProps() {
  const allProjects = getAllProjects().map((project) => project.meta);

  return {
    props: {
      allProjects,
    },
  };
}

export default function Blog({ allProjects }: IBlog) {
  return (
    <MainLayout>
      <Container>
        <ProjectPageHeader />
        <FeaturedProjects projects={allProjects} />
      </Container>
    </MainLayout>
  );
}
