"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/data";
import { Reveal } from "./Reveal";
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (PERSONAL_INFO.phone) {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-zinc-200/60 dark:border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-[#C084FC]">
              08 // Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-[#FAFAFA]">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Whether you are looking to discuss software engineering internships, collaborative AI/ML research, or technical projects, my inbox is always open.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct channels & Quick Action card */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <div className="p-6 sm:p-7 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-xs space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-[#FAFAFA]">
                    Direct Contact Channels
                  </h3>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    Feel free to reach out directly via email or professional networks.
                  </p>
                </div>

                {/* Email Box with One-Click Copy */}
                <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <div className="p-2 rounded-lg bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shrink-0">
                      <Mail className="w-4 h-4 text-zinc-700 dark:text-[#C084FC]" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-sm font-medium text-zinc-900 dark:text-[#FAFAFA] hover:underline hover:text-[#C084FC] dark:hover:text-[#C084FC] truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Box with Direct Dial & One-Click Copy */}
                {PERSONAL_INFO.phone && (
                  <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 truncate">
                      <div className="p-2 rounded-lg bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shrink-0">
                        <Phone className="w-4 h-4 text-zinc-700 dark:text-[#C084FC]" />
                      </div>
                      <div className="truncate">
                        <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase">
                          Direct Phone
                        </div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-sm font-medium text-zinc-900 dark:text-[#FAFAFA] hover:underline hover:text-[#C084FC] dark:hover:text-[#C084FC] truncate block font-mono"
                        >
                          {PERSONAL_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPhone}
                      className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors shrink-0"
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                )}

                {/* Network Links */}
                <div className="space-y-2.5">
                  <a
                    href={PERSONAL_INFO.socials.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 bg-zinc-50/50 dark:bg-[#09090B] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-[#18181B] transition-all text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-zinc-600 dark:text-[#8B5CF6]" />
                      <span>LinkedIn Profile</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C084FC] transition-all" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-[#8B5CF6]/50 bg-zinc-50/50 dark:bg-[#09090B] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100/60 dark:hover:bg-[#18181B] transition-all text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-zinc-600 dark:text-[#C084FC]" />
                      <span>GitHub Organization & Repos</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C084FC] transition-all" />
                  </a>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <div className="flex items-center justify-between">
                    <span>LOCATION</span>
                    <span className="text-zinc-700 dark:text-zinc-300 font-sans text-xs flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-[#C084FC]" />
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>RESPONSE TIME</span>
                    <span className="text-[#C084FC] font-medium">Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-xs">
                <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-[#09090B] text-zinc-800 dark:text-[#C084FC]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-zinc-900 dark:text-[#FAFAFA]">
                    Send a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-900 dark:text-[#FAFAFA] placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-900 dark:text-[#FAFAFA] placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Opportunity / Collaboration Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-900 dark:text-[#FAFAFA] placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hello Disha, I came across your portfolio and would love to discuss..."
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#09090B] text-zinc-900 dark:text-[#FAFAFA] placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-white dark:bg-[#8B5CF6] dark:text-white hover:bg-zinc-800 dark:hover:bg-[#7C3AED] transition-all shadow-xs active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>

                    {submitted && (
                      <span className="text-xs text-[#C084FC] font-medium">
                        Opening your email client...
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
