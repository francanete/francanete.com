import CurrentRole from "@/components/CurrentRole";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CurrentRole />
    </main>
  );
}
