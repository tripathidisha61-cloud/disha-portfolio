"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Experience } from "../components/Experience";
import { GsocRoadmap } from "../components/GsocRoadmap";
import { Endorsements } from "../components/Endorsements";
import { Footer } from "../components/Footer";
import { CommandPalette } from "../components/CommandPalette";
import { RecruiterModal } from "../components/RecruiterModal";
import { InteractiveTerminal } from "../components/InteractiveTerminal";

export default function ExperiencePage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F3] dark:bg-[#0B1718] text-[#142522] dark:text-[#F1F5EF] transition-colors duration-200">
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      <main className="flex-grow pt-16">
        <Experience />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <GsocRoadmap />
        </div>
        <Endorsements />
      </main>

      <Footer />

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
