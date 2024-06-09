import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButton {
  title: string;
  iconComponent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  title,
  iconComponent,
  className,
  onClick,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles["Button"], className)}
    >
      {iconComponent}
      {title}
    </button>
  );
};
