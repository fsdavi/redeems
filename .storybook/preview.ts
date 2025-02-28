import "../app/globals.css";

import { CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { defautlMuiTheme }  from "../app/theme";
import Provider from "./provider";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: defautlMuiTheme,
    },
    defaultTheme: "default",
    Provider: Provider,
    GlobalStyles: CssBaseline,
  }),
];
