import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaDesktop } from "react-icons/fa"; // Example icons from react-icons
import styles from "./IconSwitcher.module.scss";

interface IIconSwitcher {
  className?: string;
}

type Theme = "system" | "light" | "dark";

const themes: Theme[] = ["system", "light", "dark"];
const icons: Record<Theme, JSX.Element> = {
  system: <FaDesktop />,
  light: <FaSun />,
  dark: <FaMoon />,
};

export const IconSwitcher = ({ className }: IIconSwitcher) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const initialThemeIndex = themes.indexOf(theme as Theme);
    if (initialThemeIndex >= 0) {
      setCurrentThemeIndex(initialThemeIndex);
    }
  }, [theme]);

  const handleClick = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextThemeIndex);
    setTheme(themes[nextThemeIndex]);
  };

  if (!mounted) return null; // Ensure the component is only rendered on the client

  return (
    <button
      onClick={handleClick}
      className={classNames(styles.iconButton, className)}
      title={`Switch to ${
        themes[(currentThemeIndex + 1) % themes.length]
      } theme`}
    >
      {icons[themes[currentThemeIndex]]}
    </button>
  );
};

export default IconSwitcher;
