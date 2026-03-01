import "./styles/global.css";
import { LanguageProvider } from "./hooks/useLanguage.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Talks from "./sections/Talks";

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Talks />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
