"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Item } from "@/redeems/types";
import { useItems } from "@/hooks/useItems";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRedeemsFormInitialValues } from "@/utils/getRedeemsFormInitialValues";
import { useRedeemPage } from "./RedeemPageContext";

type RedeemFormContextProps = {
  items: Item[];
  selectedItems: Item[];
  handleSelectItem: (itemId: string) => void;
  selectedItemsIds: string[];
  loading: boolean;
  pageId: string;
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
};

const RedeemFormContext = createContext<RedeemFormContextProps | undefined>(
  undefined
);

export const RedeemFormProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const { page: redeemPage } = useRedeemPage();
  const { items, selectedItems, handleSelectItem, selectedItemsIds, loading, pageId } = useItems();

  const form = useForm<z.infer<typeof ADDRESSE_SCHEMA>>({
    resolver: zodResolver(ADDRESSE_SCHEMA),
    defaultValues: getRedeemsFormInitialValues({
      items: selectedItems,
      extraQuestions: redeemPage?.extra_questions ?? [],
    }),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    form.reset(getRedeemsFormInitialValues({
      items: selectedItems,
      extraQuestions: redeemPage?.extra_questions ?? [],
    }));
  }, [selectedItems, form, redeemPage]);

  return (
    <RedeemFormContext.Provider
      value={{
        items,
        selectedItems,
        handleSelectItem,
        selectedItemsIds,
        loading,
        pageId,
        form
      }}
    >
      {children}
    </RedeemFormContext.Provider>
  );
};

export const useRedeemForm = () => {
  const context = useContext(RedeemFormContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
};
