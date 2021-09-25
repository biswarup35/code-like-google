import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import theme from "../src/theme";

/**
 * Home Page of the Application
 * @param {object} ctx
 * @return {JSX.Element}
 */
export default class MyDocument extends Document {
  getInitialProps = async (ctx: any) => {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => {
          (props: any) => <App {...props} />;
        },
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...React.Children.toArray(initialProps.styles)],
    };
  };
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
