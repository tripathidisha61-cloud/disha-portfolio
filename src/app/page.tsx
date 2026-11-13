import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { GitHubStats } from "./components/GitHubStats";
import { LeetCodeStats } from "./components/LeetCodeStats";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubStats />
        <LeetCodeStats />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
