import { NextResponse } from "next/server";

export async function POST (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const pageId = (await params).id;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/redeem_pages/${pageId}/redeem`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch redeem page` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching redeem page:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}