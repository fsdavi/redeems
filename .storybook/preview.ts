import "../app/globals.css";

import { CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import Theme from "../app/theme";
import Provider from "./provider";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: Theme,
    },
    defaultTheme: "default",
    Provider: Provider,
    GlobalStyles: CssBaseline,
  }),
];
