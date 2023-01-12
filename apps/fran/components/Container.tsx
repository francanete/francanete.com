import classNames from "classnames";
import React from "react";

import styles from "./Container.module.scss";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  const thispat = 10;
  return (
    <div className={classNames([styles["Container"], className])}>
      {children}
    </div>
  );
};