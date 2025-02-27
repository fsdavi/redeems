import { useMemo, useState } from "react";
import { useRedeemPage } from "@/redeems/contexts/RedeemPageContext";
import { Item } from "@/types";

type UseItemsReturn = {
  items: Item[];
  selectedItems: Item[];
  handleSelectItem: (itemId: string) => void;
  selectedItemsIds: string[];
  loading: boolean;
  pageId: string;
}

export const useItems = (): UseItemsReturn => {
  const { page, loading } = useRedeemPage();
  const items = page?.items || [];

  const availableItems = items.filter((item) => item.optional);
  const [selectedItemsIds, setSelectedItemsIds] = useState<string[]>([]);

  const selectedItems = useMemo(
    () =>
      items.filter((item) =>
        selectedItemsIds.includes(item.customer_product_id)
      ),
    [items, selectedItemsIds]
  );

  const handleSelectItem = (itemId: string) => {
    setSelectedItemsIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      }
      return [...prev, itemId];
    });
  };

  return {
    items: availableItems,
    selectedItems,
    handleSelectItem,
    selectedItemsIds,
    loading,
    pageId: page?.id ?? "",
  }
}