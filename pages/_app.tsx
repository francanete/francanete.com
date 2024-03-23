import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
