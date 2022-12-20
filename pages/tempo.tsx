import { FeaturedPosts } from "../components/FeaturedPosts";
import Head from "next/head";
import { TArticle } from "../types/article";
import { MainHeader } from "../components/MainHeader";
import { getAllArticles } from "../lib/apiArticles";
import FeaturedProjects from "../components/FeaturedProjects";
import { MainLayout } from "../components/MainLayout";
import { Container } from "../components/Container";
import { getRepositories, getRepositoryByname } from "../utils/github";

type Props = {
  allPosts: TArticle[];
  allProjects: TArticle[];
  pinnedItems: [];
  repositoryByName: [];
};

const Index = ({
  allPosts,
  allProjects,
  pinnedItems,
  repositoryByName,
}: Props) => {
  console.log(repositoryByName);

  return (
    <MainLayout>
      <Head>
        <title>Fran Canete&apos;s blog</title>
      </Head>
      <Container>
        <MainHeader />
        <FeaturedProjects projects={allProjects} titleEllipsis />
        <FeaturedPosts posts={allPosts} />
      </Container>
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = getAllArticles("post")
    .slice(0, 9)
    .map((post) => post.meta);

  const allProjects = getAllArticles("project").map((project) => project.meta);

  const pinnedItems = await getRepositories();

  const repositoryByName = await getRepositoryByname("francanete.com");

  return { props: { allPosts, allProjects, pinnedItems, repositoryByName } };
}
