"use client";

import { useRouter } from "next/navigation";
import { Wrapper, Title, SectionTitle } from "./styles";
import { ActionsWrapper } from "../styles";
import Form from "next/form";
import Button from "@/components/Button";
import styled from "styled-components";
import { createRedeem } from "./actions";
import {
  AddressFormSection,
  ItemsSizesSection,
  AddresseFormSection,
} from "@/redeems/components";
import { useRedeemForm } from "@/redeems/contexts/RedeemFormContext";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function FormPage() {
  const { selectedItems, pageId, form } = useRedeemForm();
  const router = useRouter();

  const itemsWithSizeSection = selectedItems.filter(
    (item) => item.sizes.length > 0
  );

  return (
    <Wrapper>
      <Title>Finalize o seu resgate</Title>
      <StyledForm action={createRedeem} formMethod="post">
        <SectionTitle>Dados do destinatário</SectionTitle>
        <AddresseFormSection form={form} />
        <SectionTitle>Endereços de entrega</SectionTitle>
        <AddressFormSection form={form} />
        {itemsWithSizeSection.length > 0 && (
          <>
            <SectionTitle>Tamanhos</SectionTitle>
            <ItemsSizesSection items={itemsWithSizeSection} form={form} />
          </>
        )}
        <ActionsWrapper>
          <Button
            variant="outlined"
            onClick={() => router.push(`/redeems/items/${pageId}`)}
          >
            Voltar
          </Button>
          <Button type="submit">Continuar</Button>
        </ActionsWrapper>
      </StyledForm>
    </Wrapper>
  );
}
