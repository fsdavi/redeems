export async function fetchRedeemPages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/redeem_pages`, {
    cache: "force-cache",
    headers: {
      Authorization: `Basic ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch redeem pages");
  }

  return res.json();
}
