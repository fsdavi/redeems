import { CircularProgress, TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type FormInputProps<T extends FieldValues> = TextFieldProps &{
  name: Path<T>;
  label: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  control: Control<T>;
  loading?: boolean;
}

function FormInput<T extends FieldValues>(props: FormInputProps<T>) {
  const {
    control,
    name,
    label,
    required = false,
    fullWidth = true,
    loading = false,
    ...restProps
  } = props

  return(
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          label={label}
          required={required}
          variant="standard"
          fullWidth={fullWidth}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          error={Boolean(error)}
          helperText={error?.message}
          disabled={loading}
          slotProps={{
            input: {
              startAdornment: loading ? <CircularProgress size={14} /> : null
            }
          }}
          {...restProps}
        />
      )}
    />
  )
}

export default FormInput