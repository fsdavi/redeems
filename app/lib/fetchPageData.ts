import { RedeemPage } from "@/types";

type HandleData = (data: RedeemPage) => void;

async function fetchPageData(handleData: HandleData, id: string) {
  try {
    const res = await fetch(`/api/redeem_pages/${id}`);
    const data: RedeemPage = await res.json();
 
    if(data) handleData(data);
  } catch(e) {
    console.log(e)
    throw new Error("Failed to fetch page data");
  }
}

export default fetchPageData;