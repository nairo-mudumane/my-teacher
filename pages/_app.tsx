import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../components";
import { ThemeProvider } from "@mui/material";
import THEME from "../themes/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
