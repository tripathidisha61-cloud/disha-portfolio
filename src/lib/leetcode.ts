export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number | null;
  contributionPoints?: number;
  reputation?: number;
  status: "success" | "fallback" | "error";
  profileUrl: string;
  errorMessage?: string;
}

export async function fetchLeetCodeStats(username: string): Promise<LeetCodeStats> {
  const profileUrl = `https://leetcode.com/u/${username}/`;

  // Method 1: Try public stats API proxy
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${encodeURIComponent(username)}`, {
      signal: controller.signal,
      next: { revalidate: 3600 },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data.status === "success") {
        return {
          username,
          totalSolved: data.totalSolved ?? 0,
          totalQuestions: data.totalQuestions ?? 3000,
          easySolved: data.easySolved ?? 0,
          totalEasy: data.totalEasy ?? 800,
          mediumSolved: data.mediumSolved ?? 0,
          totalMedium: data.totalMedium ?? 1600,
          hardSolved: data.hardSolved ?? 0,
          totalHard: data.totalHard ?? 700,
          acceptanceRate: data.acceptanceRate ?? 0,
          ranking: data.ranking ?? null,
          contributionPoints: data.contributionPoints ?? 0,
          reputation: data.reputation ?? 0,
          status: "success",
          profileUrl,
        };
      }
    }
  } catch (err) {
    // Continue to GraphQL fallback
  }

  // Method 2: Direct LeetCode official GraphQL query
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const graphqlQuery = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            submitStats: submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
            profile {
              ranking
              reputation
            }
          }
          allQuestionsCount {
            difficulty
            count
          }
        }
      `,
      variables: { username },
    };

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: JSON.stringify(graphqlQuery),
      signal: controller.signal,
      next: { revalidate: 3600 },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const json = await res.json();
      const user = json?.data?.matchedUser;
      if (user) {
        const acSubmissions = user.submitStats?.acSubmissionNum || [];
        const allCounts = json?.data?.allQuestionsCount || [];

        const getCount = (diff: string) =>
          acSubmissions.find((s: { difficulty: string }) => s.difficulty === diff)?.count ?? 0;
        const getTotalCount = (diff: string) =>
          allCounts.find((s: { difficulty: string }) => s.difficulty === diff)?.count ?? 0;

        const easySolved = getCount("Easy");
        const mediumSolved = getCount("Medium");
        const hardSolved = getCount("Hard");
        const totalSolved = getCount("All");

        return {
          username,
          totalSolved,
          totalQuestions: getTotalCount("All") || 3300,
          easySolved,
          totalEasy: getTotalCount("Easy") || 850,
          mediumSolved,
          totalMedium: getTotalCount("Medium") || 1750,
          hardSolved,
          totalHard: getTotalCount("Hard") || 750,
          acceptanceRate: 0,
          ranking: user.profile?.ranking ?? null,
          reputation: user.profile?.reputation ?? 0,
          status: "success",
          profileUrl,
        };
      }
    }
  } catch (err) {
    // Both attempts failed, return graceful fallback
  }

  // Graceful fallback: Do not fabricate stats. Clearly mark as fallback and direct to profile
  return {
    username,
    totalSolved: 0,
    totalQuestions: 3300,
    easySolved: 0,
    totalEasy: 850,
    mediumSolved: 0,
    totalMedium: 1750,
    hardSolved: 0,
    totalHard: 750,
    acceptanceRate: 0,
    ranking: null,
    status: "fallback",
    profileUrl,
    errorMessage: "Live stats temporarily unavailable from LeetCode public endpoints. View verified record directly on LeetCode.",
  };
}
