import classNames from "classnames";
import React from "react";

import styles from "./ProjectExcerpt.module.scss";

interface IProjectExcerpt {
  excerpt: string | undefined;
  weight?: "light" | "bold";
}

export const ProjectExcerpt = ({ excerpt, weight }: IProjectExcerpt) => {
  return (
    <>
      <p
        className={classNames(
          [styles["ProjectExcerpt"]],

          {
            [styles[`ProjectExcerpt--${weight}`]]: weight === "light",
            [styles[`ProjectExcerpt--${weight}`]]: weight === "bold",
          }
        )}
      >
        {excerpt}
      </p>
    </>
  );
};
