import { Button, Palette } from "@mui/material";
import { useTheme } from "@mui/material";

type Colors = "primary" | "secondary" | "error" | "warning" | "info" | "success";

type Variants = "outlined" | "contained";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variants;
  color?: Colors;
} & React.ComponentProps<typeof Button>;

const getBackgroundColor = (buttonOptions: { color: Colors, variant: Variants}, palette: Palette) => {
  const { color, variant } = buttonOptions;

  if (variant !== "contained") return "transparent";

  if (color === "primary") return palette.primary.main;
  return palette[color].main;
};

export default function ButtonComponent(props: ButtonProps) {
  const { variant = "contained", color = "primary", children } = props;
  const { palette } = useTheme();

  return (
    <Button
      variant={variant}
      sx={{ backgroundColor: getBackgroundColor({ color, variant }, palette) }}
      {...props}
    >
      {children}
    </Button>
  );
}
