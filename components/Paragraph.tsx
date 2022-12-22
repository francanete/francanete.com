import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

enum fontSize {
  small = "small",
  medium = "medium",
  large = "large",
}

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
