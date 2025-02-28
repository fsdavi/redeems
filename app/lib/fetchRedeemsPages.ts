export async function fetchRedeemPages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/redeem_pages`, {
      cache: "force-cache",
      headers: {
        Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    const data = await res.json();

    return data;
  } catch(error) {
    throw new Error("Failed to fetch redeem pages");
  }
}
