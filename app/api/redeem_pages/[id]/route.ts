import { NextResponse } from "next/server";

// This API Route its used to hide the API Key from the client side

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  try {
    const pageId = (await params).id;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/redeem_pages/${pageId}`,
      {
        cache: "force-cache",
        headers: {
          Authorization: `Basic ${process.env.API_KEY}`,
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
