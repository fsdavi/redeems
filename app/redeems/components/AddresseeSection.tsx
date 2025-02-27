import CpfCnpjTextField from "@/components/CpfCnpjTextfield";
import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { TextField } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Container, Wrapper } from "./styles";

function AddresseFormSection({
  form,
}: {
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
}) {
  const {
    register,
    formState: { errors },
    control
  } = form;

  return (
    <Wrapper>
      <TextField
        label="Nome completo"
        required
        variant="standard"
        fullWidth
        {...register("redeemer_name")}
        error={Boolean(errors.redeemer_name)}
        helperText={errors.redeemer_name?.message}
      />
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
        <TextField
          label="E-mail"
          required
          variant="standard"
          fullWidth
          {...register("redeemer_email")}
          error={Boolean(errors.redeemer_email)}
          helperText={errors.redeemer_email?.message}
        />
      </Container>
    </Wrapper>
  );
}

export default AddresseFormSection;
