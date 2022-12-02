import React from "react";
import Post from "../types/post";
import { Heading } from "./Heading";

import styles from "./BlogPageHeader.module.scss";
interface IBlogPageHeader {
  projects: Post[];
}

export const BlogPageHeader = ({ projects }: IBlogPageHeader) => {
  return (
    <div className={styles["BlogPageHeader"]}>
      <Heading bold size="large" level={1}>
        Check out my latest articles
      </Heading>
      <p className={styles["BlogPageHeader__description"]}>
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep.
      </p>
    </div>
  );
};
