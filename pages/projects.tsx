import Post from "../types/post";
import { ProjectPageHeader } from "../components/ProjectsPageHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllProjects } from "../lib/apiProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";

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
      <div className="container mx-auto px-5">
        <ProjectPageHeader />
        <FeaturedProjects
          projects={allProjects}
          className=" lg:grid-cols-2 "
          gap="gap-20"
        />
      </div>
    </MainLayout>
  );
}
