"use client";

import { useRouter } from "next/navigation";
import { useItems } from "../components/CustomerItemsContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Wrapper, Title, ActionsWrapper } from "../page.styles";
import { SectionTitle } from "./styles";
import Form from "next/form";
import Button from "@/components/Button";
import AddresseFormSection from "../components/AddresseeSection";
import styled from "styled-components";
import { createRedeem } from "./actions";
import AddressFormSection from "../components/AdressSection";
import ItemsSizesSection from "../components/ItemsSizesSection";

const FORM_DEFAULT_VALUES = {
  redeemer_name: "",
  redeemer_email: "",
  redeemer_document_number: "",
  redeemer_zipcode: "",
  redeemer_street: "",
  redeemer_number: "",
  redeemer_complement: "",
  redeemer_neighborhood: "",
  redeemer_city: "",
  redeemer_state: "",
  redeemer_country: "",
  redeemer_phone: "",
  extra_question_responses: [],
  items: [],
};

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function FormPage() {
  const { selectedItems, pageRedeemId } = useItems();
  const router = useRouter();
  const form = useForm<z.infer<typeof ADDRESSE_SCHEMA>>({
    resolver: zodResolver(ADDRESSE_SCHEMA),
    defaultValues: FORM_DEFAULT_VALUES,
  });

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
            onClick={() => router.push(`/redeems?=${pageRedeemId}`)}
          >
            Voltar
          </Button>
          <Button type="submit">Continuar</Button>
        </ActionsWrapper>
      </StyledForm>
    </Wrapper>
  );
}
