import { NextResponse } from "next/server";
import { fetchLeetCodeStats } from "@/lib/leetcode";

export const dynamic = "force-dynamic";

export async function GET() {
  const username = "Disha_tripathi2006";

  try {
    const stats = await fetchLeetCodeStats(username);
    return NextResponse.json({
      success: true,
      stats,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch LeetCode statistics",
        fallback: {
          username,
          profileUrl: `https://leetcode.com/u/${username}/`,
        },
      },
      { status: 500 }
    );
  }
}
