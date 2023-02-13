import { TArticle } from "@/types/article";
import { BlogPageHeader } from "@/components/BlogPageHeader";
import { MainLayout } from "@/components/MainLayout";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { Container } from "@/components/Container";
import { getAllArticles } from "@/lib/apiArticles";

interface IBlog {
  allPosts: TArticle[];
}

export default function Blog({ allPosts }: IBlog) {
  return (
    <MainLayout>
      <Container>
        <BlogPageHeader />
        <FeaturedPosts posts={allPosts} />
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllArticles("post")
    .slice(0, 9)
    .map((post) => post.meta)
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return { props: { allPosts } };
}
