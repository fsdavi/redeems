"use client";

import InputMask from "@mona-health/react-input-mask";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useMemo } from "react";

type CpfCnpjTextFieldProps = TextFieldProps & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    return String(value)?.replace(/\D/g, "")?.length > 11
      ? "99.999.999/9999-99"
      : "999.999.999-99*";
  }, [value]);

  return (
    <InputMask mask={mask} value={value} onChange={onChange} onBlur={props.onBlur}>
      <TextField label={label} variant="standard" fullWidth {...props}/>
    </InputMask>
  );
}

export default CpfCnpjTextField;
