import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { getAllProjects } from "../lib/apiProjects";
import ProjectPreview from "../components/ProjectPreview";
import ProjectPageHeader from "../components/ProjectsPageHeader";
import FeaturedProjects from "../components/FeaturedProjects";

type Props = {
  allProjects: Post[];
};

export default function Blog({ allProjects }: Props) {
  return (
    <Layout>
      <div className="container mx-auto px-5">
        {/* <MoreStories posts={allProjects} /> */}
        <ProjectPageHeader projects={allProjects} />
        <section>
          <FeaturedProjects projects={allProjects} columns="2" gap="gap-20" />
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-40 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {/* <div className=" flex flex-col lg:mx-40 md:gap-x-16 lg:gap-x-32  mb-32"> */}
            {/* <h2 className=" text-3xl mb-12 md:text-3xl font-bold tracking-tighter leading-tight">
              Projects
            </h2> */}
            {/* {allProjects.map(
              (project) =>
                project.featured && (
                  <ProjectPreview
                    key={project.slug}
                    title={project.title}
                    coverImage={project.coverImage}
                    date={project.date}
                    author={project.author}
                    slug={project.slug}
                    excerpt={project.excerpt}
                    technologies={project.technologies}
                    className=" mb-32 "
                  />
                )
            )} */}
          </div>
        </section>
      </div>
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
    "featured",
    "technologies",
  ]);

  return {
    props: { allProjects },
  };
};
