"use client";
import { Container, PagesWrapper, Text, TextsWrapper, Title, Wrapper } from "./page.styles";
import { Suspense } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { useRedeemPages } from "./hooks/useRedeemPages";
import PageCard from "@/components/PageCard";

const DEFAULT_LOGO_PROPS = {
  src: "/default-logo.svg",
  width: 189,
  height: 54,
};

export default function Home() {
  const redeemPages = useRedeemPages();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Container>
          <Image {...DEFAULT_LOGO_PROPS} alt="Lobby tech"/>

          <TextsWrapper>
            <Title>Bem vindo aos resgates!</Title>
            <Text>
              Por favor, selecione para qual resgate deseja ser redirecionado!
            </Text>
          </TextsWrapper>
          <PagesWrapper>
            {redeemPages.map((page) => (
              <PageCard
                key={page.id}
                id={page.id}
                title={page.title}
                status={page.status}
              />
            ))}
          </PagesWrapper>
          <Footer />
        </Container>
      </Wrapper>
    </Suspense>
  );
}
