import { TArticle } from "@/types/article";
import { ProjectPageHeader } from "@/components/ProjectsPageHeader";
import FeaturedProjects from "@/components/FeaturedProjects";
import { getAllArticles } from "@/lib/apiArticles";
import { MainLayout } from "@/components/MainLayout";
import { Container } from "@/components/Container";

interface IBlog {
  allProjects: TArticle[];
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

export async function getStaticProps() {
  const allProjects = getAllArticles("project").map((project) => project.meta);

  return {
    props: {
      allProjects,
    },
  };
}
