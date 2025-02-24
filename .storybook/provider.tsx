import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../app/theme";
import { openSans } from "../app/lib/fonts";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className={openSans.variable}
        style={{ fontFamily: "var(--font-open-sans)" }}
      >
        {" "}
        {children}{" "}
      </div>
    </ThemeProvider>
  );
}
