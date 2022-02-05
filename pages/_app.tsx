import { AppProps } from "next/app";
import React, { useEffect, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [colorTheme, setTheme]: any = useDarkMode();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <Component {...pageProps} />;
}
