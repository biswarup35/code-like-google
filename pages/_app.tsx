import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
// import createEmotionCache from "../src/createEmotionCache";

interface MyAppProps extends AppProps {}
/**
 * Home Page of the Application
 * @param {AppProps} props
 * @return {JSX.Element}
 */
export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
