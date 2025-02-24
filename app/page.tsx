"use client";
import { useRouter } from "next/navigation";
import { Container, Text, TextsWrapper, Title, Wrapper } from "./page.styles";
import { Suspense, useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

const DEFAULT_LOGO_PROPS = {
  src: "/default-logo.svg",
  alt: "Lobby Tech",
  width: 189,
  height: 54,
};

export default function Home() {
  const router = useRouter();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchPages() {
      try {
        const res = await fetch("/api/redeem_pages");

        const data = await res.json();
        setPages(data);
      } catch (err: any) {
        notFound();
      } finally {
        setLoading(false);
      }
    }
    fetchPages();
  }, []);

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
          <Button onClick={() => router.push("/redeems")}>Começar!</Button>

          <Footer />
        </Container>
      </Wrapper>
    </Suspense>
  );
}
