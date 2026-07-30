import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
