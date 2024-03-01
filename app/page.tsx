import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}
