import { ADDRESSE_SCHEMA } from "@/utils/formSchema";
import { CircularProgress, TextField } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { Container, Wrapper } from "./styles";
import SelectList from "@/components/Select";
import { countries, states } from "@/utils/constants";
import CEPTextfield from "@/components/CEPTextfield";
import { Data as CEPDataType, fetchCEPData } from "@/lib/fetchCEPData";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import FormInput from "./FormInput";

type Form = UseFormReturn<z.infer<typeof ADDRESSE_SCHEMA>>;

const handleFormByCepData = (form: Form, CEPData: CEPDataType) => {
  form.setValue("redeemer_street", CEPData.logradouro);
  form.setValue("redeemer_neighborhood", CEPData.bairro);
  form.setValue("redeemer_city", CEPData.localidade);
  form.setValue("redeemer_state", CEPData.uf);
  form.setValue("redeemer_country", "Brasil");
};

function AddressFormSection({ form }: { form: Form }) {
  const [loadingCEPData, setLoadingCEPData] = useState(false);
  const [cepValue, setCepValue] = useState("");

  const { control } = form;

  const handleCEP = async (cep: string) => {
    if (cep.length < 9) return;

    try {
      setLoadingCEPData(true);
      const CEPData = await fetchCEPData(cep);

      handleFormByCepData(form, CEPData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCEPData(false);
    }
  };

  const updateCEP = useDebounce(handleCEP, 500, false);

  useEffect(() => {
    updateCEP(cepValue);
  }, [cepValue]);

  return (
    <Wrapper>
      <Container>
        <Controller
          control={control}
          name="redeemer_zipcode"
          render={({ field, fieldState: { error } }) => (
            <CEPTextfield
              label="CEP"
              required
              variant="standard"
              fullWidth
              value={field.value}
              onChange={(e) => {
                setCepValue(e.target.value);
                field.onChange(e);
              }}
              onBlur={field.onBlur}
              error={Boolean(error)}
              helperText={error?.message}
            />
          )}
        />

        <FormInput
          control={control}
          name="redeemer_street"
          label="Rua"
          required
          loading={loadingCEPData}
        />
      </Container>
      <Container>
        <Container>
          <FormInput
            control={control}
            name="redeemer_number"
            label="Número"
            required
            type="number"
          />

          <FormInput
            control={control}
            name="redeemer_complement"
            label="Complemento"
            variant="standard"
          />
        </Container>
        <FormInput
          control={control}
          name="redeemer_neighborhood"
          label="Bairro"
          required
          loading={loadingCEPData}
        />
      </Container>
      <Container>
        <FormInput
          control={control}
          name="redeemer_city"
          label="Cidade"
          required
          loading={loadingCEPData}
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
