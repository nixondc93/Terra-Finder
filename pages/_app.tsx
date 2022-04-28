import "material-icons/iconfont/material-icons.css";
import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Terra Finder</title>
        <meta name="description" content="Terra block explorer" />
        <link rel="icon" href="/terra-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
