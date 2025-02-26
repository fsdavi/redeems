"use client";
import { useRouter } from "next/navigation";
import { Container, Text, TextsWrapper, Title, Wrapper } from "./page.styles";
import { Suspense, useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { RedeemPage } from "./types";

const DEFAULT_LOGO_PROPS = {
  src: "/default-logo.svg",
  alt: "Lobby Tech",
  width: 189,
  height: 54,
};

export default function Home() {
  const router = useRouter();
  const [pages, setPages] = useState<RedeemPage[]>([]);
  const buttonDisabled = useMemo(() => {
    return pages.length < 1 || !pages.find((page) => page.status === "ACTIVE");
  }, [pages]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Wrapper>
        <Container>
          <Image {...DEFAULT_LOGO_PROPS} />

          <TextsWrapper>
            <Title>Bem vindo!</Title>
            <Text>
              Estamos muito felizes em ter você em nossa equipe!
              <br />
              Preencha as perguntinhas a seguir para escolher o seu presente! 🎁
            </Text>
          </TextsWrapper>
          <Button
            onClick={() => router.push(`/redeems?id=${pages[0].id}`)}
            disabled={buttonDisabled}
          >
            Começar!
          </Button>

          <Footer />
        </Container>
      </Wrapper>
    </Suspense>
  );
}
