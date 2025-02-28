import { RedeemPage } from "@/redeems/types";
import { toast } from "react-toastify";

type HandleData = (data: RedeemPage) => void;

async function fetchPageData(handleData: HandleData, id: string) {
  try {
    const res = await fetch(`/api/redeem_pages/${id}`);
    const data: RedeemPage = await res.json();
 
    if(data) handleData(data);
  } catch(error) {
    toast("Algo deu errado, tente novament mais tarde!", { type: "error" });
    console.log(error)
    throw new Error("Failed to fetch page data");
  }
}

export default fetchPageData;