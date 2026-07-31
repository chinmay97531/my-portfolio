import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
