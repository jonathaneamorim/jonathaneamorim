import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
