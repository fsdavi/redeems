"use client";

import { useRouter } from "next/navigation";
import { Wrapper, Title, ActionsWrapper } from "./page.styles";
import Card from "@/components/Card";
import { ItemsWrapper } from "./page.styles";
import Button from "@/components/Button";
import { useItems } from "./components/CustomerItemsContext";
import ItemsSkeleton from "./components/ItemsSkeleton";

const createIsItemSelected = (selectedItemsIds: string[]) => (itemId: string) =>
  selectedItemsIds.includes(itemId);

export default function RedeemsPage() {
  const { items, selectedItemsIds, handleSelectItem, loading} = useItems();
  const router = useRouter();

  const isItemSelected = createIsItemSelected(selectedItemsIds);

  return (
    <Wrapper>
      <Title>Escolha o seu presente! 🎁</Title>

      <ItemsWrapper>
        {loading ? (
          <ItemsSkeleton numberOfItems={6}/>
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
        <Button variant="outlined" onClick={() => router.push("/")}>
          Voltar
        </Button>
        <Button
          onClick={() => router.push("/redeems/form")}
          disabled={selectedItemsIds.length < 1}
        >
          Continuar
        </Button>
      </ActionsWrapper>
    </Wrapper>
  );
}
