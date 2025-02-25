import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { TextField } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Container, Wrapper } from "./styles";
import SelectList from "@/components/Select";
import { countries, states } from "@/utils/constants";

function AddressFormSection({
  form,
}: {
  form: UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;
}) {
  const {
    register,
    formState: { errors },
    control,
  } = form;

  return (
    <Wrapper>
      <Container>
        <TextField
          label="CEP"
          required
          variant="standard"
          fullWidth
          {...register("redeemer_zipcode")}
          error={Boolean(errors.redeemer_zipcode)}
          helperText={errors.redeemer_zipcode?.message}
        />
        <TextField
          label="Rua"
          required
          variant="standard"
          fullWidth
          {...register("redeemer_street")}
          error={Boolean(errors.redeemer_street)}
          helperText={errors.redeemer_street?.message}
        />
      </Container>
      <Container>
        <Container>
          <TextField
            label="Número"
            required
            variant="standard"
            fullWidth
            type="number"
            {...register("redeemer_number")}
            error={Boolean(errors.redeemer_number)}
            helperText={errors.redeemer_number?.message}
          />{" "}
          <TextField
            label="Complemento"
            variant="standard"
            fullWidth
            {...register("redeemer_complement")}
          />
        </Container>
        <TextField
          label="Bairro"
          required
          variant="standard"
          fullWidth
          {...register("redeemer_neighborhood")}
          error={Boolean(errors.redeemer_neighborhood)}
          helperText={errors.redeemer_neighborhood?.message}
        />
      </Container>
      <Container>
        <TextField
          label="Cidade"
          required
          variant="standard"
          fullWidth
          {...register("redeemer_city")}
          error={Boolean(errors.redeemer_city)}
          helperText={errors.redeemer_city?.message}
        />
        <Container>
          <Controller
            control={control}
            name="redeemer_state"
            render={({ field, fieldState: { error } }) => (
              <SelectList
                options={states}
                label="Estado"
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={Boolean(error)}
              />
            )}
          />

          <Controller
            control={control}
            name="redeemer_country"
            render={({ field, fieldState: { error } }) => (
              <SelectList
                options={countries}
                label="País"
                value={field.value || ""}
                onChange={field.onChange}
                onBlur={field.onBlur}
                error={Boolean(error)}
              />
            )}
          />
        </Container>
      </Container>
    </Wrapper>
  );
}

export default AddressFormSection;
