import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";

import "../styles/index.css";
import "../styles/normalize.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return <Component {...pageProps} />;
}
