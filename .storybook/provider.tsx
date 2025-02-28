import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { defautlMuiTheme } from "../app/theme";
import { openSans } from "../app/lib/fonts";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={defautlMuiTheme}>
      <CssBaseline />
      <div
        className={openSans.variable}
        style={{ fontFamily: "var(--font-open-sans)" }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
