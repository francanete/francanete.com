import React from "react";
import Link from "next/link";
import classNames from "classnames";

import styles from "./Button.module.scss";
interface IButton {
  title: string;
  iconComponent?: React.ReactNode;
  className?: any;
  href: string;
}

export const Button = ({ title, iconComponent, className, href }: IButton) => {
  return (
    <Link href={href} target="_blank">
      <button
        type="button"
        className={classNames([styles["Button"], className])}
      >
        {iconComponent}
        {title}
      </button>
    </Link>
  );
};
