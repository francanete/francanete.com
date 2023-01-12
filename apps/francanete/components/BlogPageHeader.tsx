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
        From software engineering to entrepreneurship, I write about a variety
        of topics. Here are some of my latest articles.
      </p>
    </div>
  );
};
