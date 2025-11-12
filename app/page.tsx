import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ExperienceList />
      <ProjectList />
      <Footer />
    </main>
  );
}
