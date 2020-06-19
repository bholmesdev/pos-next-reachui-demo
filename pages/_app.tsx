import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro";
    src: url("SourceSansPro-Regular.ttf") format("ttf");
    font-weight: normal;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("SourceSansPro-Bold.ttf") format("ttf");
    font-weight: bold;
  }

  @font-face {
    font-family: "Source Sans Pro";
    src: url("SourceSansPro-It.ttf") format("ttf");
    font-weight: normal;
    font-style: italic;
  }

  html {
    font-family: "Source Sans Pro", sans-serif;
    text-transform: uppercase;
    color: #171717;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: 0.1em;
    font-weight:bold;
  }
`;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
