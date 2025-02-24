"use client";

import { useRouter } from "next/navigation";
import { useItems } from "../components/CustomerItemsContext";
import Button from "@/components/Button";
import { Wrapper, Title, ActionsWrapper } from "../page.styles";
import CpfCnpjTextField from "@/components/CpfCnpjTextfield";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SectionTitle } from "./styles";
import AddresseFormSection from "../components/AddresseeSection";

export default function FormPage() {
  const { selectedItems } = useItems();
  const router = useRouter();
  const form = useForm<z.infer<typeof ADDRESSE_SCHEMA>>({
    resolver: zodResolver(ADDRESSE_SCHEMA),
  });

  return (
    <Wrapper>
      <Title>Finalize o seu resgate</Title>
      <form>
        <SectionTitle>Dados do destinatário</SectionTitle>
        <AddresseFormSection form={form} />
      </form>
      <ActionsWrapper>
        <Button variant="outlined" onClick={() => router.push("/")}>
          Voltar
        </Button>
        <Button onClick={() => router.push("/redeems/form")}>Continuar</Button>
      </ActionsWrapper>
    </Wrapper>
  );
}
