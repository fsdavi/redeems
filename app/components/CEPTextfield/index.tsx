"use client";

import InputMask from "@mona-health/react-input-mask";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type CEPTextfield = TextFieldProps & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CEPTextfield({
  value,
  onChange,
  label,
  disabled = false,
  ...props
}: CEPTextfield) {
  return (
    <InputMask
      mask="99999-999"
      value={value}
      disabled={disabled}
      onChange={onChange}
      onBlur={props.onBlur}
    >
      <TextField
        label={label}
        variant="standard"
        fullWidth
        {...props}
      />
    </InputMask>
  );
}

export default CEPTextfield;
