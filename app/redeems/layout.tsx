"use client";
import { ItemsProvider } from "./components/CustomerItemsContext";
import { Container, Wrapper } from "./styles";
import Footer from "@/components/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ItemsProvider>
      <Wrapper>
        <Container>
          {children}

          <Footer />
        </Container>
      </Wrapper>
    </ItemsProvider>
  );
}
