import { FormControl, InputLabel, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { useState } from "react";

type SelectListProps = SelectProps & {
  options: string[];
  initialValue?: string;
};

function SelectList(props: SelectListProps) {
  const { options, label, name, initialValue, onChange } = props;
  const [value, setValue] = useState(initialValue);

  const handleChange = (
    event: SelectChangeEvent<unknown>,
    child: React.ReactNode
  ) => {
    setValue(event.target.value as string);
    onChange?.(event, child);
  };

  return (
    <FormControl variant="standard">
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        variant="standard"
        label={label}
        value={value}
        onChange={handleChange}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectList;
