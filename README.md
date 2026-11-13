# Disha Tripathi — Personal Developer Portfolio

A modern, minimal, recruiter-ready developer portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically to showcase software development capabilities, AI/ML research projects, live GitHub activity, and verified LeetCode problem solving with high performance and zero bloat.

---

## 🌟 Key Features

- **Minimal Professional Aesthetic**: Clean typography, subtle borders, generous whitespace, and zero visual clutter.
- **Theme Support**: Seamless Dark/Light mode with persistent state (`next-themes`) and hydration-safe rendering.
- **Dynamic GitHub Integration**: Live synchronization of public repositories for `tripathidisha61-cloud` via GitHub REST API with loading skeletons, star counts, and error resilience.
- **LeetCode Integration & Fallback**: Fetches verified solved problems and difficulty breakdown for `Disha_tripathi2006` with graceful fallback handling.
- **Centralized Data Configuration**: All personal info, skills, projects, experience, and achievements are centralized in `src/lib/data.ts`.
- **Responsive Architecture**: Mobile-first layout with smooth slide-down navigation drawer and fluid scaling.
- **Accessibility & Motion**: Complies with `prefers-reduced-motion` and keyboard accessibility standards.
- **Production SEO**: Open Graph tags, Twitter cards, meta descriptions, and custom favicon.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
disha-portfolio/
├── public/
│   ├── images/              # Profile photo & project screenshots
│   ├── resume.pdf           # Downloadable curriculum vitae
│   └── icon.svg             # Minimalist logo / favicon
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── github/      # Server-side GitHub API route
│   │   │   └── leetcode/    # Server-side LeetCode stats route
│   │   ├── components/      # UI Components (Hero, About, Skills, etc.)
│   │   │   ├── About.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GitHubStats.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LeetCodeStats.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Reveal.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── globals.css      # CSS variables & tailwind utilities
│   │   ├── layout.tsx       # Root layout & SEO metadata
│   │   ├── not-found.tsx    # Custom 404 page
│   │   └── page.tsx         # Homepage composer
│   └── lib/
│       ├── data.ts          # Central data source (editable)
│       ├── github.ts        # GitHub API client
│       ├── leetcode.ts      # LeetCode statistics client
│       └── utils.ts         # Style merging helpers
├── .env.local.example
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v20.9.0 or higher
- **npm** or **pnpm** or **yarn**
- **Git**

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/tripathidisha61-cloud/disha-portfolio.git

# Enter project directory
cd disha-portfolio

# Install dependencies
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```
- `GITHUB_TOKEN`: Add a GitHub Personal Access Token if you wish to lift GitHub API rate limits from 60 req/hr to 5,000 req/hr.

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Customizing Content

All personal content is centralized in `src/lib/data.ts`:
1. **Bio & Academics**: Update `PERSONAL_INFO` (e.g. CGPA, college details, contact email).
2. **Skills**: Modify `SKILL_CATEGORIES` to add or reorder technical skills.
3. **Projects**: Add new projects to `PROJECTS` array.
4. **Experience & Leadership**: Update `EXPERIENCES`.
5. **Certifications**: Update `ACHIEVEMENTS`.

### Adding Your Assets:
- Place your photo at `public/images/profile.png`.
- Replace `public/resume.pdf` with your actual one-page resume.
- Place project screenshots under `public/images/`.

---

## 🧪 Testing & Production Build

Verify everything compiles cleanly with zero TypeScript or build errors:
```bash
# Build production bundle
npm run build

# Start production server locally
npm run start
```

---

## 📦 Deployment to Vercel

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "feat: complete developer portfolio implementation"
git branch -M main
git remote add origin https://github.com/tripathidisha61-cloud/disha-portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New → Project**.
3. Import the `disha-portfolio` repository.
4. Framework preset will automatically detect **Next.js**.
5. (Optional) In **Environment Variables**, add `GITHUB_TOKEN` if desired.
6. Click **Deploy**.

Your website will be live with automatic CI/CD deployments on every push!

---

## 📄 License
MIT © 2026 Disha Tripathi
