"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { CommandPalette } from "../components/CommandPalette";
import { RecruiterModal } from "../components/RecruiterModal";
import { InteractiveTerminal } from "../components/InteractiveTerminal";

export default function ContactPage() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] dark:bg-[#0A1020] text-[#101828] dark:text-[#F8FAFC] transition-colors duration-200">
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenRecruiter={() => setIsRecruiterModalOpen(true)}
      />

      <main className="flex-grow pt-16">
        <Contact />
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
