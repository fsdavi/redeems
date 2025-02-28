import { NextResponse } from "next/server";

export async function POST (
  request: Request,
  { params }: { params: { pageId: string } }
) {
  try {
    const body = await request.json();
    
    const externalResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/redeem_pages/${params.pageId}/redeem`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!externalResponse.ok) {
      const errorText = await externalResponse.text();
      return NextResponse.json(
        { error: `Failed external request: ${errorText}` },
        { status: externalResponse.status }
      );
    }

    const data = await externalResponse.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error creating redeem:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}