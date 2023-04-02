import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #B0C4DE;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
    </>
  );
}
