"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { notFound, useSearchParams } from "next/navigation";
import { Item } from "@/types";

interface ItemsContextProps {
  items: Item[];
  selectedItems: Item[];
  selectedItemsIds: string[];
  handleSelectItem: (itemId: string) => void;
}

const ItemsContext = createContext<ItemsContextProps | undefined>(undefined);

export const ItemsProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemsIds, setSelectedItemsIds] = useState<string[]>([]);
  const selectedItems = useMemo(
    () =>
      items.filter((item) =>
        selectedItemsIds.includes(item.customer_product_id)
      ),
    [items, selectedItemsIds]
  );

  useEffect(() => {
    async function fetchItems() {
      if (!id) {
        notFound();
      }

      try {
        const res = await fetch(`/api/redeem_pages/${id}`);
        const data = await res.json();
        setItems(data.items);
      } catch (err: any) {
        notFound();
      }
    }
    fetchItems();
  }, [id]);

  const handleSelectItem = (itemId: string) => {
    setSelectedItemsIds((prev) => {
      if (prev.includes(itemId)) {
        return prev.filter((id) => id !== itemId);
      }
      return [...prev, itemId];
    });
  };

  return (
    <ItemsContext.Provider
      value={{ items, selectedItemsIds, handleSelectItem, selectedItems }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("useItems must be used within an ItemsProvider");
  }
  return context;
};
