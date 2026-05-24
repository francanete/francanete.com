import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import { experiences } from "@/appConfig";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Hero />
      <ExperienceList experiences={experiences} />
      <ProjectList />
      <Footer />
    </main>
  );
}
