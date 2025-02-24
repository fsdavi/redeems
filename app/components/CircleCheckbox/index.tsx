import { Checkbox } from "@mui/material";

import Image from "next/image";

export type CircleCheckboxProps = {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CircleCheckbox(props: CircleCheckboxProps) {
  const { checked, onChange } = props;

  return (
    <Checkbox
      style={{
        width: 40,
        height: 40,
      }}
      icon={
        <Image src="/unchecked.svg" alt="unchecked" width={40} height={40} />
      }
      checkedIcon={
        <Image
          src="/checked.svg"
          alt="checked"
          /* 
            The width and height has to be bigger than the unchecked icon
            because the material-ui checkbox when checked
            has a padding that makes the icon smaller
          */
          width={46}
          height={46}
        />
      }
      checked={checked}
      onChange={onChange}
    />
  );
}
