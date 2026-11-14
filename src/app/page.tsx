"use client";

import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { RepoMedicSandbox } from "./components/RepoMedicSandbox";
import { CoreCsFundamentals } from "./components/CoreCsFundamentals";
import { EngineeringDocs } from "./components/EngineeringDocs";
import { MncRoleMatcher } from "./components/MncRoleMatcher";
import { InterviewSimulator } from "./components/InterviewSimulator";
import { GitHubStats } from "./components/GitHubStats";
import { LeetCodeStats } from "./components/LeetCodeStats";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { RecruiterModal } from "./components/RecruiterModal";
import { InteractiveTerminal } from "./components/InteractiveTerminal";

export default function Home() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenRecruiter={() => setIsRecruiterModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <RepoMedicSandbox />
        <CoreCsFundamentals />
        <EngineeringDocs />
        <MncRoleMatcher />
        <InterviewSimulator />
        <GitHubStats />
        <LeetCodeStats />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Tooling Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => {
          const cliBtn = document.querySelector(
            'button[aria-label="Open Interactive CLI Terminal"]'
          ) as HTMLButtonElement;
          cliBtn?.click();
        }}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      <RecruiterModal
        isOpen={isRecruiterModalOpen}
        onClose={() => setIsRecruiterModalOpen(false)}
      />

      <InteractiveTerminal />
    </div>
  );
}
