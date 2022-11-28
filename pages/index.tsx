import Head from "next/head";
import { Container } from "../components/Container";
import { MainHeader } from "../components/MainHeader";

const Index = () => {
  return (
    <>
      <Head>
        <title>Fran Canete's blog</title>
      </Head>
      <Container>
        <MainHeader />
      </Container>
    </>
  );
};

export default Index;
