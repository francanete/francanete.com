import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import "../styles/index.css";
import "../styles/normalize.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* <Head>
        <meta name="viewport" content="width=device-width" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}
