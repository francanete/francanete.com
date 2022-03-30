import Layout from "../components/layout";
import Post from "../types/post";
import MoreStories from "../components/more-stories";
import { Container } from "../components/Container";
import { getAllProjects } from "../lib/apiProjects";
import ProjectPreview from "../components/ProjectPreview";

type Props = {
  allProjects: Post[];
};

export default function Blog({ allProjects }: Props) {
  return (
    <Layout>
      <Container>
        {/* <MoreStories posts={allProjects} /> */}
        <section>
          <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 mx-40 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
            {allProjects.map(
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
                  />
                )
            )}
          </div>
        </section>
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
    "featured",
    "technologies",
  ]);

  return {
    props: { allProjects },
  };
};
