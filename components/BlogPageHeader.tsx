import React from "react";
import { Heading } from "./Heading";

import styles from "./BlogPageHeader.module.scss";

export const BlogPageHeader = () => {
  return (
    <div className={styles["BlogPageHeader"]}>
      <Heading bold size="large" level={1}>
        Check out my latest articles
      </Heading>
      <p className={styles["BlogPageHeader__description"]}>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably
        haven&lsquo;t heard of them man bun deep.
      </p>
    </div>
  );
};
