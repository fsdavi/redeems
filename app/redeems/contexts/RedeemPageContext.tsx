"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { RedeemPage } from "@/redeems/types";
import fetchPageData from "@/lib/fetchPageData";

type RedeemPageContextProps = {
  page?: RedeemPage;
  loading: boolean;
};

const RedeemPageContext = createContext<RedeemPageContextProps | undefined>(
  undefined
);

export const RedeemPageProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const [pageData, setPageData] = useState<RedeemPage>();
  const [loading, setLoading] = useState(true);

  const handleData = (data: RedeemPage) => {
    setPageData(data);
    setLoading(false);
  }

  useEffect(() => {
    if (id) fetchPageData(handleData, id);
  }, [id]);

  return (
    <RedeemPageContext.Provider
      value={{
        page: pageData,
        loading
      }}
    >
      {children}
    </RedeemPageContext.Provider>
  );
};

export const useRedeemPage = () => {
  const context = useContext(RedeemPageContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
};
