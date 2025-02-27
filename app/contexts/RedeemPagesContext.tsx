import { createContext } from "react";
import { RedeemPage } from "@/types";

const RedeemPagesContext = createContext<RedeemPage[] | null>(null);
export default RedeemPagesContext;