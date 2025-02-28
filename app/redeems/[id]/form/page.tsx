"use client";

import { z } from "zod";
import Form from "next/form";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { createRedeem } from "./actions";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { useRedeemForm } from "@/redeems/contexts/RedeemFormContext";
import { useRedeemPage } from "@/redeems/contexts/RedeemPageContext";
import { Wrapper, Title, SectionTitle } from "./styles";
import { ActionsWrapper } from "../styles";
import Button from "@/components/Button";
import {
  AddressFormSection,
  ItemsSizesSection,
  AddresseFormSection,
} from "@/redeems/components";
import ExtraQuestionsSection from "@/redeems/components/ExtraQuestionsSection";
import {  Suspense, useState } from "react";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

type FormData = z.infer<typeof ADDRESSE_SCHEMA>;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default function FormPage() {
  const { page: redeemPage } = useRedeemPage();
  const { selectedItems, pageId, form } = useRedeemForm();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const itemsWithSizeSection = selectedItems.filter(
    (item) => item.sizes.length > 0
  );

  const extraQuestions = redeemPage?.extra_questions ?? [];

  const onSubmit = form.handleSubmit(async (data: FormData) => {
    if(!redeemPage || !pageId) return;
    setLoading(true)
    try {
      await createRedeem(data, pageId).then(() => {
        toast("Resgate criado com sucesso!", { type: "success" });
        router.push(`/redeems/${pageId}/form/success`);
      })
    } catch (_) {
      toast("Erro ao criar resgate!", { type: "error" });
    } finally {
      setLoading(false)
    }
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Title>Finalize o seu resgate</Title>
        <StyledForm action={`/redeems/${pageId}/success`} onSubmit={onSubmit}>
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
          {extraQuestions.length > 0 && (
            <>
              <SectionTitle>Perguntas Extras</SectionTitle>
              <ExtraQuestionsSection questions={extraQuestions} form={form} />
            </>
          )}

          <ActionsWrapper>
            <Button
              variant="outlined"
              onClick={() => router.push(`/redeems/${pageId}/items`)}
            >
              Voltar
            </Button>
            <Button type="submit" disabled={!form.formState.isValid || loading}>{loading ? <CircularProgress size={14} /> : 'Continuar'}</Button>
          </ActionsWrapper>
        </StyledForm>
      </Wrapper>
    </Suspense>
  );
}
