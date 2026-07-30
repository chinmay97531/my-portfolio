import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
