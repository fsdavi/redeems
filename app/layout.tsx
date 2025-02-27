import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import StyledComponentsRegistry from "./lib/registry";
import { openSans } from "@/lib/fonts";
import { fetchRedeemPages } from "@/lib/fetchRedeemsPages";
import RedeemPagesProvider from "@/components/RedeemPagesProvider";
import { defautlMuiTheme } from "./theme";
import { ThemeProvider } from "@mui/material";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const redeemPagesData = await fetchRedeemPages();

  return (
    <html lang="en" className={openSans.variable}>
      <AppRouterCacheProvider>
        <StyledComponentsRegistry>
          <RedeemPagesProvider redeemPages={redeemPagesData}>
            <ThemeProvider theme={defautlMuiTheme}>{children}</ThemeProvider>
          </RedeemPagesProvider>
        </StyledComponentsRegistry>
      </AppRouterCacheProvider>
    </html>
  );
}
