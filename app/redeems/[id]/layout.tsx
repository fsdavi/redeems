"use client";
import React, { useEffect, useMemo, useState } from "react";
import { RedeemPageProvider } from "@/redeems/contexts/RedeemPageContext";
import { Container, Wrapper } from "./styles";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@mui/material";
import { generateMuiTheme } from "@/theme";
import { useRedeemPages } from "@/hooks/useRedeemPages";
import { RedeemFormProvider } from "../contexts/RedeemFormContext";
import { openSans } from "@/lib/fonts";

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}>) {
  const redeemPages = useRedeemPages();
  const [id, setId] = useState("");

  const pageData = useMemo(
    () => redeemPages.find((page) => page.id === id),
    [redeemPages, id]
  );

  const theme = useMemo(() => {
    return pageData
      ? generateMuiTheme({
          palette: {
            primary: {
              main: pageData.button_color,
            },
          },
        })
      : generateMuiTheme();
  }, [pageData]);

  useEffect(() => {
    params.then(({ id }) => {
      setId(id);
    });
  }, [params]);

  return (
    <ThemeProvider theme={theme}>
      <RedeemPageProvider id={id}>
        <RedeemFormProvider>
          <body
            className={openSans.variable}
            style={{ backgroundColor: pageData?.background_color }}
          >
            <Container>
              {children}
              <Footer />
            </Container>
          </body>
        </RedeemFormProvider>
      </RedeemPageProvider>
    </ThemeProvider>
  );
}
