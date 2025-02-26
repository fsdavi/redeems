"use client";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

const DEFAULT_MUI_OPTIONS = {
  cssVariables: true,
  palette: {
    primary: {
      main: "#22007F",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
  }
}

const DEFAULT_MUI_BUTTON_STYLES = {
  styleOverrides: {
    root: {
      borderRadius: "61px",
      padding: "12px 20px",
      boxShadow: "none",
      textTransform: "none",
      "&:hover": {
        boxShadow: "none",
      },
      variants: [],
    },
    outlined: {
      borderColor: "#64748B",
      "&:hover": {
        backgroundColor: " #F4F4F4",
      },
      variants: [],
    },
  }
}

export const defautlMuiTheme = createTheme({
  ...DEFAULT_MUI_OPTIONS,
  components: {
    MuiButton: DEFAULT_MUI_BUTTON_STYLES,
  },
});

export const generateMuiTheme = (options?: ThemeOptions): Theme => {
  return createTheme({
    ...DEFAULT_MUI_OPTIONS,
    ...options,
    components: {
      MuiButton: {
        ...DEFAULT_MUI_BUTTON_STYLES,
        ...options?.components?.MuiButton,
      },
    },
  });
}

