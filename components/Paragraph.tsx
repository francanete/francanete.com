import classNames from "classnames";
import React from "react";
import styles from "./Paragraph.module.scss";

enum fontSize {
  small = "small",
  medium = "medium",
  large = "large",
}

interface PropsType {
  children?: React.ReactNode;
  className?: string;
  bold?: boolean;
  size?: "small" | "medium" | "large";
  ellipsis?: boolean;
}

export const Paragraph = ({
  children = null,
  bold,
  size,
  ellipsis,
  className,
}: PropsType) => {
  return (
    <p
      className={classNames(
        styles["Paragraph"],
        {
          [styles["Paragraph--bold"]]: bold,
          [styles["Paragraph--small"]]: size === fontSize.small,
          [styles["Paragraph--medium"]]: size === fontSize.medium,
          [styles["Paragraph--large"]]: size === fontSize.large,
          [styles["Paragraph--ellipsis"]]: ellipsis,
        },
        className
      )}
    >
      {children}
    </p>
  );
};
