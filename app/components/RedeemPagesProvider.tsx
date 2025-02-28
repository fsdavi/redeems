"use client"
import RedeemPagesContext from "@/contexts/RedeemPagesContext";
import { RedeemPage } from "@/redeems/types";

type RedeemPagesProviderProps = {
  redeemPages: RedeemPage[];
  children: React.ReactNode;
}

function RedeemPagesProvider({ redeemPages, children }: RedeemPagesProviderProps) {
  return (
    <RedeemPagesContext.Provider value={redeemPages}>
      {children}
    </RedeemPagesContext.Provider>
  );
}

export default RedeemPagesProvider;