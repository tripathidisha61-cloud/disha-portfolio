import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Disha Tripathi — Software Developer | AI/ML Enthusiast",
  description:
    "Personal developer portfolio of Disha Tripathi, 3rd-year B.Tech CSE student at RKGIT Ghaziabad. Showcasing software engineering projects, AI/ML research, open source, and LeetCode problem solving.",
  keywords: [
    "Disha Tripathi",
    "Software Developer",
    "Portfolio",
    "AI/ML",
    "Next.js",
    "Full Stack",
    "RKGIT",
    "LeetCode",
    "Computer Science",
    "Python",
    "React",
  ],
  authors: [{ name: "Disha Tripathi", url: "https://github.com/tripathidisha61-cloud" }],
  creator: "Disha Tripathi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://disha-portfolio.vercel.app",
    title: "Disha Tripathi — Software Developer & AI/ML Enthusiast",
    description:
      "Explore software projects, machine learning models, and algorithmic achievements by Disha Tripathi.",
    siteName: "Disha Tripathi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disha Tripathi — Software Developer & AI/ML Enthusiast",
    description:
      "Explore software projects, machine learning models, and algorithmic achievements by Disha Tripathi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] dark:bg-[#0F172A] text-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#2563EB]/20 selection:text-[#2563EB]">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="disha-theme-white-royal-slate"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
