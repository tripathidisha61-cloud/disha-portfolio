import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-[#09090b] text-neutral-900 dark:text-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          404 — Page Not Found
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight">
          Lost in cyberspace?
        </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          The requested page could not be located. It might have been moved, renamed, or does not exist.
        </p>

        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors shadow-xs"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Contact Disha</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
