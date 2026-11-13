export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
  homepage?: string | null;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=12`;
  
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "DishaTripathi-Portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API returned status ${res.status}: ${res.statusText}`);
  }

  const data: GitHubRepo[] = await res.json();
  // Filter out forks or keep primary public repos
  return data
    .filter((repo) => !repo.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
}

export async function fetchGitHubProfile(username: string): Promise<GitHubProfile | null> {
  const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
  
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "DishaTripathi-Portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(url, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
