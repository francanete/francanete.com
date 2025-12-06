import ExperienceList from "@/components/ExperienceList";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import { experiences } from "@/appConfig";

export default function Home() {
  // Group experiences by title
  const groupedExperiences = experiences.reduce((acc, experience) => {
    const title = experience.title;
    if (!acc[title]) {
      acc[title] = [];
    }
    acc[title].push(experience);
    return acc;
  }, {} as Record<string, typeof experiences>);

  // Convert to array and sort by most recent start date
  const experienceGroups = Object.entries(groupedExperiences)
    .map(([title, exps]) => ({
      title,
      experiences: exps.sort(
        (a, b) => b.startDate.getTime() - a.startDate.getTime()
      ),
    }))
    .sort(
      (a, b) =>
        b.experiences[0].startDate.getTime() -
        a.experiences[0].startDate.getTime()
    );

  return (
    <main className="min-h-screen">
      <Hero />
      <ExperienceList experienceGroups={experienceGroups} />
      <ProjectList />
      <Footer />
    </main>
  );
}
