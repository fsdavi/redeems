"use client";

import { useRouter } from "next/navigation";
import { useRedeemForm } from "@/redeems/contexts/RedeemFormContext";

import Card from "@/components/Card";
import Button from "@/components/Button";
import ItemsSkeleton from "@/redeems/components/ItemsSkeleton";
import { Wrapper, Title, ItemsWrapper } from "./page.styles";
import { ActionsWrapper } from "../styles";
import { memo, useCallback } from "react";


const createIsItemSelected = (selectedItemsIds: string[]) => (itemId: string) =>
  selectedItemsIds.includes(itemId);

function RedeemsPage() {
  const { items, handleSelectItem, selectedItemsIds, loading, pageId } = useRedeemForm();
  const router = useRouter();

  const isItemSelected = useCallback(createIsItemSelected(selectedItemsIds), [selectedItemsIds]);

  return (
    <Wrapper>
      <Title>Escolha o seu presente! 🎁</Title>

      <ItemsWrapper>
        {loading ? (
          <ItemsSkeleton numberOfItems={6} />
        ) : (
          <>
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
          </>
        )}
      </ItemsWrapper>

      <ActionsWrapper>
        <Button variant="outlined" onClick={() => router.push(`/redeems/${pageId}`)}>
          Voltar
        </Button>
        <Button
          onClick={() => router.push(`/redeems/${pageId}/form`)}
          disabled={selectedItemsIds.length < 1}
        >
          Continuar
        </Button>
      </ActionsWrapper>
    </Wrapper>
  );
}

export default memo(RedeemsPage);
