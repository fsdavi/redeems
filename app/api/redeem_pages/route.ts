import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<Response> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/redeem_pages`, {
      cache: "force-cache",
      headers: {
        Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch redeem pages" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching redeem pages:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
