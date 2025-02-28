import CpfCnpjTextField from "@/components/CpfCnpjTextfield";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { TextField } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Container, Wrapper } from "./styles";
import FormInput from "./FormInput";

function AddresseFormSection({
  form,
}: {
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
}) {
  const { control } = form;

  return (
    <Wrapper>
      <FormInput control={control} name="redeemer_name" label="Nome completo" />

      <Container>
        <Controller
          control={control}
          name="redeemer_document_number"
          render={({ field, fieldState: { error } }) => (
            <CpfCnpjTextField
              label="CPF ou CNPJ"
              required
              value={field.value || ""}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={Boolean(error)}
              helperText={error ? error.message : ""}
            />
          )}
        />
        <FormInput control={control} name="redeemer_email" label="E-mail" />
      </Container>
    </Wrapper>
  );
}

export default AddresseFormSection;
