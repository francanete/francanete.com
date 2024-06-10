import React from "react";
import Link from "next/link";
import { BoxModelProps } from "@/types/BoxModelProps";

import styles from "./ButtonToContent.module.scss";

interface ButtonToContentProps extends BoxModelProps {
  title: string;
  slug: string;
  contentPath: boolean;
}

export default function ButtonToContent({
  title,
  slug,
  contentPath,
}: ButtonToContentProps) {
  const path = contentPath ? "projects" : "blog";
  return (
    <Link as={`/${path}/${slug}`} href={`/${path}/[slug]`}>
      <div className={styles["ButtonToContent"]}>
        <span className={styles["ButtonToContent__text"]}>{title}</span>
      </div>
    </Link>
  );
}
