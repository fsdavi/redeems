"use client";
import { PageContainer, Text, TextsWrapper, Title } from "./page.styles";
import { Suspense } from "react";
import { useRedeemPage } from "../contexts/RedeemPageContext";
import Image from "next/image";
import Button from "@/components/Button";
import { notFound, usePathname, useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

const DEFAULT_LOGO_PROPS = {
  width: 190,
  height: 60,
};

export default function RedeemPage() {
  const router = useRouter();
  const currentPath = usePathname();

  const { palette } = useTheme();
  const { page, loading } = useRedeemPage();

  if (!loading && !page) notFound();

  if (!page) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContainer>
        <Image src={page.logo_url} alt={page.title} {...DEFAULT_LOGO_PROPS} />

        <TextsWrapper>
          <Title>{page.title}</Title>
          <Text>
            {page.welcome_title}
            <br />
            {page.welcome_phrase}
          </Text>
        </TextsWrapper>

        <Button
          onClick={() => router.push(`${currentPath}/items`)}
          sx={{ backgroundColor: palette.primary.main }}
        >
          Continuar
        </Button>
      </PageContainer>
    </Suspense>
  );
}
