"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#22007F",
    },
  },
  typography: {
    fontFamily: "var(--font-open-sans)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "61px",
          padding: "12px 20px",
          boxShadow: "none",
          textTransform: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: "#3100B6",
          },
        },
        outlined: {
          borderColor: "#64748B",
          "&:hover": {
            backgroundColor: " #F4F4F4",
          },
        },
      },
    },
  },
});

export default theme;
