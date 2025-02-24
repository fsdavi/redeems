"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Button from "@/components/Button";

import {
  Container,
  Text,
  TextsWrapper,
  Title,
  Wrapper,
} from "./not-found.styles";

const DEFAULT_LOGO_PROPS = {
  src: "/default-logo.svg",
  alt: "Lobby Tech",
  width: 160,
  height: 46,
};

const NOT_FOUND_IMAGE_PROPS = {
  src: "/not-found-image.svg",
  alt: "404 - Página não encontrada",
  width: 500,
  height: 200,
};

export default function NotFound() {
  const router = useRouter();

  return (
    <Wrapper>
      <Image {...DEFAULT_LOGO_PROPS} />

      <Container>
        <Image {...NOT_FOUND_IMAGE_PROPS} />

        <TextsWrapper>
          <Title>Oops! Página não encontrada.</Title>
          <Text>Parece que você explorou demais, e acabou se perdendo.</Text>
        </TextsWrapper>
      </Container>
      <Button onClick={() => router.push('/')}>
        Voltar para a página inicial
      </Button>
    </Wrapper>
  );
}
