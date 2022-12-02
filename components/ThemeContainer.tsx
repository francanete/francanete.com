import React, { PropsWithChildren, useRef, useState } from "react";
import useLocalStorage from "use-local-storage";
import { useOnClickOutside } from "../utils/hooks";
import MainNavBar from "./MainNavBar";
import { BsFillLightbulbFill } from "react-icons/bs";
import { BsFillLightbulbOffFill } from "react-icons/bs";

import styles from "./ThemeContainer.module.scss";

export const ThemeContainer = ({
  children,
  ...rest
}: {
  children: PropsWithChildren<React.ReactNode>;
}) => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      ref={node}
      className={styles["ThemeContainer"]}
      {...rest}
      data-theme={theme}
    >
      <MainNavBar theme={theme} switchTheme={switchTheme} />
      {children}
    </div>
  );
};
