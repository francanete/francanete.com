import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { Button, IButton } from "./Button";
import styles from "./Button.module.scss";

interface ILinkButton extends IButton {
  href: string;
}

export const ButtonLink = ({
  title,
  iconComponent,
  className,
  href,
}: ILinkButton) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={classNames(styles["Button"], className)}
    >
      <Button
        title={title}
        iconComponent={iconComponent}
        className={className}
      />
    </Link>
  );
};
