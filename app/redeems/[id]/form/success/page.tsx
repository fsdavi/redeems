"use client";

import {
  PageContainer,
  Text,
  TextsWrapper,
  Title,
} from "@/redeems/[id]/page.styles";
import { Suspense } from "react";
import { useRedeemPage } from "@/redeems/contexts/RedeemPageContext";
import Image from "next/image";
import { notFound } from "next/navigation";

const DEFAULT_LOGO_PROPS = {
  width: 190,
  height: 60,
};

export default function RedeemPage() {
  const { page, loading } = useRedeemPage();

  if (!loading && !page) notFound();

  if (!page) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContainer>
        <Image src={page.logo_url} alt={page.title} {...DEFAULT_LOGO_PROPS} />

        <TextsWrapper>
          <Title style={{ fontSize: 40 }}>Presente resgatado! 🎉🥳</Title>
          <Text>
            Seu pedido está em andamento!
            <br />
            E não se preocupe, as alterações de status do envio chegam todas em seu e-mail!
          </Text>
        </TextsWrapper>

      </PageContainer>
    </Suspense>
  );
}
