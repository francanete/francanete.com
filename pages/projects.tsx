import Post from "../types/post";
import { ProjectPageHeader } from "../components/ProjectsPageHeader";
import FeaturedProjects from "../components/FeaturedProjects";
import { getAllProjects } from "../lib/apiProjects";
import { getAllPosts } from "../lib/api";
import { MainLayout } from "../components/MainLayout";

type Props = {
  allProjects: Post[];
};

export default function Blog({ allProjects }: Props) {
  return (
    <MainLayout>
      <div className="container mx-auto px-5">
        <ProjectPageHeader />
        <section>
          <FeaturedProjects
            projects={allProjects}
            className=" lg:grid-cols-2 "
            gap="gap-20"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-40 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"></div>
        </section>
      </div>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  const allProjects = getAllProjects().map((project) => project.meta);

  return {
    props: {
      allProjects,
    },
  };
}
