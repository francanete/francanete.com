import classNames from "classnames";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import styles from "./SelectTheme.module.scss";

interface ISelectTheme {
  className?: string;
}

export const SelectTheme = ({ className }: ISelectTheme) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      data-test-id="theme-selector"
      className={classNames(styles["SelectTheme"], className)}
    >
      <option value="system">System</option>
      {mounted && (
        <>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </>
      )}
    </select>
  );
};
