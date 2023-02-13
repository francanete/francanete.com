import { FeaturedPosts } from "@/components/FeaturedPosts";
import Head from "next/head";
import { TArticle } from "@/types/article";
import { MainHeader } from "@/components/MainHeader";
import { getAllArticles } from "@/lib/apiArticles";
import FeaturedProjects from "../components/FeaturedProjects";
import { MainLayout } from "@/components/MainLayout";
import { Container } from "@/components/Container";
import { getRepositories, getRepositoryByname } from "@/utils/github";

type Props = {
  allPosts: TArticle[];
  allProjects: TArticle[];
  pinnedItems: [];
};

const Index = ({ allPosts, allProjects, pinnedItems }: Props) => {
  return (
    <MainLayout>
      <Head>
        <title>Fran Canete&apos;s blog</title>
        <meta name="description" content="Software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <MainHeader />
        <FeaturedProjects projects={allProjects} />
        <FeaturedPosts posts={allPosts} />
      </Container>
    </MainLayout>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = getAllArticles("post")
    .slice(0, 9)
    .map((post) => post.meta)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  const allProjects = getAllArticles("project").map((project) => project.meta);

  const pinnedItems = await getRepositories();

  return { props: { allPosts, allProjects, pinnedItems } };
}
