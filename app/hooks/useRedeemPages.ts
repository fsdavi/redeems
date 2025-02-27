import { useContext } from "react"
import RedeemPagesContext from "@/contexts/RedeemPagesContext"

export const useRedeemPages = () => {
  const context = useContext(RedeemPagesContext)
  if (!context) {
    throw new Error("useRedeemPages must be used within a RedeemPagesProvider")
  }
  return context;
}