import { NextResponse } from "next/server";
import { fetchGitHubRepos, fetchGitHubProfile } from "@/lib/github";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = "tripathidisha61-cloud";

  try {
    const [repos, profile] = await Promise.all([
      fetchGitHubRepos(username).catch(() => []),
      fetchGitHubProfile(username).catch(() => null),
    ]);

    return NextResponse.json({
      success: true,
      username,
      profile,
      repos,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch GitHub data",
        username,
      },
      { status: 500 }
    );
  }
}
