"use client";

import InputMask from "@mona-health/react-input-mask";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useMemo } from "react";

type CpfCnpjTextFieldProps = TextFieldProps & {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "cpf" | "cnpj";
};

function CpfCnpjTextField({
  value,
  onChange,
  type = "cpf",
  label,
  disabled = false,
  ...props
}: CpfCnpjTextFieldProps) {
  const mask = useMemo(() => {
    return value?.replace(/\D/g, "")?.length > 11
      ? "99.999.999/9999-99"
      : "999.999.999-99*";
  }, [value]);

  return (
    <InputMask mask={mask} value={value} onChange={onChange} maskChar="_">
      <TextField {...props} label={label} variant="standard" fullWidth />
    </InputMask>
  );
}

export default CpfCnpjTextField;
