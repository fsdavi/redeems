"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from "react";
import { Item } from "@/types";
import { useItems } from "../hooks/useItems";
import { useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getRedeemsFormInitialValues } from "@/utils/getRedeemsFormInitialValues";

type RedeemFormContextProps = {
  items: Item[];
  selectedItems: Item[];
  handleSelectItem: (itemId: string) => void;
  selectedItemsIds: string[];
  loading: boolean;
  pageId: string;
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
  handleItemsSize: (size: string, itemId: string) => void;
};

const RedeemFormContext = createContext<RedeemFormContextProps | undefined>(
  undefined
);

export const RedeemFormProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const { items, selectedItems, handleSelectItem, selectedItemsIds, loading, pageId } = useItems();

  const form = useForm<z.infer<typeof ADDRESSE_SCHEMA>>({
    resolver: zodResolver(ADDRESSE_SCHEMA),
    defaultValues: useMemo(() => getRedeemsFormInitialValues(selectedItems), [selectedItems]),
  });

  const handleItemsSize = (size: string, itemId: string) => {
    const item = items.find((item) => item.customer_product_id === itemId);
    if (!item) return;

    const formItems = form.getValues("items");

    form.setValue("items", formItems.map((item) => 
      (item.customer_product_id === itemId ? { ...item, size_name: size } : item)));
  }

  return (
    <RedeemFormContext.Provider
      value={{
        items,
        selectedItems,
        handleSelectItem,
        selectedItemsIds,
        loading,
        pageId,
        form,
        handleItemsSize
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
