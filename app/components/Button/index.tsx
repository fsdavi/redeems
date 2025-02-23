import { Button } from "@mui/material";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outlined" | "contained";
} & React.ComponentProps<typeof Button>;

export default function ButtonComponent(props: ButtonProps) {
  const { variant = "contained", children } = props;

  return (
    <Button variant={variant} {...props}>
      {children}
    </Button>
  );
}
