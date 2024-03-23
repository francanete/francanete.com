import React from "react";
import classNames from "classnames";
import styles from "./Paragraph.module.scss";

export interface IParagraph {
  children?: React.ReactNode;
  className?: string;
  weight?: "thin" | "bold";
  size?: "small" | "medium" | "large";
  ellipsis?: boolean;
}

export const Paragraph = ({
  children = null,
  weight,
  size,
  ellipsis,
  className,
}: IParagraph) => {
  return (
    <p
      className={classNames(
        styles["Paragraph"],
        styles[`Paragraph--${weight}`],
        styles[`Paragraph--${size}`],
        {
          [styles["Paragraph--ellipsis"]]: ellipsis,
        },
        className
      )}
    >
      {children}
    </p>
  );
};
