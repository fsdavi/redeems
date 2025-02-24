"use client";

import { useEffect, useState } from "react";

import { notFound, useSearchParams, useRouter } from "next/navigation";
import { Wrapper, Title, ActionsWrapper } from "./page.styles";
import { Item } from "@/types";
import Card from "@/components/Card";
import { ItemsWrapper } from "./page.styles";
import Button from "@/components/Button";
import { useItems } from "./components/CustomerItemsContext";

const createIsItemSelected = (selectedItemsIds: string[]) => (itemId: string) =>
  selectedItemsIds.includes(itemId);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {items, selectedItemsIds, handleSelectItem} = useItems();
  const router = useRouter();

  const isItemSelected = createIsItemSelected(selectedItemsIds);

  return (
    <Wrapper>
      <Title>Escolha o seu presente! 🎁</Title>

      <ItemsWrapper>
        {items.map((item) => (
          <Card key={item.customer_product_id}>
            <Card.CircleCheckbox
              checked={isItemSelected(item.customer_product_id)}
              onChange={() => handleSelectItem(item.customer_product_id)}
            />
            <Card.Image src={item.image_url} alt={item.name} />
            <Card.Title>{item.name}</Card.Title>
          </Card>
        ))}
      </ItemsWrapper>

      <ActionsWrapper>
        <Button variant='outlined' onClick={() => router.push("/")}>Voltar</Button>
        <Button onClick={() => router.push ("/redeems/form")}>Continuar</Button>
      </ActionsWrapper>
    </Wrapper>
  );
}
