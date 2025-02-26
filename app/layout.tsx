import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import StyledComponentsRegistry from "./lib/registry";
import { openSans } from "@/lib/fonts";
import { fetchRedeemPages } from "@/lib/fetchRedeemsPages";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const redeemPagesData = await fetchRedeemPages();

  return (
    <html lang="en">
      <body className={openSans.variable}>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
