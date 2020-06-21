import Head from "next/head";
import { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "@reach/listbox/styles.css";
import "@reach/dialog/styles.css";

const theme = {
  headerFont: `"Source Sans Pro", Roboto, sans-serif`,
  bodyFont: `Roboto, sans-serif`,
  primaryRed: "#FF003D",
  black: "#171717",
  grayLight: "#ccc",
  grayDark: "#666",
  danger: "#FF003D",
  warning: "#D8A800",
  success: "#006344",
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto, sans-serif;
    color: ${theme.black};
  }

  p {
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: "Source Sans Pro", Roboto, sans-serif;
    font-weight: bold;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
