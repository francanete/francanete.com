import React from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconComponent?: React.ReactNode;
  className?: string;
}

export const Button = ({
  title,
  iconComponent,
  className,
  onClick,
  ...props
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles["Button"], className)}
      {...props}
    >
      {iconComponent}
      {title}
    </button>
  );
};
