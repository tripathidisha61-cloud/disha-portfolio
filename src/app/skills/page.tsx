"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import { CoreCsFundamentals } from "../components/CoreCsFundamentals";
import { Footer } from "../components/Footer";
import { CommandPalette } from "../components/CommandPalette";
import { RecruiterModal } from "../components/RecruiterModal";
import { InteractiveTerminal } from "../components/InteractiveTerminal";

export default function SkillsPage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7F3] dark:bg-[#0B1718] text-[#142522] dark:text-[#F1F5EF] transition-colors duration-200">
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      <main className="flex-grow pt-16">
        <Skills />
        <CoreCsFundamentals />
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
