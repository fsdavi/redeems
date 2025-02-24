import CpfCnpjTextField from "@/components/CpfCnpjTextfield";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { TextField } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px; 
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
  }
`

function AddresseFormSection({ form }: { form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>> }) {
  return (
    <Wrapper>
      <TextField label="Nome completo" required variant="standard" fullWidth/>
      <Container>
        <TextField label="E-mail" required variant="standard" fullWidth/>
        <CpfCnpjTextField 
          label="CPF ou CNPJ"
          required
          value={form.getValues("redeemer_document_number")}
          onChange={(e) => form.setValue("redeemer_document_number", e.target.value)}
          error={!!form.formState.errors.redeemer_document_number}
          helperText={form.formState.errors.redeemer_document_number?.message}
        />
      </Container>
    </Wrapper>
  )
}

export default AddresseFormSection;